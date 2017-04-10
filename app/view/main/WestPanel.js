Ext.define('Wall.view.main.WestPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'WestPanel',
    ui: 'westpanel',
    width: 300,

    items: [{
        icon: 'resources/images/scene.gif',
        title: '场景',
        xtype: 'grid',
        cls: 'allRecordsCls',
        rowLines: false,
        hideHeaders: true,
        columns: [{
            dataIndex: 'scene_id',
            renderer: function () {
                return "<img src='resources/images/scene-option.gif'>";
            }
        }, {
            dataIndex: 'scene_name',
            align: 'left',
            flex: 1
        }],
        store: Ext.create('Ext.data.Store', {
            data: [
                { scene_id: 1, scene_name: '场景1'},
                { scene_id: 2, scene_name: '场景2'},
                { scene_id: 3, scene_name: '场景3'}
            ]
        }),
        listeners: {
            rowclick: 'onSceneGridRowClick'
        }

    }, {
        icon: 'resources/images/plan.gif',
        title: '预案',
        xtype: 'grid',
        cls: 'allRecordsCls',
        hideHeaders: true,
        columns: [{
            dataIndex: 'plan_id',
            renderer: function () {
                return "<img src='resources/images/plan-option.gif'>";
            }
        }, {
            dataIndex: 'plan_name',
            align: 'left',
            flex: 1
        }],
        store: Ext.create('Ext.data.Store', {
            data: [
                { plan_id: 1, plan_name: '预案1'},
                { plan_id: 2, plan_name: '预案2'},
                { plan_id: 3, plan_name: '预案3'}
            ]
        }),
        listeners: {
            rowclick: 'onPlanGridRowClick'
        }
    }]
});
