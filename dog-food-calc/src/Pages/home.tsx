import React, { useState } from 'react';
import { Input } from '../Components/Input';

interface FoodAmounts {
    small: number,
    medium: number,
    large: number,
    leftOver: number,
}

export const Home = () => {
    const [data, setData] = useState<FoodAmounts>({
        small: 0,
        medium: 0,
        large: 0,
        leftOver: 0,
    })

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Dog Food Calculator</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(data)
            }}>
                <Input name={"small"} value={data.small} onChange={handleChange} />
                <Input name={"medium"} value={data.medium} onChange={handleChange} />
                <Input name={"large"} value={data.large} onChange={handleChange} />
                <Input name={"LeftOver"} value={data.leftOver} onChange={handleChange} />
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}

