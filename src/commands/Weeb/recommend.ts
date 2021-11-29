const waifulist = require("public-waifulist");
import axios from 'axios'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'recommend',
            description: `Will recommend you some airing animes.`,
            aliases: ['reco'],
            category: 'weeb',
            usage: `${client.config.prefix}reco`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const waifuclient = new waifulist()
        const r = await waifuclient.getAiringAnimes()
        let i = Math.floor(Math.random() * r.length)
        const { data } = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${r[i].name}`)
        const buffer = await request.buffer(r[i].thumbnail).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖ An error occurred. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `🎀 *Title: ${r[i].name}*\n〽️ *Aired on:* ${r[i].airing_start}\n🌸 *Episodes Count:* ${r[i].episode_count}\n🌟 *Score:* ${data.results[0].score}\n💎 *Rating:* ${data.results[0].rated}\n❄ *Description:* ${data.results[0].synopsis}\n\n🌐 *MyAnimeList URL:* ${data.results[0].url}`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`✖ An error occurred. Please try again later.`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`✖ An error occurred. Please try again later.`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
