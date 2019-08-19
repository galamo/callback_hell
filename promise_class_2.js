

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



$(function () {
    $("#search").on("click", () => {
        const alpha3code = $("#country").val()
        getCountryByCode(alpha3code).
            then(res => { return res }).
            then(result => console.log(result)).
            catch(err => console.error("custom error", err))

    })
})
