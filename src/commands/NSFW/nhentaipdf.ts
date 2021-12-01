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
		// fetch result of https://nekos.life/api/v2/img/wallpaper from the API using axios
        try {
            if (!(await this.client.getGroupData(M.from)).nsfw)
			return void M.reply(
				`Don't be a pervert, Baka! This is not an NSFW group.`
			);
        const term = joined
	    const {data} = await axios.get(`https://api.ichikaa.xyz/api/nhentai?code=${term}`);
        if(!data) return void M.reply(`couldn't find the doujin`)
        const { native , pretty,default:string} = data.title;
        M.reply(`id= ${joined}\n title = ${pretty}\n language: ${data.language}`);
        axios.get(`https://api.ichikaa.xyz/api/nhentaipdf?code=${term}`).then(
            (response)=>{ 
            this.client.sendMessage(M.from,response?.data.result?.url, MessageType.document, { mimetype: Mimetype.pdf, filename: response.data.result.filename })}
        )

		return void null;    
        } catch (error) {
            M.reply('sorry something went wrong')
        }
		
	};
}
