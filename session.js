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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0NnY2sxMTg3eENXTDBXRUxFNkdxYUo0Y3B4VU1GYkhybkg1alBJOXlXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRERGZ244TTVJVkNOcVZJeFZsNVVwUVI5MXhBbXlHb2FsQnh0N3pjQ2JUTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TXpxZllHazJPcFFyWENZdnQ5ZWo0MnNEbFY5Wm40NDFhL1N4enJaWWwwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3bEIrMkZoWkxHUTVYUldvK0EwL0gvM0pNRks4c2ZCVTdDaU90ZmEzQlE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBQXJpL0ZST3ZpREdBeXY3cEN4Vk5LM3RiOVdBdFZCMG5mU1RFQ3cvRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhBb1dSejhKd1FBUk5LMXBLUjFZdjhVWWxZWmZhUFR5NVAzclc5MytLVzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUpsRVpZeEprYmg0TlQ4TzFqN0l1VWpEVFIwWTJqL3hJNy9ZUUhxM28zUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWldRQ3BadTFvTHEzMVJISGxOT2lMTTJOVFFBb2tBN01zUnNqT1VCNVlqZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZmYVUrTk4yaUd0L05lMjJROGRnNTVRYlI5bzIzUFIzNE55L2tlWDBJNUQvTTZXQXZjOWZYR0ttSjB5UkEwTVdZZTFiVHFRMGFiN0lYaFpjbnNRVmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiJRZDBYZ2lXcDM1bnNjWWIxS0tlRU1UVnFoU2ozMmlDR2VqWmU0R3ROVDRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0dHZnOVhXM1N6R1ZpZnM1UEw5bXhRIiwicGhvbmVJZCI6IjJkOTdhYTdhLWJhMWQtNGY3Zi1hNTZkLTYyNjEzN2I5NmNmNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYNXVuNnhxYmNCR2YwQUNGUVd5NmRCU3BhWWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjN6OTZJTCttL1ZxVDBJOTV3ME5CQ3FPZmFNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdDSDhGUTZRIiwibWUiOnsiaWQiOiI5NDc1MzQwMDUzNjo2N0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1ODY2MTA0MTIyOTg1OTo2N0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lMc3ZKZ0hFTHo0aU1NR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijc1bkRlUGUzdmRTS1pBWU04OWxWYm1LMXMxWG44UUFGZVFSZFRMbjZwQk09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlcyUUJyU05NRE5wQVJ5c2RzMk4zbHRyMWY1UEVTZ3pQMExwOE1iaFhWaTkxd2FlcGQzL0RlM3ZrZVJxU0JzdzlvbWFBVW92U0NEbC95YXlyKytBbERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsREM5UnpWM0xZS1Z5Yit6S2dEWlU1TTZpN1Zrb2M3TGl3UVhHMlZtRit2MGxOeHRzakYzbHlIcXVpQmJXMk9LNElBU0dWZGJiV1ZyWHBlNS8yM2FnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUzNDAwNTM2OjY3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUrWnczajN0NzNVaW1RR0RQUFpWVzVpdGJOVjUvRUFCWGtFWFV5NStxUVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTI2ODQyNiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdHNSJ9",
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
