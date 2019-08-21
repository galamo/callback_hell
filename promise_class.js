function getPromise() {
    // return Promise.resolve("Hi this is your data"); //took 10 min
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hi this is data from server")
        }, 3000);
    })
}

function getErrorPromise() {
    // return Promise.resolve("Hi this is your data"); //took 10 min
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("There is an error from the server")
        }, 5000);
    })
}

const result = getPromise();
console.log(result)
result.then((result) => {
    console.log("inside promise", result)
})

// then will never appear cuz getErrorPromise return reject!
getErrorPromise().then(res => { console.log(res) }).catch(err => {
    console.error(err)
})