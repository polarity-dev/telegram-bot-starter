const axios = require('axios')

async function main() {
    const response = await axios
        .get('https://jsonplaceholder.typicode.com/posts/1')

    /* 
        RESPONSE
        
        {
            status: 200,
            headers: {
                "content-type": "application/json; charset=utf-8",
                ...
            },
            data: {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        }
    */

    console.log("\n\n DATA ----------------------------")
    console.log(response.data)

    console.log("\n\n HEADERS ----------------------------")
    console.log(response.headers)

    console.log("\n\n STATUS ----------------------------")
    console.log(response.status)
}

main()