import gsap from "gsap";

function registerEffects() {
  gsap.registerEffect({
    name: "ticker",
    effect(targets, config) {
      let master = gsap.timeline();
      buildTickers(targets, config);
      function clone(el) {
        let clone = el.cloneNode(true);
        el.parentNode.insertBefore(clone, el);
        clone.style.position = "absolute";
        return clone;
      }
      function nestChildren(el, className) {
        let div = document.createElement("div");
        while (el.firstChild) {
          div.appendChild(el.firstChild);
        }
        el.appendChild(div);
        className && div.setAttribute("class", className);
        div.style.display = "inline-block";
        div.style.boxSizing = "border-box";
        return div;
      }
      function buildTickers(targets, config, isResize) {
        if (isResize) { // on window resizes, we should delete the old clones and reset the widths
          targets.clones.forEach(el => el && el.parentNode && el.parentNode.removeChild(el));
          gsap.set(targets.chunks, {x: 0});
        } else {
          targets.clones = [];
          targets.chunks = [];
        }
        master.clear();
        let clones = targets.clones,
          chunks = targets.chunks;
        targets.forEach((el, index) => {
          let chunk = chunks[index] || (chunks[index] = nestChildren(el, config.className)),
            chunkWidth = chunk.offsetWidth + (config.padding || 0),
            cloneCount = Math.ceil(el.offsetWidth / chunkWidth),
            chunkBounds = chunk.getBoundingClientRect(),
            elBounds = el.getBoundingClientRect(),
            right = (el.dataset.direction || config.direction) === "right",
            tl = gsap.timeline(),
            speed = parseFloat(el.dataset.speed) || config.speed || 100,
            i, offsetX, offsetY, bounds, cloneChunk, all;
          el.style.overflow = "hidden";
          gsap.getProperty(el, "position") !== "absolute" && (el.style.position = "relative"); // avoid scrollbars
          for (i = 0; i < cloneCount; i++) {
            cloneChunk = clones[i] = clone(chunk);
            if (!i) {
              bounds = cloneChunk.getBoundingClientRect();
              offsetX = bounds.left - chunkBounds.left;
              offsetY = bounds.top - chunkBounds.top;
            }
            gsap.set(cloneChunk, {x: offsetX + (right ? -chunkWidth : chunkWidth) * (i + 1), y: offsetY});
          }
          all = clones.slice(0);
          all.unshift(chunk);
          tl.fromTo(all, {
            x: right ? "-=" + (chunkBounds.right - elBounds.left) : "+=" + (elBounds.right - chunkBounds.left)
          }, {
            x: (right ? "+=" : "-=") + elBounds.width,
            ease: "none",
            duration: elBounds.width / speed,
            overwrite: "auto"
          }).to(all, {
            x: (right ? "+=" : "-=") + chunkWidth,
            ease: "none",
            duration: chunkWidth / speed,
            repeat: -1
          });
          master.add(tl, 0);
        });
        // rerun on window resizes, otherwise there could be gaps if the user makes the window bigger.
        isResize || window.addEventListener("resize", () => buildTickers(targets, config, true));
      }
      return master;
    }
  });
}

export default registerEffects;
