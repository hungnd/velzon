"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[8199],{98199:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var a=s(66252),l=s(58061),r=s(56612);const i=(0,a._)("h5",{class:"card-title mb-0 flex-grow-1"},"All Orders",-1),c={class:"flex-shrink-0"},u={class:"flax-shrink-0 hstack gap-2"},o={class:"search-box"},n=(0,a._)("i",{class:"ri-search-line search-icon"},null,-1),d={class:"input-group"},p=(0,a._)("span",{class:"input-group-text",id:"basic-addon1"},[(0,a._)("i",{class:"ri-calendar-2-line"})],-1),g={class:"table-responsive table-card"},m={class:"table align-middle table-nowrap",id:"customerTable"},y=(0,a._)("thead",{class:"table-light text-muted"},[(0,a._)("tr",null,[(0,a._)("th",{class:"sort","data-sort":"time",scope:"col"}," Date "),(0,a._)("th",{class:"sort","data-sort":"currency_name",scope:"col"}," Name "),(0,a._)("th",{class:"sort","data-sort":"type",scope:"col"},"Type"),(0,a._)("th",{class:"sort","data-sort":"quantity_value",scope:"col"}," Quantity "),(0,a._)("th",{class:"sort","data-sort":"or_value",scope:"col"}," Order Value "),(0,a._)("th",{class:"sort","data-sort":"sort-avg_price",scope:"col"}," Avg Price "),(0,a._)("th",{class:"sort","data-sort":"sort-price",scope:"col"},"Price"),(0,a._)("th",{class:"sort","data-sort":"status",scope:"col"},"Status")])],-1),h={class:"list form-check-all"},f={class:"order_date time","data-timestamp":"1641945600"},v={class:"text-muted"},_={class:"id",style:{display:"none"}},w={class:"d-flex align-items-center"},C={class:"flex-shrink-0"},b=["src"],k={class:"quantity_value"},P={class:"order_value or_val","data-orderval":"370683.20"},x={class:"avg_price sort-avg_price","data-av-price":"46154.30"},$={class:"price sort-price","data-price":"46335.40"},S={class:"status"},W={class:"text-center"},V=(0,a._)("h5",{class:"mt-2"},"Sorry! No Result Found",-1),M=(0,a._)("p",{class:"text-muted mb-0"}," We've searched more than 150+ orders We did not find any orders for you search. ",-1),N={class:"d-flex justify-content-end p-3"},q={key:0,class:"pagination-wrap hstack gap-2"},D={class:"pagination listjs-pagination mb-0"},L=["onClick"];function z(e,t,s,z,O,U){const Q=(0,a.up)("PageHeader"),B=(0,a.up)("b-button"),T=(0,a.up)("b-card-header"),A=(0,a.up)("b-col"),j=(0,a.up)("flat-pickr"),H=(0,a.up)("Multiselect"),Z=(0,a.up)("b-row"),E=(0,a.up)("b-card-body"),R=(0,a.up)("b-link"),Y=(0,a.up)("lottie"),F=(0,a.up)("b-card"),K=(0,a.up)("Layout");return(0,a.wg)(),(0,a.j4)(K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{title:O.title,items:O.items},null,8,["title","items"]),(0,a.Wm)(Z,{id:"contactList"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{lg:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{"no-body":""},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{class:"d-flex align-items-center border-0"},{default:(0,a.w5)((()=>[i,(0,a._)("div",c,[(0,a._)("div",u,[(0,a.Wm)(B,{variant:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("Today's Orders")])),_:1}),(0,a.Wm)(B,{variant:"soft-info"},{default:(0,a.w5)((()=>[(0,a.Uk)("Past Orders")])),_:1})])])])),_:1}),(0,a.Wm)(E,{class:"border border-dashed border-end-0 border-start-0"},{default:(0,a.w5)((()=>[(0,a.Wm)(Z,{class:"g-2"},{default:(0,a.w5)((()=>[(0,a.Wm)(A,{xl:"4",md:"6"},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control search",placeholder:"Search to orders...","onUpdate:modelValue":t[0]||(t[0]=e=>O.searchQuery=e)},null,512),[[l.nr,O.searchQuery]]),n])])),_:1}),(0,a.Wm)(A,{xl:"3",md:"6"},{default:(0,a.w5)((()=>[(0,a._)("div",d,[p,(0,a.Wm)(j,{modelValue:O.date,"onUpdate:modelValue":t[1]||(t[1]=e=>O.date=e),config:O.rangeDateconfig,class:"form-control",id:"range-datepicker"},null,8,["modelValue","config"])])])),_:1}),(0,a.Wm)(A,{xl:"2",md:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{class:"form-control",modelValue:O.value2,"onUpdate:modelValue":t[2]||(t[2]=e=>O.value2=e),"close-on-select":!0,placeholder:"Select Type",searchable:!0,"create-option":!0,name:"idType",id:"idType",options:[{value:"Buy",label:"Buy"},{value:"Sell",label:"Sell"}]},null,8,["modelValue"])])),_:1}),(0,a.Wm)(A,{xl:"2",md:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(H,{class:"form-control",modelValue:O.status1,"onUpdate:modelValue":t[3]||(t[3]=e=>O.status1=e),"close-on-select":!0,placeholder:"Select Status",searchable:!0,"create-option":!0,name:"idStatus",id:"idStatus",options:[{value:"Successful",label:"Successful"},{value:"Cancelled",label:"Cancelled"},{value:"Pending",label:"Pending"}]},null,8,["modelValue"])])),_:1}),(0,a.Wm)(A,{xl:"1",md:"4"},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{variant:"success",class:"w-100",onClick:U.SearchData},{default:(0,a.w5)((()=>[(0,a.Uk)("Filters")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,a.Wm)(E,null,{default:(0,a.w5)((()=>[(0,a._)("div",g,[(0,a._)("table",m,[y,(0,a._)("tbody",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(U.resultQuery,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",f,[(0,a.Uk)((0,r.zw)(e.date[0])+" ",1),(0,a._)("small",v,(0,r.zw)(e.date[1]),1)]),(0,a._)("td",_,[(0,a.Wm)(R,{href:"javascript:void(0);",class:"fw-medium link-primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("#VZ001")])),_:1})]),(0,a._)("td",null,[(0,a._)("div",w,[(0,a._)("div",C,[(0,a._)("img",{src:e.img,alt:"",class:"avatar-xxs"},null,8,b)]),(0,a.Wm)(R,{href:"javascript:void(0);",class:"currency_name flex-grow-1 ms-2 currency_name"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e.coinName),1)])),_:2},1024)])]),(0,a._)("td",{class:(0,r.C_)(`type text-${e.typeClass}`)},(0,r.zw)(e.type),3),(0,a._)("td",k,(0,r.zw)(e.quantity),1),(0,a._)("td",P,(0,r.zw)(e.orderValue),1),(0,a._)("td",x,(0,r.zw)(e.avgPrice),1),(0,a._)("td",$,(0,r.zw)(e.price),1),(0,a._)("td",S,[(0,a._)("span",{class:(0,r.C_)(`badge badge-soft-${e.statusClass} text-uppercase`)},(0,r.zw)(e.status),3)])])))),128))])]),(0,a._)("div",{class:(0,r.C_)(["noresult",{"d-block":0==U.resultQuery.length}]),style:{display:"none"}},[(0,a._)("div",W,[(0,a.Wm)(Y,{class:"avatar-xl",colors:"primary:#121331,secondary:#08a88a",options:O.defaultOptions,height:75,width:75},null,8,["options"]),V,M])],2)]),(0,a._)("div",N,[1!=O.page||U.resultQuery.length>=10?((0,a.wg)(),(0,a.iD)("div",q,[1!=O.page?((0,a.wg)(),(0,a.j4)(R,{key:0,class:"page-item pagination-prev",href:"#",onClick:t[4]||(t[4]=e=>O.page--)},{default:(0,a.w5)((()=>[(0,a.Uk)(" Previous ")])),_:1})):(0,a.kq)("",!0),(0,a._)("ul",D,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(O.pages,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:(0,r.C_)({active:e==O.page,disabled:"..."==e}),key:t,onClick:t=>O.page=e},[(0,a.Wm)(R,{class:"page",href:"#"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(e),1)])),_:2},1024)],10,L)))),128))]),O.page<O.pages.length?((0,a.wg)(),(0,a.j4)(R,{key:1,class:"page-item pagination-next",href:"#",onClick:t[5]||(t[5]=e=>O.page++)},{default:(0,a.w5)((()=>[(0,a.Uk)(" Next ")])),_:1})):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}s(57658);var O=s(39810),U=s(60547),Q=s(20614),B=s(39880),T=s(84433),A=s(98804),j=s(724),H={components:{Layout:Q.Z,PageHeader:B.Z,lottie:A.Z,Multiselect:O.Z,flatPickr:U.Z},page:{title:"Orders",meta:[{name:"description",content:T.W}]},data(){return{title:"Orders",items:[{text:"Crypto",href:"/"},{text:"Orders",active:!0}],rangeDateconfig:{mode:"range",dateFormat:"d M, Y"},date:null,date2:null,value:null,value2:null,status:null,status1:null,searchQuery:null,posts:[{id:1,date:["02 Jan, 2022","03:45PM"],img:s(60016),coinName:"Bitcoin (BTC)",type:"Buy",typeClass:"success",quantity:"08",orderValue:"$3,70,683.2",avgPrice:"$46,154.30",price:"$46,335.40",status:"Successful",statusClass:"success"},{id:2,date:["27 Dec, 2021","02:47PM"],img:s(42436),coinName:"Ethereum (ETH)",type:"Sell",typeClass:"danger",quantity:"50",orderValue:"$1,87,433",avgPrice:"$3,744.48",price:"$3,748.66",status:"Cancelled",statusClass:"danger"},{id:3,date:["19 Dec, 2021","10:24AM"],img:s(57111),coinName:"Monero (XMR)",type:"Sell",typeClass:"danger",quantity:"150",orderValue:"$33,982.5",avgPrice:"$227.30",price:"$226.55",status:"Successful",statusClass:"success"},{id:4,date:["19 Dec, 2021","11:20AM"],img:s(62220),coinName:"Maker (MKR)",type:"Buy",typeClass:"success",quantity:"60",orderValue:"$1,43,445",avgPrice:"$2,470.30",price:"$2,390.75",status:"Pending",statusClass:"warning"},{id:5,date:["11 Dec, 2021","02:47PM"],img:s(37958),coinName:"Yearn.finance (YFI)",type:"Buy",typeClass:"success",quantity:"25",orderValue:"$9,81,906",avgPrice:"$37,632.17",price:"$39,276.24",status:"Cancelled",statusClass:"danger"},{id:6,date:["05 Dec, 2021","09:20AM"],img:s(62220),coinName:"Maker (MKR)",type:"Sell",typeClass:"danger",quantity:"20",orderValue:"$50,243",avgPrice:"$2,324.65",price:"$2,512.15",status:"Successful",statusClass:"success"},{id:7,date:["28 Nov, 2021","11:42AM"],img:s(86395),coinName:"Litecoin (LTC)",type:"Buy",typeClass:"success",quantity:"200",orderValue:"$29,500",avgPrice:"$144.00",price:"$147.50",status:"Pending",statusClass:"warning"},{id:8,date:["19 Nov, 2021","03:36PM"],img:s(57111),coinName:"Monero (XMR)",type:"Sell",typeClass:"danger",quantity:"75",orderValue:"$17,874",avgPrice:"$221.61",price:"$238.32",status:"Successful",statusClass:"success"},{id:9,date:["27 Oct, 2021","03:36PM"],img:s(29203),coinName:"Dash (DASH)",type:"Buy",typeClass:"success",quantity:"45",orderValue:"$14,962.5",avgPrice:"$147.39",price:"$142.5",status:"Cancelled",statusClass:"danger"},{id:10,date:["27 Oct, 2021","03:36PM"],img:s(33033),coinName:"Neo (NEO)",type:"Sell",typeClass:"danger",quantity:"36",orderValue:"$77,232.24",avgPrice:"$2,274.21",price:"$2,145.34",status:"Pending",statusClass:"warning"},{id:11,date:["21 Oct, 2021","11:45AM"],img:s(9544),coinName:"Enzyme (MLN)",type:"Sell",typeClass:"danger",quantity:"68",orderValue:"$6,296.8",avgPrice:"$94.21",price:"$92.60",status:"Successful",statusClass:"success"},{id:12,date:["24 Sep, 2021","02:32AM"],img:s(42436),coinName:"Ethereum (ETH)",type:"Buy",typeClass:"success",quantity:"72",orderValue:"$2,69,602.56",avgPrice:"$3,744.48",price:"$3,748.66",status:"Cancelled",statusClass:"danger"}],page:1,perPage:10,pages:[],defaultOptions:{animationData:j}}},computed:{displayedPosts(){return this.paginate(this.posts)},resultQuery(){if(this.searchQuery){const e=this.searchQuery.toLowerCase();return this.displayedPosts.filter((t=>t.coinName.toLowerCase().includes(e)||t.date[0].toLowerCase().includes(e)||t.date[1].toLowerCase().includes(e)||t.type.toLowerCase().includes(e)||t.quantity.toLowerCase().includes(e)||t.orderValue.toLowerCase().includes(e)||t.avgPrice.toLowerCase().includes(e)||t.price.toLowerCase().includes(e)||t.status.toLowerCase().includes(e)))}return null!==this.status||null!==this.value?this.displayedPosts.filter((e=>null==this.status||null==this.value?this.status===e.status||this.value===e.type?e:null:this.status===e.status&&this.value===e.type?e:void 0)):this.displayedPosts}},watch:{posts(){this.setPages()}},created(){this.setPages()},filters:{trimWords(e){return e.split(" ").splice(0,20).join(" ")+"..."}},methods:{setPages(){let e=Math.ceil(this.posts.length/this.perPage);for(let t=1;t<=e;t++)this.pages.push(t)},paginate(e){let t=this.page,s=this.perPage,a=t*s-s,l=t*s;return e.slice(a,l)},SearchData(){this.resultQuery,this.status=this.status1,this.value=this.value2}}},Z=s(83744);const E=(0,Z.Z)(H,[["render",z]]);var R=E},60016:function(e,t,s){e.exports=s.p+"img/btc.9716c952.svg"},29203:function(e,t,s){e.exports=s.p+"img/dash.88b38181.svg"},42436:function(e,t,s){e.exports=s.p+"img/eth.8e5a63b6.svg"},86395:function(e,t,s){e.exports=s.p+"img/ltc.83a77e5e.svg"},62220:function(e,t,s){e.exports=s.p+"img/mkr.62d52ece.svg"},9544:function(e,t,s){e.exports=s.p+"img/mln.4b0520a8.svg"},33033:function(e,t,s){e.exports=s.p+"img/neo.e707681f.svg"},57111:function(e,t,s){e.exports=s.p+"img/xmr.47158a7d.svg"},37958:function(e,t,s){e.exports=s.p+"img/yfi.106a24ce.svg"}}]);
//# sourceMappingURL=8199.c0226551.js.map