import { render, screen } from "@testing-library/react"
import { Header } from "../Header"

describe("Header Component Test", () => {
    test("Heading Test", () => {
        const { getByTestId } = render(<Header title="Word Counter" />)
        const heading = getByTestId("heading")
        expect(heading.innerHTML).toBe("Word Counter")
    })

    test("Subheading Test", () => {
        render(<Header description="Free online character and word count tool" />)
        const subHeading = screen.getByTestId("subHeading")

        expect(subHeading.innerHTML).toBe("Free online character and word count tool")
    })
})