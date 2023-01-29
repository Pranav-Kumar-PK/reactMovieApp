(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(8).default;t.default=function(e){return Object(r.jsxs)("div",{className:"col-md-10 offset-md-1 ",children:[Object(r.jsxs)("h2",{style:{color:"blanchedalmond"},className:"mb-5",children:["Showing results for ",e.searchTerm,"..."]}),Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:e.searchResults.map((function(t){if(t.poster_path)return Object(r.jsx)(s,{title:t.title,image:t.poster_path,date:t.release_date,rating:t.vote_average,genres:t.genre_ids.map((function(t){return e.genresMovie["".concat(t)]}))},t.id.toString())}))})]})}},49:function(e,t,a){"use strict";a.r(t);var r=a(0);a(50);t.default=function(e){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmitForm(t.target[0].value,t.target.elements.field.value),t.target[0].value=""},children:[Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("input",{type:"text",className:"searchTerm",name:"movies",placeholder:"Search..."}),Object(r.jsx)("button",{type:"submit",className:"searchButton",children:Object(r.jsx)("i",{className:"fa fa-search"})})]}),Object(r.jsxs)("div",{className:"filter mt-4",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"field",value:"movie",defaultChecked:!0}),Object(r.jsx)("span",{htmlFor:"movie",children:"Movie"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"field",value:"tv"}),Object(r.jsx)("span",{htmlFor:"tvShow",children:"Tv Show"})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"field",value:"person"}),Object(r.jsx)("span",{htmlFor:"actor",children:"Person"})]})]})]})})})}},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(8).default;t.default=function(e){return Object(r.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(r.jsxs)("h2",{style:{color:"blanchedalmond"},className:"mb-5",children:["Showing results for ",e.searchTerm,"..."]}),Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:e.searchResults.map((function(t){if(t.poster_path)return Object(r.jsx)(s,{title:t.name,image:t.poster_path,date:t.first_air_date,rating:t.vote_average,genres:t.genre_ids.map((function(t){return e.genresTv["".concat(t)]}))},t.id.toString())}))})]})}},53:function(e,t,a){"use strict";a.r(t);var r=a(0),s=(a(19).default,a(8).default);t.default=function(e){return Object(r.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(r.jsxs)("h2",{style:{color:"blanchedalmond"},className:"mb-5",children:["Showing results for ",e.searchTerm,"..."]}),Object(r.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:e.searchResults.map((function(e){if(e.profile_path)return Object(r.jsx)(s,{title:e.name,image:e.profile_path,movies:e.known_for},e.id.toString())}))})]})}},54:function(e,t,a){"use strict";a.r(t);var r=a(5),s=a(2),c=a(0);a(55);t.default=function(e){var t=Object(s.useState)(""),a=Object(r.a)(t,2),n=a[0],i=a[1];return Object(c.jsx)("div",{className:"mb-5",children:Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("span",{className:"navbar-brand",href:"#",children:"MovieStore"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("button",{type:"button",className:"Popular"===n?"btn btn-link active":"btn btn-link","aria-current":"page",href:"#",onClick:function(){e.onNavClick("","movie","popular"),i("Popular")},children:"Popular"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("button",{type:"button",className:"TopRated"===n?"btn btn-link active":"btn btn-link",href:"#",onClick:function(){e.onNavClick("","movie","top_rated"),i("TopRated")},children:"Top Rated"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("button",{type:"button",className:"Upcoming"===n?"btn btn-link active":"btn btn-link",href:"#",onClick:function(){e.onNavClick("","movie","upcoming"),i("Upcoming")},children:"Upcoming"})})]})})]})})})}},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var r=a(0);a(57);t.default=function(e){return Object(r.jsx)("div",{children:!0===e.msg?Object(r.jsx)("h4",{children:"Opps! Nothing found!"}):Object(r.jsx)("h4",{children:"Search for a Movie, Tv Show or Person..."})})}},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(20),s=a.n(r),c=a(9),n=a.n(c),i=a(22),l=a(10),o=a(21),d=a(5),u=a(2),j=a(0),b=a(29).default,m=a(49).default,h=a(19).default,f=a(52).default,v=a(53).default,p=a(54).default,g=a(56).default;var x=function(){var e=Object(u.useState)({resultArray:[],genre_ids_movie:[],genre_ids_tv:[],searchField:"movie",searchTerm:"",category:"",error:!1}),t=Object(d.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(o.a)(n.a.mark((function e(t,a,s){var c,o,d,u,j,m,h,f,v,p,g,x,O,N,y;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,b.get("https://api.themoviedb.org/3/search/".concat(a,"?api_key=8d636748f84e680ee2856119069c5570&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:c=e.sent,e.next=10;break;case 6:if(!s){e.next=10;break}return e.next=9,b.get("https://api.themoviedb.org/3/".concat(a,"/").concat(s,"?api_key=8d636748f84e680ee2856119069c5570&language=en-US"));case 9:c=e.sent;case 10:return e.next=12,b.get("https://api.themoviedb.org/3/genre/movie/list?api_key=8d636748f84e680ee2856119069c5570&language=en-US");case 12:return o=e.sent,e.next=15,b.get("https://api.themoviedb.org/3/genre/tv/list?api_key=8d636748f84e680ee2856119069c5570&language=en-US");case 15:d=e.sent,u={},j=Object(l.a)(o.data.genres);try{for(j.s();!(m=j.n()).done;)h=m.value,f=h.id,v=h.name,u["".concat(f)]=v}catch(n){j.e(n)}finally{j.f()}p={},g=Object(l.a)(d.data.genres);try{for(g.s();!(x=g.n()).done;)O=x.value,N=O.id,y=O.name,p["".concat(N)]=y}catch(n){g.e(n)}finally{g.f()}s&&"top_rated"!==s||(s="top Rated"),r({resultArray:Object(i.a)(c.data.results),genre_ids_movie:u,genre_ids_tv:p,searchField:a,searchTerm:t,category:s.charAt(0).toUpperCase()+s.slice(1)+" Movies",error:!0});case 24:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}();return console.log(a.resultArray),Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{onNavClick:s}),Object(j.jsx)(m,{onSubmitForm:s}),0===a.resultArray.length&&Object(j.jsx)(g,{msg:a.error}),a.resultArray.length>0&&Object(j.jsxs)("div",{className:"container mt-5",children:["movie"===a.searchField&&Object(j.jsx)(h,{searchResults:a.resultArray,genresMovie:a.genre_ids_movie,searchTerm:a.searchTerm||a.category},a.searchField),"tv"===a.searchField&&Object(j.jsx)(f,{searchResults:a.resultArray,genresTv:a.genre_ids_tv,searchTerm:a.searchTerm},a.searchField),"person"===a.searchField&&Object(j.jsx)(v,{searchResults:a.resultArray,searchTerm:a.searchTerm},a.searchField)]})]})};a(58),s.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))},8:function(e,t,a){"use strict";a.r(t);var r=a(0);a(51);t.default=function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.image);return Object(r.jsxs)("div",{className:"card mb-5",children:[Object(r.jsx)("img",{className:"card-img-top",src:t}),Object(r.jsxs)("div",{className:"info",children:[Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)("h5",{className:"card-title",children:e.title})}),Object(r.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(r.jsxs)("li",{className:"list-group-item",children:[e.movies?Object(r.jsx)("p",{className:"font-weight-bold text-center",children:Object(r.jsx)("b",{children:"Known For: "})}):Object(r.jsx)("span",{children:Object(r.jsx)("b",{children:"Date: "})}),e.movies?e.movies.map((function(e){return Object(r.jsxs)("p",{className:"text-center",children:[e.title,Object(r.jsx)("hr",{})]})})):e.date]}),!e.movies&&Object(r.jsxs)("div",{children:[Object(r.jsxs)("li",{className:"list-group-item ",children:[Object(r.jsx)("b",{children:"Rating:"})," ",e.rating,"/10"]}),e.genres.map((function(e){return Object(r.jsx)("p",{className:"text-center",children:e})}))]})]})]})]})}}},[[59,1,2]]]);
//# sourceMappingURL=main.b59669fa.chunk.js.map