function getExchange(currency) {
    $.ajax({
        url: "https://api.exchangeratesapi.io/latest?base=" + currency,
        method: "GET",
        success: (result) => {
            console.log(result)
        }
    })
}

getExchange("ils")

function getPromise() {
    return Promise.resolve()
}

const a = getPromise();
console.log(a)