const config = {
    codeUrl: "https://restcountries.eu/rest/v2/alpha",
    currencyUrl: "https://api.exchangeratesapi.io/latest?base="
}
//https://api.exchangeratesapi.io/latest?base=ILS

function getCountryByCode(countryCode, callback) {
    $.ajax({
        url: `${config.codeUrl}/${countryCode}`,
        method: "GET",
        success: function (country) {
            callback(country)
        }
    })

}

getCountryByCode("ISR", (country) => {
    console.log(country.borders[0])
    getCountryByCode(country.borders[0], (countryBorderA) => {
        console.log(countryBorderA)
        getCountryByCode(countryBorderA.borders[0], (countryBorderB) => {
            console.log(countryBorderB)
            $("#country").val(countryBorderB.currencies[0].code)
        })
    })
});
