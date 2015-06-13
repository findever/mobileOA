/** 公共js文件 **/

// 侧滑菜单
mui('.mui-table-view,.user-info,.tap-a').on('tap', 'a', function(e) {
	window.location.href = this.getAttribute('href');
});