
const amountByDog = {
    small: 10,
    medium: 20,
    large: 30,
}

const extraPercentage = 20

export const TotalFoodAmount = (data: any) => {
    if (!data) {
        return null
    }
    const FoodPerDog = (data.small * amountByDog.small) + (data.medium * amountByDog.medium) + (data.large * amountByDog.large)

    return (FoodPerDog - data.leftOver) * AddedPercentage(extraPercentage)
}

export const AddedPercentage = (percent: number) => {
    return 1 + percent / 100
}