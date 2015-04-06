Accounts.oauth.registerService('douban');

// only consider client-side actions, as publishing user data(on server) should be handled by application code.
if (Meteor.isClient) {
  Meteor.loginWithDouban = function (options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }
    
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    
    Douban.requestCredential(options, credentialRequestCompleteCallback);
  };
}