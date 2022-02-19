(this["webpackJsonpdog-shelter"]=this["webpackJsonpdog-shelter"]||[]).push([[0],{45:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(33),n=a.n(c),r=(a(41),a(44),a(45),a(15)),o=a(20),i=a.n(o),d=a(34),l=a(9),b=a(10),j=a(12),g=a(11),u=a(35),h=a.n(u),m=a(8),O=a(1),p=function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(b.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("nav",{className:"nb navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(O.jsx)(m.b,{className:"navbar-brand",to:"/dogs",children:"Doggo App"}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toogle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(O.jsx)("ul",{className:"navbar-nav",children:this.props.dogs.map((function(e){return Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)(m.c,{exact:!0,to:"/dogs/".concat(e.id),className:"nav-link",children:e.breedName})},e.id)}))})})]})}}]),a}(s.Component),v=a(2),x=(a(70),function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(b.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"DogList mb-5",children:[Object(O.jsx)("h2",{className:"display-4 text-center my-5",children:"Doggo List!"}),Object(O.jsx)("div",{className:"row",children:this.props.dogs.map((function(e,t){return Object(O.jsx)("div",{className:"Dog col-md-6 col-lg-4 text-center",children:Object(O.jsxs)("div",{className:"dog-container",children:[Object(O.jsx)(m.b,{to:"/dogs/".concat(e.id),children:Object(O.jsx)("div",{className:"dog-box-img",style:{backgroundImage:"url(".concat(e.src,")")}})}),Object(O.jsx)("h3",{className:"mt-3",children:Object(O.jsx)(m.b,{className:"underline",to:"/dogs/".concat(e.id),children:e.breedName})})]})},t)}))})]})}),Object(O.jsx)("div",{className:"new-dogs",onClick:function(){return e.props.getDogs()},children:"new doggies"})]})}}]),a}(s.Component)),f=(a(71),function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.currDog;return Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row justify-content-center mt-5 mb-5",children:Object(O.jsx)("div",{className:"col-11 col-lg-5",children:Object(O.jsxs)("div",{className:"dog-card card",children:[Object(O.jsx)("img",{className:"card-img-top",src:e.src,alt:e.breedName}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h2",{className:"card-title",children:e.breedName}),Object(O.jsx)("h4",{className:"card-subtitle text-muted",children:e.lifeSpan})]}),Object(O.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(O.jsxs)("li",{className:"list-group-item",children:["Height: ",e.height," cm"]}),Object(O.jsx)("li",{className:"list-group-item",children:e.temper})]}),Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)(m.b,{to:"/dogs",className:"btn btn-info",children:"Go Back"})})]})})})})}}]),a}(s.Component)),N=function(e){Object(j.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getDogs=Object(d.a)(i.a.mark((function e(){var t,a,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=new Map;case 2:if(!(t.size<s.props.numDogs)){e.next=11;break}return e.next=5,h.a.get("https://api.thedogapi.com/v1/images/search",{headers:{Authorization:"d8b24e68-2e88-46f9-b418-e92f25f5e4cd"}});case 5:a=e.sent,c=a.data[0],console.log("dogInfo",c),c.breeds.length>0?(n={src:c.url,id:c.id,breedName:c.breeds[0].name,lifeSpan:c.breeds[0].life_span,height:c.breeds[0].height.metric,temper:c.breeds[0].temperament},console.log("newDog",n),t.has(n.breedName)?console.log("duplicate found"):t.set(n.breedName,n),s.setState({dogs:Array.from(t.values())},(function(){localStorage.setItem("dogs",JSON.stringify(s.state.dogs))}))):console.log("dogInfo.breeds.length === 0"),e.next=2;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("GET request error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),s.state={dogs:JSON.parse(window.localStorage.getItem("dogs")||"[]")},s}return Object(b.a)(a,[{key:"componentDidMount",value:function(){0===this.state.dogs.length&&this.getDogs()}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{dogs:this.state.dogs}),Object(O.jsxs)(v.c,{children:[Object(O.jsx)(v.a,{exact:!0,path:"/dogs",render:function(t){return Object(O.jsx)(x,Object(r.a)(Object(r.a)({},t),{},{dogs:e.state.dogs,getDogs:e.getDogs}))}}),Object(O.jsx)(v.a,{exact:!0,path:"/dogs/:dogId",render:function(t){var a=t.match.params.dogId,s=e.state.dogs.find((function(e){return e.id.toLowerCase()===a.toLowerCase()}));return Object(O.jsx)(f,Object(r.a)(Object(r.a)({},t),{},{currDog:s}))}})]})]})}}]),a}(s.Component);N.defaultProps={numDogs:9};var k=N;n.a.render(Object(O.jsx)(m.a,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.af5257ad.chunk.js.map