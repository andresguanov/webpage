import { useRef } from 'react'

export default function Modal ({ children, root }) {
  const ref = useRef(null)

  function callback (e) {
    ref.current.removeEventListener('animationend', callback)
    root.unmount()
    document.querySelector('#modal').remove()
  }

  function handleClick () {
    ref.current.classList.add('animate-fadeOut')
    ref.current.addEventListener('animationend',
      callback,
      { once: true }
    )
  }

  return (
    <div ref={ref} className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen text-black ">
      <b
        onClick={handleClick}
        className="absolute top-0 w-full h-full bg-black/30"
      />
      <div className='container relative w-11/12 pt-10 overflow-scroll bg-white animate-fadeIn h-5/6 rounded-xl '>
        <button
          className='fixed z-20 top-3 right-3 font-bold py-2.5 px-4 rounded-sm cursor-pointer text-gray-500'
          onClick={handleClick}
        >X
        </button>
        <div className='w-full h-full'>
          {children}
        </div>
      </div>
    </div>)
}
