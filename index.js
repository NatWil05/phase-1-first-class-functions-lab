const returnFirstTwoDrivers = (drivers) => {
    return(drivers.slice(0, 2))

}
const returnLastTwoDrivers = (drivers) => {
    return(drivers.slice(2,5))
}

const selectingDrivers = [
    returnFirstTwoDrivers,
     returnLastTwoDrivers
    ]

const createFareMultiplier = (number) => {
    return () => number * number
}

const fareDoubler = (fare) => {
return fare * 2
} 

const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (ArrayOfDrivers, fn) => {
    return fn(ArrayOfDrivers)
 
}