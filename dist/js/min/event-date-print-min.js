jQuery(document).ready(function(e){for(var t=e(".tg-element-8"),r=["January","February","March","April","May","June","July","August","September","October","November","December"],u=0;u<t.length;u++){var n=e(".tg-element-8").eq(u).html(),s=(n=n.substr(0,10)).substr(0,4),a=n.substr(8,n.length),b=n.substr(5,2),l=s,m=a,g=r[parseInt(b)-1]+" "+m+", "+l;e(".tg-element-8").eq(u).html(g)}});