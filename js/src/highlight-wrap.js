// build time:Mon May 10 2021 14:07:41 GMT+0800 (GMT+08:00)
function initMacPanel(){var a=$(".highlight").not(".gist .highlight");for(var t=0;t<a.length;t++){var e=$(a[t]);var i=e.attr("class");var r=/highlight(\s?)([a-zA-Z]*)/;r.test(i);var n=RegExp.$2||"plain";var o=$("<div>").attr("data-rel",n.toUpperCase()).addClass("highlight-wrap");var c=e.wrap(o);c.before('<button class="copy-btn" data-clipboard-snippet=""><i class="fa fa-clipboard"></i></button>')}}function initClipboard(){var a=new ClipboardJS(".copy-btn",{target:function(a){var t=a.parentElement;var e=t.querySelector(".code");return e}});a.on("success",function(a){var t=a.trigger;var e=t.querySelector("i");e.className="fa fa-check";t.onmouseleave=function(t){a.clearSelection();setTimeout(function(){e.className="fa fa-clipboard"},1e3)}})}$(document).ready(function(){initMacPanel();initClipboard()});
//rebuild by neat 