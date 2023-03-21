import { useEffect } from 'react'
import gsap from 'gsap'

export default function Bar() {

  useEffect(() => {

    const t1 = gsap.timeline()

    t1.to('.bar', {
      y: '20px  ',
      duration: 2,
      ease: 'power3.inOut',
      yoyo: true,
      repeat: -1,
    })

  }, [])

  return (
    <>
      <div className='bar w-36 h-2 bg-white rounded mb-10' />
    </>
  )
}