window.onkeyup=function(){var e=document.getElementById("username"),n=document.getElementById("pass"),t=document.getElementsByClassName("bt_login")[0],l=e.value,o=n.value;""!=l&&""!=o?(t.disabled=!1,t.style.background="#EA5404",t.onclick=function(){location.href="../person/require.html"}):(t.disabled=!0,t.style.background="#c7c7c7")};