import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Say hi to the bot.',
            category: 'misc',
            usage: `${client.config.prefix}hi`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin-hi.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝘽𝙮 𝙩𝙝𝙚 𝙬𝙖𝙮, 𝙙𝙤 𝙮𝙤𝙪 𝙠𝙣𝙤𝙬 𝙬𝙝𝙖𝙩 𝙩𝙞𝙢𝙚 𝙞𝙩 𝙞𝙨? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
