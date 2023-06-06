import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import { Counter } from "../Counter";

describe("Counter Component Test", () => { 
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

    test("Input Test", () => {
        render(<Counter />)
        const textArea = screen.getByTestId("textArea")
        const wordLength = screen.getByTestId("wordLength")
        const charLength = screen.getByTestId("charLength")

        userEvent.type(textArea, "Sky is blue")
        expect(wordLength.innerHTML).toBe("Words: 3")
        expect(charLength.innerHTML).toBe("Characters: 11")
    })

    test("Clear Button Test", () => {
        render(<Counter />)
        const clearBtn = screen.getByTestId("clearBtn")
        const wordLength = screen.getByTestId("wordLength")
        const charLength = screen.getByTestId("charLength")
        
        userEvent.click(clearBtn)
        expect(wordLength.innerHTML).toBe("Words: 0")
        expect(charLength.innerHTML).toBe("Characters: 0")
    })
})