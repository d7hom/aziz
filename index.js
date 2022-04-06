
const simplydjs = require('simply-djs')
const {MessageEmbed, MessageButton} = require('discord.js')
const { Client, Intents, Collection } = require('discord.js');
const { TOKEN,PREFIX} = require('./config.json');
const fs = require('fs')


const client = new Client({
  partials: ["CHANNEL"],
 intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    
],

});

client.commands = new Collection();
client.events = new Collection();


['commands',"events" ].forEach(handler => {

    require(`./handlers/${handler}`)(client);

})

client.on('ready', () => {
    console.log('the bot is ready')
})





 client.on('messageCreate', message => {

     const args = message.content.trim().split(/ +/g);
     const cmd = args[0].slice(PREFIX.length).toLowerCase();

 })










 client.on('messageCreate', message => {

  if (message.content === 'hey') {
      message.reply('hello').then(m => {
          setTimeout(() => m.delete(), 5000) 
         
      });
          }
  
  
  
  
  
  
  
  
      })











client.on('messageCreate', message => {

  if (message.content === 'برب') {
      message.reply('تيت بس لا تطول').then(m => {
          setTimeout(() => m.delete(), 5000) 
          
      });
          }
  
  
  
  
  
  
  
  
      })







client.on('messageCreate', message => {

  if (message.content === 'السلام عليكم') {
      message.reply('وعليكم السلام').then(m => {
          setTimeout(() => m.delete(), 5000) 
          
      });
          }
  
  
  
  
  
  
  
  
      })














      client.on('messageCreate', message => {

        if (message.content === 'يا ولدي') {
            message.reply('هلا ابوي').then(m => {
                setTimeout(() => m.delete(), 5000) 
               
            });
                }
        
        
        
        
        
        
        
        
            })
      















      client.on('messageCreate', message => {

        if (message.content === 'سلام عليكم') {
            message.reply('وعليكم السلام').then(m => {
                setTimeout(() => m.delete(), 5000) 
                
            });
                }
        
        
        
        
        
        
        
        
            })



          







            client.on('messageCreate', message => {

              if (message.content === 'صباح الخير') {
                  message.reply('https://cdn.discordapp.com/attachments/797918794239574077/952894915967324210/VID_21230219_122537_283.mp4').then(m => {
                      
                       
                  });
                      }
              


                    })








            client.on('messageCreate', message => {

              if (message.content === 'باك') {
                  message.reply(" ولكم منور/ه <a:08hyper:912913026070503485>").then(m => {
                      setTimeout(() => m.delete(), 5000) 
                       
                  });
                      }
              
              
              
              
              
              
              
              
                  })
      






                  client.on('messageCreate', message => {

                    if (message.content === 'بومب') {
                        message.reply('https://cdn.discordapp.com/attachments/909510131329405053/929869408745177088/0video0_11.mp4').then(m => {
                            
                             
                        });
                            }
                    
                    
                    
                    
                    
                    
                    
                    
                        })







                        client.on('messageCreate', message => {

                          if (message.content === 'قم صب القهوة يا ورع ') {
                              message.reply(' ابشر').then(m => {
                                
                                  
                              });
                                  }
                          
                          
                          
                          
                          
                          
                          
                          
                              })














client.on('messageCreate', message => {

if (message.content === 'احبك') {
    message.reply('مي تو').then(m => {
        setTimeout(() => m.delete(), 5000) 
       
    });
        }








    })




    client.on("ready", () => {(`(-) PREFIX `)//غير الحالة الي تبيها
      });


      client.on('messageCreate', message => {
        if (message.content.startsWith("discord.gg")){
          message.delete()
          message.channel.send("**Links Are Not Allowed :x:**")
        }
      })








    
  


 







     client.on("messageCreate", Psycho => { 
        if(Psycho.content === `<@!${client.user.id}>`) { 
         Psycho.reply({ content: ` > **Hi , My Prefix In Server Is ${PREFIX}**`}) 
          }
       });
    




















      client.on("messageCreate", message => {
        if (message.channel.id != "905537536380780604") return;///!  NPG#8502
        if(message.author.id === client.user.id) return
        message.channel.send(`**نشكرك على التقييم 🤍 
        [ ||<@${message.author.id}>|| ]**`);///!  NPG#8502
      ///!  NPG#8502
      });












client.on('guildMemberAdd', mem => {
        
  
  let embed = new MessageEmbed()
.setTitle("*Welcome !*")
.setColor("LUMINOUS_VIVID_PINK")
.setDescription(`<@${mem.user.id}> has joined the server! be sure to read the <#797557207617110016>\n\n❤️❤️❤️❤️❤️❤️❤️❤️ `)
.setThumbnail(mem.user.avatarURL({ dynamic: true }))
mem.send({embeds: [embed]})
})
















client.on('messageCreate', SLK => {
  if (SLK.content.startsWith(PREFIX + "hide")) {
    let args = SLK.content.split(" ")
      if (!SLK.member.permissions.has("MANAGE_CHANNELS")) return;
      let everyone = SLK.guild.
        roles.cache.find(m => m.name === '@everyone');

    let channel = SLK.mentions.channels.first() || SLK.guild.channels.cache.get(args[1]) || SLK.channel;

      channel.permissionOverwrites.edit(everyone, {
          VIEW_CHANNEL: false,
      })

    let embed = new MessageEmbed()
    .setTitle(`Channel Hide`)
    .setDescription(`Done hide ${channel}`)
    SLK.channel.send({embeds : [embed]})
  }
});




client.on('messageCreate', SLK => {
  if (SLK.content.startsWith(PREFIX + "show")) {
    let args = SLK.content.split(" ")
      if (!SLK.member.permissions.has("MANAGE_CHANNELS")) return;
      let everyone = SLK.guild.
        roles.cache.find(m => m.name === '@everyone');

    let channel = SLK.mentions.channels.first() || SLK.guild.channels.cache.get(args[1]) || SLK.channel;

      channel.permissionOverwrites.edit(everyone, {
          VIEW_CHANNEL: true,
      })

    let embed = new MessageEmbed()
    .setTitle(`Channel show`)
    .setDescription(`Done show ${channel}`)
    SLK.channel.send({embeds : [embed]})
  }
});







client.on("messageCreate" , message => {
  const random = [
   "‎لو قالوا لك  تناول صنف واحد فقط من الطعام لمدة شهر . ‏وش بيكون اختيارك ؟",
   "‎- كيف قضيت نهارك؟",
   "‎- أكثر أوقاتك تسهر أم حسب المزاج؟💭",
   "‎هات صورة تحس إنك ابدعت بتصويرها.",
   "‎ كلمة تود أن تصل للعالم أجمع؟",
   "‎ - كم بلد زرت في حياتك للآن؟",
   "‎ تطبيق تطالب بحذفه من الوجود؟",
   "‎هواتفنا التي تلتصق بأيادينا ولاتُفارقنا تمنحنا كُل شيء وتسلبنا كُل شيءٍ ؟", 
   "‎ ؟ نسبة الجوع عندك من 10 في هذه الساعة؟",
   "‎  ما الذي يُبهرك دائمًا؟",
   "‎ - ما الذي يحدث لحلم تأجل تحقيقه؟",
   "‎؟- أمر تحبه لمْ تقم به منذ فترة",
   "‎- رقمك المفضّل دائمًا ؟",
   "‎ - هل سبق وأعطيت شخص أكبر من حجمه ثم ندمت؟ ",
   "‎- أجمل بلاد العالم ؟",
   "‎ ؟ جهزت شيء ليوم الأم؟ ❤️",
   "‎ ؟أكثر المواضيع التي تستهويك بالحديث عنها أو مجاراة من يتحدث بها" ,
   "‎ غالبًا، ما الفكرة التي تُؤخذ عنك في بدايات اللقاء؟",
   "‎ غداؤك لليوم؟ ",
   "‎ ؟  إيموجي يعبّر عن مزاجك هذا الصباح" ,
   "‎تقييمك لسهرتك من 10؟ ؟",
   "‎؟ أغلى اسم على قلبك",
   "‎أجمل شعور في الكون؟",
   "‎أجمل شيء حصل معك هذا الأسبوع ؟",
   "‎صفة في مجتمعك تود زوالها ؟",
   "‎لديك ذلك الشخص الذي يعوضك عن ألف شخص",
   "‎ آخر شيء قمت بنسخه ؟",
   "‎تفوز في العناد أم البرود ؟",
   "‎صفة فيك تنرفز أهلك.",
   "‎شيء أسعدك هذا اليوم ؟",
   "‎سيارة أحلامك ؟",
   "‎ لو كُنت إحدى ردات الفعل، ماذا تُحب أن تكون ؟",
   "‎ضع صورة للمنظر المفضل لديك ؟",
   "‎أين تجد الحياة؟",
   "‎نسبة النعاس عندك حاليًا",
   "‎هل تحتفظ بأشياء قيّمة في حياتك ؟.",
   "‎شيء مستحيل يتغير فيك ؟",
   "‎هل تعتقد أنك مفيد في هذا الكوكب ؟",
   "‎كلمة لمن يكرهك دون سبب ؟",
   "‎أكلة مستحيل أن تأكلها ؟.",
   "‎لو جلست معك لأسبوع، ماذا سأتعلم منك ؟.",
   "‎تتفق أن الأكل يمحو الأحزان؟ ؟.",
   "‎صورة لها ذكرى لا تنساه ؟",
   "‎كم وزنك ؟",
   "‎ أشياء تكون سعيد وانت تدفع نقودك عليها ؟.",
   "‎ماذا لو انتهى الانترنت كليًا ؟",
   "‎شيء جميل حدث معك مؤخرًا ؟",
   "‎أول شيء يخطر في بالك إذا سمعت اسم بشرى ؟",
   "‎متى يتغير الشخص ؟",
   "‎قناعة اكتسبتها من تويتر ؟",
   "‎ما هي الهدية التي تتمنى أن تنتظرك يومًا أمام باب منزلك ؟",
   "‎جربت تسكن وحدك ؟",
   "‎ما هي الهدية التي تتمنى أن تنتظرك يومًا أمام باب منزلك ؟",
   "‎كلمة توصف حالتك  ؟",
   "‎كتاب تقرأه هذه الأيام ؟",
   "‎مدينة تتمنى تعيش وتستقر فيها طول عمرك ؟",
   "‎طبع في الشخص لا يمكنك تحمله ؟",
   "‎ممكن في يوم من الأيام تصبح شخص نباتي ؟.",
   "‎كيف تعرف أن الشخص قوي فعلا أم يتظاهر بالقوة ؟",
   "‎النصيحة التي من المفترض أن تضعها في جيبك وتحتفظ  بها لحد الموت ؟",
   "‎قبل ساعة ايش كنت تسوي ؟",
   "‎كلمة تقولها للي ببالك ؟",
   "‎أكثر شيء يحسن مزاجك ؟",
   "‎آخر مرة وصلتك رسالة جميلة في الخاص ؟",
   "‎كيف تتصرف مع شخص أطال النظر إليك ؟",
   "‎أكتب رسالة مستحيل ترسلها للشخص المقصود ؟",
   "‎هل فكرت في افتتاح قناة على اليوتيوب أو تيك توك؟",
   "‎من النوع اللي تعترف بسرعه ولا تجحد ؟",
   "‎ معروف عني اني ماهر في …. ؟",
   "‎أجمل بلد زرته على الإطلاق",
   "‎لو سألوك، كم تعطي تقييما للمحتوى على التيك توك من 10؟.",
   "‎طفل قال لك، انصحني أي شيء أستفيد منه لما أصير في عمرك ؟",
   "‎أشياء من الماضي تحن لها ؟",
   "‎هل صحيح أن العمر مجرد رقم ؟",
   "‎مدينتك اللي ولدت فيها ؟",
   "‎عندك شخص مستحيل يمر يوم وما تكلمه ؟",
   "‎كيف تأخذ قهوتك ؟",
   "‎كيف كان أسبوعك ؟",
   "‎مدينة تفضّل السياحة فيها عن غيرها ؟",
   "حط @منشن لشخص قله احبك",
   "‎ كيف هي أحوال قلبك ؟",
   "‎ذكرى جميلة لا تنساه ؟",
   "‎لو أتيحت لك تجربة القفز المظلي مجانا هل ستجربها ؟",
   "‎رسالة سريعة إلى شريك حياتك المستقبلي/ة ؟",
   "‎اسم بنت رائع وقريب لقلبك ؟",
   "‎بلد تشتاق لزيارته ؟",
   "‎كيف تجهيزاتك لاستقبال الشهر الفضيل ؟",
   "‎ما أهم درس تعلمته في حياتك ؟",
   "‎ ألذ شاي جربته؟",
   "‎في الهدايا، هل تفضل إهداء مبلغ مالي عادة أم هدايا اعتيادية ؟",
   "‎ فرضا طائرتك ستقلع بعد قليل.. منشن شخص واحد فقط يشاركك الرحلة ؟",
   "‎شيء نفسك يرجع ؟",
   "‎افضل لاعب في العالم ؟",
   "‎وش تشجع؟",
   "‎ميسي ولا رونالدو ؟.",
   "‎لو خيروك تجلس طول حياتك برا ولافي السعوديه ؟",
   "‎تقيمك لي (عزيز) ؟",
   "تقييمك للديسكورد الفترة ذي ؟"

   ] 

var result = random[Math.floor(Math.random() * random.length)];

if(message.content == PREFIX + "كت") {
let embed = new MessageEmbed()
.setAuthor(`${message.guild.name}` , message.guild.iconURL({dynamic:true}))
.setTitle("Events")
.setDescription(result)
.setFooter(message.author.username , message.author.avatarURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setTimestamp()
.setColor("BLUE") 
message.delete()
message.channel.send({embeds: [embed]})
}
});


























client.on('guildMemberAdd', SLK => {
  if (SLK.guild.id === "797552609334132747")//Server Id
  {
  const role = SLK.guild.roles.cache.find(rol => rol.id == '797857258847469609');//role id 
  SLK.roles.add(role);
  }
  });






  client.on("messageCreate", message => {
    if(message.author.bot || !message.content.startsWith(PREFIX)) return;
    const args = message.content.slice(PREFIX.length).split(/ +/),
    cmd = args.shift().toLowerCase()
    if(cmd == "av"){
        const { MessageEmbed } = require('discord.js');
        const moment = require('moment');
//-------------------
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.get(message.author.id)
        let author = `${target.user.tag}`
        let avatar = `${target.user.avatarURL({dynamic:true, size:1024})}` 
        if(args[0] == "server"){
            author = `${message.guild.name}`
            avatar = `${message.guild.iconURL({dynamic:true, size:1024})}`
        } else if(args[0] && args[0] != `<@!${target.id}>` && args[0] != target.id)
        return message.reply({embeds:[{
            description:`:rolling_eyes: - ${message.author.username}, I can't find **${args[0]}**!`,
            color: "#dd153c"
        }], allowedMentions:[{repliedUser:false}]})
        let avatarEmbed = new MessageEmbed()
        .setAuthor({name: author, iconURL: avatar})
        .setColor('RANDOM')
        .setTitle("Avatar Link").setURL(avatar)
        .setImage(avatar).setFooter(`Requested by ${message.author.tag}`, avatar)
        message.reply({embeds:[avatarEmbed], allowedMentions:[{repliedUser:false}]}).catch(console.log)
//-------------------
        }
});










client.on('messageCreate', message => {
  if(message.author.bot || !message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).split(/ +/),
  cmd = args.shift().toLowerCase()
  if(cmd == "botinfo"){
      let Embed = new MessageEmbed()
      .setAuthor({name: client.user.username, avatarURL: client.user.avatarURL({ dynamic: true, size: 2048})})
      .setTitle(`Bot information`)
      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setFields(
      { name: `Name 📛`, value: `${client.user.tag}`, inline: true},
      { name: `Id 🆔`, value: `${client.user.id}`, inline: true},
      { name: `Owned by 👑`, value: `<@!923249789217431583>`, inline: true},
      { name: `Servers 🈂`, value: `${client.guilds.cache.size}`, inline: true},
      { name: `Users 👥`, value: `${client.users.cache.size}`, inline: true},
      { name: `Created On 📆`, value: `<t:${parseInt(client.user.createdTimestamp/ 1000)}:R>`, inline: true},
      { name: `Ping 🏓`, value: `${client.ws.ping}`, inline: true},
      )
      .setColor(`RANDOM`)
      .setFooter({text: client.user.tag, value: client.user.displayAvatarURL({ dynamic: true, size: 2048})})
      return message.reply({ embeds: [Embed], allowedMentions:[{repliedUser:false}]})
  }
})










client.on('ready', ()=> {
  client.user.setStatus('idle')///dnd///idle///invisible////online
  client.user.setActivity('.21 help') 
})















client.on('messageCreate', messageCreate =>{
  if(messageCreate.content === PREFIX +"hide all"){
  if(messageCreate.author.bot || !messageCreate.guild) return;
  if(!messageCreate.member.permissions.has('MANAGE_CHANNELS')) 
  return messageCreate.reply(`**You don't have permissions**`);
  let everyone = messageCreate.guild.roles.cache.find(hyper => hyper.name === '@everyone');
      messageCreate.guild.channels.cache.forEach((channel) => {
          channel.permissionOverwrites.set(everyone, {VIEW_CHANNEL: false}).then(() => {
    });
  })
  messageCreate.channel.send(`done ✅`)
  }
});

client.on('messageCreate', messageCreate =>{
  if(messageCreate.content === PREFIX +"show all"){
  if(messageCreate.author.bot || !messageCreate.guild) return;
  if(!messageCreate.member.permissions.has('MANAGE_CHANNELS')) 
  return messageCreate.reply(`**You don't have permissions **`);
  let everyone = messageCreate.guild.roles.cache.find(hyper => hyper.name === '@everyone');
      messageCreate.guild.channels.cache.forEach((channel) => {
          channel.permissionOverwrites.set(everyone, {VIEW_CHANNEL: true}).then(() => {
    });
  })
  messageCreate.channel.send(`done ✅`)
  }
}); 













var moment = require("moment");
client.on(`messageCreate`, message => {
    let args = message.content.split(" ");
    if (args[0] === PREFIX + "serverinfo") {
        if (message.author.bot) return message.reply(`this command is for only users.`);
        if (!message.channel.guild) return message.channel.send('this command is for only guilds.');
        const text = message.guild.channels.cache.filter(r => r.type === "GUILD_TEXT").size;
        const voice = message.guild.channels.cache.filter(r => r.type === "GUILD_VOICE").size;
        const chs = message.guild.channels.cache.size
 
        const roles = message.guild.roles.cache.size;
        const online = message.guild.members.cache.filter(m =>
            m.presence?.status === 'online'
        ).size;
 
        const embed = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setColor('BLACK')
            .addFields({
                name: `🆔 Server ID`,
                value: `${message.guild.id}`,
                inline: true
 
            }, {
                name: `📆 Created On`,
                value: moment(message.guild.createdAt).format("YYYY/MM/DD, HH:mm") + '\n' + moment(message.guild.createdAt, "YYYYMMDD").fromNow(),
                inline: true
            }, {
                name: `👑 Owner By`,
                value: `<@${message.guild.ownerId}>`,
                inline: true
 
            }, {
                name: `👥 Members (${message.guild.memberCount})`,
                value: `**${online}** Online\n**${message.guild.premiumSubscriptionCount}** Boosts ✨`,
                inline: true
            }, {
                name: `💬 Channels (${chs})`,
                value: `**${text}** Text | **${voice}** Voice`,
                inline: true
            }, {
                name: `🌍 Others`,
                value: `**Verification Level:** ${message.guild.mfaLevel}`,
                inline: true
            }, {
                name: `🔐 Roles (${roles})`,
                value: `To see a list with all roles use #roles`,
                inline: true
            }, )
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
        message.channel.send({embeds: [embed]})
    }
});





const akinator = require("discord.js-akinator");//npm i discord.js-akinator
const ban = require('./Commands/moderation/ban');
client.on("messageCreate", async message => {
    if(message.content.startsWith(PREFIX+`akinator`)) {
        akinator(message, {
            language: 'ar',
            childMode: false,
            gameType: "character",
            useButtons: true
        });
    }
});










client.on("messageCreate", async msg => {
  let args = msg.content.slice(PREFIX.length).split(/ +/);
  function reply(content){msg.reply({content:content, allowedMentions: {repliedUser:false}})}
  if(args[0].toLowerCase() == "purge"){
      if(!msg.member.permissions.has("MANAGE_MESSAGES")) return reply("> You don't have the permissions to clear");
      let amount = Number(args[1]) || 99; if(amount > 99) return reply("> You can't clear more than 99 messages")
      if(amount < 1) return reply("> You can't clear less than 1 message")
      if(args[1] && isNaN(args[1])) return reply("> Please type numbers or letters not symbols");
      try { await msg.channel.bulkDelete(amount+1).then(msgs => {
              msg.channel.send(`> Cleared ${msgs.size-1} messages`).then(m => setTimeout(() => m.delete(), 3000))
          })
      } catch {console.error}
  }
});






const msg_delete = "856598759767801887"//ايدي روم الحذف
const msg_edit = "856598759767801887"//ايدي روم تعديل الرسائل
const channel_create = "800572055921098773"//ايدي روم صنع التشانل
const channel_delete = "800572055921098773"//ايدي روم حذف التشانل
const role_create = "800572055921098773"//ايدي روم صنع الرول
const role_delete = "800572055921098773"//ايدي روم حذف الرول


client.on("messageDelete", message => {
if(!message.guild) return;
if (message.deleted == true){
if (message.content.length == 0) return;
let channel = client.channels.cache.get(msg_delete)
let embed = new MessageEmbed()
.setTitle('Messgae Deleted')
.setThumbnail(message.author.avatarURL())
.setDescription(`Messgae : \`\`\`${message.content}\`\`\`\nBy : <@${message.author.id}>\nChannel ${message.channel}`)
.setTimestamp()
.setColor(`BLUE`)
channel.send({embeds: [embed]})
}
})


client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
let channel = client.channels.cache.get(msg_edit)
let embed = new MessageEmbed()
.setTitle('Messgae Edit')
.setThumbnail(oldMessage.author.avatarURL())
.setDescription(`Old Message:\n\`\`\`${oldMessage}\`\`\`\nNew Message:\`\`\`${newMessage}\`\`\`\nBy : <@${oldMessage.author.id}>\nChannel${oldMessage.channel} `)
.setTimestamp()
.setColor(`BLUE`)
channel.send({embeds: [embed]})
})






client.on("roleCreate", role => {
role.guild.fetchAuditLogs().then(logs => { 
var userID = logs.entries.first().executor.id; 
let channel = client.channels.cache.get(role_create)
let embed = new MessageEmbed()
.setTitle('Role Create')
.setDescription(`Role Name: \n\`\`\`${role.name}\`\`\``)
.setTimestamp()
.setColor(`BLUE`)
channel.send({embeds: [embed]})
})
})


client.on("roleDelete", role => {
role.guild.fetchAuditLogs().then(logs => { 
var userID = logs.entries.first().executor.id; 
let channel = client.channels.cache.get(role_delete)
let embed = new MessageEmbed()
.setTitle('Role Delete')
.setDescription(`Role Name: \n\`\`\`${role.name}\`\`\``)
.setTimestamp()
.setColor(`BLUE`)
channel.send({embeds: [embed]})
})
})



client.on('messageCreate', message => {

  let fi = PREFIX + "addRole"

if(!message.content.startsWith(fi) ) return; 

    if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("يا عمي توكل ماعندك بيرمشن وجاي تكلمني")

let user = message.mentions.members.first();
let role = message.mentions.roles.first();      
if(!user) return message.reply("يا عمنا منشن الشخص يا عمنا")
if(!role) return message.reply(" يا ابو الشيوخ لا تجلطني منشن الرتبه ")
let role2 = message.guild.roles.cache.find(r => r == role)
user.roles.add(role2)
message.reply(`تم يا شيخنا الكبير اديته الرتبه ذي :${role} لعيونك ولعيون : ${user}`)
  
  })

  client.on('voiceStateUpdate', (voiceOld , voiceNew) => {

    let logrom = voiceOld.guild.channels.cache.get("800572055921098773")

try{
    let embed = new MessageEmbed()
    
    .setTitle(`الشيخ هذا <@${voiceOld.id}> خش هذا الروم:${voiceNew.channel.name}`)
    
    logrom.send({embeds: [embed]})
    } catch (error ){
return;
}
    })

    client.on("messageCreate", message => {
      if (message.channel.id != "797905695528976426") return;///!  NPG#8502
      if(message.author.id === client.user.id) return
      message.channel.send(`**Thanks For Boost 🤍 
      [ ||<@${message.author.id}>|| ]**`);///!  NPG#8502
    ///!  NPG#8502
    });





  




    client.on('messageCreate', mizan => {
      if(mizan.author.bot) return
      if(mizan.content.includes('كس امك')) {
          mizan.delete()
          mizan.channel.send(` ممنوع السب<@${mizan.author.id}>`)
        .then((mizan) => {
        setTimeout(() => {
          mizan.delete()
  
        }, 100)
      })
    }
        
  });


  client.on('messageCreate', mochakis => {
    if(mochakis.content.startsWith(PREFIX + "msg")){
            mochakis.channel.messages.fetch().then(messages => {
                 const msgs = messages.filter(m => m.author.id === mochakis.author.id)    
             mochakis.reply(` عدد رسائلك في هذا الروم: ${msgs.size}`)})
               }
    });





    client.on('messageCreate', russi => {
      if (russi.content.startsWith(PREFIX + "شباب البومب")) {
        let member = russi.mentions.users.first();
        if (!member) return russi.reply("** اتحداك بس منشن واحد اركد فديتك **")
        let sbs = ['https://media.discordapp.net/attachments/919949534904344576/931952605096181960/1000_dd67095ad2.jpg?width=388&height=473','https://media.discordapp.net/attachments/919949534904344576/931952366243155969/1577518609IFGPr.jpg','https://media.discordapp.net/attachments/919949534904344576/931952366050234388/unnamed.jpg?width=473&height=473'
    
    
          ];
        
    
        let embed = new MessageEmbed()
          .setTitle("**شباب البومب**")
          .setColor("BROWN")
          .setImage(`https://cdn.discordapp.com/attachments/905922794175488060/952290443431923722/maxresdefault.jpg`)
          .setFooter(`**ترا عطاك شباب البومب اتحداك يا كبير انت** ${russi.author.username}`)
          russi.channel.send({embeds: [embed]})    
      }
    })
    







    client.on('messageCreate', russi => {
      if (russi.content.startsWith(PREFIX + "توكل")) {
       
        let sbs = ['https://cdn.discordapp.com/attachments/905922794175488060/952294769944588368/ebdccd157a4f1e5c57df71125a111cff.jpg','https://cdn.discordapp.com/attachments/905922794175488060/952294748738158633/9a6377a7c1b4484aaa69ce4dfb5984d5.jpg','https://cdn.discordapp.com/attachments/905922794175488060/952294748507504700/7cbbe4bf3532d4355183d7ca75ea2e40.jpg'
    
    
          ];
        
    
        let embed = new MessageEmbed()
         
          .setColor("BROWN")
          .setImage(`https://cdn.discordapp.com/attachments/905922794175488060/952294769944588368/ebdccd157a4f1e5c57df71125a111cff.jpg`)
       
          russi.channel.send({embeds: [embed]})    
      }
    })
    



  

    client.on('messageCreate' , message =>{
      if(message.author.bot || !message.content.startsWith(PREFIX)) return;
      const args = message.content.slice(PREFIX.length).split(/ +/),
      cmd = args.shift().toLowerCase()
      if(cmd == "users") {
        let target = message.mentions.users.first() || message.author;
        let member = message.guild.members.cache.get(target.id);
        let user = message.mentions.users.first() || message.author;
     
        const moment = require('moment'); // npm i moment
        let Embed = new MessageEmbed()
            .setColor('RANDOM')
            .setFields(
                { name: 'Created At :', value: `${moment(user.createdAt).fromNow()}`, inline: true },
                { name: 'Joined At :', value: `${moment(member.joinedAt).fromNow()}`, inline: true },
            )
            .setThumbnail(member.user.avatarURL({ dynamic: true }))
            .setFooter(`${member.user.tag}`, member.user.avatarURL({ dynamic: true }))
            message.reply({embeds:[Embed], allowedMentions:[{repliedUser:false}]})
      }
    
      })









      client.on('messageCreate',  message =>{


        let k7l = PREFIX + 'messi'
        
        if(!message.content.startsWith(k7l))return;
      
          
          if(!message.member.permissions.has('MANAGE_NICKNAMES')) return message.reply(`ماعنك بيرمشن`)
      
          let member = message.mentions.members.first();
          let nikc =  message.content.split(" ").slice('2').join(" ");
      
      
      
          if(!member) return message.reply('منشن الشخص')
          if(!nikc) return message.reply('اكتب الاسم الي تبيه')
      
          
          message.reply(`دن غيرت اسم ${member} الى **${nikc}**`).then(m =>{
            member.setNickname(nikc)
          })
      
      
      
      
      
      })
      



      client.on('messageCreate', async message => {
        if (message.content.startsWith(PREFIX + "rest")) {
            
      
          if(!message.member.permissions.has('KICK_MEMBERS')) return message.reply(`يبوي دز امها ما عندك بيرمشن ويسولف روح لا تضيع وقتي دز امها يا حلو`)
      
            let k7l2 = await message.channel.send({embeds: [
              new MessageEmbed()
            .setAuthor({name : client.user.username, iconURL: client.user.avatarURL({dynamic: true})})
      
            .setDescription(`** جار اعادة التشغيل...... **`)
      
            .setFooter({text: client.user.username, iconURL: client.user.avatarURL({dynamic: true})})
            ]})
      
            client.destroy()
      
      
            client.login(TOKEN).then(async msg => {console.log(`تمت اعادة تشغبل البوت !!\n من قبل : ${message.author.username} | ID : ${message.author.id}`), k7l2.edit({embeds : [
              new MessageEmbed()
              .setAuthor({name : client.user.username, iconURL: client.user.avatarURL({dynamic: true})})
              .setTitle(`**تمت اعادة تشغيل البوت**`)
              .setFooter({text: client.user.username, iconURL: client.user.avatarURL({dynamic: true})})
             ]})
      
             
             
            })
      
            
      
      
        }
      })
      


      



      const k7ll = [
        `https://cdn.discordapp.com/attachments/948194718905421884/955491671112552478/3223879-65994848-2560-1440.jpg`,
        `https://cdn.discordapp.com/attachments/948194718905421884/955491670915416094/download.jpg`,
        `https://cdn.discordapp.com/attachments/948194718905421884/955491670525378590/David_Villa.jpg`,
        `https://cdn.discordapp.com/attachments/948194718905421884/955491670181441586/download_1.jpg`,
        `https://cdn.discordapp.com/attachments/948194718905421884/955491669610991736/download_2.jpg`,
        `https://cdn.discordapp.com/attachments/948194718905421884/955491669250289774/download_3.jpg`,
     
        ]
        
       client.on('messageCreate', k7l5 => {
        
        
        if(k7l5.content.startsWith('messi')) {
        
        
        
        const k7l1 = k7ll[Math.floor(Math.random() * k7ll.length)];
      
        k7l5.reply(`${k7l1}`)
        
        
        } 
        })
        
      
       
        
      
        var { inviteTracker } = require("discord-inviter") // npm i discord-inviter


        client.on("messageCreate", async (message) => {
          // get member invites count
          if (message.content == "invites") {
            var invite = await inviteTracker.getMemberInvites(message.member);
            message.channel.send(
              `${message.author.tag} has ${invite.count} invite(s).`
            );
            // get server top invites
          } else if (message.content == "top-invites") {
            var top = await inviteTracker.getTopInvites(message.guild);
            message.channel.send(
              top
                .map((i, n) => `\`#${n + 1}\`- **${i.user.tag}** has __${i.count}__`)
                .join("\n")
            );
          }
        });

       




        let replies = 
        [
          "***وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِنْ عِنْدِ اللَّهِ خَيْرٌ ۖ لَوْ كَانُوا يَعْلَمُونَ}.[1]***",
        "***وَلَوْ أَنَّهُمْ آمَنُوا وَاتَّقَوْا لَمَثُوبَةٌ مِنْ عِنْدِ اللَّهِ خَيْرٌ ۖ لَوْ كَانُوا يَعْلَمُونَ}.[1]***",
        "***{وَقُلِ الْحَمْدُ لِلَّهِ الَّذِي لَمْ يَتَّخِذْ وَلَدًا وَلَمْ يَكُنْ لَهُ شَرِيكٌ فِي الْمُلْكِ وَلَمْ يَكُنْ لَهُ وَلِيٌّ مِنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيرًا}.[3]***",
        "***فَاصْبِرْ كَمَا صَبَرَ أُولُو الْعَزْمِ مِنَ الرُّسُلِ وَلَا تَسْتَعْجِل لَّهُمْ ۚ}.[6]***",
        "***{فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تَكُن كَصَاحِبِ الْحُوتِ إِذْ نَادَىٰ وَهُوَ مَكْظُومٌ}.[7]***",
        "***{فَاصْبِرْ صَبْرًا جَمِيلًا}***",
        "***{يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ}.[9]***",
        "*** {وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ وَيَخْشَ اللَّهَ وَيَتَّقْهِ فَأُولَئِكَ هُمُ الْفَائِزُونَ}.[16]***",
        "***{ولقد نعلم أنك يضيق صدرك بما يقولون ، فسبح بحمد ربک وکٌن من الساجدين واعبد ربك حتى يأتيك اليقين}***",
        "***{الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ}.[34]***",
        "***{وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا }. [35]***",
        "***{قَدْ أَفْلَحَ مَنْ تَزَكَّى * وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّى}.[36]***",
        "***{إِنَّهُ مَن يَتَّقِ وَيِصْبِرْ فَإِنَّ اللّهَ لاَ يُضِيعُ أَجْرَ الْمُحْسِنِينَ}. [37]***",
        "*** {إِنِّي جَزَيْتُهُمُ الْيَوْمَ بِمَا صَبَرُوا أَنَّهُمْ هُمُ الْفَائِزُونَ}. [38]***",
        "***{أُولَئِكَ يُجْزَوْنَ الْغُرْفَةَ بِمَا صَبَرُوا وَيُلَقَّوْنَ فِيهَا تَحِيَّةً وَسَلَامًا}. [39]{أُولَئِكَ يُؤْتَوْنَ أَجْرَهُمْ مَرَّتَيْنِ بِمَا صَبَرُوا وَيَدْرَؤُونَ بِالْحَسَنَةِ السَّيِّئَةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ***",
        
        "***{وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَيْلَكُمْ ثَوَابُ اللَّهِ خَيْرٌ لِمَنْ آمَنَ وَعَمِلَ صَالِحًا وَلَا يُلَقَّاهَا إِلَّا الصَّابِرُونَ}. [41]***",
        "{وَإِنْ عَاقَبْتُمْ فَعَاقِبُوا بِمِثْلِ مَا عُوقِبْتُمْ بِهِ وَلَئِنْ صَبَرْتُمْ لَهُوَ خَيْرٌ لِلصَّابِرِينَ}.[42]***",
        "***{لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَلِكَ أَمْرً}[٢]؛***",
        "***” وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ”.***",
        "***” وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ”.***",
        "***” يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ”.***",
        "***” وَلَقَدْ نَعْلَمُ أَنَّكَ يَضِيقُ صَدْرُكَ بِمَا يَقُولُونَ* فَسَبِّحْ بِحَمْدِ رَبِّكَ وَكُن مِّنَ السَّاجِدِينَ”.***",
        
        ]
        
        
        
        client.on("messageCreate", msg => { 
          if(msg.content.startsWith(PREFIX + "quran")) { 
        let rg1 = new MessageEmbed() 
        .setDescription(replies[Math.floor(Math.random() * replies.length)]) 
        msg.channel.send({embeds: [rg1]})
        }
           }) 
        
       






           


           client.on('messageCreate', async message => {
            if (message.content.startsWith(PREFIX + 'sug')) {
              if(!message.channel.type === 'DM')return;
              let k7l2 = message.content.split(" ").slice('1').join(" ");
              if(!k7l2)return message.reply('وش اقتراحك طيب!!؟')
          
              let k7l =  client.channels.cache.get('798119340972965889');
          
              k7l.send({embeds :[
                new MessageEmbed()
               .setAuthor({name : `Suggested by ${message.author.tag}`})
               .setColor("LUMINOUS_VIVID_PINK")
               .addField(' New suggestion', k7l2)
              ]}).then(msg => {
                msg.react('⬆️') && msg.react('⬇️')
            
              })
          
            }
          })


          
       
     
          




 
          








            var { inviteTracker } = require("discord-inviter"), // npm i discord-inviter
            SLK = new inviteTracker(client);
          SLK.on('guildMemberAdd', async (SRAJ, inviter) => {
           const SLKWelcome = client.channels.cache.get('797882072219254835')
            let embedSLK = new MessageEmbed()
            .setTitle(`> **Welcome To ${SRAJ.guild.name}**`)
            .setDescription(`**
            > Username : ${SRAJ.user.username}
            > Invited By : <@${inviter.id}>
            > Members Server : ${SRAJ.guild.memberCount}
            > Joined Discord : <t:${parseInt(SRAJ.user.createdAt / 1000)}:R>
            **`)
            .setThumbnail(SRAJ.user.avatarURL({ dynamic: true }))
            .setFooter({text:SRAJ.guild.name, iconURL:SRAJ.guild.iconURL({ dynamic: true })})
            SLKWelcome.send({embeds: [embedSLK]})
          })
          
          



client.on("messageCreate", msg => {
  if (msg.content.startsWith("ip")) {

      const api_key = `85046d79591c42ba9db6194a1b54a638`

      let args = msg.content.split(" ").slice(1).join(" ")
      

      const axios = require('axios');

      axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${api_key}&ip=${args}`).then(

          async ({ data: info }) => {
              const embedip = new MessageEmbed()
                  .setTitle(`Requested IP Info .`)
                  .setDescription(`
                **IP** : \`${info.ip}\`

                **Continent Name** : \`${info.continent_name}\`

                **Country Name** : \`${info.country_name}\`

                **Country Capital** : \`${info.country_capital}\`

                **Calling Code** : \`${info.calling_code}\`

                **Languages** : \`${info.languages}\`

                **Currency** : \`${info.currency.name}\` | \`${info.currency.symbol}\`

                **Time** : \`${info.time_zone.current_time}\`
             `)
                  .setThumbnail(info.country_flag)
                  .setColor("RANDOM")

              msg.channel.send({ embeds: [embedip] })
          }

      )
  }
})




const txtgen = require("txtgen");
 
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX + "text")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
      return message.reply({
        content: `**Please Provide Type\nTypes:\n\`paragraph\`,\`sentence\`,\`article\`**`,
      });
    }
    if (!["sentence", "article", "paragraph"].includes(args[0])) {
      return message.reply({
        content: `**Please Provide Type\nTypes:\n\`paragraph\`,\`sentence\`,\`article\`**`,
      });
    }
    let type = args[0];
    let many = args[1] || 1;
    var txt;
    if (type == "paragraph") {
      txt = txtgen.paragraph(many);
    } else if (type == "article") {
      txt = txtgen.article(many);
    } else if (type == "sentence") {
      txt = txtgen.sentence();
    }
    return message.reply({
      embeds: [
        {
          author: {
            name: `Type: ${type}`,
          },
          color: 'DARK_GREEN',
          description: txt.substr(0,2021),
          timestamp: new Date(), //
          footer: {
              text: `Requested By: ${message.author.username}`,
              iconURL: message.author.avatarURL({dynamic:true})
          }
        },
      ],
    });
  }
});



client.on('messageCreate', async message =>{
  if(message.content.startsWith(PREFIX + 'unban')){
    if(!message.member.permissions.has("BAN_MEMBERS"))return message.reply(`ماعندك صلاحية BAN MEMBERS`)
    if(!message.guild.me.permissions.has("BAN_MEMBERS"))return message.reply(`ماعندي صلاحية BAN MEMBERS`)
    const args = message.content.trim().split(/ +/g);

    let user = args[1]
    if(!user)return message.reply({ embeds :[ 
      new MessageEmbed()
      .setColor("AQUA")
      .setDescription('اكتب اي دي الشخص')
    ]})

    message.guild.members.unban(user).then(m => {
      message.channel.send({embeds: [
        new MessageEmbed()
        .setColor("AQUA")
        .setDescription(`☑️ تم شلت الباند من \`${m.username}\``)
      ]});
  
      });
  }
})







process.on("unhandledRejection", error => {
  return console.log(error)
});


 
client.on("messageCreate" , saleh => {
  if(saleh.content.startsWith(PREFIX + "roles")) {
  if(saleh.member.permissions.has("SEND_MESSAGES")) {
  let member = saleh.mentions.members.first()
  if(!member) return saleh.reply(`**Please Mention The User ! ❌**`)
  let roles1 = member.roles.cache.filter((roles) => roles.id !== saleh.guild.id).map((role) => role.toString()).join(`\n`) ;
  
  let embed = new MessageEmbed()
  .setTitle(`This is all roles for this user :`)
  .setDescription(`${roles1}`)
  .setColor("333333")
  
  saleh.reply({embeds:[embed]})
  }}
  });






client.on("messageCreate" , Pedri => {

  if(Pedri.content.startsWith(PREFIX + "6tlal")) {
    if(Pedri.member.permissions.has('SEND_MESSAGES')) {
    let user = Pedri.mentions.users.first();
      if(!user) return Pedri.reply(`**منشن الشخص اللي تبي تهديه هذه الاغنيه**`)
      const target = Pedri.mentions.users.first();
      let memberTarget = Pedri.guild.members.cache.get(target.id);

      Pedri.reply(`https://cdn.discordapp.com/attachments/944887869753942037/960318979723886592/yt1s.io-_360p.mp4 `)
     



    }
  }

})

  








client.on("messageCreate",async m=>{
  if(m.content.startsWith(PREFIX + "قران")) {
    if(!m.member.me.voice.channel)return m.reply({ content: new MessageEmbed().setAuthor(m.author.username,m.author.avatarURL({dynamic:true})).addField(`خطأ`,`يجب عليك دخول الروم`) })
  quran(m.member.me.voice.channel)
  m.channel.send({ content: new MessageEmbed().setAuthor(m.author.username,m.author.avatarURL({dynamic:true})).setDescription(`**تم تشغل القران**`) });
  }
})
async function quran(quranAudio) {
  let url = "https://www.youtube.com/watch?v=0SILdb7gS-8"
  const broadcast = client.me.voice.createBroadcast()
  let connection = await quranAudio.join()
  broadcast.play(ytdl(url), { quality: 'highestaudio' })
  connection.play(broadcast)
}  







client.on("voiceStateUpdate", (oldState, newState) => {
  let usertag = newState.member.user.tag;
  if (!oldState.streaming && newState.streaming) return console.log(`${usertag} is ${newState.streaming ? "" : "not "}streaming`);
  if (oldState.streaming && !newState.streaming) return console.log(`${usertag} is ${newState.streaming ? "" : "not )"}streaming`);
  if (!oldState.serverDeaf && newState.serverDeaf) return console.log(`${usertag} is ${newState.serverDeaf ? "" : "un"}deafed (Server)`);
  if (oldState.serverDeaf && !newState.serverDeaf) return console.log(`${usertag} is ${newState.serverDeaf ? "" : "un"}deafed (Server)`);
  if (!oldState.serverMute && newState.serverMute) return console.log(`${usertag} is ${newState.serverMute ? "" : "un"}muted (Server)`);
  if (oldState.serverMute && !newState.serverMute) return console.log(`${usertag} is ${newState.serverMute ? "" : "un"}muted (Server)`);
  if (!oldState.selfDeaf && newState.selfDeaf) return console.log(`${usertag} is ${newState.selfDeaf ? "" : "un"}deafed (self)`);
  if (oldState.selfDeaf && !newState.selfDeaf) return console.log(`${usertag} is ${newState.selfDeaf ? "" : "un"}deafed (self)`);
  if (!oldState.selfMute && newState.selfMute) return console.log(`${usertag} is ${newState.selfMute ? "" : "un"}muted (self)`);
  if (oldState.selfMute && !newState.selfMute) return console.log(`${usertag} is ${newState.selfMute ? "" : "un"}muted (self)`);
  if (oldState.sessionID != newState.sessionID) return console.log(`${usertag} sessionID on: ${newState.sessionID}`);
  if (!oldState.selfVideo && newState.selfVideo) return console.log(`${usertag} is ${newState.selfVideo ? "" : "not "}self Video Sharing`);
  if (oldState.selfVideo && !newState.selfVideo) return console.log(`${usertag} is ${newState.selfVideo ? "" : "not "}self Video Sharing`);
  if (!oldState.channelID && newState.channelID) return console.log(`${usertag} joined: ${newState.channel.name}`);
  if (oldState.channelID && !newState.channelID) return console.log(`${usertag} left: ${oldState.channel.name}`);
  if (oldState.channelID && newState.channelID) return console.log(`${usertag} switched from: ${oldState.channel.name} to: ${newState.channel.name}`);
});

















 client.login(TOKEN);
 


 // const developer = client.users.cache.find(y => y.id === 'الايدي تاعك')