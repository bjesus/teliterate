(function() {
  var TelegramBot = require('node-telegram-bot-api');

  var nconf = require('nconf');

  nconf.argv()
   .env()
   .file({ file: 'config.json' });

  var token = nconf.get('bot_token');
  var bot = new TelegramBot(token, {polling: true});


  function unescapeHtml(unsafe) {
      return unsafe
           .replace(/&amp;/g, "&")
           .replace(/&lt;/g, "<")
           .replace(/&gt;/g, ">")
           .replace(/&quot;/g, "\"")
           .replace(/&#039;/g, "'");
   }

  module.exports.bot = function() {
      return bot;
  }

  module.exports.nconf = function() {
      return nconf;
  }


}());
