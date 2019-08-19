

function getCountryByCode(countryCode) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${config.codeUrl}/${countryCode}`,
            method: "GET",
            success: function (country) {
                if (country.name === "Israel") reject("Israel return!!!")
                resolve(country)
            },
            error: function (err) {
                reject(err, "there is some error")
            }

        })
    })

}

function getExchangeCurrency(currency) {
    return $.ajax({
        url: `${config.currencyUrl}${currency}`,
        method: "GET",
        //success => then getExchangeCurrency().then
        //error => catch getExchangeCurrency().catch
    })
}





$(function () {
    $("#search").on("click", () => {
        const alpha3code = $("#country").val()
        getCountryByCode(alpha3code).
            then(res => { return res }).
            then(country => getAllCurrencies(country)).
            catch(err => console.error("custom error", err))

    })
})

function getAllCurrencies(country) {
    const { currencies } = country
    currencies.filter(item => item.name).forEach(currency => {
        const { code } = currency

        getExchangeCurrency(code)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    });
}


