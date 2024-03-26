const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convert-btn")
const metersFeet = document.getElementById("meters-feet")
const feetMeters = document.getElementById("feet-meters")
const litersGallons = document.getElementById("liters-gallon")
const gallonsLiters = document.getElementById("gallons-liter")
const kiloPounds = document.getElementById("kilograms-pound")
const poundsKilo = document.getElementById("pounds-kilogram")


convertBtn.addEventListener("click", () => {
  const userUnits = userInput.value

  // Convert Meters to Feet
  const metersToFeet = userUnits * 3.28
  metersFeet.textContent = `${userUnits} ${"|"} meters = ${metersToFeet.toFixed(2
  )} feet`

  // Convert Feet to Meters
  const feetToMeters = userUnits / 3.28
  feetMeters.textContent = `${userUnits} ${"|"} feet = ${feetToMeters.toFixed(
    2
  )} meters`

  // Convert Liters to Gallon
  const litersToGallons = userUnits * 0.264
  litersGallons.textContent = `${userUnits} ${"|"} liters = ${litersToGallons.toFixed(
    2
  )} gallons`

  // Convert Gallons to Liters
  const gallonsToLiters = userUnits / 0.264
  gallonsLiters.textContent = `${userUnits} ${"|"} gallons = ${gallonsToLiters.toFixed(
    2
  )} liters`

  // Convert Kilos to Pounds
  const kilosToPounds = userUnits * 2.204
  kiloPounds.textContent = `${userUnits} ${"|"} kilos = ${kilosToPounds.toFixed(
    2
  )} pounds`

  // Convert Pounds to Kilos
  const poundsToKilos = userUnits / 2.204
  poundsKilo.textContent = `${userUnits} ${"|"} Pounds = ${poundsToKilos.toFixed(
    2
  )} kilos`

  
})