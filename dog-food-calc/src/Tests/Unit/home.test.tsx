import React from "react";
import { Home } from "../../Pages/home";
import { render, screen, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'


const setUp = () => {
    render(<Home />)
}
const inputSmall = "small-input"
const inputMedium = "medium-input"
const inputLarge = "large-input"
const inputLeftOver = "leftOver-input"
const calcButton = "calculate-button"
describe('Main Page & Form', () => {
    beforeEach(() => {
        setUp()
    })

    it('Renders the calculator', () => {
        expect(screen.getByTestId('food-calculator')).toBeInTheDocument();
    })

    it('Renders all input components and submit button', () => {
        expect(screen.getAllByTestId('input-component')).toHaveLength(4)
        expect(screen.getByTestId(inputSmall)).toBeInTheDocument();
        expect(screen.getByTestId(inputMedium)).toBeInTheDocument();
        expect(screen.getByTestId(inputLarge)).toBeInTheDocument();
        expect(screen.getByTestId(inputLeftOver)).toBeInTheDocument();
        expect(screen.getByTestId('calculate-button')).toBeInTheDocument();
    })

    it('Renders the correct reesult when submited', async () => {
        await act(() => userEvent.type(screen.getByTestId(inputSmall), '3'))
        await act(() => userEvent.type(screen.getByTestId(inputMedium), '1'))
        await act(() => userEvent.type(screen.getByTestId(inputLarge), '4'))
        await act(() => userEvent.type(screen.getByTestId(inputLeftOver), '15'))
        await act(() => userEvent.click(screen.getByTestId(calcButton)))
        expect(screen.getByText('You should order 186lb of food'))
    })

    it('Renders the correct text if the result is 0 or less', async () => {
        await act(() => userEvent.type(screen.getByTestId(inputSmall), '1'))
        await act(() => userEvent.type(screen.getByTestId(inputMedium), '0'))
        await act(() => userEvent.type(screen.getByTestId(inputLarge), '0'))
        await act(() => userEvent.type(screen.getByTestId(inputLeftOver), '100'))
        await act(() => userEvent.click(screen.getByTestId(calcButton)))
        expect(screen.getByText('You do not need to order any food!'))
    })

})

