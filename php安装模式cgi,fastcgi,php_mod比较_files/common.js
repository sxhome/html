if (top.location !== self.location) {
    top.location=self.location;
}
function $(objID) {
	return document.getElementById(objID);
}

function showdate(){
var day="";
var month="";
var ampm="";
var ampmhour="";
var myweekday="";
var year="";
mydate=new Date();
myweekday=mydate.getDay();
mymonth=mydate.getMonth()+1;
myday= mydate.getDate();
myyear= mydate.getYear();
year=(myyear > 200) ? myyear : 1900 + myyear;
if(myweekday == 0)
weekday=" ������ ";
else if(myweekday == 1)
weekday=" ����һ ";
else if(myweekday == 2)
weekday=" ���ڶ� ";
else if(myweekday == 3)
weekday=" ������ ";
else if(myweekday == 4)
weekday=" ������ ";
else if(myweekday == 5)
weekday=" ������ ";
else if(myweekday == 6)
weekday=" ������ ";
document.write(year+"��"+mymonth+"��"+myday+"�� "+weekday);
}

function share_sina(str){
    void((function(s,d,e,r,l,p,t,z,c){var f='http://v.t.sina.com.cn/share/share.php?appkey=523897850',u=z||d.location,p=['&url=',e(u),'&title=',e(t||d.title),'&source=',e(r),'&sourceUrl=',e(l),'&content=',c||'gb2312','&pic=',e(p||'')].join('');function a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(s.width-440)/2,',top=',(s.height-430)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();})(screen,document,encodeURIComponent,'','','',str,'','gb2312'));
}