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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVsbEIvUlQrb0I0a3pWak5EOUg2RzFNdEZobjJUL00wdGhPKzVORjVuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9WSlhiQ0NnQlRIWXZRZWpaKzg2ajE5b2VTYmhac2tYbDhNTDJrNHUyZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS09sdnBoUTRnSG1DSmpLRXYrczdkalk5Qy9mU1VlWGFQTElTdG9OMGxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSU5YYWpaelVoenk5bGd4a01iZEJFMkprYXprd2lDY1V1ckg4ZzVPT2s4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVEdzAzdXVwbHBnNlpPbHlLQ1pIWC9FR09XdG1EQ1VFKy9qU3VITDNPa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhjTWVTd3VLUHNodm9NeHQzNGxpQmRaTGxzeWh5QlFRUmhEMGZZZ1BzVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEV3UTF6cUxWUXErY2xNODhxelRMdGpNYlNEWUhzamRxMmU1SjN0blFIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakxQbWFnTVZGem5ieThFczhvRXR6Nkg3d1h2OTBoZk54QmRkelU0YjNuWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRoWFJwdThUQ2txMTdhMlB2STc3c2I2SjhQQTFnMHgwK2lqVFRYbkNZbFhpS2VyRDVtY1gvZzgyS0VMZEZ6R2VPOFllNU50WFFoOE4wS2I3YjE2Y0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiI3UkZ6OG9qMjRiU0F1VzlrcXFqRUFrTlQvSDd1Wks4bzB0ak1DLzM1ZVRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHS1h0dm1JbFExT3RQNnVReDNFNjh3IiwicGhvbmVJZCI6ImQ5NmUxNzU4LTNkMjgtNGI5MS1hN2JkLTZjYjZkYjVkNTRkNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6clZpaUs1NDdVNzNTczVCVkNVVWQ2L3NBekE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1Q1UGdYaE5kNExzeGRHd0Q2c05TSDRETFYwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkzMlZGS0Y3IiwibWUiOnsiaWQiOiI5NDc1MzQwMDUzNjo2NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1ODY2MTA0MTIyOTg1OTo2NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lMc3ZKZ0hFUGIzZ01NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijc1bkRlUGUzdmRTS1pBWU04OWxWYm1LMXMxWG44UUFGZVFSZFRMbjZwQk09IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikkyc3hjYzFFeFZoV21QQnBwaEN5Y2lPc29SZUdZN05XWnEzZk9oa1l5em0zWlord0pRSkpSc0pCMVJnZmJWVnhwbEhKV2RzNVhhZEZ2WjJPYmtNc0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYSkxpb3RHTG41RW51V0xwNlN6TlJCV1JNNi9XNnI4cWhxQy9yUnlWQTFjaitTREVVTTYwYStuQnRoR004UG5aNFNoODRZVXZkTkl5QnAyS0hlaldCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUzNDAwNTM2OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUrWnczajN0NzNVaW1RR0RQUFpWVzVpdGJOVjUvRUFCWGtFWFV5NStxUVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTEzNzI4MywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdHNSJ9",
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
