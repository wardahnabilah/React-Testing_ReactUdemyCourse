import React from 'react'

export function Header({title, description}) {
  return (
    <>
        <h1 data-testId="heading" className="mb-2 text-3xl font-bold">{title}</h1>
        <p data-testId="subHeading" className="mb-12 text-lg">{description}</p>
    </>
  )
}
