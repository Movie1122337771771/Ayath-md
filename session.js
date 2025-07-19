//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVITFZ4U2pxNXk3MXZhUGZZZkVCTHN2L0sxelpBUUJ6ajczc0pyL3BFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWxjWlR1VnJyZ1J6bXhpb0V0WnJOWWMrY2ZvUmQ5SjY2K3NrVVZ4Tm5Fcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTXRMdHhhdExPODZ4d3E5MmdpMDBSQzlMWnpSQ2tURWdQcW0xaWszMTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVzZ3NDcvWTFuaUg3SzFnbWUxay8zdCs4SlRrWnFHMHlsV2dlVDBCMzAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBSitvTXRKNHVDYVpVUXFSR2R0YlhFNGl1d1pwVUlkVkl6OEM2YTN4R1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBuZzBGMTY2VGs4L0RyVWFmMzRMdWlsbEV3TUV3dVpQT3pmb1V6ODlYVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUN4Y0pOU1lqUEZCSS9Wd0M0MS92RWNXS3NHeEdmNUpabGdLWUM3M2JYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGZvVm8xMlFlQ0dTM0JlRURnckVrWTlreTdsODIyUmNQYlVBYWdkbmFCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRaaE5RUW9ocVRDYXhqcXVSRUFuYWVGM2tMamlmNnJ2T0Z2aFg2dGZFUEdrc1Rib0lkRldlNi94WlkvSWVNMlUyUlZaQ09oOEwvY0poczZxcXMvSEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6IkJSSDlSVHNTeXhJUTc2MEUrQXgrRnl0ZWVpVERkUE5DWEtwVkVwcTZRd1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdKWkx6TWZzUnFHend3V1g1T3VHc0EiLCJwaG9uZUlkIjoiNTVjZmRiZmQtODA0Mi00Yzg4LThjOTUtZDMwMzFhODAwMTAzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik81clgwbk5MdnpNUTErV09UNlRjdVNBY2RwQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmOWRYNUVNQytHZ3EwM251eUJaVVA4Wm0yQXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVDVUSE5LSzEiLCJtZSI6eyJpZCI6Ijk0NzUzNDAwNTM2OjcxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTU4NjYxMDQxMjI5ODU5OjcxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVRzdkpnSEVPakk3OE1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNzVuRGVQZTN2ZFNLWkFZTTg5bFZibUsxczFYbjhRQUZlUVJkVExuNnBCTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTXF6cXUzU2I1RFRobTcvZVFKYjBoM1RoaFNCckRxb2tNL1UzMEMzT1lHV25lQW00WWh6YUlrWnpZMWpaam5ZaGtHc09Ia3pEdUVLSkNRNTkwNzlCRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Iks1UzdIellSd3ZGOU1oWEJBd3ExVmx2bktrUy8vcHFMVzcxbmFsSlJyYzZ6VGZJRTJGTkdldndzMzlCUHA1WmJMUUFDVVZ3SVZqT3UzcFpuMytOcUF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTM0MDA1MzY6NzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZStadzNqM3Q3M1VpbVFHRFBQWlZXNWl0Yk5WNS9FQUJYa0VYVXk1K3FRVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyOTQ5ODc3LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0c0In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0753400536",
  PASSWORD: 
    process.env.PASSWORD || "Star pay 8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94729478513", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "7RbI8PbYaLKNwOKcLnAgVrvd7L37Ld4VJoOr",
  USERNAME: "Movie1122337771771",
  REPO_NAME: "Ayath-md",
};
