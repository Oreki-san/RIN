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
            command: 'crossplay',
            description: `Will send you random crossplay img.`,
            aliases: ['cp'],
            category: 'weeb',
            usage: `${client.config.prefix}crossplay`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://velgrynd.herokuapp.com/api/image/cosplay`),
        MessageType.image,
                    undefined,
                    undefined,
                    `🤍 Here you go.\n`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}
