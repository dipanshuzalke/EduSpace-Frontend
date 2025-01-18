import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-900 text-slate-400 h-[10vh] flex  items-center px-10'>
      <h2 className="text-center text-4xl font-semibold font-[poppins] text-slate-400">
        {"EduSpace".split("").map((child, idx) => (
          <span className='transition-all hover:text-white hover:font-bold hover:cursor-default' key={idx}>
            {child}
          </span>
        ))}
      </h2>
    </div>
  )
}

export default Navbar
