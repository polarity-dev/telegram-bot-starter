
const axios = require("axios")

// CON CALLBACK
function main1() {
    axios
        .get('url1')
        .then(function (response) {
            axios
                .get('url1')
                .then(function (response2) {
                    console.log("B")
                })
        })
}

main1()

// CON ASYNC AWAIT

async function main2() {
    console.log("A")
    const response1 = await axios.get('url1')
    console.log("B")
    const response2 = await axios.get('url2')
    console.log("C")
}

main2()
