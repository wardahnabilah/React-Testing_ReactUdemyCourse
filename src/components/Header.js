import React from 'react'

export function Header({title, description}) {
  return (
    <>
        <h1 data-testid="heading" className="mb-2 text-3xl font-bold">{title}</h1>
        <p data-testid="subHeading" className="mb-12 text-lg">{description}</p>
    </>
  )
}
