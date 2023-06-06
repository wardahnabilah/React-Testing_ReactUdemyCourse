import { render } from "@testing-library/react";
import { Counter } from "../Counter";

test("Text Area Testing", () => {
    const { getByTestId } = render(<Counter />)
    const textArea = getByTestId("textArea")
    expect(textArea).toBeTruthy()
})