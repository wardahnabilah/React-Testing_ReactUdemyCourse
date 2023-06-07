import { render, waitFor } from "@testing-library/react"
import { Joke } from "../Joke"

describe("Joke API Test", () => {
    test("Fetch Joke", async () => {
        const { getByTestId } = render(<Joke />)
        const jokeSection = getByTestId("jokeSection")

        await waitFor(() => expect(jokeSection).not.toBe(""))
            
    })
})