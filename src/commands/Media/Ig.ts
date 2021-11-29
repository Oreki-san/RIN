import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ig',
            aliases: ['ur', 'ig'],
            description: 'Get the info of a user from ig ',
            category: 'media',
            dm: true,
            usage: `${client.config.prefix}iguser [name]`
        })
    }
	
	    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        
        if (!joined) return void M.reply('Provide the keywords you wanna search, Baka!')
        const chitoge = joined.trim()
        console.log(chitoge)
        const { data } = await axios.get(`https://api-xcoders.xyz/api/stalk/ig?username=${chitoge}&apikey=LJowCce5Pn`)
        if ((data as { error: string }).error) return void (await M.reply('Sorry, couldn\'t find'))
        const buffer = await request.buffer(data.result.profile_url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '🌟 An error occurred. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `${data.result.is_verified}\n${data.result.is_private}\n${data.result.posts_coun}\n${data.result.following}\n${data.result.followers}\n${data.result.biography}\n${data.result.full_name}\n${data.result.username}\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`🌟An error occurred. Please try again later.`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`An error occurred. Please try again later.`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
