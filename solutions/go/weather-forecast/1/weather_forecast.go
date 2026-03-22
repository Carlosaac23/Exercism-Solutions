// Package weather provides a simple interface to get the current weather condition for a given city.
package weather

var (
	// CurrentCondition holds the current weather condition for the specified location.
	CurrentCondition string
	// CurrentLocation holds the name of the city for which the weather condition is being tracked.
	CurrentLocation string
)

// Forecast returns a string that describes the current weather condition for the specified city.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
