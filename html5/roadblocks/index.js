
!function e(t,n,r){function a(i,s){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return a(n?n:e)},l,l.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t){function n(e,t,n,r,a,o,i,s,c,u,l){e.beginPath(),e.moveTo(t,n),e.lineTo(r,a),e.lineTo(o,i),e.lineTo(s,c),e.closePath(),e.fillStyle=u,e.strokeStyle=l,e.stroke(),e.fill()}var r=e("./shadecolor");t.exports=function(e,t,a,o,i,s,c,u){e.globalAlpha=u||1,e.lineWidth=1,n(e,t,a,t-o,a-.5*o,t-o,a-s-.5*o,t,a-1*s,c,r(c,-5)),n(e,t,a,t+i,a-.5*i,t+i,a-s-.5*i,t,a-1*s,r(c,10),r(c,25)),n(e,t,a-s,t-o,a-s-.5*o,t-o+i,a-s-(.5*o+.5*i),t+i,a-s-.5*i,r(c,20),r(c,30)),e.globalAlpha=1}},{"./shadecolor":9}],2:[function(e,t){function n(e,t,n,r){var a,o,i;for(o=0;t>o;o++)for(e[o]||(e[o]=[]),i=0;n>i;i++)a=r(o,i,e[o][i]),a&&(e[o][i]=a);return e}function r(e,t,n){return[(e/(n/2)+t/(n/4))/2,(t/(n/4)-e/(n/2))/2]}function a(e){function t(){e.renderOnly||($.width=w.innerWidth,$.height=w.innerHeight),V=(($.width+$.height)/2-30)/(e.wMod||e.w),G=V/2,Q=V/10,oe.width=H(0)+V,oe.height=G+2,Object.keys(ce).map(function(e){X(e)})}function a(t){touchStartTime=we,t.preventDefault();var n=h(t);Fe=1,ue=n.is&&e.offsetTouch?40:0,Ie=n,Le=n.clientX+n.clientY,Se=0;var r=S(n,0);return De=T(n),Ee=S(n),Ne=g(De[0],De[1],V),r||(Ae=0,je&&(je(),je=0)),Ae?void((1===Oe&&"helipad"===r||0===Oe&&x(n))&&(Ae=!1,Oe=0)):!ne&&x(n)?(Ae=me[0],l("select"),void(Oe=0)):("helipad"===r&&ve.length&&(Ae=ve[ve.length-1],l("select"),Oe=1),"water"===r&&(l("bloop"),k(T(n),m)),void(Ae||(Ce=setTimeout(function(){var t=n.clientX+n.clientY;if(10>Se&&Le>t-15&&t+15>Le){ue=0;var r=T(n),a=S(n),o=e.predef.filter(function(t){return t[2]===e.base?!1:r[0]===t[0]&&r[1]===t[1]?!0:void 0});a&&a!==e.base&&!o.length&&(C(n,e.base),l("boom"),k(r,"#aaaaaa"),A(),ke-=15,O(r,-15),B())}},400))))}function y(e){if(ne||Fe){e.preventDefault(),Se++;var t=h(e);!Ae&&Fe&&(he[0]+=t.clientX-Ie.clientX,he[1]+=t.clientY-Ie.clientY),Ie=t,De=T(t),Ee=S(t),Ne=g(De[0],De[1],V)}}function b(){if(Fe=0,clearTimeout(Ce),Ae){if(x(Ie)||1===Oe&&"helipad"===Ee)return;"helipad"===Ee?(l("place"),1!=Oe&&(ve.push(Ae),me.shift(),se=we,M(T(Ie)))):ne||q(Ae,De)?(s[Ae+"-base"]&&(Ae+="-base"),C(Ie,Ae)&&(l("place"),M(T(Ie)),0===Oe?(se=we,me.shift()):ve.pop(),Oe=0)):(l("error"),l("error",.15)),B(),nextTile=c[me[0]],nextTile&&nextTile.firstrun&&!u[me[0]]&&(j(nextTile.firstrun,nextTile.title,me[[0]]),u[me[0]]=!0)}ne||(Ae=!1,Oe=0,N())}function x(e){return e.clientY<G&&e.clientX>Me&&e.clientX<Me+G}function k(e,t){for(var n=0;8>n;n++)Be.push([we,e[0]-.5,e[1]-.5,2*Math.random()-1,2*Math.random()-1,1.5,ue?800:500,t,-1,1,V/30])}function M(e){for(var t=["#aaaaaa","#cccccc",m],n=0;10>n;n++){var r=Math.random()-.5,a=Math.random()-.5;Be.push([we,e[0]-Math.random(),e[1]-Math.random(),r/4,a/4,0-Math.random()/2,500,t[Math.round(2*Math.random())],-.5,.8,V/50])}}function z(){Be.length&&1e3/be>30&&(Be=Be.filter(function(e){var t=(we-e[0])/e[6];if(t>=1)return!1;var n=e[1]+e[3]*t,r=e[2]+e[4]*t,a=e[5]*G*t*e[8]*t*t,i=g(n,r,V);return o(ee,i[0]+he[0],i[1]+he[1]-a,e[10],e[10],e[10],e[7],t>.5?Math.max(0,e[9]*(1-t)):e[9]),1}))}function q(t,n){if(e.strict&&0===t.indexOf("road"))try{var r=ze[n[0]][n[1]],a=P();ze[n[0]][n[1]]=t;var o=P();if(ze[n[0]][n[1]]=r,o.win)return!0;if(a.lose.length===o.lose.length)return!1}catch(e){return!1}for(var i=0;2>i;i++)if(f(n)===f(e.predef[i].slice(0,2)))return!1;return ze[n[0]]?c[t].p(ze[n[0]][n[1]]):void 0}function T(e,t){var n=r(e.clientX-he[0],e.clientY-he[1]-(0!==t?ue:0),V);return[Math.ceil(n[0]),Math.ceil(n[1])]}function S(e,t){var n=T(e,t);try{return ze[n[0]][n[1]]}catch(e){}}function C(e,t){var n=T(e);try{ze[n[0]][n[1]]=t}catch(e){return 0}return 1}function A(){d.body.className=v+" rumble",setTimeout(function(){d.body.className=v},500)}function j(e,t,n,r){var a=ce[n].c,o=document.createElement("canvas");o.width=a.width,o.height=a.height/1.5;var i=o.getContext("2d");i.drawImage(a,0,0-a.height/3),p.show(e,t,n?o.toDataURL():0,1,r)}function D(e){var t=Math.pow(1.02,Math.max(0,(we-this.start)/3))/200*$.height;e[1]+=t}function E(e){Re.forEach(function(t){var n=[e[0]+t[1][0],e[1]+t[1][1]];try{var r=ze[n[0]][n[1]];if(c[r]){var a=c[r].points||0;Te[n[0]][n[1]]=[a,Te[n[0]][n[1]][0]!==a,1]}else Te[n[0]][n[1]]=[0,0!==Te[n[0]][n[1]][0],1]}catch(e){}})}function N(){fe&&(fe.forEach(function(e){E(e)}),xe=0,n(Te,e.w,e.h,function(e,t,n){!n[2]&&n[0]?(O([e,t],0-n[0]),n[0]=0):n[1]&&O([e,t],n[0]),n[1]=0,n[2]=0,xe+=n[0],F()}))}function O(e,t){return t&&Ye.push([we,t,g(e[0],e[1],V),t>1]),F(),t}function F(){document.querySelector("#p").innerText=xe+ke}function L(){ee.font="bold 25px serif",ee.strokeStyle="#fff",ee.lineWidth=5,Ye.length&&(Ye=Ye.filter(function(e){var t=we-e[0];if(1e3>t){var n=[e[1],e[2][0]+he[0],e[2][1]+he[1]-t/1e3*G-G];ee.globalAlpha=1-t/1e3,ee.fillStyle=e[3]?m:"#FF5566",ee.strokeText.apply(ee,n),ee.fillText.apply(ee,n)}else if(t>1e3)return!1;return!0}),ee.globalAlpha=1)}function I(e,t,n,r){if(ne)return[];if(r||(r=[e]),e[0]===t[0]&&e[1]===t[1])return{win:r};var a,o=ze[e[0]][e[1]],i=c[o],s=n[0]>1?-2+n[0]:n[0]+2;if(i.c[n[0]])a=n;else{var u=Re.filter(function(e){return i.c[e[0]]&&e[0]!==s?!0:void 0});if(!u.length)return{lose:r};a=u[0]}var l,f,d=[e[0]+a[1][0],e[1]+a[1][1]];try{l=ze[d[0]][d[1]],f=c[l]}catch(e){return{lose:r}}var h=a[0]>1?-2+a[0]:a[0]+2;return f&&f.c&&f.c[h]?(r.push(d),I(d,t,a,r)):{lose:r}}function P(){return I(e.predef[0],e.predef[1],Re[1])}function B(){if(!ne){var t=P();if(fe=t.win||t.lose,t&&t.win){var r=function(e,t){we>this.start&&we<this.end&&(e[1]+=0-20*Math.sin((we-this.start)/125),this.s||(this.s=1,E(t)))};t.win.forEach(function(e,t){setTimeout(function(){l("ping"),O(e,10),ke+=10},100*t),qe[e[0]][e[1]]={fn:r,start:100*t+we,end:100*t+we+350}}),l("win",t.win.length/10+.1),l("win",t.win.length/10+.2),setTimeout(function(){e.outro?j(e.outro[0],e.outro[1],e.outro[2],function(){e.onwin&&e.onwin.call(Z)}):e.onwin&&e.onwin.call(Z)},100*t.win.length+2e3)}else{var a=!0;0!==me.length&&n(ze,e.w,e.h,function(t,n,r){r===e.base&&(a=!1)}),a&&e.onlose&&e.onlose.call(Z)}}}function R(e){"function"==typeof e&&(e=e());var t=g(e[1],e[2],V);o(le,0-t[0],0-t[1]-e[0]*G,e[3]*G,e[4]*G,e[5]*G,e[6],e[7])}function Y(e){if(4===e.length){var t=g(e[2],e[3],V);le.translate(0-t[0]-e[1],0-t[1]);var n=s[e[0]];"function"==typeof n&&(n=n(t)),n.forEach(R),le.translate(t[0]-e[1],t[1])}else R(e)}function U(e,t){le.translate(V/2,1.5*V),"function"==typeof e&&(e=e(t)),e.forEach(Y),le.translate(0-V/2,0-1.5*V)}function X(e,t,n){if(t){if(t.lastRender===we)return t;le=t.x,le.clearRect(0,0,t.c.width,t.c.height)}else t={c:d.createElement("canvas"),seed:n},t.c.width=V+1,t.c.height=2*V,le=t.c.getContext("2d"),t.x=le;return t.lastRender=we,U(s[e],t.seed),ce[e]=t,t}function _(e,t,n){var r=ce[n],a=g(e,t,V);a[1]<0-he[1]-V||a[0]<0-he[0]-V||a[1]>0-he[1]+$.height+G||a[0]>0-he[0]+$.width+G||(r?i.animated[n]&&X(n,r):r=X(n),qe[e][t]&&qe[e][t].fn.call(qe[e][t],a,[e,t]),"water"===n&&1e3/be>30?ee.drawImage(r.c,a[0]-V/2,a[1]-1.5*V-2*Math.sin(e+t+we/200)):ee.drawImage(r.c,a[0]-V/2,a[1]-1.5*V),"helipad"===n&&J(a))}function H(e){return 0-G/2+(re-e-1)*(G+ae)}function W(){if(pe&&ye){se&&(Ue=(1-(we-se)/200)*(H(1)-H(0)),we>se+200&&(se=0,Ue=0));for(var e=1;e>-1;e--)ie.fillStyle=0===e?m:"#fff",ie.fillRect(0+e,1-e,Math.round(H(0)+V/2+10),Math.round(G+2*e));for(e=0;re>e;e++){var t=me[e];"undefined"!=typeof t&&(Ae&&0===Oe&&0===e||ie.drawImage(ce[t].c,H(e)+Ue,0-.75*G-(0!==e||Ae?1:5*Math.max(0,Math.sin(we/200))),G,V))}ie.globalAlpha=.5,ie.fillStyle="#fff",ie.fillRect(0,1,H(0)-G/2,G-1),ie.globalAlpha=1,ee.drawImage(oe,0,10)}}function J(e){ve.forEach(function(t,n){1===Oe&&n===ve.length-1?Fe||ee.drawImage(ce[t].c,e[0]-V/2,e[1]-1.5*V-G/10*(n+1)-5*Math.abs(Math.sin(we/200))):ee.drawImage(ce[t].c,e[0]-V/2,e[1]-1.5*V-G/10*(n+1))})}function K(t){if(te){if(be=.9*be+.1*(Date.now()-we),we=Date.now(),ee.fillStyle="#191F27",e.renderOnly||ee.fillRect(0,0,$.width,$.height),ee.translate(he[0],he[1]),n(ze,e.w,e.h,_),ee.translate(0-he[0],0-he[1]),!e.renderOnly){if(W(),pe)if(ne&&Ae&&Ne)ee.drawImage(ce.ok.c,Ne[0]-V/2+he[0],Ne[1]-1.5*V+he[1]);else if(Ae)if(Fe){if(ee.drawImage(ce[Ae].c,Ie.clientX-V/2,Ie.clientY-1.25*V-ue),Ne&&ze[De[0]]&&ze[De[0]][De[1]]){var r="helipad"===Ee||q(Ae,De)?"ok":"notok";ee.drawImage(ce[r].c,Ne[0]-V/2+he[0],Ne[1]-1.5*V+he[1])}}else 0===Oe&&ee.drawImage(ce[Ae].c,H(0),0-V);L()}z(),t!==!1&&requestAnimationFrame(K)}}var V,G,Q,Z=this,$=e.canvas,ee=$.getContext("2d"),te=!0,ne="Free"===e.gameType,re=4,ae=15,oe=d.createElement("canvas"),ie=oe.getContext("2d"),se=0,ce={ok:1,notok:1,dump:1,forest:1};ne&&i.placeable.map(function(e){ce[e]=1}),t();var ue,le,fe,de=e.h*G/4,he=[$.width/2,$.height/2-de+G/4],pe=1,me=[],ve=[],ge=i.placeable,we=Date.now(),ye=1,be=0,xe=0,ke=0;F(),e.dist?me=e.dist.map(function(t){return X(ge[t],void 0,e.seed++),ge[t]}):0===e.dist&&(ye=0);var Me=H(0),ze=n([],e.w,e.h,function(){return e.base}),qe=n([],e.w,e.h,function(){return 0}),Te=n([],e.w,e.h,function(){return[0,0]});e.predef.forEach(function(e){ze[e[0]][e[1]]=e[2]});var Se,Ce,Ae,je,De,Ee,Ne,Oe,Fe,Le,Ie=!1,Pe=[["resize",t,window],["touchstart",a],["touchmove",y],["touchend",b],["mousedown",a],["mousemove",y],["mouseup",b]];e.renderOnly||(d.body.className=v,Pe.forEach(function(e){(e[2]||$).addEventListener(e[0],e[1],!0)}));var Be=[];Z.setTile=function(e,t){Ae=e,je=t},Z.destroy=function(t){function r(){te=!1,Pe.forEach(function(e){(e[2]||$).removeEventListener(e[0],e[1],!0)}),d.body.className="",t&&t()}t?(qe=n([],e.w,e.h,function(){var e=we+100*Math.random();return{fn:D,start:e,end:e+500}}),setTimeout(r,1e3),setTimeout(A,50),l("boom")):r()},this.ss=function(){pe=0,K();var e=d.createElement("a");e.setAttribute("target","_blank"),e.setAttribute("download","screenshot.png"),e.href=$.toDataURL("image/png"),e.click(),pe=1,K()};var Re=[[0,[-1,0]],[1,[0,-1]],[2,[1,0]],[3,[0,1]]],Ye=[],Ue=0;K(!e.renderOnly),e.renderOnly||e.intro&&j.apply(this,e.intro)}var o=e("./drawCube"),i=e("./sprites.js"),s=i.sprites,c=i.tileLogic,u={},l=e("./sfx"),f=JSON.stringify,h=e("./touchlist"),f=JSON.stringify,p=e("./modal"),m="#55bbff",v="ingame",g=e("./getisometricpos");t.exports=a},{"./drawCube":1,"./getisometricpos":3,"./modal":7,"./sfx":8,"./sprites.js":10,"./touchlist":11}],3:[function(e,t){t.exports=function(e,t,n){return[(e-t)*(n/2),(e+t)*(n/4)]}},{}],4:[function(e){function t(){b.setTile("",0),s.className="",s=0}function n(e,t){var n=d.createElement("canvas");n.width=t,n.height=t;new o({tileSize:t,w:1,h:1,wMod:1.3,canvas:n,base:e,predef:[],dist:[],renderOnly:!0});return n.toDataURL("image/png")}function r(e,t){d.body.className="",y=e,t=Number(t),g=t;var n=u[e][t];return n?(n.canvas=i,n.gameType=e,n.offsetTouch="Free"!==e,n.onwin=function(){b.destroy(),r(e,t+1),w.location.hash=e+"-"+(t+1),m.set(e+(t+1),1)},n.onlose=function(){b.destroy(function(){p.show("Looks like you got stuck. Tap to try again.","Level failed",null,1,function(){r(e,t)})})},void(b=new o(n))):void(b?p.show("Congratulations, you've finished all the levels. Be sure to share this game with your friends!","You won!",0,0,a):a())}function a(){v.className="",f(i,c,0,1),d.querySelector("#menu").innerHTML=[["Puzzle","roadx-base"],["Free map","dump"]].map(function(e){var t=' data-action="'+e[0]+'"';return"<div"+t+"><img"+t+' src="'+n(e[1],Math.min(i.width,i.height)/4)+'">'+e[0]+"</div>"}).join(""),d.body.className="menu",h("dialog")}var o=e("./game");window.d=document,window.w=window;var i=d.querySelector("canvas");i.width=innerWidth,i.height=innerHeight;var s,c=i.getContext("2d"),u=e("./l"),l=e("./sprites"),f=e("./logo"),h=e("./sfx"),p=e("./modal"),m={set:function(e,t){localStorage[e]=t},state:localStorage},v=d.querySelector("#tl");d.onkeydown=function(e){if(e=e||window.event,27==e.keyCode)if(s)t();else if(p.visible)p.hide();else if(b);else try{window.close()}catch(e){}},d.body.onclick=function(e){var t=e.target.dataset;return x[t.action]?(x[t.action](t),!1):b[t.action]?(b[t.action](t),!1):void 0};var g,y,b=0,x={restart:function(){b.destroy(function(){r(y,g)})},menu:function(){b&&(b.destroy(function(){a()}),b=0)},Puzzle:function(){p.show(u.Puzzle.map(function(e,t){var n=!t||m.state["Puzzle"+t];return'<a class="pill '+(n?"active":"")+'" data-action="'+(n?"l":"")+'" data-l="'+t+'">'+(t+1)+". "+e.name+"</a>"}).join(""),"Puzzle play",null,0,0,"Back")},"Free map":function(){m.state.Puzzle5?(v.innerHTML=l.placeable.map(function(e){return'<img id="t'+e+'" src="'+n(e,128)+'" data-action="p" data-s="'+e+'">'}).join(""),v.className="active",r("Free",0)):p.show("Unlock this mode by completing more puzzles.","Mode locked")},Exit:function(){window.close()},l:function(e){p.hide(function(){r("Puzzle",e.l)})},p:function(e){var n=s;n&&(n.className=""),s=d.querySelector("#t"+e.s),n===s?t():(s.className="active",b.setTile(e.s,function(){t()}))}};window.AudioContext||window.webkitAudioContext?a():p.show('This browser is too old to run Road Blocks.<a class="pill active" href="http://spacekidgames.com/road-blocks/system-requirements">Find out more</a>',"Unsupported",null,1)},{"./game":2,"./l":5,"./logo":6,"./modal":7,"./sfx":8,"./sprites":10}],5:[function(e,t){function n(e){return Number(e)}function r(e){return e?e.match(/.{8}|.+/g).map(function(e){return String(parseInt(e,36)).substr(1)}).join(""):!1}var a=Object.keys(e("./sprites").sprites),o={Puzzle:[["Roads 101","i76c67-255s-1knunumjd",["Connect from left to right by dragging tiles from the top.","Left to right","roady-base"]],["Town planning","i76c67-65184-1p97t4hl2u15",["Now you've got the hang of it, give it a go with all the tiles.","Your turn","roadx"]],["Reverse the flow","azbmn-1q0ank-1g2hikr6f",["Use the helipad to reverse the order of your tiles.","Stack tiles for later","helipad"]],["The Block Forest","1v2s8v-1qj324h32y-1q6ak2ac1xh4cznx3p",["Building road past special tiles like forests or the helipad gives you extra points.","Bonus points","forest"]],["â˜… Bulldozer Beach","i7b1xa-1q2p0rg4a-1gzj2ngl1pkgajre1jbq4o181xumsg041xxuxo8u1uup921p1l2ks6zg1ouj8oml2bh9tx",["Long press to bulldoze a tile you no longer need.","Bulldoze","dump"],["Congratulations. You've unlocked <b>Free Map</b> mode from the main menu.","Free Map","dump"]],["Palm Island","1vo7ux-gq8p29-1gzk9imq1sdea13u1kz9p2ka1ou7c1b81yeb9toa1tc4t3m1qvtx"],["Loopy Lagoon","juufym-23tbv4l816u-1gzkuybk1kz2judm1jbq4o181xumsg041xxuxo8u1uuph0c55kucn4l"],["Mini Monaco","lj1jeg-1bhgx297at7-1ztkxtp01f53i2vw1dpysny21opahvwp1xhbz7hg1v6adci81l9iuyio1b1oewh41ntzxghi34o8"],["Dual Carriageway","n5zga6-o04u8y-22kz99uk1hatzygi1l5e01zw1k8szvjg1plhv9je1tiqqs261l67rhqd1fgoxwyr"],["Little condo by the sea","1wed7t-1ahr1tavxbe5-1r3foqhe1sde83nn1kzfn8fs22lx2t6o1f3q5hvo1sywaee81l1l2z8n1fo32lgc281qh6l61vv32wmm1l2qqjt01tfxkw0o1a1sx1ai1tpd1b821l8p2xtc1sqlgat51mfusy7k2ppd"]],Free:[[null,"6exf2-a-"]]};Object.keys(o).map(function(e){o[e]=o[e].map(function(e){var t=e[1].split("-").map(r),o=[];t[2]&&(o=t[2].match(/.{4}/g).map(function(e){return e=e.match(/(.)(.)(.+)/).map(n),[e[1],e[2],a[e[3]]]}));var i=t[0].match(/(.+)(.)(.)(.)(..)(.)$/);return{seed:n(t[1]),w:i[2],h:i[3],wMod:i[4],base:a[i[5]],strict:!!i[6],dist:"0"===t[1]?0:t[1].split("").map(n),predef:o,intro:e[2],outro:e[3],name:e[0]}})}),t.exports=o},{"./sprites":10}],6:[function(e,t){var n=[[1,1,1,,,1,1,,,,1,,,1,1,,,1,1,1,,1,,,,1,1,,,,1,1,,1,,1,,,1,1],[1,,1,,1,,,1,,1,,1,,1,,1,,1,,1,,1,,,1,,,1,,1,,,,1,,1,,1,,],[1,1,,,1,,,1,,1,1,1,,1,,1,,1,1,,,1,,,1,,,1,,1,,,,1,1,,,,1],[1,,1,,1,,,1,,1,,1,,1,,1,,1,,1,,1,,,1,,,1,,1,,,,1,,1,,,,1],[1,,1,,,1,1,,,1,,1,,1,1,,,1,1,1,,1,1,1,,1,1,,,,1,1,,1,,1,,1,1,1]],r=e("./drawCube"),a=e("./getisometricpos"),o=e("./shadecolor"),i=e("./sfx");t.exports=function(e,t,s,c){function u(){var c=Date.now()-1e3;if(t.clearRect(0,0,e.width,e.height),n.map(function(e,n){e.map(function(e,i){var s=a(i,n,d),u=(c+10*i-p)/500,m=Math.max(0,screen.height*(1-u));0===m&&v++,1==e&&(r(t,l+2*s[0],f+2*s[1]-m,d,d,.75*d,o("#888888",0-i)),r(t,l+2*s[0],f+2*s[1]-.75*d-m,d,d,.25*d,o(h,0-i)))})}),v&&!m){m=1;for(var g=0;4>g;g++)i("thud",g/9)}1e3>=c-p?requestAnimationFrame(u):s&&s()}var l=e.width/6.5,f=e.height/8,d=e.width/50,h="#55bbff",p=Date.now();c&&(p-=5e3),u();var m=0,v=0}},{"./drawCube":1,"./getisometricpos":3,"./sfx":8,"./shadecolor":9}],7:[function(e,t){function n(e){return parseInt(w.getComputedStyle(e,null).getPropertyValue("height"))}var r=e("./sfx"),a=document.querySelector("#tt"),o=document.querySelector("#s");t.exports={visible:!1,show:function(e,i,s,c,u,l){i=i?"<h1>"+i+"</h1>":"",s=s?'<img class="rubberBand" src="'+s+'">':"",a.innerHTML='<div id="tt-inner"><a class="close">'+(l||"OK")+"</a> "+i+e+s+"</div>",a.style.display="block",o.style.display="block",t.exports.visible=!0,setTimeout(function(){function e(e){e.preventDefault(),r("select"),t.exports.hide(u)}a.className="active",o.className="active";{var i=n(a),s=d.querySelector("#tt-inner");d.querySelector("#tt-inner img")}if(c){s.className="";for(var l=35;l>10&&(s.style.fontSize=l+"px",!(n(s)<i-100));l--);}else s.className="scroll";document.querySelector(".close").onclick=e,o.onclick=e,a.ontouchstart=a.onclick,setTimeout(function(){r("dialog")},10)},1)},hide:function(e){a.className="",o.className="",t.exports.visible=!0,setTimeout(function(){a.style.display="none",o.style.display="none",e&&e()},150)}}},{"./sfx":8}],8:[function(e,t){function n(){this.set=function(e){for(var t=0;24>t;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);var n=this.b+this.c+this.e;if(.18>n){var r=.18/n;this.b*=r,this.c*=r,this.e*=r}}}function r(){var e=this;this._params=new n;var t,r,a,o,i,s,c,u,l,f,d,h;e.r=function(){var t=e._params;o=100/(t.f*t.f+.001),i=100/(t.g*t.g+.001),s=1-t.h*t.h*t.h*.01,c=-t.i*t.i*t.i*1e-6,t.a||(d=.5-t.n/2,h=5e-5*-t.o),u=1+t.l*t.l*(t.l>0?-.9:10),l=0,f=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},e.tr=function(){e.r();var n=e._params;return t=n.b*n.b*1e5,r=n.c*n.c*1e5,a=n.e*n.e*1e5+12,3*((t+r+a)/3|0)},e.s=function(n,p){var m=e._params,v=1!=m.s||m.v,g=m.v*m.v*.1,w=1+3e-4*m.w,y=m.s*m.s*m.s*.1,b=1+1e-4*m.t,x=1!=m.s,k=m.x*m.x,M=m.g,z=m.q||m.r,q=m.r*m.r*m.r*.2,T=m.q*m.q*(m.q<0?-1020:1020),S=m.p?((1-m.p)*(1-m.p)*2e4|0)+32:0,C=m.d,A=m.j/2,j=m.k*m.k*.01,D=m.a,E=t,N=1/t,O=1/r,F=1/a,L=5/(1+m.u*m.u*20)*(.01+y);L>.8&&(L=.8),L=1-L;for(var I,P,B,R,Y,U,X=!1,_=0,H=0,W=0,J=0,K=0,V=0,G=0,Q=0,Z=0,$=0,ee=new Array(1024),te=new Array(32),ne=ee.length;ne--;)ee[ne]=0;for(var ne=te.length;ne--;)te[ne]=2*Math.random()-1;for(var ne=0;p>ne;ne++){if(X)return ne;if(S&&++Z>=S&&(Z=0,e.r()),f&&++l>=f&&(f=0,o*=u),s+=c,o*=s,o>i&&(o=i,M>0&&(X=!0)),P=o,A>0&&($+=j,P*=1+Math.sin($)*A),P|=0,8>P&&(P=8),D||(d+=h,0>d?d=0:d>.5&&(d=.5)),++H>E)switch(H=0,++_){case 1:E=r;break;case 2:E=a}switch(_){case 0:W=H*N;break;case 1:W=1+2*(1-H*O)*C;break;case 2:W=1-H*F;break;case 3:W=0,X=!0}z&&(T+=q,B=0|T,0>B?B=-B:B>1023&&(B=1023)),v&&w&&(g*=w,1e-5>g?g=1e-5:g>.1&&(g=.1)),U=0;for(var re=8;re--;){if(G++,G>=P&&(G%=P,3==D))for(var ae=te.length;ae--;)te[ae]=2*Math.random()-1;switch(D){case 0:Y=d>G/P?.5:-.5;break;case 1:Y=1-G/P*2;break;case 2:R=G/P,R=6.28318531*(R>.5?R-1:R),Y=1.27323954*R+.405284735*R*R*(0>R?1:-1),Y=.225*((0>Y?-1:1)*Y*Y-Y)+Y;break;case 3:Y=te[Math.abs(32*G/P|0)]}v&&(I=V,y*=b,0>y?y=0:y>.1&&(y=.1),x?(K+=(Y-V)*y,K*=L):(V=Y,K=0),V+=K,J+=V-I,J*=1-g,Y=J),z&&(ee[Q%1024]=Y,Y+=ee[(Q-B+1024)%1024],Q++),U+=Y}U*=.125*W*k,n[ne]=U>=1?32767:-1>=U?-32768:32767*U|0}return p}}function a(e){for(var t=atob(e.substr(e.indexOf(",")+1)),n=t.length,r=new Uint8Array(n),a=0;n>a;a++)r[a]=t.charCodeAt(a);return r.buffer}var o=new r,i=function(e){o._params.set(e);var t=o.tr(),n=new Uint8Array(4*((t+1)/2|0)+44),r=2*o.s(new Uint16Array(n.buffer,44),t),a=new Uint32Array(n.buffer,0,44);a[0]=1179011410,a[1]=r+36,a[2]=1163280727,a[3]=544501094,a[4]=16,a[5]=65537,a[6]=44100,a[7]=88200,a[8]=1048578,a[9]=1635017060,a[10]=r,r+=44;for(var i=0,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="data:audio/wav;base64,";r>i;i+=3){var u=n[i]<<16|n[i+1]<<8|n[i+2];c+=s[u>>18]+s[u>>12&63]+s[u>>6&63]+s[63&u]}return c},s=window.AudioContext||window.webkitAudioContext;if(!s)return void(t.exports=function(){});var c=new s,u={};[["select",[2,,.11,.4,.13,.25,,0,,0,,0,,0,,0,,0,1,,0,.1,,1]],["place",[3,,.3,.25,,.08,,-.3,,0,,0,,0,,0,,0,1,,0,,0,.35]],["ping",[2,,.1,.4,.09,.44,,0,,0,,0,,0,,0,,0,1,,0,.1,,.5]],["dialog",[2,,.04,.4,.28,.35,,.2,,.15,.25,,0,.33,,.62,,0,1,,0,,0,.5]],["win",[2,,.14,.4,.5,.56,,0,,0,,0,,.08,,0,,0,1,,0,.1,,.35]],["boom",[3,,.39,.73,.38,.06,,.14,,0,,0,,0,,0,,0,1,,0,,0,.3]],["error",[1,,.15,,,.1,,,,,,,,,,,,,1,,,.1,,.4]],["thud",[3,,.11,.47,.15,.09,,-.3,,0,,0,,0,,0,,0,1,,0,,0,.35]],["bloop",[2,,.25,.4,.15,.2,,.24,,.04,.3,,0,,0,,0,,1,,0,,0,.5]]].forEach(function(e){c.decodeAudioData(a(i(e[1])),function(t){u[e[0]]=t})}),t.exports=function(e,t){if(u[e]){var n=c.createBufferSource();n.buffer=u[e],n.connect(c.destination),t=c.currentTime+(t||0),n.start(t)}}},{}],9:[function(e,t){t.exports=function(e,t){e=e.substr(1);var n=parseInt(e,16),r=Math.round(2.55*t),a=(n>>16)+r,o=(n>>8&255)+r,i=(255&n)+r;return"#"+(16777216+65536*(255>a?1>a?0:a:255)+256*(255>o?1>o?0:o:255)+(255>i?1>i?0:i:255)).toString(16).slice(1)}},{}],10:[function(e,t){function n(e){return-1!==["grass","sand"].indexOf(e)}var r=innerWidth<800?2:1,a="#444444",o="#AE907A",i="#aaaaaa",s="#DC6969",c="#D4ECF1",u="#FAB41D",l="#000000",f="#66aa66",d="#9EC8A0",h="#D6D38C",p="#C8AF9E",m={roady:[[-.25,.9,0,.1,1,.25,i],[-.25,.1,0,.8,1,.2,a],[-.25,0,0,.1,1,.25,i]],roadx:[[-.25,0,.9,1,.1,.25,i],[-.25,0,.1,1,.8,.2,a],[-.25,0,0,1,.1,.25,i]],roadxy:[[-.25,.9,.9,.1,.1,.25,i],["r1",0,0,0],[-.25,.9,0,.1,.1,.25,i],["r2",0,0,0],["rc",0,0,0],["r3",0,0,0],[-.25,0,.9,.1,.1,.25,i],["r4",0,0,0],[-.25,0,0,.1,.1,.25,i]],roadx2yl:[[-.25,.1,.9,.9,.1,.25,i],["r1",0,0,0],[-.25,.9,0,.1,.1,.25,i],[-.25,0,.9,.1,.1,.25,i],["rc",0,0,0],["r3",0,0,0],[-.25,0,0,.1,.9,.25,i]],roadx2yr:[[-.25,.9,.9,.1,.1,.25,i],["r2",0,0,0],["r1",0,0,0],["rc",0,0,0],[-.25,.1,0,.9,.1,.25,i],[-.25,0,.1,.1,.9,.25,i],[-.25,0,0,.1,.1,.25,i]],roady2xl:[[-.25,.9,.9,.1,.1,.25,i],[-.25,0,.9,.9,.1,.25,i],[-.25,.9,0,.1,.9,.25,i],["rc",0,0,0],["r3",0,0,0],["r4",0,0,0],[-.25,0,0,.1,.1,.25,i]],roady2xr:[[-.25,.9,.1,.1,.9,.25,i],["r2",0,0,0],["rc",0,0,0],[-.25,.9,0,.1,.1,.25,i],[-.25,0,.9,.1,.1,.25,i],["r4",0,0,0],[-.25,0,0,.9,.1,.25,i]],forest:[["ground",0,0,0],["grassSurface",0,0,0],["tree",0,.3,.8],["tree",0,.6,.5],["tree",0,.4,.2],["elk",0,.1,.1]],broadx:[["water",0,0,0],["roadx",0,0,0],[0,0,0,1,0,.1,i],[0,0,1,1,0,.1,i]],broady:[["water",0,0,0],["roady",0,0,0],[0,0,0,0,1,.1,i],[0,1,0,0,1,.1,i]],r1:[[-.25,.9,.1,.1,.8,.2,a]],r2:[[-.25,.1,.9,.8,.1,.2,a]],r3:[[-.25,.1,0,.8,.1,.2,a]],r4:[[-.25,0,.1,.1,.8,.2,a]],rc:[[-.25,.1,.1,.8,.8,.2,a]],ground:[[-1,0,0,1,1,.75,"#ae907a"]],grassSurface:[[-.25,0,0,1,1,.25,f]],sandSurface:[[-.25,0,0,1,1,.25,h]],c:[],grass:[["ground",0,0,0],["grassSurface",0,0,0]],sand:[["ground",0,0,0],["sandSurface",0,0,0]],palm:[["ground",0,0,0],["sandSurface",0,0,0],["treePalm",0,.8,.8],["treePalm",0,.4,.4]],building:[["ground",0,0,0],["grassSurface",0,0,0],[0,.2,.4,.8,.6,.8,p],[0,.3,0,.7,.4,.4,p],[0,.3,.05,0,.3,.35,i],[.05,.2,.75,0,.2,.28,c],[.4,.2,.75,0,.2,.28,c],[0,.2,.5,0,.2,.68,c]],test2:[],water:[[-1,0,0,1,1,.1,"#ffff99"],[-.25,0,0,1,1,0,"#55bbff",.3]],helipad:[["ground",0,0,0],[-.25,0,0,1,1,.25,i],[0,.95,.95,.05,.05,.1,s],[0,.05,.05,.9,.9,.05,i],[.05,.2,.2,.6,.1,0,s],[.05,.2,.7,.6,.1,0,s],[.05,.45,.3,.1,.4,0,s],[0,0,0,.05,.05,.1,s],[0,.95,0,.05,.05,.1,f],[0,0,.95,.05,.05,.1,f]],dump:[["ground",0,0,0],[-.25,0,0,1,1,.25,p],["bulldozer",0,.5,.5],[0,.1,.2,.1,.1,.1,p],[0,.35,.25,.1,.1,.1,p],[0,.3,.4,.1,.1,.1,p]],ok:[[0,0,0,1,1,0,"#00ff00",.5]],notok:[[0,0,0,1,1,0,s,.5]],tree:function(){for(var e=Math.sin(new Date/300),t=Math.sin(new Date/150),n=[[0,-.05,-.05,.1,.1,.2,p]],r=5;r>0;r--)n.push([.6-r/11+t*(5-r)/500,-.15+e*(5-r)/300,-0.15-e*(5-r)/300,r/25,r/25,.05,d]);return n},treePalm:function(){for(var e,t,n=Math.sin(new Date/300)/150,a=[],o=0;6>o;o++)a.push([t=5*o/50,e=0-n*o*r,0,.03,.03,.1,p]);return a.push([t,.05+e,0,.02,.15,.02,d]),a.push([t,0+e,0,.2,.08,.05,d]),a.push([t-.05,-.2+e,0,.2,.05,.05,d]),a.push([t,0+e,0,.05,.25,.02,d]),a.push([t,0+e,-.2,.05,.2,.02,d]),a.push([t,-.05+e,-.15,.02,.15,.02,d]),a},elk:function(){var e=Math.sin(new Date/1e3),t=e>0?.05:.15;return[[.15,.09,0,.02,.02,.05,o],[0,-.05,-.05,.02,.02,.1,o],[0,-.05,.03,.02,.02,.1,o],[0,.05,-.05,.02,.02,.1,o],[.1,-.08,-.05,.16,.1,.1,o],[t,-.08,.02,.04,.04,.04,o],[t+.04,-.08,0,.01,.01,.1,o],[t+.09,-.08,-.04,.01,.02,.02,o],[t+.1,-.08,-.04,.01,.01,.05,o],[t+.09,-.08,.06,.01,.02,.02,o],[t+.1,-.08,.08,.01,.01,.05,o],[t+.04,-.08,.04,.01,.01,.1,o]]},bulldozer:function(){var e=Math.sin(new Date/500),t=0-.1*Math.min(0,e);return[[0,0,.1,.3,.3,.1,i],[.02,0,.12,0,.06,.06,l],[.02,0,.22,0,.06,.06,l],[.02,0,.32,0,.06,.06,l],[.04,0,.1,0,.3,.02,u],[.04,0,.1,.3,0,.02,l],[.12,0,.1,.3,.3,.25,"#FAB41D"],[.15,0,.12,0,.1,.2,c],[.2,0,.25,0,.13,.15,c],[.2,.03,.1,.25,0,.15,c],[t,0,.07,.3,.01,.1,i],[t,.29,0,.01,.08,.1,i],[t,0,0,.3,.08,.01,i],[t,0,0,.01,.08,.1,u],[t/2+.01,.05,.1,0,.1,.05,u],[t/4+.025,.05,.2,0,.1,.05,u]]},forest2:[["ground",0,0,0],["grassSurface",0,0,0],["tree",0,.3,.8],["tree",0,.6,.5],["tree",0,.4,.2]]};Object.keys(m).map(function(e){0===e.indexOf("road")&&(m[e+"-base"]=m.ground.concat(m[e]))});var v={roady:{c:[0,1,0,1],p:n},roadx:{c:[1,0,1,0],p:n},roadxy:{c:[1,1,1,1],p:n,firstrun:"Cars will travel through intersections without making turns. You can double back over road you've already placed.",title:"Intersection"},roadx2yl:{c:[1,0,0,1],p:n},roadx2yr:{c:[1,1,0,0],p:n},roady2xl:{c:[0,0,1,1],p:n},roady2xr:{c:[0,1,1,0],p:n},forest:{p:function(e){return"water"!==e?!0:void 0},points:50},building:{p:n,points:100},dump:1,helipad:1,water:1,sand:1,palm:1,broadx:1,broady:1,forest2:1},g=Object.keys(v);g.map(function(e){0===e.indexOf("road")&&(v[e+"-base"]=v[e],v["b"+e]=v[e])}),v.helipad={points:500};var w={forest:1,forest2:1,sand:1,helipad:1,tree:1,elk:1,palm:1,dump:1};t.exports={sprites:m,placeable:g,tileLogic:v,animated:w}},{}],11:[function(e,t){t.exports=function(e){var t=e.touches||[e],n={clientX:t[0].clientX,clientY:t[0].clientY,is:e.touches};return n}},{}]},{},[4]);