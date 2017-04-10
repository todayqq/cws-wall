/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Wall.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Wall.view.main.WestPanel',
        'Wall.view.main.SourceList',
        'Wall.view.main.MainController',
        'Wall.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: 'border',

    bodyBorder: false,

    defaults: {
        collapsible: false
    },

    items: [
        {
        xtype: 'container',
        id: 'app-header',
        region: 'north',
        height: 60,
        layout: {
            type: 'hbox',
            align: 'middle'
        },

        items: [{
            xtype: 'component',
            width: 170,
            html: '<img src="resources/images/logo.gif">'
        }, {
            xtype: 'component',
            cls: 'app-header-text',
            flex: 1,
            bind: 'TCL智能云拼接系统 &nbsp;&nbsp;&nbsp;Smart Cloud Wall System'
        }, {
            xtype: 'button',
            cls: 'app-header-logout',
            width: 50,
            iconCls: 'x-fa fa-reply',
            // text: '退出',
            listeners: {
                click: 'onClickLogout',
                element: 'el'
            }
        }]
    },
        {
            region: 'west',
            xtype: 'WestPanel'
        },
        {
            region: 'center',
            xtype: 'TabWallPanel'
        },
        {
            region: 'south',
            height: 180,
            xtype: 'panel',
            bodyCls: 'source-panelbody',
            items: [{
                xtype: 'SourceList',
                listeners: {
                    dragend: 'onCreateSourceWindow'
                }
            }]
            
        }
    ]

});

