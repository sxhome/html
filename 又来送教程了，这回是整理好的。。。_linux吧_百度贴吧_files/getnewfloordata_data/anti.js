/**
 * @author mengke
 * @date 2013-5-19
 * 反作弊校验程序
 *
 */

/**
 * 构造器函数
 * @constructor Anti
 * @param {dom} container需要侦听的容器
 */
var Anti = function(container) {
    var ANTI_TAG = 'EC_ZHIXIN';/*知心的classtag*/
    var $bdImTimeSign$ = 0;


    var b = 0,
        c, a, q, p, o, l, k, d, r, g, j, u;
    a = q = p = o = l = k = d = r = g = j = u = 0;

    function s(w) {
        var i = window.event || w;
        u = i.target || i.srcElement;
        while (u && u.tagName != 'A') {
            u = u.parentNode;
            if (u === container) {
                return false;
            }
        }
        if (!u) {
            return;
        }
        r = new Date().getTime();
        a = 9999;
        q = i.clientX;
        p = i.clientY;
        if (!g) {
            k = 0;
        }
        else {
            k = r - g;
        }
        if (v()) {
            n();
        }
    }
    function e() {
        j = new Date().getTime();
        a = j - r;
        if (v()) {
            n();
        }
    }
    function h(w) {
        var i = window.event || w;
        b += 1;
        if (!o) {
            o = i.clientX;
        }

        if (!l) {
            l = i.clientY;
        }
        g = new Date().getTime();
    }
    function v() {
        c = 0;
        try {
            d = /\?url\=([^\.]+)\./.exec(u.href);
        } catch( e ){}
        if (d) {
            for (
                var x = 0;
                x < (((b * $bdImTimeSign$) % 99) + 9);
                 ++x
                 ) {
                c += d[1].charCodeAt((a * x) % d[1].length);
            }
            return true;
        }

        return false;
    }
    function n() {
        var w = '&ck=' + [c, b, a, q, p, o, l, k].join('.');
        if (u.href) {
            var i = u.href;
            if (i.indexOf('&ck=') == -1) {
                u.href += w;
            } else {
                u.href = i.replace(/&ck=[\w.]*/, w);
            }
        }
    }

    var cachedEventIdx = 0; /*缓存事件ID*/
    var cachedEvent = {};/*缓存容器*/

    function m(z, y, x) {
        for (var w in y) {
            cachedEvent[++cachedEventIdx] = x[w];
            z[ANTI_TAG + w] = cachedEventIdx;

            if (window.attachEvent) {
                z.attachEvent('on' + y[w], x[w]);
            }
            else {
                z.addEventListener(y[w], x[w], false);
            }
        }
    }

    var cachedEvents = {};

    function on(events, handlers) {

        for (var i = 0, ei; ei = events[i]; i++) {
            if (window.attachEvent) {
                container.attachEvent('on' + ei, handlers[i]);
            }
            else if (window.addEventListener) {
                container.addEventListener(ei, handlers[i], false);
            }
            else {
                container['on' + ei] = handlers[i];
            }

            cachedEvents[ei] = handlers[i];
        }
    }

    function un(events) {
        for (var i = 0, ei; ei = events[i]; i++) {
           if (window.detachEvent) {
                container.detachEvent('on' + ei, cachedEvents[ei]);
            }
            else if (window.addEventListener) {
                container.removeEventListener(ei, cachedEvents[ei], false);
            }
            else {
                container['on' + ei] = function(){};
            }
        }

    }

    function unbind(z, y) {
        for (var w in y) {
            var idx =  z[ANTI_TAG + w];
            var fn = cachedEvent[idx];
            if(fn) {
                if (window.detachEvent) {
                    z.detachEvent('on' + y[w], fn);
                } else {
                    z.removeEventListener(y[w], fn);
                }
            }
            cachedEvent[ idx ] = null;
        }
    }

    function ga(classTag, container) {
        var arr = [];
        var list = container.getElementsByTagName('A');
        var tag = ' ' + classTag + ' ';
        for(var i=0,a; (a = list[i]); i++) {
            if(a.className && (' '+a.className+' ').indexOf(tag) >=0) {
                arr.push(a);
            }
        }
        return arr;
    }

    /*接口函数*/
    return {
        getAntiTag : function() {
            return ANTI_TAG;
        },

        /*设置校验时间戳*/
        setTimesign: function(timeSign) {
            $bdImTimeSign$ = timeSign;
        },

        /*绑定反作弊事件*/
        bind : function() {
            /*var f = ga( ANTI_TAG ,container);
            for (var t = 0, l = f.length; t < l; t++) {
                m(f[t], ['mouseover', 'mousedown', 'mouseup'], [h, s, e]);
            }*/
            on(
                ['mouseover', 'mousedown', 'mouseup'],
                [h, s, e]
            );
        },
        /*解绑反作弊事件*/
        unbind : function() {
            /*
            var f = ga( ANTI_TAG ,container);
            for (var t = 0, l = f.length; t < l; t++) {
                unbind(f[t], ['mouseover', 'mousedown', 'mouseup']);
            }*/
            un(['mouseover', 'mousedown', 'mouseup']);
        }
    };
};