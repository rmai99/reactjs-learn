(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,n){e.exports=n(17)},,,,,,function(e,a,n){},function(e,a,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),o=n(2),r=n.n(o),c=(n(14),n(3)),s=n(4),l=n(6),u=n(5),m=n(7),d=(n(15),n(16),function(e){function a(e){var n;return Object(c.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={name:"Apel",color:"merah",desc:"test",img:"merah.jpg",angka1:"",angka2:"",hasil:""},n}return Object(m.a)(a,e),Object(s.a)(a,[{key:"clicked",value:function(e){this.setState({name:e.name,color:e.color,desc:e.desc,img:e.img})}},{key:"info",value:function(e){return console.log(e),"Calculator"==e?i.a.createElement("div",null,i.a.createElement("span",{className:"selected "+this.state.color},this.state.name),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("form",{onClick:""},i.a.createElement("input",{type:"number",ref:"angka1",name:"angka1",onChange:this.changeHandler.bind(this),placeholder:"Angka1"}),"+",i.a.createElement("input",{type:"number",ref:"angka2",name:"angka2",onChange:this.changeHandler1.bind(this),placeholder:"Angka2"}),i.a.createElement("span",null,this.state.hasil))):i.a.createElement("div",null,"ini adalah",i.a.createElement("span",{className:"selected "+this.state.color},this.state.name),i.a.createElement("br",null),i.a.createElement("p",null,this.state.desc),i.a.createElement("br",null),i.a.createElement("img",{src:this.state.img,width:"240"}))}},{key:"changeHandler",value:function(e){this.setState({angka1:e.target.value}),this.calculate()}},{key:"changeHandler1",value:function(e){this.setState({angka2:e.target.value}),this.calculate()}},{key:"calculate",value:function(){var e=parseInt(this.refs.angka1.value)+parseInt(this.refs.angka2.value);this.setState({hasil:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"app"},i.a.createElement("nav",{className:"nav"},this.props.items.map(function(a,n){var t="menu";return e.state.color===a.color&&(t="".concat(t," is-active")),i.a.createElement("a",{className:t+" "+a.color,onClick:e.clicked.bind(e,a),key:n},a.name)})),i.a.createElement("div",{className:"info"},this.info(this.state.name)))}}]),a}(t.Component)),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(d,{items:[{name:"Apel",color:"merah",img:"merah.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ipsum vitae turpis blandit, ac venenatis ipsum faucibus. Etiam ullamcorper mattis erat in posuere. Etiam turpis neque, imperdiet at mi semper, dignissim rhoncus purus."},{name:"Banana",color:"Kuning",img:"kuning.jpg",desc:"Pisang merupakan salah satu buah yang mengandung banyak manfaat. Buah pisang dipercaya dapat mencegah kanker karena memiliki kandungan antikarsionogen. maybe. im not sure too"},{name:"Daun",color:"Hjau",img:"hjau.jpg",desc:"test2"},{name:"Laut",color:"Biru",img:"biru.jpg",desc:"test3"},{name:"Calculator",color:"Calculator",img:""}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactjs-learn",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/reactjs-learn","/service-worker.js");h?(function(e,a){fetch(e).then(function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(a,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.8bbddb59.chunk.js.map