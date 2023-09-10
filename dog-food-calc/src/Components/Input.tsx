import React from "react";

interface Props {
    name: string,
    value: number,
    onChange: (e: any) => void,
}
export const Input = ({ name, onChange }: Props) => {
    return (
        <div data-testid="input-component">
            <input className="input-field" onChange={onChange} name={name} type="number" data-testid={`${name}-input`} />
        </div>)
}
