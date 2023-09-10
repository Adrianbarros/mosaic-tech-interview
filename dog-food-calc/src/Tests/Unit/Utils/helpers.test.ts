import { TotalFoodAmount } from '../../../Utils/helpers'

const mockData = {
    small: 3,
    medium: 1,
    large: 4,
    leftOver: 15
}
const leftOverEqualsAmount = {
    small: 1,
    medium: 1,
    large: 1,
    leftOver: 60
}

const mockZeroData = {
    small: 0,
    medium: 0,
    large: 0,
    leftOver: 0
}

describe('Helpers Functions', () => {
    it('Returns the correct amount of total food amount needed', () => {
        expect(TotalFoodAmount(mockData)).toEqual(186)

    })
    it('Returns 0 if there is nothing or if left overs equals the amount to feed all dogs', () => {
        expect(TotalFoodAmount(mockZeroData)).toEqual(0)
        expect(TotalFoodAmount(leftOverEqualsAmount)).toEqual(0)
    })

})