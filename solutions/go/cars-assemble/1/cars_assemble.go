package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	var percentage = successRate / 100
	return float64(productionRate) * percentage
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	var costPerHour float64 = CalculateWorkingCarsPerHour(productionRate, successRate)
	return int(costPerHour) / 60
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	var carGroups uint = uint(carsCount) / 10
	var leftCars uint = uint(carsCount) % 10
	var costGroup uint = carGroups * 95000
	var costIndividual uint = leftCars * 10000

	return costGroup + costIndividual
}
