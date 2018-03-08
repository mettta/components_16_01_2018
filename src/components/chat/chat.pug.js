function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function chatTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Fcomponents\u002Fchat\u002Fchat.pug":"ul(class= blockname + '__messages')\n\teach message in messages\n\t\tli(class= blockname + '__message')\n\t\t\tif name \n\t\t\t\tspan(class= blockname + '__message_name') = name : \n\t\t\telse \n\t\t\t\tspan(class= blockname + '__message_noname') Гость: \n\t\t\tif text\n\t\t\t\tspan(class= blockname + '__message_text') = text\n\t\t\telse\n\t\t\t\tspan(class= blockname + 'message_placeholder') промолчал..."};
;var locals_for_with = (locals || {});(function (blockname, messages, name, text) {var pug_indent = [];
;pug_debug_line = 1;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n\u003Cul" + (pug_attr("class", pug_classes([blockname + '__messages'], [true]), false, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var message = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n  \u003Cli" + (pug_attr("class", pug_classes([blockname + '__message'], [true]), false, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
if (name) {
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + '__message_name'], [true]), false, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "= name : \u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + '__message_noname'], [true]), false, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "Гость: \u003C\u002Fspan\u003E";
}
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
if (text) {
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + '__message_text'], [true]), false, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "= text\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + 'message_placeholder'], [true]), false, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "промолчал...\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\n  \u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var message = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\n  \u003Cli" + (pug_attr("class", pug_classes([blockname + '__message'], [true]), false, false)) + "\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
if (name) {
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + '__message_name'], [true]), false, false)) + "\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "= name : \u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + '__message_noname'], [true]), false, false)) + "\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "Гость: \u003C\u002Fspan\u003E";
}
;pug_debug_line = 8;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
if (text) {
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + '__message_text'], [true]), false, false)) + "\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "= text\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([blockname + 'message_placeholder'], [true]), false, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fcomponents\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "промолчал...\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\n  \u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n\u003C\u002Ful\u003E";}.call(this,"blockname" in locals_for_with?locals_for_with.blockname:typeof blockname!=="undefined"?blockname:undefined,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}