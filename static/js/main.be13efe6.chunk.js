(this.webpackJsonpbecommerce=this.webpackJsonpbecommerce||[]).push([[0],{106:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(22),c=n.n(r),i=n(16),s=n.n(i),o=n(21),d=n(35),l=n(20),u=n(8),j=n(46),b=new(n.n(j).a)("pk_27790971ac2ad20b0cfcdd0933929dde4224970ad7bf3",!0),p=n(122),m=n(123),h=n(124),x=n(125),O=n(126),f=n(127),g=n.p+"static/media/store.64e6d825.png",v=n(19),y=n(120),w=n(10),C=Object(y.a)((function(t){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(w.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(w.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),k=n(2),N=function(t){var e=t.totalItems,n=C(),a=Object(u.f)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(p.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(k.jsxs)(m.a,{children:[Object(k.jsxs)(h.a,{component:l.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(k.jsx)("img",{src:g,alt:"beCommerce",height:"25px",className:n.image}),"beCommerce"]}),Object(k.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(k.jsx)("div",{className:n.button,children:Object(k.jsx)(x.a,{component:l.b,to:"/cart","aria-label":"Mostrar carrito",color:"inherit",children:Object(k.jsx)(O.a,{badgeContent:e,color:"secondary",children:Object(k.jsx)(f.a,{})})})})]})})})},B=n(133),R=n(128),_=n(129),A=n(130),I=n(131),T=n(132),S=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),E=function(t){var e=t.product,n=t.onAddToCart,a=S(),r=e.name,c=e.description,i=e.id,s=e.media.source,o=e.price.formatted;return Object(k.jsxs)(R.a,{className:a.root,children:[Object(k.jsx)(_.a,{className:a.media,image:s,title:r}),Object(k.jsxs)(A.a,{children:[Object(k.jsxs)("div",{className:a.cardContent,children:[Object(k.jsx)(h.a,{variant:"h5",gutterBottom:!0,children:r}),Object(k.jsxs)(h.a,{variant:"h5",children:["$",o]})]}),Object(k.jsx)(h.a,{dangerouslySetInnerHTML:{__html:c},variant:"body2",color:"textSecondary"})]}),Object(k.jsx)(I.a,{disableSpacing:!0,className:a.cardActions,children:Object(k.jsx)(x.a,{"aria-label":"Agregar al carrito",onClick:function(){return n(i,1)},children:Object(k.jsx)(T.a,{})})})]})},F=Object(y.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),q=function(t){var e=t.products,n=t.onAddToCart,a=F();return Object(k.jsxs)("main",{className:a.content,children:[Object(k.jsx)("div",{className:a.toolbar}),Object(k.jsx)(B.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(k.jsx)(B.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(k.jsx)(E,{product:t,onAddToCart:n})},t.id)}))})]})},z=n(134),D=n(135),G=Object(y.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(v.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),L=Object(y.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),Q=function(t){var e=t.item,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,r=L();return Object(k.jsxs)(R.a,{children:[Object(k.jsx)(_.a,{image:e.media.source,alt:e.name,className:r.media}),Object(k.jsxs)(A.a,{className:r.cardContent,children:[Object(k.jsxs)(h.a,{variant:"h4",children:[" ",e.name," "]}),Object(k.jsxs)(h.a,{variant:"h5",children:[" ",e.line_total.formatted_with_symbol," "]})]}),Object(k.jsxs)(I.a,{class:r.cardActions,children:[Object(k.jsxs)("div",{className:r.buttons,children:[Object(k.jsx)(z.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(k.jsxs)(h.a,{children:[e.quantity," "]}),Object(k.jsx)(z.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(k.jsxs)(z.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(e.id)},children:[" ","Remove"," "]})]})]})},U=function(t){var e=t.cart,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,r=t.handleEmptyCart,c=G(),i=function(){return Object(k.jsxs)(h.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(k.jsx)(l.b,{to:"/",className:c.link,children:"start adding some!"})]})},s=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(B.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(k.jsx)(B.a,{item:!0,xs:12,sm:4,children:Object(k.jsx)(Q,{item:t,handleUpdateCartQty:n,handleRemoveFromCart:a})},t.id)}))}),Object(k.jsxs)("div",{className:c.cardDetails,children:[Object(k.jsxs)(h.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(z.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(k.jsx)(z.a,{className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Check out"})]})]})]})};return e.line_items?Object(k.jsxs)(D.a,{children:[Object(k.jsx)("div",{className:c.toolbar}),Object(k.jsx)(h.a,{className:c.title,variant:"h4",gutterBottom:!0,children:"Your shopping cart"}),e.line_items.length?Object(k.jsx)(s,{}):Object(k.jsx)(i,{})]}):"loading"},W=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({}),i=Object(d.a)(c,2),j=i[0],p=i[1],m=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.products.list();case 2:e=t.sent,n=e.data,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p,t.next=3,b.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.cart.add(e,n);case 2:a=t.sent,r=a.cart,p(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.cart.update(e,{quantity:n});case 2:a=t.sent,r=a.cart,p(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.cart.remove(e);case 2:n=t.sent,a=n.cart,p(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.cart.empty();case 2:e=t.sent,n=e.cart,p(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){m(),h()}),[]),Object(k.jsxs)(l.a,{basename:"/becommerce",children:[Object(k.jsx)(N,{totalItems:j.total_items}),Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{exact:!0,path:"/",children:Object(k.jsx)(q,{products:n,onAddToCart:x})}),Object(k.jsx)(u.a,{exact:!0,path:"/cart",children:Object(k.jsx)(U,{cart:j,handleUpdateCartQty:O,handleRemoveFromCart:f,handleEmptyCart:g})})]})]})};c.a.render(Object(k.jsx)(W,{}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.be13efe6.chunk.js.map