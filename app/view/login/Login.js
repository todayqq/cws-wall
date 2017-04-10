Ext.define('Wall.view.login.Login', {
  extend: 'Ext.Window',
  controller: 'login',
  viewModel: 'login',
  cls: 'login-window',
  closable: false,
  resizable: false,
  autoShow: true,
  maximized: true,
  modal: true,
  border: false,
  header: false,

  layout: {
    type: 'vbox',
    pack: 'start',
    align: 'stretch'
  },

  items: [{
    xtype: 'component',
    cls: 'login-logo',
    height: 400,
    style: {
      background: 'url(resources/images/login.jpg) no-repeat center'
    }
  }, {
    xtype: 'component',
    height: 20,
    style: {
      backgroundColor: '#656f80'
    }
  }, {
    xtype: 'form',
    reference: 'form',
    cls: 'auth-dialog',
    margin: '40 0 0 0',
    layout: {
      type: 'vbox',
      align: 'center'
    },
    defaults: {
      xtype: 'textfield',
      height: 54,
      labelSeparator: '',
      labelCls: 'login-form-label',
      fieldCls: 'login-form-input',
      fieldBodyCls: 'login-field-body',
      msgTarget: 'none',
      width: 350,
      labelWidth: 60,
      allowBlank: false,
      listeners: {
        specialKey: 'onSpecialKey'
      }
    },

    items: [{
      fieldLabel: '用户名',
      emptyText: '用户名'
    }, {
      fieldLabel: '密码',
      emptyText: '密码',
      inputType: 'password'
    }, {
      xtype: 'button',
      width: 180,
      height: 48,
      text: '登陆',
      iconAlign: 'right',
      iconCls: 'x-fa fa-angle-right',
      style: {
        borderRadius: '24px',
        backgroundColor: '#161927',
        color: 'white'
      },
      listeners: {
        click: 'onLoginClick'
      }
    }]
  }]
})