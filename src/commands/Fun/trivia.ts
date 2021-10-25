import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'trivia',
            description: 'random trivia.',
            aliases: ['trivia'],
            category: 'fun',
            usage: `${client.config.prefix}trivia`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await axios.get(`http://numbersapi.com/random/trivia`)
        .then((response) => {
                // console.log(response);
                const text = `📝 *Trivia:* ${response.data}`
                M.reply(text);
            }).catch(err => {
                M.reply(`🔍 Error: ${err}`)
            }
            )
    };
}
