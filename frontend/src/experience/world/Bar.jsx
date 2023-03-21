import { useEffect } from 'react'
import gsap from 'gsap'

export default function Bar() {

  useEffect(() => {

    const t1 = gsap.timeline()

    t1.to('.bar', {
      y: '16px  ',
      duration: 2,
      ease: 'power3.inOut',
      yoyo: true,
      repeat: -1,
    })

  }, [])

  return (
    <>
      <p className='bar text-sm mb-2'>Click to unlock</p>
      <div className='bar w-32 h-1.5 bg-white rounded mb-6' />
    </>
  )
}