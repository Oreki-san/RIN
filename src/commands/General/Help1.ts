import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help1',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help1 (command_name)`,
            dm: true,
            aliases: ['h1']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-🄶🄴🄽🄴🅁🄰🄻 🄻🄸🅂🅃 🧣
──────────────
🧧 ${this.client.config.prefix}ᴀᴅᴍɪɴꜱ
🧧 ${this.client.config.prefix}ᴇᴠᴇʀʏᴏɴᴇ
🧧 ${this.client.config.prefix}ᴍᴏᴅꜱ
🧧 ${this.client.config.prefix}ᴘʀᴏꜰɪʟᴇ
🧧 ${this.client.config.prefix}ʀᴀɴᴋ
🧧 ${this.client.config.prefix}xᴘ
🧧 ${this.client.config.prefix}ɪɴᴠɪᴛᴇʟɪɴᴋ
🧧 ${this.client.config.prefix}ᴅᴇʟᴇᴛᴇ
🧧 ${this.client.config.prefix}ʀᴇᴛʀɪᴇᴠᴇ
🧧 ${this.client.config.prefix}ʜɪ
🧧 ${this.client.config.prefix}ʀɪɴ
──────────────` }
        )
    }
}
       
