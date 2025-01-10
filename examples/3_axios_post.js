const axios = require('axios')

async function main() {
    const body = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', body)

    console.log("\n\nDATA ----------------------------")
    console.log(response.data)

    console.log("\n\nHEADERS ----------------------------")
    console.log(response.headers)

    console.log("\n\nSTATUS ----------------------------")
    console.log(response.status)
}

main()