function GetQueryString(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i");var c=window.location.search.substr(1).match(b);if(c!=null){return(c[2])}return null}function getElementsByClassName(b){if(document.getElementsByClassName){return document.getElementsByClassName(b)}var e=[];var c=document.getElementsByTagName("*");var d=c.length;var a=new RegExp("(\\s+|^)"+b+"(\\s+|$)");for(i=0,j=0;i<d;i++){if(a.test(c[i].className)){e[j]=c[i];j++}}return e}function insertRule(c,b,d,a){if(c.insertRule!=null){c.insertRule(b+"{"+d+"}",a)}else{if(c.addRule!=null){c.addRule(b,d,a)}}}function jdangle(){var c=GetQueryString("adflag");var b=document.styleSheets[0];if(document.styleSheets[0].cssRules){var a=document.styleSheets[0].cssRules}else{var a=document.styleSheets[0].rules}if(c==1){insertRule(b,".jdAdPn .jdAbLogoBot","width:18px; height:18px;background:url('http://img11.360buyimg.com/da/g15/M05/0E/1C/rBEhWlJYrAEIAAAAAAACetYAYQwAAECuwP__W4AAAKS951.png') no-repeat",a.length);insertRule(b,".jdAdPn .jdAbLogoBot:hover",'width:75px;height:18px;background-image:url("http://img12.360buyimg.com/da/g13/M09/10/03/rBEhVFJYrDAIAAAAAAAHoRFcOGsAAECrwP_uYQAAAe5174.png")!important',a.length);insertRule(b,".j_bottomlogo","width:75px;height:18px;",a.length);insertRule(b,".j_bottomlogo a",'width:75px;height:18px;background-image:url("http://img11.360buyimg.com/da/g15/M05/0E/1C/rBEhWlJYrAEIAAAAAAACetYAYQwAAECuwP__W4AAAKS951.png")!important',a.length);insertRule(b,".j_bottomlogo a:hover",'width:75px;height:18px;background-image:url("http://img12.360buyimg.com/da/g13/M09/10/03/rBEhVFJYrDAIAAAAAAAHoRFcOGsAAECrwP_uYQAAAe5174.png")!important',a.length)}else{insertRule(b,".jdAdPn .jdAbLogoBot","width:24px; height:18px;background:url('http://img30.360buyimg.com/da/jfs/t1696/355/1134920435/1366/e45c2a66/55e40d3fN2a01189f.png') no-repeat",a.length);insertRule(b,".jdAdPn .jdAbLogoBot:hover",'width:81px;height:18px;background-image:url("http://img11.360buyimg.com/da/jfs/t2176/38/116455295/2717/c576a8d2/55efcd1aN19509f1f.png")!important',a.length);insertRule(b,".j_bottomlogo","width:81px;height:18px;",a.length);insertRule(b,".j_bottomlogo a",'width:81px;height:18px;background:url("http://img30.360buyimg.com/da/jfs/t1696/355/1134920435/1366/e45c2a66/55e40d3fN2a01189f.png") no-repeat right bottom!important',a.length);insertRule(b,".j_bottomlogo a:hover",'width:81px;height:18px;background-image:url("http://img11.360buyimg.com/da/jfs/t2176/38/116455295/2717/c576a8d2/55efcd1aN19509f1f.png")!important',a.length)}}if(window.addEventListener){window.addEventListener("load",jdangle)}else{window.attachEvent("onload",jdangle)};