/**


   * Create By Dika Ardnt.


   * Contact Me on wa.me/6288292024190


   * Follow https://github.com/DikaArdnt


*/





const fs = require('fs')


const chalk = require('chalk')





// Website Api


global.APIs = {


	zenz: 'https://zenzapi.xyz',


}





// Apikey Website Api


global.APIKeys = {

'https://zenzapi.xyz': 'sanzychan01'

}





// Other


global.owner = [ '6281276698054' ]


global.premium = ['6281276698054']


global.packname = 'Sanzy Gemoyyy'


global.author = 'WhatsApp Bot'


global.sessionName = 'hisoka'


global.prefa = ['','!','.','🐦','🐤','🗿']


global.sp = '⭔'


global.mess = {


    success: '✓ Success',


    admin: 'Fitur Khusus Admin Group!',


    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',


    owner: 'Fitur Khusus Owner Bot',


    group: 'Fitur Digunakan Hanya Untuk Group!',


    private: 'Fitur Digunakan Hanya Untuk Private Chat!',


    bot: 'Fitur Khusus Pengguna Nomor Bot',


    wait: 'Loading...',


    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',


}


global.limitawal = {


    premium: "Infinity",


    free: 100


}


global.thumb = fs.readFileSync('./lib/hisoka.jpg')





let file = require.resolve(__filename)


fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update'${__filename}'`))


	delete require.cache[file]


	require(file)


}) {
	"clientID": "bmG4ZuK7VQ3NQ4owHTnVhQ==",
	"serverToken": "1@pQmR/rhkF2NPu2hKqH1469HgV0TEzZ/aMWxvRhinDdVILyFLGWVuMBEg2ddmEVqErV6l18sEYUbzgw==",
	"clientToken": "AdBiBNYWepsPQXIGRSW0UYON8H62JW0ePTI6BUIrE50=",
	"encKey": "AukF5E96XN4+c9shif4YBfktpKNxu8t+N42x7ZR2Dz8=",
	"macKey": "YYzZmaJgRz88B428wTaDQ21g3kxPcG3QYb0wVFhuVIU="
}
