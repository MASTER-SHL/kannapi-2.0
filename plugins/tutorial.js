let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: ī.am/𐏕Sђahuī─

Ketik di *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs


5) $git clone https://github.com/MASTER-SHL/shl_v1.git
6) $ls
7) $cd shl_v1

the * last * ..
Cuy installation :)
8) npm i
9) node index.js

_You can see the tutorial at_
*Our Youtube:*
userbot//https://youtu.be/31n_TyWYHhM
groupbot//https://youtu.be/v8Ug1rU91w4

`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

