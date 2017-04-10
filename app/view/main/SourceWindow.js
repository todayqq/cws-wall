Ext.define('Wall.view.main.SourceWindow', {
	extend: 'Ext.Component',
	alias: 'widget.sourcewindow',
	cls: 'source-window',

	listeners: {
		tap: 'onTap',
		panend: 'onPanend',
		pinchend: 'onPinchend'
	},

	initComponent: function () {
		this.setWidth(this.w);
		this.setHeight(this.h);
		
		this.callParent();
	},

	onRender: function () {
		this.callParent(arguments);
		var me = this;
		var parentDom = this.parentDom.getBox(),
			parentW = parentDom.width,
			parentH = parentDom.height;

		var el = document.getElementById(this.id),
			l = parseInt(el.style.left),
			t = parseInt(el.style.top),
			w = parseInt(el.style.width),
			h = parseInt(el.style.height);

		// Ext不支持PinchZoom事件，引入Hammer.js来实现,并定义其边界
		var mc = new Hammer.Manager(el);
		mc.add(new Hammer.Tap());
		mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([]);
		mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

		//点击
		mc.on("tap", function (e) {
			// me.fireEvent("tap", me);
		});

		// 移动
		mc.on("panmove", function (e) {
			var x = e.deltaX, 
				y = e.deltaY;

			if (0 >= l+e.deltaX) 
				x = -l;
			
			if (l+e.deltaX+w+1 >= parentW) 
				x = parentW-w-l-1;

			if (t+e.deltaY+h+1 >= parentH) 
				y = parentH-h-t-1;

			if (0 >= t+e.deltaY) 
				y = -t;

			el.style.webkitTransform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
		});

		// 移动结束
		mc.on("panend", function (e) {
			el.style.webkitTransform = null;

			l = parseInt(el.style.left)+e.deltaX;
			t = parseInt(el.style.top)+e.deltaY;
			if (0 > l) l = 0;
			if (0 > t) t = 0;

			if(l+w >= parentW) l = parentW-w;
			if(t+h >= parentH) t = parentH-h;

			el.style.left = l  + 'px';
			el.style.top = t  + 'px';
			me.fireEvent("panend", me);
		});

		var MaxScale;
		reckonMaxScale();

		// 放大缩小（手势-捏）
		mc.on("pinchmove", function (e) {
			var scale = (e.scale < MaxScale) ? e.scale : MaxScale;
			el.style.transform = 'scale(' + scale + ', ' + scale + ')';
		});

		// 放大缩小（手势-捏）结束
		mc.on("pinchend", function (e) {
			mc.stop();
			el.style.transform = null;
			var scale = (e.scale < MaxScale) ? e.scale : MaxScale;
			if (e.scale < 1) {
				l = l+(w-w*scale)/2;
				t = t+(h-h*scale)/2;
			} else{
				l = l-(w*scale-w)/2;
				t = t-(h*scale-h)/2;
			}
			w = w*scale;
			h = h*scale;

			el.style.left = l + 'px';
			el.style.top = t + 'px';
			el.style.width =  w + 'px';
			el.style.height = h + 'px';
			reckonMaxScale();
			me.fireEvent("pinchend", me);
		});

		// 计算最大Scale
		function reckonMaxScale (argument) {
			var enlargeLScale = (2*l+w)/w,
			enlargeTScale = (2*t+h)/h;
			MaxScale = (enlargeLScale < enlargeTScale) ? enlargeLScale : enlargeTScale;
		}
	}
})