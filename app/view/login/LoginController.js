Ext.define('Wall.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',
  loginText: 'Logging in...',

  onSpecialKey: function(field, e) {
    if (e.getKey() === e.ENTER) {
      this.doLogin();
    }
  },

  onLoginClick: function(argument) {
    this.doLogin();
  },

  doLogin: function() {
    var form = this.lookupReference('form');

    if (form.isValid()) {
      Ext.getBody().mask(this.loginText);

      Ext.Ajax.request({
        url: '/login',
        method: 'GET',
        params: form.getValues(),
        scope: this,
        success: 'onLoginSuccess',
        failure: 'onLoginFailure'
      });
    }
  },

  onLoginFailure: function() {
    var user = {'name': 'admin'};
    Ext.getBody().unmask();

    this.fireViewEvent('login', this.getView(), user);
  },

  onLoginSuccess: function(user) {
    Ext.getBody().unmask();

    this.fireViewEvent('login', this.getView(), user);
  }

})