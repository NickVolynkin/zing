$(document).ready(function(){$.each(["id_languages","id_alt_src_langs","-language","-source_language"],function(a,d){var c=$("select[id$='"+d+"']");$.each(c,function(c,b){var b=$(b),a=$("option",b);if(a.length){if(!b.is("[multiple]"))var d=$(":selected",b);var e=$.makeArray(a);e.sort(function(b,a){return $(b).text()>$(a).text()});a.remove();b.append($(e));if(!b.is("[multiple]"))b.get(0).selectedIndex=$(e).index(d)}})});var a=function(f){f.preventDefault();$.ajax({url:l("/admin/stats/more"),dataType:"json",
beforeSend:function(){$(".slide").unbind("click",a)},error:function(){$(".slide").bind("click",a)},success:function(a){var c="";$(a).each(function(){c+='<tr><th scope="row">'+this[0]+'</th><td class="stats-number">'+this[1]+"</td></tr>"});$("tbody.slidethis").append(c);$("tbody.slidethis").slideDown("fast");$("tbody.slidethis").next("tbody").remove()}})};$(".slide").bind("click",a);$("td.DELETE input[type=checkbox]").click(function(){$(this).parents("tr").toggleClass("delete-selected")});$("td[class!=DELETE] input[type=checkbox]").click(function(){$("input[type=checkbox][checked]",
$(this).parent().siblings("td[class!=DELETE]")).length||$(this).parents("tr").toggleClass("other-selected")})});
