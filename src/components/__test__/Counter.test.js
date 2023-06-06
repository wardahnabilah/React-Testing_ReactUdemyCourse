import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Counter } from "../Counter";

describe("counter test", () => { 
    test("Text Area Testing", () => {
        const { getByTestId } = render(<Counter />)
        const textArea = getByTestId("textArea")
        expect(textArea).toBeTruthy()
    })

    it("Character Length Test", () => {
        const { getByTestId } = render(<Counter />)
        const charLength = getByTestId("charLength")
        expect(charLength.innerHTML).toBe("Characters: 0")
    })

    test("Word Length Test", () => {
        render(<Counter />)
        const wordLength = screen.getByText("Words: 0")
        expect(wordLength).toBeInTheDocument()
    })
})