import{g as c,m as u,y as ne,u as r,d as n,p as g,h as V,N as C,F as A,P as p,a as B,b as L,Q as N,c as P,S as le,T as se,t as de}from"./index-C9oSldC4.js";import{i as ie,j as D,r as x,s as T,h as S,m as _,a as R,E as ce,O as F,P as E,b as O,k as ue,l as re,R as oe,d as j,o as ve,p as me,e as M,F as ye,Q,S as q,f as w,n as ge,g as be,L as ke,q as Ce,c as Ve}from"./VAvatar-NebHlYZx.js";const fe=c()({name:"VCardActions",props:u(),setup(e,l){let{slots:t}=l;return ne({VBtn:{slim:!0,variant:"text"}}),r(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Se=g({opacity:[Number,String],...u(),...V()},"VCardSubtitle"),he=c()({name:"VCardSubtitle",props:Se(),setup(e,l){let{slots:t}=l;return r(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ie=ie("v-card-title"),Ae=g({appendAvatar:String,appendIcon:C,prependAvatar:String,prependIcon:C,subtitle:[String,Number],title:[String,Number],...u(),...D()},"VCardItem"),Pe=c()({name:"VCardItem",props:Ae(),setup(e,l){let{slots:t}=l;return r(()=>{var i;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),d=!!(e.appendAvatar||e.appendIcon),v=!!(d||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(S,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(x,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(T,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ie,{key:"title"},{default:()=>{var s;return[((s=t.title)==null?void 0:s.call(t))??e.title]}}),y&&n(he,{key:"subtitle"},{default:()=>{var s;return[((s=t.subtitle)==null?void 0:s.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(S,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(T,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(x,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),xe=g({opacity:[Number,String],...u(),...V()},"VCardText"),Te=c()({name:"VCardText",props:xe(),setup(e,l){let{slots:t}=l;return r(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),pe=g({appendAvatar:String,appendIcon:C,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],..._(),...u(),...D(),...p(),...R(),...ce(),...F(),...E(),...O(),...ue(),...V(),...B(),...re({variant:"elevated"})},"VCard"),De=c()({name:"VCard",directives:{Ripple:oe},props:pe(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:o}=L(e),{borderClasses:d}=j(e),{colorClasses:v,colorStyles:m,variantClasses:y}=ve(e),{densityClasses:i}=me(e),{dimensionStyles:s}=N(e),{elevationClasses:f}=M(e),{loaderClasses:H}=ye(e),{locationStyles:z}=Q(e),{positionClasses:G}=q(e),{roundedClasses:J}=w(e),b=ge(e,t),K=P(()=>e.link!==!1&&b.isLink.value),k=P(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return r(()=>{const U=K.value?"a":e.tag,W=!!(a.title||e.title!=null),X=!!(a.subtitle||e.subtitle!=null),Y=W||X,Z=!!(a.append||e.appendAvatar||e.appendIcon),$=!!(a.prepend||e.prependAvatar||e.prependIcon),ee=!!(a.image||e.image),ae=Y||$||Z,te=!!(a.text||e.text!=null);return le(n(U,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},o.value,d.value,v.value,i.value,f.value,H.value,G.value,J.value,y.value,e.class],style:[m.value,s.value,z.value,e.style],href:b.href.value,onClick:k.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[ee&&n("div",{key:"image",class:"v-card__image"},[a.image?n(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ae&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),te&&n(Te,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(fe,null,{default:a.actions}),Ce(k.value,"v-card")]}}),[[se("ripple"),k.value&&e.ripple]])}),{}}}),Be=g({color:String,..._(),...u(),...p(),...R(),...F(),...E(),...O(),...V(),...B()},"VSheet"),_e=c()({name:"VSheet",props:Be(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=L(e),{backgroundColorClasses:o,backgroundColorStyles:d}=Ve(de(e,"color")),{borderClasses:v}=j(e),{dimensionStyles:m}=N(e),{elevationClasses:y}=M(e),{locationStyles:i}=Q(e),{positionClasses:s}=q(e),{roundedClasses:f}=w(e);return r(()=>n(e.tag,{class:["v-sheet",a.value,o.value,v.value,y.value,s.value,f.value,e.class],style:[d.value,m.value,i.value,e.style]},t)),{}}});export{De as V,_e as a,Te as b,fe as c};