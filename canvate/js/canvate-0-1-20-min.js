window.Canvate=function(t){"use strict";if("string"==typeof t&&null==(t=document.getElementById(t)))throw"There is no element with the 'id': "+t;window.check=!0;for(var e=0,i=["ms","moz","webkit","o"],n=0;n<i.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[i[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[n]+"CancelAnimationFrame"]||window[i[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,i){var n=Date.now(),a=Math.max(0,16-(n-e)),l=window.setTimeout(function(){t(n+a)},a);return e=n+a,l}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var a,l,s,h,o,u,r,c,m,f,g,d,w,v,p="mouseOver",x="mouseOut",M="mouseUp",N="mouseDown",C="click",E="function",A="canvas",y="2d",I="image/png",T="Anonymous",D="play",L="playFrom",R="playUntil",S="playBetween",b=function(t){var e,i,n=0,a=0,l=0,s=0,h=0,o=!1,u=t,r={};this.addEventListener=function(t,i,u){if(null!=t&&""!=t&&typeof i===E){null==(e=r[t])&&(e=r[t]=[]);for(var c=e.length,m=0;m<c;m++)if(i[1]==i&&i[0]==u)return;switch(r[t].push([u,i]),t){case C:n++;break;case p:a++;break;case x:l++;break;case N:s++;break;case M:h++}return o=n+a+l+s+h>0,!0}},this.removeEventListener=function(t,i,u){if(null!=t&&""!=t&&typeof i===E&&null!=(e=r[t]))for(var c=e.length,m=0;m<c;m++)if((i=e[m])[1]==i&&i[0]==u){switch(r[t].splice(m,1),t){case C:n--;break;case p:a--;break;case x:l--;break;case N:s--;break;case M:h--}return o=n+a+l+s+h>0,!0}},this.emit=function(t,n){if(null!=t&&""!=t&&null!=(e=r[t])){(n=null==n||"object"!=typeof n?{}:n).type=t,n.target=u;for(var a=e.length,l=0;l<a;l++)(i=e[l])[1].apply(i[0],[n])}},this.hasMouse=function(){return o}},Y=function(t,e,i,n,a,l,s){var h,o,u,r,c,m,f,g,d,w,v,p,x,M,N,C,E,A,y,I,T,D,L,R;return n-e,a-i,E=(f=n*(c=Math.cos(t)))-(g=a*(m=Math.sin(t)))+e,A=(d=n*m)+(w=a*c)+i,y=(x=(v=n+l)*c)-g+e,I=(M=v*m)+w+i,T=x-(N=(p=a+s)*m)+e,D=M+(C=p*c)+i,L=f-N+e,R=d+C+i,{minX:h=Math.min(Math.min(E,y),Math.min(T,L)),minY:o=Math.min(Math.min(A,I),Math.min(D,R)),maxX:u=Math.max(Math.max(E,y),Math.max(T,L)),maxY:r=Math.max(Math.max(A,I),Math.max(D,R)),width:Math.abs(u-h),height:Math.abs(r-o)}},B=["text","size","font","color","interline","textAlign","textBaseline","width","height"],F=function(t,e,i,n,a,l,s){var h=this;this.text=t,this.size=null==e||isNaN(e)?12:e,this.font=null==i?"sans-serif":i,this.color=null==n?"black":n,this.interline=null==a||isNaN(a)?1.313:a,this.textAlign=null==l?"start":l,this.textBaseline=null==s?"top":s,this.autoSize=!0,this.width,this.height,this.naturalWidth,this.naturalHeight;var o,u,r,c,m,f,g,d,w=document.createElement(A),v=w.getContext(y),p=!1,x=[];this.getCanvas=function(){var t=!0,e=B.length;for(c=0;c<e;c++)r=h[B[c]],x[c]!=r&&(t=!1),x[c]=r;return t&&p?w:(null==h.width||null==h.height?(v.textAlign=h.textAlign,v.textBaseline=h.textBaseline,v.fillStyle=h.color,v.font=h.size+"px "+h.font,o=Math.ceil(v.measureText(h.text).width),u=h.interline*h.fontSize):(o=h.width,u=h.height),w.width=o,w.height=u,this.naturalWidth=o,this.naturalHeight=u,v.textAlign=h.textAlign,v.textBaseline=h.textBaseline,v.fillStyle=h.color,v.font=h.size+"px "+h.font,function(t,e,i){for(var n,a=Math.ceil(v.measureText(t).width);a>o&&(m=t.indexOf("-"),f=t.indexOf(" "),m>0||f>0);)g=-1==m?f:-1==f?m:Mat.min(m,f),n=t.slice(0,g+(f==g?1:0)),d=t.slice(g+1),v.fillText(n,0,e),e+=i,a=Math.ceil(v.measureText(d).width),t=d;v.fillText(t,0,e)}(h.text,0,h.interline*h.size),p=t,w)}},_=0,k={},X={},O=function(t){var e=this;this.TEXT_SET="textSet",this.IMAGE_SET="imageSet",this.IMAGE_LOADED="imageLoaded",this.IMAGE_ERROR="imageError",this.CLIP_ADDED="clipAdded",this.CLIP_REMOVED="clipRemoved",this.CYCLE_END="cycleEnd",this.CYCLE_START="cycleStart",this.RENDER="render";var i="clip"+ ++_;X[i]=this,this.name=i,this.x=0,this.y=0,this.width=0,this.height=0,this.alpha=1,this.scaleX=1,this.scaleY=1,this.rotation=0,this.pivotX=0,this.pivotY=0,this.visible=!0,this.isLoop=!1,this.background=null,this.text,this.interline,this.fontSize,this.font,this.textAlign,this.textBaseline,this.fontColor;var n,l,s,h,o,u,r,c,m,f,g,d,w,v,p,x,M,N,C,E,B,z,P,q,W,G,H,U,V,j,J,K,Q,Z,$,tt="auto",et=0,it=0,nt=60,at=1,lt=0,st=0,ht=0,ot=0,ut=new b(this),rt=document.createElement(A),ct=rt.getContext(y),mt=[],ft=[],gt=null,dt=null,wt=!1;this.setPosition=function(t,e){!(null==t||isNaN(t))&&(this.x=t),!(null==e||isNaN(e))&&(this.y=e)},this.setSize=function(t,e){var i=null==t||isNaN(t)&&t!=tt,n=null==e||isNaN(e)&&e!=tt;i||n||t==tt&&e==tt||(null==gt&&null==dt||(t==tt&&(t=e/dt*gt),e==tt&&(e=t/gt*dt)),this.width=t,this.height=e)},this.setScale=function(t,e){!(null==t||isNaN(t))&&(this.scaleX=t),!(null==e||isNaN(e))&&(this.scaleY=e)},this.setPivot=function(t,e){!(null==t||isNaN(t))&&(this.pivotX=t),!(null==e||isNaN(e))&&(this.pivotY=e)},this.fitInto=function(t,e,i,n){if(null!=t&&null!=e&&!isNaN(t)&&!isNaN(e)){(null==i||isNaN(i))&&(i=0),(null==n||isNaN(n))&&(n=0);var a=Math.min(t/gt,e/dt),l=gt*a,s=dt*a;this.setSize(Math.floor(l),tt);var h=Math.floor((t-l)/2),o=Math.floor((e-s)/2);this.x=h+this.pivotX*l+i,this.y=o+this.pivotY*s+n}},this.setAutoWidth=function(){this.setSize(tt,this.height)},this.setAutoHeight=function(){this.setSize(this.width,tt)},this.crop=function(t,i,a,l,s,h){t=null==t?lt:t,i=null==i?st:i,a=null==a?ht:a,l=null==l?ot:l;e.width=null,e.height=null,ht=null,ot=null;var o=document.createElement(A);o.width=a,o.height=l,s=null==s||isNaN(s)?a:s,h=null==h||isNaN(h)?l:h,o.getContext(y).drawImage(n,t,i,a,l,0,0,s,h);var u=document.createElement("img");u.crossOrigin=T,u.src=o.toDataURL(I),this.setImage(o),this.setSize(s,h)},this.setImage=function(t){null!=t&&(m=null,(n=t).crossOrigin=T,gt=t.naturalWidth,dt=t.naturalHeight,gt=null==gt?t.width:gt,dt=null==dt?t.height:dt,this.width=null==this.width||0==this.width?gt:this.width,this.height=null==this.height||0==this.height?dt:this.height,this.setSize(this.width,this.height),ht=null==ht||0==ht?gt:ht,ot=null==ot||0==ot?dt:ot,this.setCycle(lt,st,ht,ot),xt(e.IMAGE_SET,{image:t}))},this.setCycle=function(t,e,i,a,l,s,h){if(f=lt=null==t||isNaN(t)?lt:t,g=st=null==e||isNaN(e)?st:e,d=ht=null==i||isNaN(i)?ht:i,w=ot=null==a||isNaN(a)?ot:a,s=null==s||isNaN(s)?0:s,h=null==h||isNaN(h)?0:h,null==l||isNaN(l)){var o=Math.floor(n.width/d),u=Math.floor(n.height/w);l=at=o*u}for(0==at&&(at=1),ft.length=0,v=0;v<at;v++)if(d*v,ft.push({x:f,y:g,width:d,height:w}),(f+=d)>=gt&&(f=0,g+=w,st>dt))throw new Error("The total frames is out of bound");1<at&&this.setSize(d,tt)},this.setImageById=function(t){var e=document.getElementById(t);if(e.crossOrigin=T,null==e)throw"There is no element with the id: "+t;return this.setImage(e),e},this.loadImage=function(t,i){var n=new Image;n.onload=function(){e.setImage(n),xt(e.IMAGE_LOADED,{image:n,src:t})},n.onerror=function(i){xt(e.IMAGE_ERROR,{src:t})};var a=i?"?"+(new Date).getTime():"";n.crossOrigin=T,n.src=t+a},this.setMask=function(){wt=!0},this.unsetMask=function(){wt=!1},this.setBackground=function(t){this.background=t},this.setRect=function(t,i,n){if(null!=t&&null!=i&&!isNaN(t)&&!isNaN(i)){e.width=null,e.height=null,ht=null,ot=null;var a=document.createElement(A);a.width=t,a.height=i;var l=a.getContext(y);l.fillStyle=n,l.fillRect(0,0,t,i);var s=document.createElement("img");s.crossOrigin=T,s.src=a.toDataURL(I),this.setImage(a)}},this.setText=function(t,e,i,n,a,l){var s=new F(t,e,i,n,a,l);return this.setImage(s.getCanvas()),m=s,s},this.setClipText=function(t){null!=t?(this.setImage(t.getCanvas()),m=t):m=t},this.getId=function(){return i},this.getNewClip=function(t){return new O(t)},this.addNewClip=function(t){var e=new O(t);return this.addClip(e),e},this.getClipAt=function(t){return mt[t]},this.addClip=function(t){null!=t&&t!=this&&this.addClipAt(t,mt.length)},this.addClipAt=function(t,i){if(null!=t&&t!=this&&!isNaN(i)){var n=t.getParent();null!=n&&n.removeClip(t),mt.splice(i,0,t),k[t.getId()]=this,xt(e.CLIP_ADDED,{parent:n})}},this.removeClip=function(t){if(null!=t&&t!=this)for(var e=mt.length,i=0;i<e;i++)if(mt[i]==t)return this.removeClipAt(i)},this.removeClipAt=function(t){if(!isNaN(t||t<0||!(t<mt.length))){var i=mt.splice(t,1)[0],n=k[i.getId()];return k[i.getId()]=null,xt(e.CLIP_REMOVED,{parent:n}),i}},this.removeAllClips=function(){for(;mt.length>0;)this.removeClipAt(0)},this.getTotalClip=function(){return mt.length},this.setDepth=function(t,e){if(null!=t&&t!=this&&!isNaN(e)){e=Math.max(e,0);for(var i=mt.length,n=0;n<i;n++)mt[n]==t&&mt.splice(e,0,mt.splice(n,1)[0])}},this.swapClips=function(t,e){if(null!=t&&null!=e){for(var i,n,a,l=mt.length;--l>-1;)t==(a=mt[l])&&(i=l),e==a&&(n=l);if(null!=i&&null!=n){var s=mt[i],h=mt[n];mt[i]=h,mt[n]=s}}},this.toFront=function(t){null!=t&&this.setDepth(t,mt.length-1)},this.toBack=function(t){null!=t&&this.setDepth(t,0)},this.getParent=function(){return k[i]},this.getClipByProp=function(t,e){return getClipListByProp(t,e)[0]},this.getClipListByProp=function(t,e){for(var i=mt.length,n=[],a=0;a<i;a++){var l;(l=mt[a])[t]==e&&n.push[l]}return n};var vt=function(t){et=it>=t?-1:1,o=t},pt=function(t){if(isNaN(t))throw new Error("The frame must be an integer and is: "+t);return p=(p=(p=t-1)<0?0:p)>=ft.length?ft.length-1:p};this.play=function(){var t=u;r=Date.now(),p=ft.length-1,c=D,h=0,vt(p),xt(e.CYCLE_START,{frame:t,action:c})},this.playFrom=function(t){var i=u;r=Date.now(),p=pt(t),u=p+1,it=p,h=p,c=L,vt(ft.length-1),xt(e.CYCLE_START,{frame:i,action:c})},this.playUntil=function(t){var i=u;r=Date.now(),p=pt(t),h=it,c=R,vt(p),xt(e.CYCLE_START,{frame:i,action:c})},this.playBetween=function(t,i){var n=u;r=Date.now(),x=pt(t),M=pt(i),it=x,h=x,u=x+1,c=S,vt(M),xt(e.CYCLE_START,{frame:n,action:c})},this.stop=function(){var t=u;r=Date.now(),u=(p=it)+1,o=p,c="stop",u=null,c=null,xt(e.CYCLE_START,{frame:t,action:c})},this.stopAt=function(t){var i=u;r=Date.now(),p=pt(t),u=p+1,it=Math.max(Math.min(p,ft.length),0),o=p,c="stopAt",u=null,c=null,xt(e.CYCLE_START,{frame:i,action:c})},this.nextFrame=function(){if(it>=ft.length-1){if(!this.isLoop)return;it=0}var t=u;r=Date.now(),p=Math.max(Math.min(it+1,ft.length),0),u=p+1,it=p,o=p,c="nextFrame",xt(e.CYCLE_START,{frame:t,action:c})},this.prevFrame=function(){if(0==it){if(!this.isLoop)return;it=ft.length-1}var t=u;r=Date.now(),p=Math.max(Math.min(it-1,ft.length),0),u=p+1,it=p,o=p,c="prevFrame",xt(e.CYCLE_START,{frame:t,action:c})},this.getTotalFrames=function(){return at},this.getCurrentFrame=function(){return u},this.setFrameRate=function(t){null==t||isNaN(t)||(nt=t)},this.getFrameRate=function(){return nt},this.emitMouseEvent=function(t,i,n){a==this&&xt(t,{x:i-e.x,y:n-e.y})},this.hasMouse=function(){return s},this.addEventListener=function(t,e,i){ut.addEventListener(t,e,i),s=ut.hasMouse()},this.removeEventListener=function(t,e,i){ut.removeEventListener(t,e,i),s=ut.hasMouse()},this.hasButton=function(){return _hasButton},this.debug=function(){};var xt=function(t,e){ut.emit(t,e)};this.render=function(t,i,a,f){if(0==mt.length&&null==n||0==this.visible)return{};C=ft[N=it];try{lt=C.x,st=C.y,ht=C.width,ot=C.height}catch(t){this.name}if(u=N+1,(E=Date.now())-r>=1e3/nt)if(r=E,it!=o)it+=et,it=Math.max(0,it);else if(0!=et){if(this.isLoop)switch(c){case S:case R:case L:it=h;break;case D:it=0}else et=0;null!=c&&xt(e.CYCLE_END,{frame:u,action:c})}var g,d,w,v,p;B=this.x,z=this.y,Q=this.scaleX,Z=this.scaleY,P=this.width*Q,q=this.height*Z,V=this.pivotX*P*Q,j=this.pivotY*q*Z,W=lt,G=st,H=ht,U=ot,K=this.rotation*Math.PI/180;var x,M,A,y=[];g=null,d=null,w=null,v=null,null!=n&&(null!=m&&(m.autoSize&&(m.width=e.width,m.height=e.height),n=m.getCanvas(),gt=m.naturalWidth,dt=m.naturalHeight,H=gt,U=dt),g=(p=Y(0,B,z,-V,-j,P,q)).minX,d=p.minY,w=p.maxX,v=p.maxY),null!=n?(x=P/gt,M=q/dt,x=isNaN(x)?1:x,M=isNaN(M)?1:M):(x=1,M=1),x*=Q,M*=Z,l=null;var I=B-V,T=z-j,b=mt.length;for(N=0;N<b;N++)J=mt[N],$=J.render(t,i,a-e.x,f-e.y,!1),null!=$.inner&&(A=$.bounds,y.push({canvas:$.inner,x:A.minX,y:A.minY}),Boolean($.clipMouse)&&(l=$.clipMouse),null!=g?(g=Math.min((A.minX+I)*x,g),d=Math.min((A.minY+T)*M,d),w=Math.max((A.maxX+I)*x,w),v=Math.max((A.maxY+T)*M,v)):(g=(A.minX+I)*x,d=(A.minY+T)*M,w=(A.maxX+I)*x,v=(A.maxY+T)*M));var F=Math.abs(w-g),_=Math.abs(v-d);g=(p=Y(K,B,z,-(B-g),-(z-d),F,_)).minX,d=p.minY,w=p.maxX,v=p.maxY,rt.width=p.width,rt.height=p.height,ct.save(),ct.globalAlpha=e.alpha;var k,X,O,tt,at,ut,vt=Q<0?-rt.width:0,pt=Z<0?-rt.height:0,Mt=B-g+vt,Nt=z-d+pt;ct.translate(Mt,Nt),ct.rotate(K),Q=Q<0?-1:1,Z=Z<0?-1:1,ct.scale(Q,Z),null!=e.background&&(ct.fillStyle=e.background,ct.fillRect(0,0,rt.width,rt.height)),null!=n?ct.drawImage(n,W,G,H,U,-V,-j,P,q):(e.width=F,e.height=_,gt=F,dt=_,H=F,U=_),wt&&(ct.globalCompositeOperation="source-in");b=y.length;for(var Ct=0;Ct<b;Ct++)null!=(ut=y[Ct])&&(k=ut.canvas,X=(ut.x-V)*x,O=(ut.y-j)*M,tt=k.width*x,at=k.height*M,ct.drawImage(ut.canvas,X,O,tt,at));if(ct.globalCompositeOperation="source-over",s){var Et=ct.getImageData(a-g,f-d,1,1).data;Et[3]>0&&(l=e)}ct.restore(),rt.id=e.name;var At={inner:rt,clipMouse:l,bounds:p,x:g,y:d};return xt(e.RENDER,{}),e.debug(rt,e.name),At},this.setImage(t)},z=t,P=z.getContext(y),q=function(){},W=function(){void 0!=s&&void 0!=h&&(g="default",Boolean(m)&&m.hasMouse()?(g="pointer",m!=c&&(G(),c=m,a=m,m.emitMouseEvent(p),a=null)):G(),z.style.cursor=g)},G=function(t){Boolean(c)&&c.hasMouse()&&(a=c,c.emitMouseEvent(x,s,h),t&&c.emitMouseEvent(M,s,h),c=null,m=null,a=null)},H=function(){m=null,z.width=f.width,z.height=f.height,l.width=f.width,l.height=f.height,w=f.render(z.width,z.height,s,h),d=w.inner,Boolean(d)&&(P.drawImage(d,w.x,w.y),null!=(v=w.clipMouse)&&(m=v)),q(),requestAnimationFrame(H)};return function(){z.width=z.width,z.height=z.height,l=z.cloneNode(),l.getContext(y),l.width=z.width,l.height=z.height,(f=new O).name="canvateStage",f.setImage(z),delete f.setImage,delete f.setText,delete f.setImageById,delete f.loadImage,z.onmousemove=function(t){t.preventDefault(),r=z.getBoundingClientRect(),o=t.clientX,u=t.clientY,s=(o-r.left)*(z.width/r.width),h=(u-r.top)*(z.width/r.width),q=W},z.onclick=function(t){t.preventDefault(),Boolean(m)&&m.hasMouse()&&(a=m,m.emitMouseEvent(C,s,h),a=null)},z.onmousedown=function(t){t.preventDefault(),Boolean(m)&&m.hasMouse()&&(a=m,m.emitMouseEvent(N,s,h),a=null)},z.onmouseup=function(t){t.preventDefault(),Boolean(m)&&m.hasMouse()&&(a=m,m.emitMouseEvent(M,s,h),a=null)},window.onmouseleave=function(t){console.log("WINDOW LEFT!!")},document.onmouseleave=z.onmouseleave=function(t){G(!0),q=function(){}};new b(z);H()}(),f};