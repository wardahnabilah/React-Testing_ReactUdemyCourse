import React, { useEffect, useState } from 'react'

export function Joke() {
    const [joke, setJoke] = useState('')

    useEffect(()=>{
      async function getJoke() {
        const response = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await response.json()
  
        setJoke(data.value)
      }
  
      getJoke()
    }, [])
    
  return (
    <section>
        <div className="mt-6 p-4 border-2 border-slate-600">
          {joke}
      </div>
    </section>
  )
}
