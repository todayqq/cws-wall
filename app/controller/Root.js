Ext.define('Wall.controller.Root', {
  extend: 'Ext.app.Controller',
  requires: [
    'Wall.view.login.Login',
    'Wall.view.main.Main'
  ],

  loadingText: 'Loading...',

  onLaunch: function() {
    if (Ext.isIE8) {
      Ext.Msg.alert('系统提示', '不支持IE8浏览器');
      return;
    }

    this.login = new Wall.view.login.Login({
      autoShow: true,
      listeners: {
        scope: this,
        login: 'onLogin'
      }
    });

  },

  onLogin: function(loginController, user) {
    this.login.hide();

    this.user = user;

    this.showUI();
  },

  showUI: function() {
    this.viewport = new Wall.view.main.Main({
      autoShow: true,
      listeners: {
        scope: this,
        logout: 'onLogout'
      }
    });
  },

  onLogout: function () {
    this.viewport.destroy();
    this.login.show();
    this.user = null;
  }

})