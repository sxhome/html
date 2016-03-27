$(function(){
// 去掉列表的最后一个底部边框
	$('.p_list > ul li:last').css('border-bottom','none');
	// 去掉列表的最后一个右边边框
	$('.hidd_kind > dt:last').css('border-right','none');
	$('.class_show >ul li:last').css('border-right','none');
// 直接输入数量
	$('.p_list > ul > li > .n > p > .num').change(function(){
		var num = $(this).val();
		num = isNaN(num) ? function(){alert('请输入数字');return 1;} : num; //判断输入是否为数字
		num = num < 1 ? 1 : num;	// 判断是否小于1
		$(this).val(num);
		tj();
	});
//  点击加号
	$('.p_list > ul > li > .n > p > .a').click(function(){
		var p = parseInt($(this).prev().val());	// 数量
		p = isNaN(p) ? 1 : p;
		$(this).prev().val(p+1);
		tj();
	});
// 点击减号
	$('.p_list > ul > li > .n > p > .b').click(function(){
		var p = parseInt($(this).next().val());	// 数量
		p = isNaN(p) ? 1 : p;
		var p = (p - 1);
		p = p > 0 ? p : 1;
		$(this).next().val(p);tj();
	});
// 计算商品总价
	function calculateTotal(number,price){
		var t = 0;
		$(number).each(function(i){
			t += number[i] * price[i];
		});
		return t;
	}
// 将金额转换为带逗号的数字
	function fmoney(s, n) {  
		n = n > 0 && n <= 20 ? n : 2;  
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";  
		var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
		t = "";  
		for (i = 0; i < l.length; i++) {  
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
		}  
		var p = t.split("").reverse().join("") + "." + r;
		return p.substr(0, p.length-1)
	}
// 去掉金额的逗号
	function rmoney(s) {  
		return parseFloat(s.replace(/[^\d\.-]/g, ""));  
	}
// 统计价格和总价格
	function tj(){
		// 取价格和数量，并计算
		var number = [];	//数量数组
		var price = [];	//价格数组
		$('.p_list > ul > li').each(function(i){
			if (i > 0) {
				// 取数量
				var num = $(this).find('.n > p > .num').val();
				number[i - 1] = (num == '') ? 1 : num;
				// 取价格
				var pr = $(this).find('.p > p > .price').text();
				price[i - 1] = rmoney(pr);
			}
		});
		var total = calculateTotal(number,price); //商品总价
		var yf = $('.order_toal > .l > .yf > span').text();// 运费
		yf = rmoney(yf);
		$('.order_toal > .l > .toal > span').text(fmoney(total,3));
		$('.order_toal > .l > .hj > span').text(fmoney((total + yf),3));

	}
// 删除当前商品
	$('.p_list > ul > li > .c > p > .del_order').click(function(){
		var c = $(this).parent().parent('.c');
		var li = c.parent();
		li.remove();
		$('.p_list > ul li:last').css('border-bottom','none');
		tj();
		// 在此处用ajax删除掉数据库当前订单
	});
// 购物车页面js效果结束
});

//左悬浮
$(function(){
	$(".fenlei a").hover(function(){
		var id = $(this).attr("id");	
		$(".fixright").hide();
		$("."+id).show();
	});
	$(document).bind("mousemove",function(e){
		var target = $(e.target);
		if(target.closest(".fix").length == 0){
		$(".fixright").hide();
		}
	});
});

$(function(){
	$(".fenlei a").hover(function(){
		var id = $(this).attr("id");	
		$(".fixright").css("visibility","hidden");
		$("."+id).css("visibility","visible");
	});
	$(document).bind("mousemove",function(e){
		var target = $(e.target);
		if(target.closest(".fix").length == 0){
		$(".fixright").css("visibility","hidden");
		}
	});
});

