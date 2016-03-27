$(function(){

// 删除订单提示弹窗
	$('.delete_order').bind('click',function(event){
		var str = '<div class="popup-bg"><div class="popup"><p>确认要删除此订单吗？</p><p><input type="button" value="确认" class="confirm" /><input type="button" value="取消" class="cancel" /></p></div></div>';
		$('body').append(str);
		event.stopPropagation();	//  阻止冒泡
	});
// 取消订单提示弹窗
	$(document).on('click','.popup-bg .popup .cancel',function(event){
        var t = $(this).parent();
        var pa = t.parent();
		var pr = pa.parent();
        pa.remove();
        pr.remove();
		event.stopPropagation();	//	阻止冒泡
	});
// 删除订单提示框“确认”按钮点击事件
    $(document).on("click",'.popup-bg .popup .confirm',function(event){
		// 执行操作代码
		// code
		
		$(this).next().click();	//调用去掉方法
		// 此处执行删除订单操作
        // 
		event.stopPropagation();	//	阻止冒泡
    });
// 查看地图弹窗
	$('.look_map').bind('click',function(event){
		var u = $(this).attr('_val');
		// img是代码中的变量值，修改的时候修改它即可
		var img = '<img src="'+ u +'" />';
		var h = '<div class="show_map_bg"></div><div class="show_map"><div class="map_img"><a href="javascript:;" class="close_map">&nbsp;</a>'+ img +'</div></div>';
		$('body').append(h);
		event.stopPropagation();	//  阻止冒泡
	});
// 关闭地图弹窗
	$(document).on('click','.show_map .map_img .close_map',function(){
		var ps = $(this).parent().parent();
		var pr = ps.prev();
        ps.remove();
        pr.remove();
		event.stopPropagation();	//	阻止冒泡
	});

})































