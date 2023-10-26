import React from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charactorAllowed, setCharaterAllowed] = useState(false)
    const [Password, setPassword] =useState("")

    const PasswordGenerate = useCallback(() =>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed)
        {
            str += "0123456789"
        }
        if(charactorAllowed){
            str += "!@#$%^&*()_+}{[]~\:;`/?><.,"
        }

        for(let i = 1; i <= length ; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    },[length, numberAllowed, charactorAllowed, setPassword])

    // useRef Hook

    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(() =>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(Password)
    },[Password])

    useEffect(() =>{
        PasswordGenerate()
    },[length, numberAllowed, charactorAllowed, PasswordGenerate])
  return (
    <div className='h-[80vh] bg-slate-500'>
        <br />
        <br />
        <br />
            <div className='w-full max-w-3xl mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-800 text-center h-32'>
    
            <h1 className='text-3xl'> Password generator</h1>
                <div className='shadow rounded-lg overflow-hidden mb-4 block'>
                  <div className='flex'>
                  <input 
                    type="text" 
                    value={Password}
                    className="outline-none w-full py-2 px-3"
                    placeholder='password'
                    readOnly
                    ref={passwordRef}
                    
                    />
                    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-900'
                    onClick = {copyPasswordToClipboard}
                    >Copy</button>
                  </div>

                    <div className='flex justify-start'>
                    <div className='flex gap-x-10 text-xl mt-3'>
                        <div className='flex items-center gap-x-1'>
                                <input 
                                type="range" 
                                min={6}
                                max={50}
                                value={length}
                                className="cursor-pointer"
                                onChange={(e) => setLength(e.target.value)}
                                />
                                <label>Length: {length}</label>
                        </div>
                        <div className='flex item-center gap-x-1'>
                                <input 
                                type="checkbox"
                                defaultChecked={numberAllowed}
                                id="numberInput"
                                onChange={() =>{
                                    setNumberAllowed((prev) => !prev)
                                }}
                                />
                                <label htmlFor="numberInput">Numbers</label>
                        </div>
                        <div className='flex item-center gap-x-1'>
                                <input 
                                type="checkbox"
                                defaultChecked={charactorAllowed}
                                id="numberInput"
                                onChange={() =>{
                                    setCharaterAllowed((prev) => !prev)
                                }}
                                />
                                <label htmlFor="numberInput">Characters</label>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PasswordGenerator