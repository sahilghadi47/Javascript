import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNum, setisNum] = useState(false);
  const [isChar, setisChar] = useState(false);
  const [password, setPassword] =useState('');

  const generatePass =useCallback(()=>{
    let pass='';
    let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghihjklmnopqrstuvwxyz'
    if(isChar) str+='!@#$%&*?'
    if(isNum) str+='1234567890'
    for (let index = 1; index <=length; index++) {
        let char = Math.floor(Math.random() *str.length +1);
        pass += str.charAt(char);
      
    }
    setPassword(pass)
  },[length ,isChar, isNum, setPassword])

  useEffect(() => {
    generatePass()
  },[length, isNum, isChar, generatePass])
  
  const passRef = useRef(null)
  const copyPass =useCallback(() =>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-screen flex justify-center p-5'>
        <div className='border rounded-lg shadow-lg  p-5 w-screen  max-w-md'>
          <h1 className='mb-5 text-xl font-semibold text-center text-white'>Password Generator</h1>
          <div className='rounded-lg flex  overflow-hidden mb-5 font-semibold'>
            <input 
              className='px-5 py-1 outline-none w-full text-blue-500'
              type="text" 
              value={password}
              placeholder='Password'
              readOnly
              ref={passRef}
              />
            <button
            onClick={copyPass}
              className='px-3 py-1 bg-blue-600 font-semibold shrink-0 text-white selection:bg-red-500'
            >Copy</button>
          </div>
          <div className='flex gap-x-2 justify-center'>
            <div className='flex items-center gap-x-2'>
              <input 

                type="range"
                min={8}
                max={20}
                id='len'
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label htmlFor="len">Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input 

                type="checkbox"
                id='number'
                defaultChecked={isNum}
                onChange={() =>{
                  setisNum((prev) => !prev)
                }}
                className='cursor-pointer'
                />
                <label htmlFor="number">Number</label>
            </div>
            <div className='flex items-center gap-x-2'>
              <input 

                type="checkbox"
                id='character'
                defaultChecked={isChar}
                onChange={() =>{
                  setisChar((prev) => !prev)
                }}
                className='cursor-pointer'
                />
                <label htmlFor="character">Character</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App