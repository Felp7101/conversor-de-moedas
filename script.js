const convertButton = document.querySelector("#convert-button");
const selectCurrency = document.querySelector(".select-currency");
const currencyToConvertImg = document.querySelector("#currency-to-convert-img");
const currencyConvertedImg = document.querySelector("#currency-converted")
const selectCurrencyToConvert = document.querySelector(".select-currency-to-convert")
function convertValues() {
  const inputValue = document.querySelector("#select-3").value;
  const todayDolarValue = 5.2;
  const todayEuroValue = 6.2;
  const todayBitcoinVaue = 354.162;
  const todayLibraValue = 6.31;
  const todayRealValue = 4.5;
  const valueToConvert = document.querySelector(".currency-value-to-convert");
  const convertedValue = document.querySelector(".currency-value");
  /* moedas convertidas*/
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
  if (selectCurrency.value == "brl" ) {
    convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue/todayRealValue);
  }
  if (selectCurrency.value == "libra") {
    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue/todayLibraValue)
  }
  /* valor da moeda a ser convertida*/
  if (selectCurrencyToConvert.value == "dolar") {
      valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputValue);
  }
  if (selectCurrencyToConvert.value == "euro") {
    valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue);
  }
  if (selectCurrencyToConvert.value == "brl") {
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue);
  }
  if (selectCurrencyToConvert.value == "libra") {
    valueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue);
  }
  /* moedas iguais*/
  if (selectCurrencyToConvert.value === selectCurrency.value) {
    valueToConvert.innerHTML = "same value"
    convertedValue.innerHTML = "same value"
}
if (selectCurrencyToConvert.value === selectCurrency.value) {
  valueToConvert.innerHTML = "same value"
    convertedValue.innerHTML = "same value"
}
if (selectCurrencyToConvert.value === selectCurrency.value)  {
  valueToConvert.innerHTML = "same value"
    convertedValue.innerHTML = "same value"
}
if (selectCurrencyToConvert.value === selectCurrency.value) {
  valueToConvert.innerHTML = "same value"
  convertedValue.innerHTML = "same value"
}
}
function changeCurrency() {

  const currencyConvertedName = document.querySelector(".currency");
  const currencyToConvertName = document.querySelector(".currency-to-convert");
  const convertedValue = document.querySelector(".currency-value");
  if (selectCurrency.value == "euro") {
  currencyConvertedName.innerHTML = "Euro";
  currencyConvertedImg.src = "./assets/euro.png"
  convertedValue.innerHTML = "€ 00,00"
  }
  if (selectCurrency.value == "dolar") {
    currencyConvertedName.innerHTML = "Dólar Americano";   
    currencyConvertedImg.src = "./assets/dolar.png"
    convertedValue.innerHTML = "US$ 00,00"
  }
  if (selectCurrency.value == "libra") {
    currencyConvertedName.innerHTML = "Libra"
    currencyConvertedImg.src ="./assets/libra.png"
    convertedValue.innerHTML = "£ 00,00"
  }
  if (selectCurrency.value == "brl") {
  currencyConvertedName.innerHTML = "Real brasileiro"
  currencyConvertedImg.src = "./assets/real.png"
  convertedValue.innerHTML = "R$ 00,00"
  }
}
function changeCurrencyToConvert() {
  const valueToConvert = document.querySelector(".currency-value-to-convert");
  const convertedValue = document.querySelector(".currency-value");
  const currencyToConvertName = document.querySelector(".currency-to-convert");
if (selectCurrencyToConvert.value == "euro") {
  currencyToConvertName.innerHTML = "Euro";
  currencyToConvertImg.src = "./assets/euro.png"
  valueToConvert.innerHTML = "€ 00,00"
  
  }
  if (selectCurrencyToConvert.value == "dolar") {
    currencyToConvertName.innerHTML = "Dólar Americano";   
    currencyToConvertImg.src = "./assets/dolar.png"
  valueToConvert.innerHTML = "US$ 00,00"
  }
  if (selectCurrencyToConvert.value == "libra") {
    currencyToConvertName.innerHTML = "Libra"
    currencyToConvertImg.src ="./assets/libra.png"
    valueToConvert.innerHTML = "£ 00,00"
  }
  if (selectCurrencyToConvert.value == "brl") {
 currencyToConvertName.innerHTML = "Real brasileiro"
  currencyToConvertImg.src = "./assets/real.png"
  valueToConvert.innerHTML = "R$ 00,00"
  }
}
convertValues ()
convertButton.addEventListener("click", convertValues);
selectCurrency.addEventListener("change", changeCurrency);
selectCurrencyToConvert.addEventListener("change", changeCurrencyToConvert)