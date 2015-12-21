var TelegramBot = require('node-telegram-bot-api');
var common = require("./common");
var nconf = common.nconf();
// Setup polling way
var bot = common.bot();

// Some needed methods
String.prototype.replaceAll = function(str1, str2, ignore)
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

dict = {
  "غ": "ע'",
  "ظ": "ט'",
  "ض": "ד'",
  "ذ": "ד'",
  "خ": "ח'",
  "ث": "ת'",
  "ت": "ת",
  "ش": "ש",
  "ر": "ר",
  "ق": "ק",
  "ص": "צ",
  "ف": "פ",
  "ع": "ע",
  "س": "ס",
  "ن": "נ",
  "م": "מ",
  "ل": "ל",
  "ك": "כ",
  "ي": "י",
  "ئ": "י",
  "ط": "ט",
  "ح": "ח",
  "ز": "ז",
  "و": "ו",
  "ه": "ה",
  "ة": "ה",
  "د": "ד",
  "ج": "ג",
  "ب": "ב",
  "ا": "א",
  "ى": "א",
  "إ": "א",
  "آ": "א",
  "أ": "א",
  "ء": "א"
}

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  var resp = msg.text.trim();
  if (resp == "/start") {
    bot.sendMessage(chatId, "שלחו לי מילה בערבית");
  } else {
    console.log(resp);
    var result = resp;
    for (var i = 0, len = resp.length; i < len; i++) {
      if ( dict[resp[i]] ) {
        result = result.replaceAll(resp[i], dict[resp[i]]);
      }
    }
    console.log(result);
    bot.sendMessage(chatId, result);
  }
});
