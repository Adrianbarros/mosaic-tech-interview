import React from "react";

interface Props {
    name: string,
    value: number,
    onChange: (e: any) => void,
}
export const Input = ({ name, value, onChange }: Props) => {
    return (
        <div>
            <input onChange={onChange} name={name} defaultValue={value} />
        </div>)
}
