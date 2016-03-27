/**********************************导航条跟随**********************************/
(function smint(){
	$.fn.smint = function( options ) {
		$(this).addClass('smint')
		var settings = $.extend({
            'scrollSpeed '  : 500
            }, options);
		return $('.smint a').each( function() {
			if ( settings.scrollSpeed ) {
				var scrollSpeed = settings.scrollSpeed
			}
			var stickyTop = $('.smint').offset().top;
			var stickyMenu = function(){
				var scrollTop = $(window).scrollTop();
				if (scrollTop > stickyTop) {
					$('.smint').css({ 'position': 'fixed', 'top':0 }).addClass('fxd');

					} else {
						$('.smint').css({ 'position': 'absolute', 'top':stickyTop }).removeClass('fxd');
					}
			};
			stickyMenu();
			$(window).scroll(function() {
				 stickyMenu();
			});
			/*$(this).on('click', function(e){
				var selectorHeight = $('.smint').height();
				e.preventDefault();
		 		var id = $(this).attr('id');
				var goTo =  $('div.'+ id).offset().top -selectorHeight;
				$("html, body").animate({ scrollTop: goTo }, scrollSpeed);
			});*/
		});
	}
})();
$(document).ready( function smint() {
    $('.navban').smint({
    	'scrollSpeed' : 140
    });
});

/**********************************回到页顶**********************************/
(function scrollTo($) {
    var $scrollTo = $.scrollTo = function(target, duration, settings) {
        $(window).scrollTo(target, duration, settings);
    };
    $scrollTo.defaults = {
        axis: 'y',
        duration: 1
    };
    $scrollTo.window = function(scope) {
        return $(window).scrollable();
    };
    $.fn.scrollable = function() {
        return this.map(function() {
            var win = this.parentWindow || this.defaultView,
            elem = this.nodeName == '#document' ? win.frameElement || win: this,
            doc = elem.contentDocument || (elem.contentWindow || elem).document,
            isWin = elem.setInterval;
            return elem.nodeName == 'IFRAME' || isWin && $.browser.safari ? doc.body: isWin ? doc.documentElement: this;
        });
    };
    $.fn.scrollTo = function(target, duration, settings) {
        if (typeof duration == 'object') {
            settings = duration;
            duration = 0;
        }
        if (typeof settings == 'function') settings = {
            onAfter: settings
        };
        settings = $.extend({},
        $scrollTo.defaults, settings);
        duration = duration || settings.speed || settings.duration;
        settings.queue = settings.queue && settings.axis.length > 1;
        if (settings.queue) duration /= 2;
        settings.offset = both(settings.offset);
        settings.over = both(settings.over);
        return this.scrollable().each(function() {
            var elem = this,
            $elem = $(elem),
            targ = target,
            toff,
            attr = {},
            win = $elem.is('html,body');
            switch (typeof targ) {
            case 'number':
            case 'string':
                if (/^([+-]=)?\d+(px)?$/.test(targ)) {
                    targ = both(targ);
                    break;
                }
                targ = $(targ, this);
            case 'object':
                if (targ.is || targ.style) toff = (targ = $(targ)).offset();
            }
            $.each(settings.axis.split(''),
            function(i, axis) {
                var Pos = axis == 'x' ? 'Left': 'Top',
                pos = Pos.toLowerCase(),
                key = 'scroll' + Pos,
                old = elem[key],
                Dim = axis == 'x' ? 'Width': 'Height',
                dim = Dim.toLowerCase();
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (settings.margin) {
                        attr[key] -= parseInt(targ.css('margin' + Pos)) || 0;
                        attr[key] -= parseInt(targ.css('border' + Pos + 'Width')) || 0;
                    }
                    attr[key] += settings.offset[pos] || 0;
                    if (settings.over[pos]) attr[key] += targ[dim]() * settings.over[pos];
                } else attr[key] = targ[pos];
                if (/^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max(Dim));
                if (!i && settings.queue) {
                    if (old != attr[key]) animate(settings.onAfterFirst);
                    delete attr[key];
                }
            });
            animate(settings.onAfter);
            function animate(callback) {
                $elem.animate(attr, duration, settings.easing, callback &&
                function() {
                    callback.call(this, target, settings);
                });
            };
            function max(Dim) {
                var attr = 'scroll' + Dim,
                doc = elem.ownerDocument;
                return win ? Math.max(doc.documentElement[attr], doc.body[attr]) : elem[attr];
            };
        }).end();
    };
    function both(val) {
        return typeof val == 'object' ? val: {
            top: val,
            left: val
        };
    };
})(jQuery);
$(document).ready(function scrollTo(){
	/*返回顶部*/
	$('#paea_top').hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$('#paea_top').fadeIn(400);//当滑动栏向下滑动时，按钮渐现的时间
		} else {
			$('#paea_top').fadeOut(0);//当页面回到顶部第一屏时，按钮渐隐的时间
		}
	});
	$('#paea_top').click(function () {
		$('html,body').animate({
			scrollTop : '0px'
		}, 300);//返回顶部所用的时间 返回顶部也可调用goto()函数
	});
});
function goto(selector){
	$.scrollTo ( selector , 1000);
}

/**********************************导航条**********************************/
(function movebg($){
	$.fn.movebg=function(options){
		var defaults={
		width:120,/*移动块的大小*/
		extra:50,/*反弹的距离*/
		speed:300,/*块移动的速度*/
		rebound_speed:300/*块反弹的速度*/
		};
	var defaultser=$.extend(defaults,options);
	return this.each(function(){
		var _this=$(this);
		var _item=_this.children("ul").children("li").children("a");/*找到触发滑块滑动的元素	*/
		var origin=_this.children("ul").children("li.cur").index();/*获得当前导航的索引*/
		var _mover=_this.find(".move-bg");/*找到滑块*/
		var hidden;/*设置一个变量当html中没有规定cur时在鼠标移出导航后消失*/
		if (origin==-1){origin=0;hidden="1"} else{_mover.show()};/*如果没有定义cur,则默认从第一个滑动出来*/
		var cur=prev=origin;/*初始化当前的索引值等于上一个及初始值;*/
		var extra=defaultser.extra;/*声明一个变量表示额外滑动的距离*/
		_mover.css({left:""+defaultser.width*origin+"px"});/*设置滑块当前显示的位置*/
		
		//设置鼠标经过事件
		_item.each(function(index,it){
			$(it).mouseover(function(){
				cur=index;/*对当前滑块值进行赋值*/
				move();
				prev=cur;/*滑动完成对上个滑块值进行赋值*/
			});
		});
		_this.mouseleave(function(){
			cur=origin;/*鼠标离开导航时当前滑动值等于最初滑块值*/
			move();
			if(hidden==1){_mover.stop().fadeOut();}/*当html中没有规定cur时在鼠标移出导航后消失*/
		});
		//滑动方法
		function move(){
			_mover.clearQueue();
			if(cur<prev){extra=-Math.abs(defaultser.extra);} /*当当前值小于上个滑块值时，额外滑动值为负数*/
			else{extra=Math.abs(defaultser.extra)};/*当当前值大于上个滑块值时，滑动值为正数*/
			_mover.queue(
				function(){
					$(this).show().stop(true,true).animate({left:""+Number(cur*defaultser.width+extra)+""},defaultser.speed),
					function(){$(this).dequeue()}
				}
			);
			_mover.queue(
				function(){
					$(this).stop(true,true).animate({left:""+cur*defaultser.width+""},defaultser.rebound_speed),
					function(){$(this).dequeue()}
				}
			);
		};
	})
	}
})(jQuery);
$(function movebg(){$("#nav").movebg({width:120,extra:40,speed:300,rebound_speed:400});})