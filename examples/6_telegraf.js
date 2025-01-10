require("dotenv").config()

const { Telegraf } = require("telegraf")
const { message } = require("telegraf/filters")

/* ===================== SETUP ===================== */

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

/* ===================== BOT ===================== */

// Questo è la funzione che verrà eseguita quando un utente avvierà il bot.
bot.start(async (ctx) => {
    const chatId = ctx.chat.id
    await ctx.reply("Ciao! La tua chat ID è: " + chatId)
})

// Questo è la funzione che verrà eseguita quando un utente invierà il comando /ripeti.
bot.command("ripeti", async (ctx) => {
    const message = ctx.message.text
    const params = message.split(" ")

    await ctx.reply("Comando ripeti attivato! Hai scritto: " + params[1])
})

// Questo è la funzione che verrà eseguita quando un utente invierà un messaggio di testo.
bot.on(message("text"), async (ctx) => {
    const message = ctx.message.text
    await ctx.reply("Hai scritto: " + message)
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