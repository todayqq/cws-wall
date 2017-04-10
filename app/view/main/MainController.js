/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Wall.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickLogout: function () {
        Ext.Msg.confirm('系统提示', '是否退出登录', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            this.fireViewEvent('logout', this.getView());
        }
    },

    onSceneGridRowClick: function (grid, record, element) {
        return new Ext.tip.ToolTip({
            cls: 'grid-tip',
            target: Ext.get(element),
            anchor: 'left',
            autoHide: false,
            autoShow: true,
            autoDestroy: true, 
            items: [{
                xtype: 'button',
                text: '启用',
                cls: 'tip-btn',
                icon: 'resources/images/plan-on.gif',
                handler: 'onClickRunSceneBtn'
            }]
        });
    },

    onClickRunSceneBtn: function () {
        
    },

    onPlanGridRowClick: function (grid, record, element) {
        return new Ext.tip.ToolTip({
            cls: 'grid-tip',
            target: Ext.get(element),
            anchor: 'left',
            autoHide: false,
            autoShow: true,
            autoDestroy: true, 
            layout: 'vbox',
            items: [{
                xtype: 'button',
                text: '启用',
                cls: 'tip-btn',
                icon: 'resources/images/plan-on.gif',
                handler: 'onClickRunPlanBtn'
            }, {
                xtype: 'button',
                text: '停用',
                cls: 'tip-offbtn',
                icon: 'resources/images/plan-off.gif',
                handler: 'onClickOffPlanBtn'
            }]
        });
    },

    onClickRunPlanBtn: function () {

    },

    onClickOffPlanBtn: function () {

    },

    onCreateSourceWindow: function () {
        Ext.create('Wall.view.main.SourceWindow',{
            renderTo:  Ext.get('canvasDiv1').dom,
            parentDom: Ext.get('canvasDiv1'),
            // id: 'win_1',
            name: 'win_1', 
            x: 150,
            y: 150,
            w: 200,
            h: 200
        }).show();
    }
});
