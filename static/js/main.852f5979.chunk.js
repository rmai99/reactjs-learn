(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(2),r=t.n(i),c=(t(14),t(3)),l=t(4),s=t(6),u=t(5),m=t(7),d=(t(15),t(16),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={name:"Apel",color:"merah",desc:"test",img:"merah.jpg"},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"clicked",value:function(e){this.setState({name:e.name,color:e.color,desc:e.desc,img:e.img})}},{key:"info",value:function(e){return console.log(e),"Calculator"==e?o.a.createElement("div",null,o.a.createElement("span",{className:"selected "+this.state.color},this.state.name),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("form",{onClick:""},o.a.createElement("input",{type:"number",id:"number1",placeholder:"Angka1"}),o.a.createElement("select",{class:"form-control",id:"exampleFormControlSelect2"},o.a.createElement("option",{value:"tambah"},"+"),o.a.createElement("option",{value:"kali"},"*"),o.a.createElement("option",{value:"kurang"},"-"),o.a.createElement("option",{value:"bagi"},"/")),o.a.createElement("input",{type:"number",id:"number1",placeholder:"Angka2"}),o.a.createElement("button",null,"Hitung"))):o.a.createElement("div",null,"ini adalah",o.a.createElement("span",{className:"selected "+this.state.color},this.state.name),o.a.createElement("br",null),o.a.createElement("p",null,this.state.desc),o.a.createElement("br",null),o.a.createElement("img",{src:this.state.img,width:"240"}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"app"},o.a.createElement("nav",{className:"nav"},this.props.items.map(function(n,t){var a="menu";return e.state.color===n.color&&(a="".concat(a," is-active")),o.a.createElement("a",{className:a+" "+n.color,onClick:e.clicked.bind(e,n),key:t},n.name)})),o.a.createElement("div",{className:"info"},this.info(this.state.name)))}}]),n}(a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(d,{items:[{name:"Apel",color:"merah",img:"merah.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ipsum vitae turpis blandit, ac venenatis ipsum faucibus. Etiam ullamcorper mattis erat in posuere. Etiam turpis neque, imperdiet at mi semper, dignissim rhoncus purus."},{name:"Banana",color:"Kuning",img:"kuning.jpg",desc:"Pisang merupakan salah satu buah yang mengandung banyak manfaat. Buah pisang dipercaya dapat mencegah kanker karena memiliki kandungan antikarsionogen. maybe. im not sure too"},{name:"Daun",color:"Hjau",img:"hjau.jpg",desc:"test2"},{name:"Laut",color:"Biru",img:"biru.jpg",desc:"test3"},{name:"Calculator",color:"Calculator",img:""}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactjs-learn",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/reactjs-learn","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(n,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.852f5979.chunk.js.map