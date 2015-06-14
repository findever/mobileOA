/** 公共js文件 **/

// 侧滑菜单
mui('.mui-table-view,.user-info,.tap-a').on('tap', 'a', function(e) {
	var href = this.getAttribute('href');
	var target = this.getAttribute('target');
	if (!href || href == "javascript:void(0)" || target) {
		return;
	}
	window.location.href = href;
});

// 打开新webview
mui.plusReady(function() {
	mui('body').on('tap', 'a[target="_blank"]', function(e) {
		var url = this.getAttribute('href');
		var opt = {
			url: url,
			show: {
				autoShow: true,//this.getAttribute("data-page-autoshow") ? true : false, //页面loaded事件发生后自动显示
				duration: 300 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			}
		}
		if (this.getAttribute("data-page-id")) {
			opt.id = this.getAttribute("data-page-autoshow");
		}
		mui.openWindow(opt);
	});
});