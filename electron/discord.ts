import { Message, Client, Events } from 'discord.js'
import { mainWindow } from './main'

require('dotenv').config()

const TOKEN = process.env.TOKEN
const ID = process.env.CHANNELID

export function init_Discord() {
    const client = new Client({
        intents: ['Guilds', 'GuildMembers', 'GuildMessages', 'MessageContent'],
    })
    
    client.once(Events.ClientReady, () => {
        console.log('Ready!')
        console.log(client.user!.tag)
    })
    
    client.on(Events.MessageCreate, async (message: Message) => {
        // if (message.channelId !== ID) return
        // if (!message.author.bot) return
        if (message.author.bot) return
        console.log('testes')
        mainWindow!.webContents.send('test', 'aaa')
    })
    
    client.login(TOKEN)
}