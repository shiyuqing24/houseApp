var $lis=$(".status");$lis.on("click",function(){$(this).addClass("active").text("已接单，待反馈")});var $cons=$("section .con");$cons.on("click",function(){location.href="bespoke.html"});var $section=$("section");$section.on("swipeLeft",function(){$(this).css("left","-18%")}),$section.on("swipeRight",function(){$(this).css("left","0")});var $publish=$(".publish"),$f3=$(".f3"),$closepub=$(".bottom");$f3.on("tap",function(){$publish.show()}),$closepub.on("tap",function(){$publish.hide()});