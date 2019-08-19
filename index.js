const config = {
    codeUrl: "https://restcountries.eu/rest/v2/alpha",
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

    country.borders.forEach(item => {
        $("#borders").append(`<div id='${item}' class='loader'></div>`)
        getCountryByCode(item, (result) => {
            $(`#${item}`).html(result.name).attr({ class: "" })
        })

    })

});
