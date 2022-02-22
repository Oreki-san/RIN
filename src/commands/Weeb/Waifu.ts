import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'waifu',
            description: `sends you the Waifus aka\nGirls you can't have.`,
            aliases: ['animegirl'],
            category: 'weeb',
            usage: `${client.config.prefix}waifu`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const { data } = await axios.get('https://waifu.pics/api/sfw/waifu')
        const buffer: any = await request.buffer(data.url);
        const media:any = await this.client.prepareMessage(M.from,buffer,MessageType.image);

        const buttons = [
            {buttonId: 'waifu', buttonText: {displayText: 'More Waifu'}, type: 1},
            {buttonId: 'loli', buttonText: {displayText: 'Gib loli'}, type: 1}
          ]
          const buttonMessage: any = {
            contentText: 'More than one waifu, will ruin your laifu.\n',
            footerText: '',
            buttons: buttons,
            headerType: 4,
            imageMessage: media.message?.imageMessage
        }
          await this.client.sendMessage(M.from, buttonMessage, MessageType.buttonsMessage)
      
    }
}
