(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var E;const C=window,f=C.trustedTypes,I=f?f.createPolicy("lit-html",{createHTML:h=>h}):void 0,p=`lit$${(Math.random()+"").slice(9)}$`,j="?"+p,z=`<${j}>`,g=document,H=(h="")=>g.createComment(h),x=h=>h===null||typeof h!="object"&&typeof h!="function",W=Array.isArray,V=h=>W(h)||typeof(h==null?void 0:h[Symbol.iterator])=="function",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,P=/>/g,_=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,N=Symbol.for("lit-noChange"),a=Symbol.for("lit-nothing"),R=new WeakMap,v=g.createTreeWalker(g,129,null,!1),Z=(h,t)=>{const e=h.length-1,s=[];let i,o=t===2?"<svg>":"",n=y;for(let r=0;r<e;r++){const l=h[r];let A,d,c=-1,$=0;for(;$<l.length&&(n.lastIndex=$,d=n.exec(l),d!==null);)$=n.lastIndex,n===y?d[1]==="!--"?n=O:d[1]!==void 0?n=P:d[2]!==void 0?(D.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=_):d[3]!==void 0&&(n=_):n===_?d[0]===">"?(n=i??y,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,A=d[1],n=d[3]===void 0?_:d[3]==='"'?B:L):n===B||n===L?n=_:n===O||n===P?n=y:(n=_,i=void 0);const M=n===_&&h[r+1].startsWith("/>")?" ":"";o+=n===y?l+z:c>=0?(s.push(A),l.slice(0,c)+"$lit$"+l.slice(c)+p+M):l+p+(c===-2?(s.push(void 0),r):M)}const u=o+(h[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(h)||!h.hasOwnProperty("raw"))throw Error("invalid template strings array");return[I!==void 0?I.createHTML(u):u,s]};class b{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const u=t.length-1,r=this.parts,[l,A]=Z(t,e);if(this.el=b.createElement(l,s),v.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(i=v.nextNode())!==null&&r.length<u;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(p)){const $=A[n++];if(d.push(c),$!==void 0){const M=i.getAttribute($.toLowerCase()+"$lit$").split(p),w=/([.?@])?(.*)/.exec($);r.push({type:1,index:o,name:w[2],strings:M,ctor:w[1]==="."?F:w[1]==="?"?k:w[1]==="@"?G:S})}else r.push({type:6,index:o})}for(const c of d)i.removeAttribute(c)}if(D.test(i.tagName)){const d=i.textContent.split(p),c=d.length-1;if(c>0){i.textContent=f?f.emptyScript:"";for(let $=0;$<c;$++)i.append(d[$],H()),v.nextNode(),r.push({type:2,index:++o});i.append(d[c],H())}}}else if(i.nodeType===8)if(i.data===j)r.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(p,d+1))!==-1;)r.push({type:7,index:o}),d+=p.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function m(h,t,e=h,s){var i,o,n,u;if(t===N)return t;let r=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const l=x(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((o=r==null?void 0:r._$AO)===null||o===void 0||o.call(r,!1),l===void 0?r=void 0:(r=new l(h),r._$AT(h,e,s)),s!==void 0?((n=(u=e)._$Co)!==null&&n!==void 0?n:u._$Co=[])[s]=r:e._$Cl=r),r!==void 0&&(t=m(h,r._$AS(h,t.values),r,s)),t}class q{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(s,!0);v.currentNode=o;let n=v.nextNode(),u=0,r=0,l=i[0];for(;l!==void 0;){if(u===l.index){let A;l.type===2?A=new T(n,n.nextSibling,this,t):l.type===1?A=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(A=new J(n,this,t)),this.u.push(A),l=i[++r]}u!==(l==null?void 0:l.index)&&(n=v.nextNode(),u++)}return o}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{constructor(t,e,s,i){var o;this.type=2,this._$AH=a,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=m(this,t,e),x(t)?t===a||t==null||t===""?(this._$AH!==a&&this._$AR(),this._$AH=a):t!==this._$AH&&t!==N&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):V(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==a&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=b.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(s);else{const n=new q(o,this),u=n.v(this.options);n.p(s),this.T(u),this._$AH=n}}_$AC(t){let e=R.get(t.strings);return e===void 0&&R.set(t.strings,e=new b(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new T(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class S{constructor(t,e,s,i,o){this.type=1,this._$AH=a,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=a}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=m(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const u=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=m(this,u[s+r],e,r),l===N&&(l=this._$AH[r]),n||(n=!x(l)||l!==this._$AH[r]),l===a?t=a:t!==a&&(t+=(l??"")+o[r+1]),this._$AH[r]=l}n&&!i&&this.j(t)}j(t){t===a?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===a?void 0:t}}const K=f?f.emptyScript:"";class k extends S{constructor(){super(...arguments),this.type=4}j(t){t&&t!==a?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class G extends S{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=m(this,t,e,0))!==null&&s!==void 0?s:a)===N)return;const i=this._$AH,o=t===a&&i!==a||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==a&&(i===a||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){m(this,t)}}const U=C.litHtmlPolyfillSupport;U==null||U(b,T),((E=C.litHtmlVersions)!==null&&E!==void 0?E:C.litHtmlVersions=[]).push("2.6.1");const Q=(h,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=o._$litPart$;if(n===void 0){const u=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new T(t.insertBefore(H(),u),u,void 0,e??{})}return n._$AI(h),n};Q(view(),document.body);
