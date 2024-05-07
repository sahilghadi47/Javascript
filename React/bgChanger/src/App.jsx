import React, { useState } from 'react'


function App() {
  const [color, setColor] = useState('white');
  return (
    <>
      <div className='w-screen h-screen flex ' style={{ backgroundColor: color }}>
        <div className=' w-screen fixed bottom-20 flex flex-wrap px-5 py-2  justify-center items-center'>
          <div className='p-3 shadow-md'>
            <button className='px-5 py-2 w-24 border border-black rounded-3xl shadow-lg mx-2 outline-none text-white font-semibold  bg-red-600'
              onClick={() => setColor('red')}
            >Red</button>
            <button className='px-5 py-2 w-24 border border-black rounded-3xl shadow-lg  mx-2 outline-none text-white font-semibold  bg-orange-600'
              onClick={() => setColor('orange')}
            >Orange</button>
            <button className='px-5 py-2 w-24 border border-black rounded-3xl shadow-lg  mx-2 outline-none text-white font-semibold  bg-sky-600'
              onClick={() => setColor('skyblue')}
            >Blue</button>
            <button className='px-5 py-2 w-24 border border-black rounded-3xl shadow-lg  mx-2 outline-none text-white font-semibold  bg-violet-600'
              onClick={() => setColor('violet')}
            >Violet</button>
            <button className='px-5 py-2 w-24 border border-black rounded-3xl shadow-lg  mx-2 outline-none text-white font-semibold  bg-gray-600'
              onClick={() => setColor('gray')}
            >Gray</button>
            <button className='px-5 py-2 w-24 border border-black rounded-3xl shadow-md   mx-2 outline-none text-white font-semibold  bg-green-600'
              onClick={() => setColor('green')}
            >Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
