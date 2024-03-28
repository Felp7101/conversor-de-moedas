const convertButton = document.querySelector("#convert-button");
const selectCurrency = document.querySelector(".select-currency");
const currencyToConvertImg = document.querySelector("#currency-to-convert-img");
const currencyConvertedImg = document.querySelector("#currency-converted")
function convertValues() {
  const inputValue = document.querySelector("#select-3").value;
  const todayDolarValue = 5.2;
  const todayEuroValue = 6.2;
  const valueToConvert = document.querySelector(".currency-value-to-convert");
  const convertedValue = document.querySelector(".currency-value");
  if (selectCurrency.value == "dolar") {
    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / todayDolarValue);
  }
  if (selectCurrency.value == "euro") {
    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / todayEuroValue);
  }
  valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
}
function changeCurrency() {

  const currencyConvertedName = document.querySelector(".currency");
  const currencyToConvertName = document.querySelector(".currency-to-convert");
  if (selectCurrency.value == "euro") {
  currencyConvertedName.innerHTML = "Euro";
  currencyConvertedImg.src = "./assets/euro.png"
  }
  if (selectCurrency.value == "dolar") {
    currencyConvertedName.innerHTML = "Dólar Americano";   
    currencyConvertedImg.src = "./assets/dolar.png"
  }
convertValues ()
}
convertButton.addEventListener("click", convertValues);
selectCurrency.addEventListener("change", changeCurrency);
