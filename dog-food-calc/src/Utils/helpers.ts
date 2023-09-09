
const amountByDog = {
    small: 10,
    medium: 20,
    large: 30,
}

const percentageAdded = 20

export const TotalFoodAmount = (data: any) => {
    const FoodPerDog = (data.small * amountByDog.small) + (data.medium * amountByDog.medium) + (data.large * amountByDog.large)

    return (FoodPerDog - data.leftOver) * (1 + percentageAdded / 100)
}