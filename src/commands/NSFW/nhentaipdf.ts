import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage,IParsedArgs } from "../../typings";
import axios from 'axios';
import akaneko from "akaneko";
import request from "../../lib/request";
import { MessageType,Mimetype } from "@adiwajshing/baileys";
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "ncode",
			description: 'welcome to the darkness 🌚',
			aliases: ["nhdl","nc"],
			category: "nsfw",
			usage: `${client.config.prefix}nc`,
			baseXp: 50,
		});
	}

	run = async (M: ISimplifiedMessage,{joined}:IParsedArgs): Promise<void> => {
		try {
            if (!(await this.client.getGroupData(M.from)).nsfw)
			return void M.reply(
				`Don't be a pervert, Baka! This is not an NSFW group.`
			);
        const term = joined
		if(!term) return void M.reply('provide a code')
	    const {data} = await axios.get(`https://api.ichikaa.xyz/api/nhentai?code=${term}`);
		if(!data) return void M.reply(`couldn't find the doujin`)
        const { native , pretty,default:string} = data.result.title;
       console.log(data.result.thumbnails[0])
	   const thumb:any = await request.buffer(data.result.thumbnails[0]);
		const base64 = Buffer.from(thumb, 'binary').toString('base64')
		M.reply(`🆔id : *${joined}*\n🌞title : *${pretty}*\n🎌language: *${data.result.language}*`);
        axios.get(`https://api.ichikaa.xyz/api/nhentaipdf?code=${term}`).then(
            async(response)=>{ 
            this.client.sendMessage(M.from,await request.buffer( response?.data.result?.url), MessageType.document, { mimetype: "application/pdf",thumbnail: base64 ,filename: response.data.result.filename,quoted:M.WAMessage })}
        )

		return void null;    
        } catch (error) {
			console.error(error)
            M.reply('sorry something went wrong')
        }
		
	};
}
