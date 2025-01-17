require("dotenv").config()

const { Telegraf } = require("telegraf")
const { message } = require("telegraf/filters")
const axios = require('axios')

if (!process.env.TELEGRAM_BOT_TOKEN) {
    console.error("Please provide a valid Telegram Bot Token.")
    process.exit(1)
}

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

/* 
    ===================== START COMMAND =====================

    This is the function that will be called when the bot is started.
    It will send a message to the user saying "Hello!"
*/
bot.start(async (ctx) => {
    await ctx.reply("Ciao")
})

/* 
    ===================== CHAT COMMAND =====================

    This is the function that will be called when the user sends
    the command /chat to the bot.

    The chat ID of the user can be accessed using ctx.chat.id
*/
bot.command("chat", async (ctx) => {
    const chatId = ctx.chat.id
    await ctx.reply("La tua chat ID è: " + chatId)
})

/* 
    ===================== POST COMMAND =====================

    This is the function that will be called when the user sends
    the command /post to the bot.

    The chat message can be accessed using ctx.message.text

    This command accept only one parameter, which is the number of
    posts that the user wants to retrieve from the
    "https://jsonplaceholder.typicode.com" API.

    The corresponding post can be accessed using the URL:

    https://jsonplaceholder.typicode.com/posts/{postId}

*/
bot.command("post", async (ctx) => {
    /* 
        Example of message:

        /post
        /post 10
        /post 10 Ciao!
        /post 10 Ciao! https://www.google.com
    */

    const text = ctx.message.text
    const params = text.split(" ")

    // The first parameter is always the "/post" command. We can remove it.
    params.shift()

    // Check for the parameters
    if (params.length != 1) {
        await ctx.reply("Fornisci come unico parametro il numero del post da recuperare!")
    } else {
        const n = parseInt(params[0])

        if (isNaN(n)) {
            await ctx.reply("Il parametro deve essere un numero!")
        } else {
            await ctx.reply("Sto recuperando il post " + n + "...")
            // Retrieve the posts
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + n)

                await ctx.reply("User ID: " + response.data.userId)
                await ctx.reply("Titolo: " + response.data.title)
                await ctx.reply("Contenuto: " + response.data.body)
            } catch (e) {
                await ctx.reply("Errore durante il recupero del post!")
            }
        }
    }
})

/* 
    ===================== PHOTO COMMAND =====================

    This is the function that will be called when the user sends
    the command /photo to the bot.
    
    It will reply with a photo of a cat using the URL
*/
bot.command("photo", async (ctx) => {
    await ctx.replyWithPhoto("https://www.corriere.it/methode_image/2022/02/15/Tecnologia/Foto%20Tecnologia/GATTO2.png", { caption: 'Ecco la tua foto!' });
})

/* 
    ===================== TEXT MESSAGE =====================

    This is the function that will be called when the user sends
    a message to the bot. It will reply with the message that the
    user sent. It is important to set this function last, so that
    it does not override the other functions.

    The message sent by the user can be accessed using ctx.message.text
*/
bot.on(message("text"), async (ctx) => {
    const message = ctx.message.text
    await ctx.reply(`You said: ${message}`)
})

/* ===================== LAUNCH ===================== */

bot.launch(() => {
    console.log('Bot is up and running')
}).catch((err) => {
    console.error('Error starting bot', err)
})

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))