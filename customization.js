const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  ARTISTS:[
      "Ranwan Liyanage original",
      "Amal Perera original",
      "Clarence Wijewardena original",
      "Sunil Edirisinghe original",
      "Victor Ratnayake original",
      "Nanda Malini original",
      "Sanuka Wickramasinghe original",
      "Kasun Kalhara original",
      "Uresha Ravihari original",
      "Dinesh Kanagaratnam original"
    ],
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `
✘◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⏰ Time Now : ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮🎀 ᴅᴇᴛᴇʟᴇꜱ 🎀❯━━━
┃⚖️ : ${pushname}
┃🔮 𝙱𝚘𝚝 : © 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 V${packageJson.version}
┃📁 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃🌀 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📡 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🙋𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔔 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃☘️ 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃🫧𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
        `.trim();
  },
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎟️ *QUEEN ANJU-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
💢 QUEEN ANJU-MD FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 QUEEN ANJU-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "./src/media/LOGOS/alive.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
🧚‍♂️⃟🩵 DARK NIOON ALIVE NOW 🧚‍♂️⃟🩵

✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 𝚚𝚞𝚎𝚎𝚗 𝗮𝗻𝗷𝘂! ✨
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
 

🎬 *${movieData.title}*
🌟 *Imdb Rating:* ${movieData.rating?.value || "𝙽/𝙰"} ★
📆 *First Aired:* ${movieData.metadata?.releaseDate || "𝙽/𝙰"}
🌍 *Country:* ${movieData.metadata?.country || "𝙽/𝙰"}
⏳ *Duration:* ${movieData.metadata?.runtime || "𝙽/𝙰"}
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
 

🎬 *${title}*
       
🌟 *Rating:* ${rating?.value || "𝙽/𝙰"} 
📅 *First Aired:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌍 *Country:* ${metadata?.country || "𝙽/𝙰"}
⏳ *Duration:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *Genres:* ${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"} 
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
 

📺 *Tv show:* ${movieResponse.episodeInfo?.title || "𝙽/𝙰"}
🎞️ *Episode title:* ${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}
📅 *Date:* ${movieResponse.episodeInfo?.date || "𝙽/𝙰"}
        `.trim();
  },
  SINHALASUBTVSHOW: function (episodeInfo, quality) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿

📺 *TV Show:* ${episodeInfo.title || "N/A"}
🎞️ *Episode:* ${episodeInfo.episodeTitle || "N/A"}
📅 *Date:* ${episodeInfo.date || "N/A"}
💾 *Quality:* ${quality.toUpperCase()}
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿

☘️ *Movie Title:* ${movieData.data.title}
📆 *First Aired:* ${movieData.data.releaseDate}
👁️‍🗨️ *Network:* ${movieData.data.network}
        `.trim();
  },
  SINHALASUBTVSHOWALLDL: function (movieData) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieData.data.showInfo.title}
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.data.showInfo.releaseDate}
🌐 *𝙽𝚎𝚝𝚠𝚘𝚛𝚔:* ${movieData.data.showInfo.network}
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${releaseDate}  
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:*  ${country}      
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿

✨ ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `


🎞️ *𝚃𝚒𝚝𝚕𝚎:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
🎬 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿
──────────────────
✨ *Title:* ${title}
⭐ *Rating:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
🎬 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿  
        
✨ ${movieData.title}  
⭐ Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿  

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating}
📅 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${year}
⏳ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${duration}
        `.trim();
  },
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎵 SONG DOWNLOADER
      
✅ Song Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Anju Bot  
❤️ Created by Janith Rashmika
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🎬 *Enjoy the video brought to you by Queen Anju Bot!* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎵 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Anju Bot  
❤️ Created by Janith Rashmika
        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by Queen Anju Bot!* 
        `.trim();
  },
  //=====================hiru news===========================================
  AUTONEWS: function (source, newsData, isGroup, groupMetadata, conf) {
    return `
📰 *『 𝑨𝑵𝑱𝑼 Xᴾᴿᴼ 𝑵𝑬𝑾𝑺 』* 🗞️

✨ *${source.toUpperCase()} News Update*

📌 *Title:* ${newsData.title}
📅 *Date:* ${newsData.date || "N/A"}

📝 *Description:*
${newsData.desc || "No details available"}
${isGroup ? `\n\n📨 *Shared In:* ${groupMetadata?.subject || "Group"}\n🛡️ *Admin:* ${conf.MNAME}\n` : ""}
🔗 *Read more:* ${newsData.url}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim();
  },
  AUTOMOVIE: function (title, rating, metadata, description, isGroup, groupMetadata, conf) {
    return `
 *『 𝑵𝑰𝑶𝑶𝑵 Xᴷᴵᴺᴳ 𝑭𝑰𝑳𝑴 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres?.map(g => `#${g}`).join(" • ") || "𝙽/𝙰"}

${isGroup ? `📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupMetadata?.subject || "Group"}\n🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}` : ""}

📜 *Description:*
${description || "— 𝙉𝙤 𝙙𝙚𝙩𝙖𝙞𝙡𝙨 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 —"}

━━━━━━━━━━━━━━━
${conf.FOOTER}`.trim();
  },
  AUTOSONG: function (foundSong, currentArtist, nextArtist, config, botNumber, isGroup, groupMetadata) {
    return `


━━━━━━━━━━━━━━━━━━━

☘️ *𝚃𝚒𝚝𝚕𝚎:* ${foundSong.title}
🕺 *𝙰𝚛𝚝𝚒𝚜𝚝:* ${currentArtist.replace(" original", "")}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${foundSong.timestamp || "𝙽/𝙰"}
👁️‍🗨️ *𝚅𝚒𝚎𝚠𝚜:* ${foundSong.views.toLocaleString() || "𝙽/𝙰"}
💁 *𝚄𝚙𝚕𝚘𝚊𝚍𝚎𝚍:* ${foundSong.ago || "𝙽/𝙰"}
💃 *𝙽𝚎𝚡𝚝 𝙰𝚛𝚝𝚒𝚜𝚝:* ${nextArtist}
━━━━━━━━━━━━━━━━━━━
🔗 *𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙻𝙸𝙽𝙺:* 
    ${foundSong.url}
    ${isGroup ? `



 ${groupMetadata?.subject || "Group"}
 ${config.MNAME}
 ${botNumber}

` : ""}
${config.FOOTER || "🎼 Enjoy the music! 🎧"}`.trim();
  },
  AIMODEPROMPT: function (userMessage) {
    return `
    You're an advanced AI assistant called "King Rashmika AI." You're professional, respectful, and knowledgeable, always ready to assist with expertise. 👑 Your goal is to provide helpful, accurate, and engaging responses while maintaining a courteous and professional tone.
    
    usermessage in {${userMessage}}`;
  }
};
