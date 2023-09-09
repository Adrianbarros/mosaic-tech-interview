import React, { useState } from 'react';
import { Input } from '../Components/Input';
import { TotalFoodAmount } from '../Utils/helpers';

interface FoodAmounts {
    small: number,
    medium: number,
    large: number,
    leftOver: number,
}

export const Home = () => {

    const [total, setTotal] = useState<number | null>(null)
    const [data, setData] = useState<FoodAmounts>({
        small: 0,
        medium: 0,
        large: 0,
        leftOver: 0,
    })
    const resultTxt = total && total > 0 ? `You should order ${total}lb of food` : `You do not need to order any food!`

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setTotal(TotalFoodAmount(data))
    }

    return (
        <div>
            <h1>Dog Food Calculator</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <h3>How many small dogs?</h3>
                <Input name={"small"} value={data.small} onChange={handleChange} />
                <h3>How many medium size dogs?</h3>
                <Input name={"medium"} value={data.medium} onChange={handleChange} />
                <h3>How many large dogs?</h3>
                <Input name={"large"} value={data.large} onChange={handleChange} />
                <h3>Any leftover from last month?(lb)</h3>
                <Input name={"leftOver"} value={data.leftOver} onChange={handleChange} />
                <button type={"submit"}>Submit</button>
            </form>

            {total &&
                <h1>
                    {resultTxt}
                </h1>
            }
        </div>
    )
}

