(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1524cf6d"],{"2ee3":function(t,e,n){var a,o;(function(i,s){if(null===i)throw new Error("Google-maps package can be used only in browser");a=s,o="function"===typeof a?a.call(e,n,e,t):a,void 0===o||(t.exports=o)})("undefined"!==typeof window?window:null,(function(){"use strict";var t="3.31",e=null,n=null,a=!1,o=[],i=[],s=null,r={URL:"https://maps.googleapis.com/maps/api/js",KEY:null,LIBRARIES:[],CLIENT:null,CHANNEL:null,LANGUAGE:null,REGION:null};r.VERSION=t,r.WINDOW_CALLBACK_NAME="__google_maps_api_provider_initializator__",r._googleMockApiObject={},r.load=function(t){null===n?!0===a?t&&o.push(t):(a=!0,window[r.WINDOW_CALLBACK_NAME]=function(){c(t)},r.createLoader()):t&&t(n)},r.createLoader=function(){e=document.createElement("script"),e.type="text/javascript",e.src=r.createUrl(),document.body.appendChild(e)},r.isLoaded=function(){return null!==n},r.createUrl=function(){var t=r.URL;return t+="?callback="+r.WINDOW_CALLBACK_NAME,r.KEY&&(t+="&key="+r.KEY),r.LIBRARIES.length>0&&(t+="&libraries="+r.LIBRARIES.join(",")),r.CLIENT&&(t+="&client="+r.CLIENT),r.CHANNEL&&(t+="&channel="+r.CHANNEL),r.LANGUAGE&&(t+="&language="+r.LANGUAGE),r.REGION&&(t+="&region="+r.REGION),r.VERSION&&(t+="&v="+r.VERSION),t},r.release=function(c){var l=function(){r.KEY=null,r.LIBRARIES=[],r.CLIENT=null,r.CHANNEL=null,r.LANGUAGE=null,r.REGION=null,r.VERSION=t,n=null,a=!1,o=[],i=[],"undefined"!==typeof window.google&&delete window.google,"undefined"!==typeof window[r.WINDOW_CALLBACK_NAME]&&delete window[r.WINDOW_CALLBACK_NAME],null!==s&&(r.createLoader=s,s=null),null!==e&&(e.parentElement.removeChild(e),e=null),c&&c()};a?r.load((function(){l()})):l()},r.onLoad=function(t){i.push(t)},r.makeMock=function(){s=r.createLoader,r.createLoader=function(){window.google=r._googleMockApiObject,window[r.WINDOW_CALLBACK_NAME]()}};var c=function(t){var e;for(a=!1,null===n&&(n=window.google),e=0;e<i.length;e++)i[e](n);for(t&&t(n),e=0;e<o.length;e++)o[e](n);o=[]};return r}))},"70a2":function(t,e,n){"use strict";n("ca90")},ca90:function(t,e,n){},f96f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"google-maps-page"},[n("div",{staticClass:"row"},[n("div",{staticClass:"flex md12 xs12"},[n("va-card",{staticClass:"google-maps-page__widget",attrs:{title:t.$t("generic.routs")}},[n("google-map",{staticStyle:{height:"65vh"}})],1)],1)])])},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row mr-0 mt-1"},[n("va-checkbox",{attrs:{label:t.$t("placeholder.showTrafic")},model:{value:t.showTrafic,callback:function(e){t.showTrafic=e},expression:"showTrafic"}})],1),n("div",{ref:"googleMap",staticClass:"google-map map-fill-height mb-3",staticStyle:{height:"57vh"}})])},s=[],r=n("a34a"),c=n.n(r),l=n("2ee3"),u=n("4583"),p=n("bc3a"),h=n.n(p);function m(t,e,n,a,o,i,s){try{var r=t[i](s),c=r.value}catch(l){return void n(l)}r.done?e(c):Promise.resolve(c).then(a,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function s(t){m(i,a,o,s,r,"next",t)}function r(t){m(i,a,o,s,r,"throw",t)}s(void 0)}))}}function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v={name:"google-map",data:function(){return{distance:"",routes:[],routesTable:[],routsSelect:{value:[],options:[]},departureTime:null,iconPr:"https://i.ibb.co/zScnP9L/IconPr.gif",iconSc:"https://i.ibb.co/4t5K1jd/IconSec.gif",iconA:"",iconB:"",loading:!0,googleMap:null,smap:null,showTrafic:!1,showPrimariy:!0,showsec:!0,trafficLayer:null,markers:[],IW:null,alert:"https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/car-horn-3_Gy26a2Nd_NWM.mp3"}},components:d({},u),mounted:function(){var t=this;return f(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.PageRender();case 2:case"end":return e.stop()}}),e)})))()},methods:{PageRender:function(){var t=this;return f(c.a.mark((function e(){var n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,l["KEY"]="AIzaSyC6Wt_40qWZ7up5hvZi9GwzxYWmwjnXggs",l["VERSION"]="3.35",e.next=5,l["load"](function(){var e=f(c.a.mark((function e(a){var o,i,s,r,l,u,p;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.googleMap=a,n.smap=new a.maps.Map(t.$refs.googleMap,{center:new a.maps.LatLng(24.73790343063753,46.82196820963715),zoom:12,mapTypeId:a.maps.MapTypeId.ROADMAP}),n.IW=new a.maps.InfoWindow,n.trafficLayer=new a.maps.TrafficLayer,n.iconA={url:"http://maps.google.com/mapfiles/kml/paddle/A.png",scaledSize:new a.maps.Size(35,35)},n.iconB={url:"http://maps.google.com/mapfiles/kml/paddle/B.png",scaledSize:new a.maps.Size(35,35)},o="24.71437609245666, 46.847512489053834".split(","),i=new a.maps.LatLng(Number(o[0]),Number(o[1])),s="24.77306945496737, 46.80284411687266".split(","),r=new a.maps.LatLng(Number(s[0]),Number(s[1])),l=["24.716633095586587, 46.84578542562103","24.717911610952488, 46.84482699704068","24.721174144991032, 46.842349118414425","24.723902429419336, 46.84032854264355","24.723902429419336, 46.84032854264355","24.726003708810072, 46.838789014911335","24.72769579004935, 46.837492019930814","24.730783496199834, 46.835273905871716","24.733968669248842, 46.83287404655184","24.738134175975897, 46.829835607852026","24.74223118516242, 46.82674642429618","24.7465654575284, 46.823575712841205","24.75018716617895, 46.82082984835602","24.75526404648021, 46.81639166326626","24.759267740731058, 46.813331581712","24.76325705404272, 46.81040472464332","24.766170646766305, 46.80822964780256","24.76804191546454, 46.80681483723233","24.76999030250421, 46.8053304080756","24.771941476687026, 46.80382886295298","24.773304758560883, 46.80282486530638","24.77507748568985, 46.80153961166719"],u=[],p={url:"https://cdn-icons-png.flaticon.com/512/6395/6395324.png",scaledSize:new a.maps.Size(35,35)},l.forEach((function(t,e){var o=t.split(",");u.push({latitude:Number(o[0]),longitude:Number(o[1])});var i=new a.maps.Marker({position:new a.maps.LatLng(Number(o[0]),Number(o[1])),map:n.smap,title:" محطة "+e,animation:a.maps.Animation.DROP,icon:p});n.markers.push(i)})),h.a.post("https://map-api-ubzex7qxpa-ew.a.run.app/routes/computeRouteWithTrafficLength",{origin:i,destination:r,waypoints:u}).then((function(e){n.render(e.data[0],u);var o=new a.maps.Marker({position:new a.maps.LatLng(i),map:n.smap,title:"خط النسيم الغربي حسان ابن ثابت",animation:a.maps.Animation.DROP,icon:n.iconA});o.addListener("click",(function(t){n.showIW(e.data[0],t.latLng)})),n.markers.push(o);var s=new t.googleMap.maps.Marker({position:new t.googleMap.maps.LatLng(r),map:t.smap,title:"خط النسيم الغربي حسان ابن ثابت",animation:t.googleMap.maps.Animation.DROP,icon:n.iconB});s.addListener("click",(function(t){n.showIW(e.data[0],t.latLng)})),t.markers.push(s)}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)})))()},render:function(t){var e,n=this,a=this;if(t){var o=t.polyline.geoJsonLinestring.coordinates,i=o.map((function(t){return{lat:t[1],lng:t[0]}})),s=(null===(e=t.travelAdvisory)||void 0===e?void 0:e.speedReadingIntervals)||[];s.forEach((function(e){var o=e.startPolylinePointIndex||0,s=e.endPolylinePointIndex||0,r=e.speed,c=i.slice(o,s+1),l={TRAFFIC_JAM:"#d74342",SLOW:"#e69e01",NORMAL:"#4078c9"};c=new n.googleMap.maps.Polyline({path:c,strokeColor:l[r],geodesic:!0,strokeOpacity:1,strokeWeight:6}),n.googleMap.maps.event.addListener(c,"click",(function(e){a.showIW(t,e.latLng)})),c.setMap(a.smap)}))}},showIW:function(t,e){var n=t,a="";a+='<div dir="ltr">',a+='<span class="'.concat("infotitlePr",'">',"خط النسيم الغربي حسان ابن ثابت","</span><br/>"),a+='<span class="infosegment">'.concat(this.$t("distance"),": ").concat(n.statistics.distance.value/1e3," ").concat(this.$t("KM")," </span><br/>"),a+='<span class="infosegment"> '.concat(this.$t("TimeWithoutCrowding"),": ").concat(Math.round(25)," ").concat(this.$t("minuits"),"</span><br/>"),a+='<span class="infosegment"> '.concat(this.$t("timeNow"),": ").concat(this.fromatTime(n.statistics.duration.value,!0),"</span><br/>"),a+="<br/>",a+='<span class="infonormal">'.concat(this.$t("normal"),": ").concat(n.statistics.normal.distance.value/1e3," ").concat(this.$t("KM")," (").concat(n.statistics.normal.distance.percentage,")</span><br/>"),a+='<span class="infoslow">'.concat(this.$t("Slow"),": ").concat(n.statistics.slow.distance.value/1e3," ").concat(this.$t("KM"),"  (").concat(n.statistics.slow.distance.percentage,")</span><br/>"),a+='<span class="infojam">'.concat(this.$t("crowded"),": ").concat(n.statistics.jam.distance.value/1e3," ").concat(this.$t("KM"),"  (").concat(n.statistics.jam.distance.percentage,")</span><br/>"),a+="</div>",this.IW&&(this.IW.setContent(a),this.IW.setPosition(e),this.IW.open({map:this.smap}))},fromatTime:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=n?parseInt(t):60*parseInt(t);return a<60&&(e="".concat(a).concat(this.$t("second"))),e="".concat(Math.round(a/60)," ").concat(this.$t("minuits")),e},renderAll:function(){var t=this,e=this;this.routes.forEach((function(n){n.poly&&n.poly.forEach((function(e){null===e||void 0===e||e.setMap(t.smap)}));var a=n.FromLocation.split(","),o=new t.googleMap.maps.LatLng(Number(a[0]),Number(a[1])),i=new t.googleMap.maps.Marker({position:new t.googleMap.maps.LatLng(o),map:t.smap,title:n.RouteName,animation:t.googleMap.maps.Animation.DROP,icon:e.iconA});i.addListener("click",(function(t){e.showIW(n,t.latLng)})),t.markers.push(i)})),this.recenter()},DeletAll:function(){this.routes.forEach((function(t){t.poly&&t.poly.forEach((function(t){null===t||void 0===t||t.setMap(null)}))})),this.markers.forEach((function(t){null===t||void 0===t||t.setMap(null)})),this.recenter()},drawOnlyRoute:function(t){var e=this;if(t.poly){for(var n=0;n<t.poly.length;n++)t.poly[n].setMap(this.smap);var a=t.FromLocation.split(","),o=new this.googleMap.maps.LatLng(Number(a[0]),Number(a[1])),i=new this.googleMap.maps.Marker({position:new this.googleMap.maps.LatLng(o),map:this.smap,title:t.RouteName,animation:this.googleMap.maps.Animation.DROP,icon:e.iconA});i.addListener("click",(function(n){e.showIW(t,n.latLng)})),this.markers.push(i),this.recenter()}},showRouteModal:function(t){this.routsSelect.value=[t];var e=document.getElementsByClassName("google-map")[0].offsetTop;document.getElementsByTagName("main")[0].scrollTo({top:e,behavior:"smooth"}),this.recenter()},recenter:function(){this.smap.panTo(new this.googleMap.maps.LatLng(24.73790343063753,46.82196820963715)),this.smap.setZoom(13)}},watch:{showTrafic:function(){null!=this.trafficLayer&&(this.showTrafic?this.trafficLayer.setMap(this.smap):this.trafficLayer.setMap(null))},showPrimariy:function(){if(this.DeletAll(),this.showsec&&this.showPrimariy)this.routsSelect.value=[];else if(!this.showsec&&this.showPrimariy){this.DeletAll();var t=[];this.routes.forEach((function(e){e.iSPrimary&&t.push(e.id)})),t.length>0&&(this.routsSelect.value=t)}else if(this.showsec&&!this.showPrimariy){this.DeletAll();var e=[];this.routes.forEach((function(t){t.iSPrimary||e.push(t.id)})),e.length>0&&(this.routsSelect.value=e)}else this.routsSelect.value=[]},showsec:function(){if(this.DeletAll(),this.showsec&&this.showPrimariy)this.routsSelect.value=[];else if(!this.showsec&&this.showPrimariy){this.DeletAll();var t=[];this.routes.forEach((function(e){e.iSPrimary&&t.push(e.id)})),t.length>0&&(this.routsSelect.value=t)}else if(this.showsec&&!this.showPrimariy){this.DeletAll();var e=[];this.routes.forEach((function(t){t.iSPrimary||e.push(t.id)})),e.length>0&&(this.routsSelect.value=e)}else this.routsSelect.value=[]},routes:function(){this.routsSelect.options=this.routes},"routsSelect.value":function(){var t=this;this.routsSelect.value.length>0?(this.DeletAll(),this.routsSelect.value.forEach((function(e){console.log(e);var n=t.routes.find((function(t){return t.id===e}));t.drawOnlyRoute(n)}))):(this.DeletAll(),this.renderAll()),console.log("routsSelect.value change",this.routsSelect.value)}}},L=v,y=(n("70a2"),n("2877")),A=Object(y["a"])(L,i,s,!1,null,null,null),b=A.exports,E={name:"google-maps-page",components:{GoogleMap:b}},N=E,M=Object(y["a"])(N,a,o,!1,null,null,null);e["default"]=M.exports}}]);
//# sourceMappingURL=chunk-1524cf6d.aedb26ab.js.map