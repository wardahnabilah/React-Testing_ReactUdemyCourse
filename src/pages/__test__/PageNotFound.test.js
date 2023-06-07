import { render, screen } from "@testing-library/react"
import { PageNotFound } from "../PageNotFound"
import { BrowserRouter } from "react-router-dom"

describe("Page Not Found Test", () => {
    test("Test", () => {
        render(<PageNotFound />, {wrapper: BrowserRouter})
        const pgHeading = screen.getByTestId("pageNotFoundHeading")
        const pgImage = screen.getByAltText("Page not found")

        expect(pgHeading.innerHTML).toBe("Oops, page not found!")
        expect(pgImage).toBeTruthy()
    })
})