function getExchange(currency) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://api.exchangeratesapi.io/latest?base=" + currency,
            method: "GET",
            success: (result) => {
                resolve(result)
            }
        })
    })

}


function getCountry(country) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/alpha/isr",
            method: "GET",
            success: (result) => {
                resolve(result.borders)
                // const g = result.borders.map(item => {
                //     return getCountry(item)
                // })
                // resolve(g);
            }
        })
    })

}


function getCountryName(countryCode) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/alpha/" + countryCode,
            method: "GET",
            success: (result) => {
                resolve(result.name)
            }
        })
    })

}



getCountry("ISR").then((result) => {
    const g = result.map(item => {
        return getCountryName(item)
    })
    Promise.all(g).then(res => console.log(res))
})





getExchange("ils")

function getPromise() {
    return Promise.reject(1)
}

const a = getPromise();
a.then((res) => { console.log(res) }).catch(err => console.log(err, "err"))


const exchange = getExchange("EUR");
exchange.then(res => res).then(res => {
    console.log(res)
})