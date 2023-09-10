export interface FoodAmounts {
    small: number,
    medium: number,
    large: number,
    leftOver: number,
}
export interface InputProps {
    name: string,
    value: number,
    onChange: (e: any) => void,
}