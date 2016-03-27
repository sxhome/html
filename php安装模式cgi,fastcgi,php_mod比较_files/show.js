if (top.location !== self.location) {
top.location=self.location;
}

var strref = document.referrer;
var aurl;
var strurl = document.location.href;
	

//双击鼠标滚动屏幕的代码
var currentpos,timer;
function initialize(){
timer=setInterval ("scrollwindow ()",30);
}
function sc(){
clearInterval(timer);
}
function scrollwindow(){
currentpos=document.body.scrollTop;
window.scroll(0,++currentpos);
if (currentpos !=document.body.scrollTop)
sc();
}


function ContentSize(size){
	var obj=document.all.articlecontent;
	obj.style.fontSize=size+"px";
}





document.onmousedown=sc
document.ondblclick=initialize
window.defaultStatus=":::文章大全:::http://www.itlearner.com/article/:::"; 


var ResizeImageWidthMax=600;
function resizeImages(){
	var imgs=document.images;
	//alert(imgs.length);
	for(var i=3;i<imgs.length;i++){
		if(imgs[i].width<=ResizeImageWidthMax){continue;}
		imgs[i].outerHTML = "<img src='"+imgs[i].src+"' width='"+ResizeImageWidthMax+"' onclick='window.open(this.src)'  alt='按此在新窗口浏览图片' style='cursor:pointer;border:0;'>";
	}
}

function keyit(num){
	d=document;t=d.selection?(d.selection.type!='None'?d.selection.createRange().text:''):(d.getSelection?d.getSelection():'');
	if(num==1){
	void(keyit=window.open('http://www.365key.com/storeit.aspx?t='+escape(d.title)+'&u='+escape(d.location.href)+'&c='+escape(t),'keyit','scrollbars=no,width=475,height=575,left=75,top=20,status=no,resizable=yes'));
	}else{
	void(keyit=window.open('http://vivi.sina.com.cn/collect/icollect.php?pid=itlearner.com&title='+escape(d.title)+'&url='+escape(d.location.href)+'&desc='+escape(t),'vivi','scrollbars=no,width=480,height=480,left=75,top=20,status=no,resizable=yes'));
	}
	keyit.focus();
}


function RecToClipBoard()
{
 var clipBoardContent=window.document.title;
 clipBoardContent+=':' + window.document.location.href;
 window.clipboardData.setData("Text",clipBoardContent);
 alert("复制成功，请粘贴到你的QQ/MSN上推荐给你的好友！\r\n\r\n内容如下：\r\n\r\n" + clipBoardContent);
}

function doSaveAs(){
	if (document.execCommand){
		document.execCommand("SaveAs");
	}
}



/*
document.body.oncopy=function(){
event.returnValue=false;
var t=document.selection.createRange().text;
t += "\r\n本文转摘自『IT学习者』" +  document.location.href;
clipboardData.setData('Text',t);
}
*/

//document.body.oncopy = function () {setTimeout( function () { var text = clipboardData.getData("text");  if (text) { text = text + "\r\n ---★ 本文转摘自『IT学习者』→ "+location.href; clipboardData.setData("text", text); }  }, 100 ) }

window.onload = resizeImages;