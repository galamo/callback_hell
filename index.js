const config = {
    codeUrl: "https://restcountries.eu/rest/v2/alpha",
    exchangeUrl: "https://api.exchangeratesapi.io/latest?base="
}

function getCountryByCode(countryCode, callback) {
    $.ajax({
        url: `${config.codeUrl}/${countryCode}`,
        method: "GET",
        success: function (country) {
            callback(country)
        },
        error: function (err) {
            console.log("some error")
        }
    })
}

function getCurrencyExchange(currency, callback) {
    $.ajax({
        url: `${config.exchangeUrl}${currency}`,
        method: "GET",
        success: function (cRes) {
            callback(cRes)
        },
        error: function (err) {
            console.log("getCurrencyExchange error")
        }
    })
}

getCountryByCode("USA", (country) => {

    country.borders.forEach(item => {
        $("#borders").append(`<div id='${item}' class='loader'></div>`)
        setTimeout(() => {
            getCountryByCode(item, (result) => {
                if (result.name === "Egypt") {
                    setTimeout(() => {
                        $(`#${item}`).html(result.name).attr({ class: "" })
                    }, 2000);
                } else {
                    $(`#${item}`).html(result.name).attr({ class: "" })
                }

                result.currencies.forEach(coin => {
                    getCurrencyExchange(coin.code, (exChangeResult) => {
                        console.log(result.name, exChangeResult.base, exChangeResult.rates.ILS)
                    })
                })

            })
        }, 2000);

    })

});
