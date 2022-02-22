import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    emojis: any
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/videos/chess-win.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category || info.config.category === 'dev') continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `
            🤍 Konichiwa senpai 🤍
            ╭─「(づ￣ 3￣)づ」
            │⋊ ᴜꜱᴇʀ: *${M.sender.username}*
            │⋊ ɴᴀᴍᴇ: I S H T A R
            │⋊ ᴘʀᴇꜰɪx: ${this.client.config.prefix}
            │⋊ ᴏᴡɴᴇʀ: <${this.client.config.prefix}mod>
            ╰────────────┈平和                            \n\n`
    //         const keys = Object.keys(categories)
    //         for (const key of keys)
    // // emojis = ['🚀', '🌀', '🎵', '🧿', '⚖️', '🚫','👑', '✨', '📚']

    //             text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\n• \`\`\`${categories[
    //                 key
    //             ]
    //                 .map((command) => command.config?.command)
    //                 .join(', ')}\`\`\`\n\n`
    //         const key = parsedArgs.joined.toLowerCase()
    //         const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
    //         if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
    //         const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
           
const weeb = [
    {title: 'anime', rowId:"rowid1"},
    {title: 'animequote', rowId:"rowid1"},
    {title: 'animechar', rowId:"rowid2"},
    {title: 'genshincharacter', rowId:"rowid2"},
    {title: 'husbando', rowId:"rowid2"},
    {title: 'loli', rowId:"rowid2"},
    {title: 'manga', rowId:"rowid2"},
    {title: 'pokemon', rowId:"rowid2"},
    {title: 'rpaper', rowId:"rowid2"},
    {title: 'vtuber', rowId:"rowid2"},
    {title: 'waifu', rowId:"rowid2"},
    {title: 'ameme', rowId:"rowid2"},
    {title: 'character', rowId:"rowid2"},
    {title: 'crossplay', rowId:"rowid2"},
    {title: 'haigusa', rowId:"rowid2"},
    {title: 'recommend', rowId:"rowid2"},
    {title: 'sauce', rowId:"rowid2"},
    {title: 'wallpaper', rowId:"rowid2"}
   ]
   const bots = [
    {title: 'entropy', rowId:"rowid1"},
    {title: 'guide', rowId:"rowid2"},
    {title: 'infinity', rowId:"rowid2"},
    {title: 'kaoi', rowId:"rowid2"},
    {title: 'void', rowId:"rowid2"}
   ]
   const config = [
    {title: 'disable', rowId:"rowid1"},
    {title: 'enable', rowId:"rowid2"}
   ]
   const utils = [
    {title: 'blur', rowId:"rowid1"},
    {title: 'kitten', rowId:"rowid1"},
    {title: 'sticker', rowId:"rowid1"},
    {title: 'subred', rowId:"rowid1"},
    {title: 'getgif', rowId:"rowid1"},
    {title: 'screenshot', rowId:"rowid1"},
    {title: 'steal', rowId:"rowid1"},
    {title: 'translate', rowId:"rowid1"},
    {title: 'wikipedia', rowId:"rowid1"}
   ]
   const dev = [
    {title: 'ban', rowId:"rowid1"},
    {title: 'eval', rowId:"rowid2"},
    {title: 'join', rowId:"rowid2"},
    {title: 'leave', rowId:"rowid2"},
    {title: 'status', rowId:"rowid2"},
    {title: 'unban', rowId:"rowid2"}
   ]
   const misc = [
    {title: 'retrieve', rowId:"rowid1"},
    {title: 'hi', rowId:"rowid1"},
    {title: 'rin', rowId:"rowid1"},
   ]
   const education = [
    {title: 'calculator', rowId:"rowid1"},
    {title: 'covid', rowId:"rowid1"},
    {title: 'define', rowId:"rowid1"},
    {title: 'elements', rowId:"rowid2"},
    {title: 'github', rowId:"rowid2"},
    {title: 'urbandictionary', rowId:"rowid2"},
    {title: 'weather', rowId:"rowid2"},
   ]
   const fun = [
    {title: 'chess', rowId:"rowid1"},
    {title: 'quote', rowId:"rowid2"},
    {title: 'react', rowId:"rowid2"},
    {title: 'trigger', rowId:"rowid2"},
    {title: 'truth', rowId:"rowid2"},
    {title: 'chat', rowId:"rowid2"},
    {title: 'dare', rowId:"rowid2"},
    {title: 'fact', rowId:"rowid2"},
    {title: 'safejoke', rowId:"rowid2"},
    {title: 'ship', rowId:"rowid2"},
    {title: 'trivia', rowId:"rowid2"}]
   const general = [
       {title: 'admins', rowId:"rowid2"},
       {title: 'everyone', rowId:"rowid2"},
       {title: 'help', rowId:"rowid2"},
       {title: 'mods', rowId:"rowid2"},
       {title: 'profile', rowId:"rowid2"},
       {title: 'rank', rowId:"rowid1"},
       {title: 'xp', rowId:"rowid2"},
       {title: 'invitelink', rowId:"rowid2"},
       {title: 'delete', rowId:"rowid2"}
    ]
    const media = [
        {title: 'play', rowId:"rowid2"},
        {title: 'spotify', rowId:"rowid2"},
        {title: 'take', rowId:"rowid1"},
        {title: 'ytaudio', rowId:"rowid2"},
        {title: 'ytsearch', rowId:"rowid2"},
        {title: 'ytvideo', rowId:"rowid2"},
        {title: 'google', rowId:"rowid2"},
        {title: 'lyrics', rowId:"rowid2"},
        {title: 'pinterest', rowId:"rowid2"}
   ]
   const nsfw = [
    {title: 'anal', rowId:"rowid2"},
    {title: 'blowjob', rowId:"rowid2"},
    {title: 'nsfwdoujin', rowId:"rowid1"},
    {title: 'nsfwloli', rowId:"rowid2"},
    {title: 'nsfwpaper', rowId:"rowid2"},
    {title: 'thighs', rowId:"rowid2"},
    {title: 'hentai', rowId:"rowid2"},
    {title: 'maid', rowId:"rowid2"},
    {title: 'masturbation', rowId:"rowid2"},
    {title: 'nsfw-waifu', rowId:"rowid2"},
    {title: 'nsfwjoke', rowId:"rowid2"},
    {title: 'nsfw-neko', rowId:"rowid2"},
    {title: 'pussy', rowId:"rowid2"},
    {title: 'trap', rowId:"rowid2"},
]
   const moderation = [
    {title: 'activate', rowId:"rowid1"},
    {title: 'deactivate', rowId:"rowid2"},
    {title: 'demote', rowId:"rowid2"},
    {title: 'groupchange', rowId:"rowid2"},
    {title: 'promote', rowId:"rowid2"},
    {title: 'purge', rowId:"rowid2"},
    {title: 'remove', rowId:"rowid2"},
    {title: 'close', rowId:"rowid2"},
    {title: 'open', rowId:"rowid2"},
    {title: 'revoke', rowId:"rowid2"},
    {title: 'ppcouple', rowId:"rowid2"}]
    
   const sections = [
                     {title: "fun 🚀", rows: fun },
                     {title: "general 🌀", rows: general },
                     {title: "media 🎵", rows: media },
                     {title: "misc 🧿", rows: misc },
                     {title: "moderation ⚖️", rows: moderation },
                     {title: "nsfw 🚫", rows: nsfw },
                     {title: "utils 👑", rows: utils },
                     {title: "weeb ✨", rows: weeb },
                     {title: "education 📚", rows: education },

]
const txt = '\n' +
    ' 🤍 Konichiwa senpai 🤍\n' +
    '╭─「(づ￣ 3￣)づ」\n' +
    `│⋊ ᴜꜱᴇʀ: *${M.sender.username}*\n` +
    '│⋊ ɴᴀᴍᴇ: I S H T A R\n' +
    '│⋊ ᴘʀᴇꜰɪx: #\n' +
    '│⋊ ᴏᴡɴᴇʀ: <#mod>\n' +
    '╰────────────┈平和                            \n' +
    '\n' +
    '🚀 *Fun*🚀\n' +
    '\n' +
    '• ```chess, quote, react, trigger, truth, chat, dare, fact, safejoke, ship, trivia```\n' +
    '\n' +
    '🌀 *General*🌀\n' +
    '\n' +
    '• ```admins, everyone, help, mods, profile, rank, xp, invitelink, delete```\n' +
    '\n' +
    '🎵 *Media*🎵\n' +
    '\n' +
    '• ```ig, play, spotify, take, ytaudio, ytsearch, ytvideo, google, lyrics, pinterest```\n' +
    '\n' +
    '🧿 *Misc* 🧿\n'   +
    '\n' +
    '• ```retrieve, hi, rin```\n' +
    '\n' +
    '⚖️ *Moderation* ⚖️\n' +
    '\n' +
    '• ```activate, deactivate, demote, groupchange, promote, purge, remove, close, open, revoke, ppcouple```\n' +
    '\n' +
    '🚫 *Nsfw*🚫\n' +
    '\n' +
    '• ```anal, blowjob, nsfwdoujin, nsfwloli, nsfwpaper, thighs, hentai, maid, masturbation, nsfw-waifu, nsfwjoke, nsfw-neko, pussy, trap```\n' +
    '\n' +
    '👑 *Utils*👑\n' +
    '\n' +
    '• ```blur, kitten, sticker, subred, getgif, screenshot, steal, translate, wikipedia```\n' +
    '\n' +
    '✨ *Weeb* ✨\n' +
    '\n' +
    '• ```anime, animequote, animechar, genshincharacter, husbando, loli, manga, pokemon, rpaper, vtuber, waifu, ameme, character, crossplay, haigusha, recommend, sauce, wallpaper```\n' +
    '\n' +
    '📚 *Educative*📚\n' +
    '\n' +
    '• ```calculator, covid, define, elements, github, urbandictionary, weather```\n' +
    '\n' +
    ' \n' +
    ' ──❅┈[ ISHTAR ᗷᗝ丅 ]┈❅───\n' +
    '┌────────────┈❅\n' +
    '│   🧨 I S H T A R\n'  +
    '│   ©️ Synthesized Infinity Botto\n' +
    '└────────────┈⁂\n' +
    '❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅\n'             +
    '🚀 *Note: Use #help <command_name> to view the command info*'
   const button:any = {
    buttonText: 'Help',
    description: txt,
    sections: sections,
    listType: 1
   }
this.client.sendMessage(M.from,button,MessageType.listMessage)
            // const keys = Object.keys(categories)
            // for (const key of keys)
            //     text += `${this.emojis[keys.indexOf(key)]} *${this.client.util.capitalize(key)}* ${this.emojis[keys.indexOf(key)]}\n\n• \`\`\`${categories[
            //         key
            //     ]
            //         .map((command) => command.config?.command)
            //         .join(', ')}\`\`\`\n\n`










                    //             return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
//             mimetype: Mimetype.gif,
//             caption: `${text} 
//  ──❅┈[ ISHTAR ᗷᗝ丅 ]┈❅───
// ┌────────────┈❅
// │   🧨 I S H T A R
// │   ©️ Synthesized Infinity Botto
// └────────────┈⁂
// ❅┈[𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲]┈❅
// 🎗 *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
//             )
//         }
    //     const key = parsedArgs.joined.toLowerCase()
    //     const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
    //     if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
    //     const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
    //     M.reply(
    //         `🎈 *Command:* ${this.client.util.capitalize(command.config?.command)}\n📉 *Status:* ${
    //             state ? 'Disabled' : 'Available'
    //         }\n⛩ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
    //             command.config.aliases
    //                 ? `\n♦️ *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
    //                 : ''
    //         }\n🎐 *Group Only:* ${this.client.util.capitalize(
    //             JSON.stringify(!command.config.dm ?? true)
    //         )}\n💎 *Usage:* ${command.config?.usage || ''}\n\n📒 *Description:* ${command.config?.description || ''}`
    //     )
    // }

    this.emojis = ['🚀', '🌀', '🎵', '🧿', '⚖️', '🚫','👑', '✨', '📚']
}}}
