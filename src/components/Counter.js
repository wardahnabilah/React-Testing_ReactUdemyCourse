import React, { useRef, useState } from 'react'

export function Counter() {
  const [disabled, setDisabled] = useState(true)
  const [result, setResult] = useState({characters: 0, words: 0})  
  const inputRef = useRef()
  

  function handleChange() {
    const inputValue = inputRef.current.value
    const wordsInput = (inputValue.trim()).split(' ')

    setResult(prev => {
      return {
        ...prev,
        characters: inputValue.length,
        words: wordsInput.length
      }
    })

    if(inputValue.length !== 0) {
      setDisabled(false)
    } else {
      setResult(prev => {
        return {...prev, words: 0}
      })
      setDisabled(true)
    }
  }

  function clearInput() {
    inputRef.current.value = ''
    setResult({characters: 0, words: 0})
    setDisabled(true)
  }
  
  return (
    <section>
        <form>
        <textarea onChange={handleChange} ref={inputRef} data-testid="textArea" className="w-[32rem] h-[16rem] pt-2 pl-3 border-2 border-slate-600" type="text" placeholder="Type or paste your text" />
      </form>
      <button onClick={clearInput} data-testid="clearBtn" className="w-[6rem] h-[2.5rem] my-2 py-2 mx-auto text-white font-semibold bg-red-800 hover:bg-red-900 rounded-lg disabled:bg-slate-400 disabled:text-slate-500 disabled:cursor-not-allowed" disabled={disabled}>Clear</button>
      <div className="p-4 flex justify-between">
        <p data-testid="charLength" className="w-[12rem] h-[2.5rem] py-2 mx-auto text-white font-semibold bg-blue-800 rounded-lg">Characters: {result.characters}</p>
        <p data-testid="wordLength" className="w-[12rem] h-[2.5rem] py-2 mx-auto text-white font-semibold bg-blue-800 rounded-lg">Words: {result.words}</p>
      </div>
    </section>
  )
}
