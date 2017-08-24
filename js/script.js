function idClickListener(t,e){document.getElementById(t).addEventListener("click",e)}function queryClickListener(t,e){document.querySelectorAll(t).forEach(function(t){t.addEventListener("click",e)})}function fx(t){var e=document.getElementById(t),n=0,a=1,o=1;return fx.transition=function(t,e,a,i,s){for(var l=0;l<o;l++)setTimeout(function(){t+=Number((e-n)/o),i(t)},50*(l+1))},fx.fadeIn=function(t){t||(t=400),o=t/50,"none"==window.getComputedStyle(e).getPropertyValue("display")&&(e.dataset.fxDisplay?e.style.display=e.dataset.fxDisplay:e.style.display="block",a=e.dataset.fxOpacity||Number(e.style.opacity)||1,e.style.opacity=0,fx.transition(0,a,1,function(t){e.style.opacity=t},t),setTimeout(function(){e.style.opacity=1},t))},fx.fadeOut=function(t){t||(t=400),o=t/50,"none"!=window.getComputedStyle(e).getPropertyValue("display")&&(e.dataset.fxDisplay=window.getComputedStyle(e).getPropertyValue("display"),a=e.style.opacity?Number(e.style.opacity):1,e.dataset.fxOpacity=a,n=a,fx.transition(a,0,-1,function(t){e.style.opacity=t},t),setTimeout(function(){e.style.display="none",e.style.opacity=e.dataset.fxOpacity},t))},fx}function tutorial(t){navState[0]&&handleNavButtons(navState[0]),t||(t=0),isTutorialOn=1,window.scrollTo(0,0);var e=0;switch(t){case 0:document.getElementById("username").value="",document.getElementById("input").style.zIndex="1004",document.getElementById("tutorial").style.display="block",e=document.getElementById("username").getBoundingClientRect().bottom,document.getElementById("tutorial").style.top=e+35,document.getElementById("bg2").style.display="block",document.getElementById("tutStep1").style.display="block",document.getElementById("tutStep2").style.display="none";break;case 1:document.getElementById("tutStep1").style.display="none",document.getElementById("tutStep2").style.display="block",e=document.getElementById("username").getBoundingClientRect().bottom,document.getElementById("tutorial").style.top=e+35;break;case 2:document.getElementById("tutStep1").style.display="none",document.getElementById("tutStep2").style.display="block",document.getElementById("suggest").style.zIndex="1004",e=document.getElementById("suggest").getBoundingClientRect().bottom,document.getElementById("tutorial").style.top=e+55,document.getElementById("bg2").style.display="block";break;case 3:document.getElementById("tutorial").style.display="none",document.getElementById("bg2").style.display="none",document.getElementById("input").style.zIndex="auto",document.getElementById("suggest").style.zIndex="auto",isTutorialOn=0}}function shareFunc(t){var e=200;if(!(!0!==t&&shareswitch<2)){var n=document.querySelectorAll(".share");switch(shareswitch){case 0:shareswitch=1,n.forEach(function(t,n){setTimeout(function(){fx(t.id).fadeIn(e)},40*(n-1))}),setTimeout(function(){shareswitch=2},e+40*n.length);break;case 1:break;case 2:shareswitch=1,navState[0]=0,n.forEach(function(t,n){fx(t.id).fadeOut(e)}),setTimeout(function(){shareswitch=0},e+40*n.length)}}}function handleNavButtons(t){if(!navState[1])if(0!=navState[0])switch(navState[1]=1,document.getElementById("bg1").style.height="100%",document.getElementById("bg1").classList.add("ball"),document.getElementById("mainPage").style.display="block",navState[0]==t?setTimeout(function(){navState=[0,0]},500):setTimeout(function(){navState=[0,0],handleNavButtons(t)},500),navState[0]){case 2:document.getElementById("helpArt").style.display="none",document.querySelector('.navButtonsCover[data-child="helpButton"]').style.backgroundColor="transparent";break;case 3:document.getElementById("codeArt").style.display="none",document.querySelector('.navButtonsCover[data-child="code"]').style.backgroundColor="transparent"}else switch(t){case 1:location.hash&&(location.href=location.href.split(location.hash)[0]),navState[0]=1;break;case 2:document.getElementById("bg1").classList.remove("ball"),document.querySelector('.navButtonsCover[data-child="helpButton"]').style.backgroundColor="rgba(0,0,0,0.5)",setTimeout(function(){fx("helpArt").fadeIn(500),document.getElementById("bg1").style.height="auto",document.getElementById("mainPage").style.display="none"},500),setTimeout(function(){navState[1]=0},1e3),navState=[2,1];break;case 3:document.getElementById("bg1").classList.remove("ball"),document.querySelector('.navButtonsCover[data-child="code"]').style.backgroundColor="rgba(0,0,0,0.5)",setTimeout(function(){fx("codeArt").fadeIn(500),document.getElementById("bg1").style.height="auto",document.getElementById("mainPage").style.display="none"},500),setTimeout(function(){navState[1]=0},1e3),navState=[3,1];break;case 4:shareFunc(!0),navState[0]=4}}function trigenter(t){13===t.keyCode&&getValue()}function linkshare(){fx("pageUrl").fadeIn(250),fx("bg2").fadeIn(500)}function pushViews(t,e){AJX(t,function(t){views[e]=t.items[0].statistics.viewCount,e===2*vids-1&&upCharts()})}function extrabutton(){if(0===firstload){if(!internet||notFound||isTutorialOn)return;document.getElementById("showextra").innerHTML="LOADING...";var t=username.length>=24&&"UC"===username.substr(0,2).toUpperCase()?"id":"forUsername",e="https://www.googleapis.com/youtube/v3/channels?part=contentDetails&"+t+"="+username+"&fields=items/contentDetails/relatedPlaylists/uploads&key="+getKey();try{AJX(e,function(e){if(e.items[0].contentDetails.relatedPlaylists.uploads){var n="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+e.items[0].contentDetails.relatedPlaylists.uploads+"&maxResults=50&fields=items/snippet/resourceId/videoId&key="+getKey();AJX(n,function(e){if(e.items){for(var n=0;e.items[n];n++)pushViews("https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+e.items[n].snippet.resourceId.videoId+"&fields=items/statistics/viewCount&key="+getKey(),n);getScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js",function(){isChart=1,fx("showextra").fadeOut(),fx("hideextra").fadeIn(),extraswitch=1;for(var e=[],n=[],a=0;a<vids;a++)e[a]=views[a],n[a]="";var o={labels:n,datasets:[{label:"Views of last"+vids+" videos",fill:!1,borderColor:"rgba(255,50,50,0.5)",pointBorderColor:"rgba(255,50,50,0.5)",pointBackgroundColor:"rgba(255,50,50,1)",data:e}]};myLineChart2=new Chart(document.getElementById("myChart2").getContext("2d"),{type:"line",data:o,gridLines:{display:!1},responsive:!0,maintainAspectRatio:!1});var i=[function(){for(var t=0,e=0;e<vids;e++)t+=Number(views[e]);return t}(),function(){for(var t=0,e=vids;e<2*vids;e++)t+=Number(views[e]);return t}()],s=[Math.floor(i[0]/vids),Math.floor(i[1]/vids)],l={labels:["last "+vids+" videos","last to last "+vids+" videos"],datasets:[{label:"Average Views",borderColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],backgroundColor:["rgba(50,50,255,0.2)","rgba(50,255,50,0.2)"],hoverBackgroundColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],data:s}]};myLineChart3=new Chart(document.getElementById("myChart3").getContext("2d"),{type:"bar",data:l,gridLines:{display:!1},responsive:!0,maintainAspectRatio:!1});var d={labels:["last"+vids+" videos (total views)","last to last "+vids+" videos (total views)"],datasets:[{label:"Total Views",borderColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],backgroundColor:["rgba(50,50,255,0.2)","rgba(50,255,50,0.2)"],hoverBackgroundColor:["rgba(0,0,255,1)","rgba(0,255,0,1)"],data:[i[0],i[1]]}]};myLineChart4=new Chart(document.getElementById("myChart4").getContext("2d"),{type:"doughnut",data:d,gridLines:{display:!1},responsive:!0,maintainAspectRatio:!1}),changeText(document.getElementById("pubDate"),channeldate);var r="https://www.googleapis.com/youtube/v3/channels?part=statistics&"+t+"="+username+"&fields=items/statistics(videoCount,viewCount)&key="+getKey();AJX(r,function(t){t.items[0].statistics.videoCount&&t.items[0].statistics.viewCount?(changeText(document.getElementById("totalVideos"),t.items[0].statistics.videoCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),changeText(document.getElementById("totalViews"),t.items[0].statistics.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))):noConnection("3. undef b.items[0].statistics.videoCount or b.items[0].statistics.viewCount in extrabutton(script.js)")})})}else noConnection("2. undef e.items in extrabutton(script.js)")})}else noConnection("1. undef e.items[0].contentDetails.relatedPlaylists.uploads in extrabutton(script.js)")},noConnection)}catch(t){noConnection(t)}setTimeout(function(){document.getElementById("extraContent").style.display="block"},250),firstload=1}else document.getElementById("showextra").innerHTML="SHOW STATS",0===extraswitch?(isChart=1,fx("showextra").fadeOut(),fx("hideextra").fadeIn(),setTimeout(function(){document.getElementById("extraContent").style.display="block"}),extraswitch=1):(myLineChart1.destroy(),fx("showextra").fadeIn(),fx("hideextra").fadeOut(100),setTimeout(function(){document.getElementById("extraContent").style.display="none"}),extraswitch=0,isChart=0)}function upCharts(){if(!(Number(document.getElementById("vids").value)>25)){vids=Number(document.getElementById("vids").value);for(var t=0,e=0,n=0;n<vids;n++)myLineChart2.data.labels[n]="",myLineChart2.data.datasets[0].data[n]=views[n],t+=Number(views[n]);for(n=vids;n<2*vids;n++)e+=Number(views[n]);myLineChart2.data.labels.splice(vids),myLineChart2.data.datasets[0].data.splice(vids),myLineChart2.data.datasets[0].label="Views of last "+vids+" videos",myLineChart3.data.labels=["last "+vids+" videos","last to last "+vids+" videos"],myLineChart3.data.datasets[0].data[0]=Math.floor(t/vids),myLineChart3.data.datasets[0].data[1]=Math.floor(e/vids),myLineChart4.data.labels=["last "+vids+" videos (total views)","last to last "+vids+" videos (total views)"],myLineChart4.data.datasets[0].data[0]=t,myLineChart4.data.datasets[0].data[1]=e,myLineChart2.update(),myLineChart3.update(),myLineChart4.update()}}var shareswitch=0,navState=[0,0],views=[],extraswitch=0,myLineChart2,myLineChart3,myLineChart4,vids=5;if(!developmentMode)if(window.top!==window.self||window.top.location!=window.self.location)window.top.location=window.self.location;else if("youcount.github.io"!=window.location.hostname||"youcount.github.io"!=window.top.location.hostname)window.location.hostname="youcount.github.io";else if("https:"!=window.location.protocol)try{window.location.protocol="https:"}catch(t){window.location.protocol="https"}var emailParts=["manas.khurana20","gmail","com","&#46;","&#64;"];document.getElementById("email").innerHTML=emailParts[0]+emailParts[4]+emailParts[1]+emailParts[3]+emailParts[2],document.getElementById("email").href="mailto:"+document.getElementById("email").innerHTML;var clickList=[["fb",function(){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value")),"_blank")}],["tw",function(){window.open("https://twitter.com/share?text="+document.getElementById("username").value+" now has  "+actualCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+" subscribers!&url= "+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&hashtags=YouCount","_blank")}],["lnkdIn",function(){window.open("https://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&title="+encodeURIComponent(channelname)+"'s%20Live%20Subscriber%20Count&source=YouCount","_blank")}],["tb",function(){window.open("http://www.tumblr.com/share/link?url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value")),"_blank")}],["rdit",function(){window.open("http://www.reddit.com/submit?url="+encodeURIComponent(document.querySelector("#pageUrl input").getAttribute("value"))+"&title="+encodeURIComponent(channelname)+"s%20Live%20Subscriber%20Count","_blank")}],["link",linkshare],["bg2",function(){isTutorialOn?tutorial(3):(fx("pageUrl").fadeOut(250),fx("bg2").fadeOut(500))}]];clickList.forEach(function(t){idClickListener(t[0],t[1])}),queryClickListener("#input button",getValue),queryClickListener(".suggest",function(t){var e=t.target.dataset.id;e&&getValue(e)}),["showextra","hideextra"].forEach(function(t){idClickListener(t,extrabutton)}),isTutorialOn&&tutorial(),queryClickListener("body",shareFunc),document.getElementById("username").addEventListener("focusin",function(){isTutorialOn&&(document.getElementById("username").value="",tutorial(1)),document.getElementById("username").select()}),document.getElementById("username").addEventListener("focusout",function(){setTimeout(function(){document.getElementById("suggest").style.display="none"},200)}),document.getElementById("username").addEventListener("keyup",function(){var t=document.getElementById("username").value.trim();if(internet){if(!t||"Not Found!"===t||"Loading..."===t||"Refresh the page"===t)return document.getElementById("suggest").style.display="none",void(isTutorialOn&&tutorial(1));document.getElementById("suggest").style.display="block",AJX("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+encodeURIComponent(t)+"&type=channel&maxResults=5&relevanceLanguage=en&key="+getKey(),function(t){try{if(!t.items)return void noConnection("undef e.items in username keyup (script.js)");if(t.pageInfo.totalResults<1)return;var e=document.querySelectorAll(".suggest");e.forEach(function(t,e){t.style.display="block"}),document.querySelectorAll(".suggest div").forEach(function(n,a){try{n.dataset.id=t.items[a].snippet.channelId.trim(),n.textContent=t.items[a].snippet.title}catch(t){e[a].style.display="none"}}),document.querySelectorAll(".suggestImg").forEach(function(n,a){try{n.dataset.id=t.items[a].snippet.channelId.trim(),n.src=t.items[a].snippet.thumbnails.default.url}catch(t){e[a].style.display="none"}})}catch(t){noConnection(t)}},noConnection),isTutorialOn&&tutorial(2)}else document.getElementById("username").value="Refresh the page"});for(var l=50;l>0;l--)views.push(l);if(internet)for(var images=document.getElementsByTagName("img"),pl=0;pl<images.length;pl++)!images[pl].src&&images[pl].id&&"dp"!=images[pl].id&&(images[pl].src="/images/"+images[pl].id+".png");
