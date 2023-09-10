<%
Randomize
picz=int(Rnd*3)
%>
<%
Select case picz
case 0
response.redirect("https://ghproxy.net/raw.githubusercontent.com/yf20230412/master/main/TvBox/img/12.jpg")
case 1
response.redirect("https://ghproxy.net/raw.githubusercontent.com/yf20230412/master/main/TvBox/img/13.jpg")
case 2
response.redirect("https://ghproxy.net/raw.githubusercontent.com/yf20230412/master/main/TvBox/img/14.jpg")

End Select
%>