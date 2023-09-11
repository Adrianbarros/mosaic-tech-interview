import React, { useState } from 'react';
import { Input } from '../Components/Input';
import { TotalFoodAmount } from '../Utils/helpers';
import '../Styles/home.css';
import { FoodAmounts } from '../Types/foodCalcTypes';




export const Home = () => {

    const [total, setTotal] = useState<number | null>(null)
    const [data, setData] = useState<FoodAmounts>({
        small: 0,
        medium: 0,
        large: 0,
        leftOver: 0,
    })
    let resultTxt = `You do not need to order any food!`
    resultTxt = total && total > 0 ? `You should order ${total}lb of food` : `You do not need to order any food!`

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setTotal(TotalFoodAmount(data))
    }

    return (
        <>
            <div className="food-calculator" data-testid="food-calculator">
                <div className='container'>
                    <div className='title'>Dog Food Calculator</div>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <div className='question'>How many small dogs?</div>
                        <Input name={"small"} value={data.small} onChange={handleChange} />
                        <div className='question'>How many medium size dogs?</div>
                        <Input name={"medium"} value={data.medium} onChange={handleChange} />
                        <div className='question'>How many large dogs?</div>
                        <Input name={"large"} value={data.large} onChange={handleChange} />
                        <div className='question'>Amount of leftover food from last month?(lb)</div>
                        <Input name={"leftOver"} value={data.leftOver} onChange={handleChange} />
                        <button className='button' type={"submit"} data-testid="calculate-button">Calculate</button>
                    </form>
                    {total !== null &&
                        <div className='response' data-testid="result-text">
                            <div className='response-text'> {resultTxt}</div>
                        </div>
                    }
                </div>


            </div>

        </>
    )
}

