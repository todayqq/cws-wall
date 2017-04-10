Ext.define('Wall.view.main.SourceList', {
	extend: 'Ext.view.View',
	xtype: 'SourceList',

	tpl: [
		'<tpl for=".">',
		    '<div class="source-list">',
		        '<div class="source">',
		            '<img src="{src}" ondragstart="return false;"/>',
		        '</div>',
		        '<span>{name}</span>',
		    '</div>',
		'</tpl>'
	],

	itemSelector: 'div.source-list',
    multiSelect: true,
    singleSelect: false,
    cls: 'sourcelist-view',
    scrollable: true,

    store: Ext.create('Ext.data.Store', {
        data: [
            { src:'resources/images/1.jpg', name: '素材1' },
            { src:'resources/images/2.jpg', name: '素材2' },
            { src:'resources/images/3.jpg', name: '素材3' },
            { src:'resources/images/4.jpg', name: '素材4' },
            { src:'resources/images/1.jpg', name: '素材1' },
            { src:'resources/images/2.jpg', name: '素材2' }
        ]
    }),

    initComponent: function() {
        var count = this.getStore().getCount();
        this.setWidth(count*300);

        this.callParent();
    },

    onRender: function (v) {
        var me = this;
        new Ext.drag.Source({
             element: v.el,
             handle: '.source',
             constrain: Ext.getBody(),
             // 设置拖动代理
             proxy: {
                type: 'placeholder',
                cursorOffset: [-50 , -50],
                cls: 'sourcedata-proxy',
                invalidCls: 'sourcedata-proxy-valid',
                validCls: 'sourcedata-proxy-valid'
             },
             // 设置data
            describe: function(info) {
                info.setData('source', 'resources/images/1.jpg');
            },

            listeners: {
                dragstart: function (source, info) {

                },
                dragmove: function (source, info) {

                },
                dragend: function (source, info) {
                    me.fireEvent('dragend', me);
                }
            }
         });
        
        this.callParent();
    }
});
