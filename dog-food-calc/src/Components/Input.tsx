import React from "react";
import { InputProps } from "../Types/foodCalcTypes";

export const Input = ({ name, onChange }: InputProps) => {
    return (
        <div data-testid="input-component">
            <input className="input-field" onChange={onChange} name={name} type="number" data-testid={`${name}-input`} />
        </div>)
}
