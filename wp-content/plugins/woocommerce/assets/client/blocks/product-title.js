(self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[]).push([[6925],{1202:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});let n={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};(0,o(8752).uq)()&&(n={...n,align:{type:"string"}});const l=n},935:(e,t,o)=>{"use strict";o.d(t,{Z:()=>p});var n=o(9196),l=o(7608),r=o.n(l),c=o(2864),s=o(8752),a=o(721),i=o(7121),u=o(8360),d=o(947);o(9375);const m=({children:e,headingLevel:t,elementType:o=`h${t}`,...l})=>(0,n.createElement)(o,{...l},e),p=(0,a.withProductDataContext)((e=>{const{className:t,headingLevel:o=2,showProductLink:l=!0,linkTarget:a,align:p}=e,y=(0,d.F)(e),{parentClassName:v}=(0,c.useInnerBlockLayoutContext)(),{product:g}=(0,c.useProductDataContext)(),{dispatchStoreEvent:k}=(0,u.n)();return g.id?(0,n.createElement)(m,{headingLevel:o,className:r()(t,y.className,"wc-block-components-product-title",{[`${v}__product-title`]:v,[`wc-block-components-product-title--align-${p}`]:p&&(0,s.uq)()}),style:(0,s.uq)()?y.style:{}},(0,n.createElement)(i.Z,{disabled:!l,name:g.name,permalink:g.permalink,target:a,onClick:()=>{k("product-view-link",{product:g})}})):(0,n.createElement)(m,{headingLevel:o,className:r()(t,y.className,"wc-block-components-product-title",{[`${v}__product-title`]:v,[`wc-block-components-product-title--align-${p}`]:p&&(0,s.uq)()}),style:(0,s.uq)()?y.style:{}})}))},2027:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var n=o(721),l=o(935),r=o(1202);const c=(0,n.withFilteredAttributes)(r.Z)(l.Z)},7121:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var n=o(9196),l=o(2629),r=o(7608),c=o.n(r);o(333);const s=({className:e="",disabled:t=!1,name:o,permalink:r="",target:s,rel:a,style:i,onClick:u,...d})=>{const m=c()("wc-block-components-product-name",e);if(t){const e=d;return(0,n.createElement)("span",{className:m,...e,dangerouslySetInnerHTML:{__html:(0,l.decodeEntities)(o)}})}return(0,n.createElement)("a",{className:m,href:r,target:s,...d,dangerouslySetInnerHTML:{__html:(0,l.decodeEntities)(o)},style:i})}},8360:(e,t,o)=>{"use strict";o.d(t,{n:()=>c});var n=o(2694),l=o(9818),r=o(9307);const c=()=>({dispatchStoreEvent:(0,r.useCallback)(((e,t={})=>{try{(0,n.doAction)(`experimental__woocommerce_blocks-${e}`,t)}catch(e){console.error(e)}}),[]),dispatchCheckoutEvent:(0,r.useCallback)(((e,t={})=>{try{(0,n.doAction)(`experimental__woocommerce_blocks-checkout-${e}`,{...t,storeCart:(0,l.select)("wc/store/cart").getCartData()})}catch(e){console.error(e)}}),[])})},947:(e,t,o)=>{"use strict";o.d(t,{F:()=>a});var n=o(7608),l=o.n(n),r=o(6946),c=o(3392),s=o(172);const a=e=>{const t=(e=>{const t=(0,r.isObject)(e)?e:{style:{}};let o=t.style;return(0,r.isString)(o)&&(o=JSON.parse(o)||{}),(0,r.isObject)(o)||(o={}),{...t,style:o}})(e),o=(0,s.vc)(t),n=(0,s.l8)(t),a=(0,s.su)(t),i=(0,c.f)(t);return{className:l()(i.className,o.className,n.className,a.className),style:{...i.style,...o.style,...n.style,...a.style}}}},3392:(e,t,o)=>{"use strict";o.d(t,{f:()=>l});var n=o(6946);const l=e=>{const t=(0,n.isObject)(e.style.typography)?e.style.typography:{},o=(0,n.isString)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:o,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}}},172:(e,t,o)=>{"use strict";o.d(t,{l8:()=>d,su:()=>m,vc:()=>u});var n=o(7608),l=o.n(n),r=o(7427),c=o(2289),s=o(6946);function a(e={}){const t={};return(0,c.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function i(e,t){return e&&t?`has-${(0,r.o)(t)}-${e}`:""}function u(e){var t,o,n,r,c,u,d;const{backgroundColor:m,textColor:p,gradient:y,style:v}=e,g=i("background-color",m),k=i("color",p),h=function(e){if(e)return`has-${e}-gradient-background`}(y),f=h||(null==v||null===(t=v.color)||void 0===t?void 0:t.gradient);return{className:l()(k,h,{[g]:!f&&!!g,"has-text-color":p||(null==v||null===(o=v.color)||void 0===o?void 0:o.text),"has-background":m||(null==v||null===(n=v.color)||void 0===n?void 0:n.background)||y||(null==v||null===(r=v.color)||void 0===r?void 0:r.gradient),"has-link-color":(0,s.isObject)(null==v||null===(c=v.elements)||void 0===c?void 0:c.link)?null==v||null===(u=v.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==v?void 0:v.color)||{}})}}function d(e){var t;const o=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:o,style:n}=e,r=o?i("border-color",o):"";return l()({"has-border-color":!!o||!(null==n||null===(t=n.border)||void 0===t||!t.color),[r]:!!r})}(e),style:a({border:o})}}function m(e){var t;return{className:void 0,style:a({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}},9375:()=>{},333:()=>{}}]);