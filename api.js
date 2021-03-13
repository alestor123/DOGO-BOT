var axios = require('axios');
module.exports = async msg => {
if(msg.content.startsWith('doggo')){
var data = await axios.get('https://dog.ceo/api/breeds/image/random')
msg.reply({embed: {
title:'Bow Bow',
url:data.data.message,
image: {url: data.data.message,},
}})
} 
}