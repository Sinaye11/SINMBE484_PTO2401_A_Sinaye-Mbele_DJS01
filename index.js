/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmH = 10000; // velocity (km/h)
const accelerationMs2 = 3; // acceleration (m/s^2)
const timeSec = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const initialFuelKg = 5000; // initial fuel (kg)
const fuelBurnRateKgS = 0.5; // fuel burn rate (kg/s)

// Convert velocity from km/h to m/s
const velocityMs = velocityKmH * 1000 / 3600;

// Calculate new distance in km
// Velocity in km/h, so we need to convert time to hours
const newDistanceKm = initialDistanceKm + (velocityKmH * (timeSec / 3600)); // Convert time to hours and multiply

// Calculate total fuel burned and remaining fuel
const fuelBurnedKg = fuelBurnRateKgS * timeSec;
const remainingFuelKg = initialFuelKg - fuelBurnedKg;

// Calculate new velocity in km/h based on acceleration
const calculateNewVelocityKmH = (initialVelocityKmH, accelerationMs2, timeSec) => {
  // Convert initial velocity to m/s
  const initialVelocityMs = initialVelocityKmH * 1000 / 3600;
  // Calculate new velocity in m/s
  const newVelocityMs = initialVelocityMs + (accelerationMs2 * timeSec);
  // Convert new velocity back to km/h
  return newVelocityMs * 3600 / 1000;
};

const newVelocityKmH = calculateNewVelocityKmH(velocityKmH, accelerationMs2, timeSec);

// Validate remaining fuel
if (remainingFuelKg < 0) {
  throw new Error('Fuel consumption exceeds the available fuel.');
}

console.log(`Corrected New Velocity: ${newVelocityKmH.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistanceKm.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuelKg.toFixed(2)} kg`);
