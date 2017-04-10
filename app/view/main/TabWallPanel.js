Ext.define('Wall.view.main.TabWallPanel', {
	extend: 'Ext.tab.Panel',
	xtype: 'TabWallPanel',
    tabPosition: 'bottom',
    ui: 'wallpanel',
    padding: 10,
    style: {
        backgroundColor: 'rgb(255, 255, 255)'
    },
    items: [{
        title: '屏组1',
        xtype: 'component',
        renderTpl: [
             '<div class="container" id="container{wallid}">',
                '<div class="canvasDiv" id="canvasDiv{wallid}" onselectstart="return false">',
                    '<canvas id="myCanvas{wallid}" class="canvas" onselectstart="return false">',
                    '</canvas>',
                '</div>',
            '</div>'
         ],
         renderData: {
             wallid: "1"
         },
         childEls: ['wallid'],
         listeners: {
            render: function () {
                var canvas = Ext.get('myCanvas1');
                canvas.setWidth(780);
                canvas.setHeight(360);
                
                var dom = canvas.el.dom;
                dom.setAttribute('width', 780);
                dom.setAttribute('height', 360);

                var px = 780 / 2,
                    py = 360 / 2,
                    cx = canvas.el.dom.getContext('2d');

                cx.clearRect(0, 0, 780, 360);
                cx.lineWidth = 2;
                cx.translate(0.5, 0.5);
                cx.strokeStyle = "#04000";

                //竖线
                for (var xi = 0; xi <= 2; xi++) {
                    cx.beginPath();
                    if (parseInt(xi * px) == 780) {
                        cx.moveTo(xi * px - 1, 0);
                        cx.lineTo(xi * px - 1, 360);
                    } else {
                        cx.moveTo(xi * px, 0);
                        cx.lineTo(xi * px, 360);
                    }
                    cx.closePath();
                    cx.stroke();
                }

                //横线
                for (var yi = 0; yi <= 2; yi++) {
                    cx.beginPath();
                    if (parseInt(yi * py) == 360) {
                        cx.moveTo(0, yi * py - 1);
                        cx.lineTo(780, yi * py - 1);
                    } else {
                        cx.moveTo(0, yi * py);
                        cx.lineTo(780, yi * py);
                    }
                    cx.closePath();
                    cx.stroke()
                }

                var col_table = 2,
                    county = 2,
                    countx = 2;

                var tx = px / col_table,
                    ty = py / col_table;
                cx.lineWidth = 1;
                cx.strokeStyle = "#545454";
                for (var yi = 1; yi < county * col_table; yi++) {
                    if (parseInt(yi / col_table) == yi / col_table) continue;
                    cx.beginPath();
                    cx.setLineDash([2, 6]);
                    cx.moveTo(0, yi * ty);
                    cx.lineTo(780, yi * ty);
                    cx.closePath();
                    cx.stroke();
                }

                for (var xi = 1; xi < countx * col_table; xi++) {
                    if (parseInt(xi / col_table) == xi / col_table) continue;
                    cx.beginPath();
                    cx.setLineDash([2, 6]);
                    cx.moveTo(xi * tx, 0);
                    cx.lineTo(xi * tx, 360);
                    cx.closePath();
                    cx.stroke();
                }

            }
         }

    }, {
        title: '屏组2'
    }]
})