"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{9616:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(885),c=n(2791),u=n(501),a=n(3737),i=n(184);function o(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,c.useEffect)((function(){(0,a.Df)().then((function(e){o(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("main",{children:(0,i.jsx)("h1",{children:"Trending today"})}),(0,i.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title;return(0,i.jsx)("li",{children:(0,i.jsx)(u.rU,{to:"/movies/".concat(t),children:n})},t)}))})]})}},3737:function(e,t,n){n.d(t,{Df:function(){return d},HI:function(){return s},XT:function(){return o}});var r=n(5861),c=n(7757),u=n.n(c),a=n(4569),i=n.n(a);function o(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i().get("https://api.themoviedb.org/3/search/movie?api_key=da20cf53e1f8df5e7c28db8c672e3f8f&query=".concat(t)),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=da20cf53e1f8df5e7c28db8c672e3f8f"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/trending/movie/day?api_key=da20cf53e1f8df5e7c28db8c672e3f8f");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=HomePage.ffa8bb7f.chunk.js.map