import React from 'react'

function Navbar() {
  return (
    <header className='bg-black px-4'>
        <div className="flex flex-col items-center justify-between w-full max-w-[140rem] my-0 mx-auto p-4 md:flex-row">
            <h1 className="font-bold text-2xl text-[#46ffd3] min-w-min">
                Redux-Shop
            </h1>
            <nav className='flex items-center w-full justify-end text-lg'>
                <div>
                    <button>
       
                    </button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navbar