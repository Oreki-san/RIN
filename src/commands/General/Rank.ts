import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
const yuricanvas = require("yuri-canvas");

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rank',
            description: 'Displays user-rank 📜',
            category: 'general',
            usage: `${client.config.prefix}rank [tag/quote]`,
            aliases: ['rk', 'rnk'],
            baseXp: 30
        })
    }

run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => { 
      if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
     const exp = (await this.client.getUser(user)).Xp
        let role
        if (exp < 500) {
            role = '🌸 Citizen'
        } else if (exp < 1000) {
            role = '🔎 Cleric'
        } else if (exp < 2000) {
            role = '🔮 Wizard'
        } else if (exp < 5000) {
            role = '♦️ Mage'
        } else if (exp < 10000) {
            role = '🎯 Noble'
        } else if (exp < 25000) {
            role = '✨ Elite'
        } else if (exp < 50000) {
            role = '🔶️ Ace'
        } else if (exp < 75000) {
            role = '🌀 Hero'
        } else if (exp < 100000) {
            role = '💎 Supreme'
        } else {
            role = '❄️ Mystic'
        }

        let level
        if (exp < 500) {
            level = '1'
        } else if (exp < 1000) {
            level = '2'
        } else if (exp < 2000) {
            level = '3'
        } else if (exp < 5000) {
            level = '4'
        } else if (exp < 10000) {
            level = '5'
        } else if (exp < 25000) {
            level = '6'
        } else if (exp < 50000) {
            level = '7'
        } else if (exp < 75000) {
            level = '8'
        } else if (exp < 100000) {
            level = '9'
        } else {
            level = 'Max'
        }
        
        let rxp = 10
        if (exp < 500) {
            level = '1000'
        } else if (exp < 1000) {
            level = '2000'
        } else if (exp < 2000) {
            level = '3000'
        } else if (exp < 5000) {
            level = '10000'
        } else if (exp < 10000) {
            level = '20000'
        } else if (exp < 25000) {
            level = '30000'
        } else if (exp < 50000) {
            level = '60000'
        } else if (exp < 75000) {
            level = '80000'
        } else if (exp < 100000) {
            level = 'Max'
        } else {
            level = 'Max × Infinity'
        }
        
let pfp: string
        try {
            pfp = await this.client.getProfilePicture(user)
        } catch (err) {
            M.reply(`Profile Picture not Accessible of ${username}`)
            pfp =
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhshgkXh025auPy0RDEeY9j3B14jlZMqgaw&usqp=CAU'
        }
let discrim = `${level}`
let image = await yuricanvas.rank({ 
            username,  
            discrim,
            level: rxp, 
            rank: role, 
            totalXP: level,
            neededXP: level, 
            currentXP: exp || 0, 
            avatarURL: pfp, 
            color: "white", 
            background: "https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png"
        });
M.reply(image,
        MessageType.image,
                    undefined,
                    undefined,
                    `🏮 *Username: ${username}*\n\n〽️ *Level: ${rxp}*\n\n⭐ *Exp: ${exp || 0}*\n\n💫 *Role: ${role}*\n`,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later. ${reason}`))
    }
}
