$(document).ready((function(){!function(e){e.fn.touchanddrag=function(o){"object"!=typeof o&&(o={});var t=this,c=o.prev,l=o.next,r=parseInt(o.countScroll);(r<=0||isNaN(r))&&(r=1),"object"==typeof c&&c.click((function(){scrollByClick(-1)})),"object"==typeof l&&l.click((function(){scrollByClick(1)}));var n=parseInt(o.deltaMoveNotClick);(n<=0||isNaN(n))&&(n=50);var a=parseInt(o.deltaTimeNotClick);(a<=0||isNaN(a))&&(a=50),scrollByClick=function(e){var o=t.scrollLeft()+e*getScroll(e);t.animate({scrollLeft:o},300,checkScroll)},getScroll=function(e){var o=0;e>0&&(o=1);for(var c=t.width()*o+t.scrollLeft(),l=0,n=t.children(),a=0;a<n.length;){for(var i=0,s=a;s<a+r;s++)s<n.length&&(i+=n.eq(s).width());if((l+=i)>c)return i;a+=r}return 0},getMaxScroll=function(){return t.prop("scrollWidth")-t.width()},checkScroll=function(){"object"==typeof c&&(0==t.scrollLeft()?c.addClass("hidden"):e("#headerTags .header-tags-list").width()<=e("#headerTags").width()&&c.removeClass("hidden")),"object"==typeof l&&(t.scrollLeft()==getMaxScroll()?l.addClass("hidden"):e("#headerTags .header-tags-list").width()<=e("#headerTags").width()&&l.removeClass("hidden"))};var i,s=0,d=0,f=0;return t.mousedown((function(o){s=o.pageX,d=t.scrollLeft(),f=Date.now();var c=function(e){1==e.which?(i=e.pageX-s,t.scrollLeft(d-i)):l()},l=function(o){e(document).off("mousemove",c).off("mouseup",l),t.off("mouseleave",r),checkScroll()},r=function(e){1==e.which&&l()};e(document).on("mousemove",c),e(document).on("mouseup",l).on("contextmenu",l),t.on("mouseleave",r),e(window).on("blur",l)})),t.find("a").on("click",(function(e){var o=e.pageX-s;o<0&&(o=-o);var t=Date.now();(o>n||t-f>a)&&e.preventDefault()})),t.scroll((function(){checkScroll()})),checkScroll(),this}}(jQuery);var e={prev:$("#headerTags .arrow-left"),next:$("#headerTags .arrow-right"),countScroll:2,deltaMoveNotClick:50,deltaTimeNotClick:500};$("#headerTags .header-tags-list").touchanddrag(e)}));