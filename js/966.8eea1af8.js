"use strict";(self["webpackChunkvelzon"]=self["webpackChunkvelzon"]||[]).push([[966],{60966:function(e,t,a){a.r(t),a.d(t,{default:function(){return ye}});var l=a(66252),s=a(58061),o=a(56612);const i=(0,l._)("div",null,[(0,l._)("h5",{class:"card-title mb-0"},"Customer List")],-1),d={class:"d-flex flex-wrap align-items-start gap-2"},c=(0,l._)("i",{class:"ri-delete-bin-2-line"},null,-1),n=(0,l._)("i",{class:"ri-add-line align-bottom me-1"},null,-1),r=(0,l._)("i",{class:"ri-file-download-line align-bottom me-1"},null,-1),u={class:"search-box"},m=(0,l._)("i",{class:"ri-search-line search-icon"},null,-1),p={class:""},h=(0,l._)("i",{class:"ri-equalizer-fill me-2 align-bottom"},null,-1),f={class:"table-responsive table-card mb-1"},v={class:"table align-middle",id:"customerTable"},b=(0,l._)("thead",{class:"table-light text-muted"},[(0,l._)("tr",null,[(0,l._)("th",{scope:"col",style:{width:"50px"}},[(0,l._)("div",{class:"form-check"},[(0,l._)("input",{class:"form-check-input",type:"checkbox",id:"checkAll",value:"option"})])]),(0,l._)("th",{class:"sort","data-sort":"customer_name"},"Customer"),(0,l._)("th",{class:"sort","data-sort":"email"},"Email"),(0,l._)("th",{class:"sort","data-sort":"phone"},"Phone"),(0,l._)("th",{class:"sort","data-sort":"date"},"Joining Date"),(0,l._)("th",{class:"sort","data-sort":"status"},"Delivery Status"),(0,l._)("th",{class:"sort","data-sort":"action"},"Action")])],-1),g={class:"list form-check-all"},_=(0,l._)("th",{scope:"row"},[(0,l._)("div",{class:"form-check"},[(0,l._)("input",{class:"form-check-input",type:"checkbox",name:"chk_child",value:"option1"})])],-1),y={class:"id",style:{display:"none"}},k={class:"customer_name"},w={class:"email"},C={class:"phone"},I={class:"date"},E={class:"status"},B={class:"list-inline hstack gap-2 mb-0"},W={class:"list-inline-item edit","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Edit"},L=(0,l._)("i",{class:"ri-pencil-fill fs-16"},null,-1),A={class:"list-inline-item","data-bs-toggle":"tooltip","data-bs-trigger":"hover","data-bs-placement":"top",title:"Remove"},x=(0,l._)("i",{class:"ri-delete-bin-5-fill fs-16"},null,-1),M={class:"noresult",style:{display:"none"}},V={class:"text-center"},D=(0,l._)("h5",{class:"mt-2"},"Sorry! No Result Found",-1),P=(0,l._)("p",{class:"text-muted mb-0"}," We've searched more than 150+ customer We did not find any customer for you search. ",-1),Z={class:"d-flex justify-content-end"},z={class:"pagination-wrap hstack gap-2",style:{display:"flex"}},S={class:"pagination listjs-pagination mb-0"},U=["onClick"],j=(0,l._)("input",{type:"hidden",id:"id-field"},null,-1),q=(0,l._)("div",{class:"mb-3",id:"modal-id",style:{display:"none"}},[(0,l._)("label",{for:"id-field1",class:"form-label"},"ID"),(0,l._)("input",{type:"text",id:"idfield1",class:"form-control",placeholder:"ID",readonly:""})],-1),N=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"customername-field",class:"form-label"},"Customer Name"),(0,l._)("input",{type:"text",id:"customername",class:"form-control",placeholder:"Enter Name",required:""}),(0,l._)("div",{class:"invalid-feedback"},"Please enter a customer name.")],-1),J=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"email-field",class:"form-label"},"Email"),(0,l._)("input",{type:"email",id:"email",class:"form-control",placeholder:"Enter Email",required:""}),(0,l._)("div",{class:"invalid-feedback"},"Please enter an email.")],-1),Y=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"phone-field",class:"form-label"},"Phone"),(0,l._)("input",{type:"text",id:"phone",class:"form-control",placeholder:"Enter Phone no.",required:""}),(0,l._)("div",{class:"invalid-feedback"},"Please enter a phone.")],-1),F={class:"mb-3"},T=(0,l._)("label",{for:"date-field",class:"form-label"},"Joining Date",-1),Q=(0,l._)("div",{class:"invalid-feedback"},"Please select a date.",-1),H=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"status-field",class:"form-label"},"Status"),(0,l._)("select",{class:"form-control","data-trigger":"",id:"statusfield"},[(0,l._)("option",{value:""},"Status"),(0,l._)("option",{value:"Active"},"Active"),(0,l._)("option",{value:"Block"},"Block")])],-1),O={class:"hstack gap-2 justify-content-end"},K=(0,l._)("input",{type:"hidden",id:"id-field"},null,-1),R=(0,l._)("div",{class:"mb-3",id:"modal-id",style:{display:"none"}},[(0,l._)("label",{for:"id-field1",class:"form-label"},"ID"),(0,l._)("input",{type:"text",id:"edtidfield1",class:"form-control",placeholder:"ID",readonly:""})],-1),$=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"customername-field",class:"form-label"},"Customer Name"),(0,l._)("input",{type:"text",id:"edtcustomername",class:"form-control",placeholder:"Enter Name",required:""}),(0,l._)("div",{class:"invalid-feedback"},"Please enter a customer name.")],-1),G=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"email-field",class:"form-label"},"Email"),(0,l._)("input",{type:"email",id:"edtemail",class:"form-control",placeholder:"Enter Email",required:""}),(0,l._)("div",{class:"invalid-feedback"},"Please enter an email.")],-1),X=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"phone-field",class:"form-label"},"Phone"),(0,l._)("input",{type:"text",id:"edtphone",class:"form-control",placeholder:"Enter Phone no.",required:""}),(0,l._)("div",{class:"invalid-feedback"},"Please enter a phone.")],-1),ee={class:"mb-3"},te=(0,l._)("label",{for:"date-field",class:"form-label"},"Joining Date",-1),ae=(0,l._)("div",{class:"invalid-feedback"},"Please select a date.",-1),le=(0,l._)("div",{class:"mb-3"},[(0,l._)("label",{for:"status-field",class:"form-label"},"Status"),(0,l._)("select",{class:"form-control","data-trigger":"",id:"edtstatusfield"},[(0,l._)("option",{value:""},"Status"),(0,l._)("option",{value:"Active"},"Active"),(0,l._)("option",{value:"Block"},"Block")])],-1),se={class:"hstack gap-2 justify-content-end"};function oe(e,t,a,oe,ie,de){const ce=(0,l.up)("PageHeader"),ne=(0,l.up)("b-col"),re=(0,l.up)("b-button"),ue=(0,l.up)("b-row"),me=(0,l.up)("b-card-header"),pe=(0,l.up)("flat-pickr"),he=(0,l.up)("Multiselect"),fe=(0,l.up)("b-form"),ve=(0,l.up)("b-card-body"),be=(0,l.up)("b-link"),ge=(0,l.up)("lottie"),_e=(0,l.up)("b-modal"),ye=(0,l.up)("b-card"),ke=(0,l.up)("Layout");return(0,l.wg)(),(0,l.j4)(ke,null,{default:(0,l.w5)((()=>[(0,l.Wm)(ce,{title:ie.title,items:ie.items},null,8,["title","items"]),(0,l.Wm)(ue,null,{default:(0,l.w5)((()=>[(0,l.Wm)(ne,{lg:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(ye,{"no-body":"",id:"customerList"},{default:(0,l.w5)((()=>[(0,l.Wm)(me,{class:"border-bottom-dashed"},{default:(0,l.w5)((()=>[(0,l.Wm)(ue,{class:"g-4 align-items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(ne,{sm:""},{default:(0,l.w5)((()=>[i])),_:1}),(0,l.Wm)(ne,{sm:"auto"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l.Wm)(re,{variant:"soft-danger",class:"me-1",id:"remove-actions",onClick:de.deleteMultiple},{default:(0,l.w5)((()=>[c])),_:1},8,["onClick"]),(0,l.Wm)(re,{type:"button",variant:"success",class:"add-btn me-1",id:"create-btn",onClick:t[0]||(t[0]=e=>ie.addCustomerModal=!ie.addCustomerModal)},{default:(0,l.w5)((()=>[n,(0,l.Uk)(" Add Customer ")])),_:1}),(0,l.Wm)(re,{type:"button",variant:"info"},{default:(0,l.w5)((()=>[r,(0,l.Uk)(" Import ")])),_:1})])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(ve,{class:"border-bottom-dashed border-bottom"},{default:(0,l.w5)((()=>[(0,l.Wm)(fe,null,{default:(0,l.w5)((()=>[(0,l.Wm)(ue,{class:"g-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(ne,{xl:"6"},{default:(0,l.w5)((()=>[(0,l._)("div",u,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control search",placeholder:"Search for customer, email, phone, status or something...","onUpdate:modelValue":t[1]||(t[1]=e=>ie.searchQuery=e)},null,512),[[s.nr,ie.searchQuery]]),m])])),_:1}),(0,l.Wm)(ne,{xl:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(ue,{class:"g-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(ne,{sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l.Wm)(pe,{modelValue:ie.date,"onUpdate:modelValue":t[2]||(t[2]=e=>ie.date=e),placeholder:"Select date",config:ie.rangeDateconfig,class:"form-control"},null,8,["modelValue","config"])])])),_:1}),(0,l.Wm)(ne,{sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(he,{class:"form-control",modelValue:ie.value1,"onUpdate:modelValue":t[3]||(t[3]=e=>ie.value1=e),"close-on-select":!0,searchable:!0,"create-option":!0,options:[{value:"",label:"Status",disabled:!0},{value:"All",label:"All"},{value:"Active",label:"Active"},{value:"Block",label:"Block"}]},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(ne,{sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(re,{type:"button",variant:"primary",class:"w-100",onClick:de.SearchData},{default:(0,l.w5)((()=>[h,(0,l.Uk)("Filters ")])),_:1},8,["onClick"])])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(ve,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l._)("div",f,[(0,l._)("table",v,[b,(0,l._)("tbody",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(de.resultQuery,((e,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:t},[_,(0,l._)("td",y,[(0,l.Wm)(be,{href:"javascript:void(0);",class:"fw-medium link-primary"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e.customerId),1)])),_:2},1024)]),(0,l._)("td",k,(0,o.zw)(e.customer),1),(0,l._)("td",w,(0,o.zw)(e.email),1),(0,l._)("td",C,(0,o.zw)(e.phone),1),(0,l._)("td",I,(0,o.zw)(e.date),1),(0,l._)("td",E,[(0,l._)("span",{class:(0,o.C_)(["badge text-uppercase",{"badge-soft-success":"Active"==e.status,"badge-soft-danger":"Block"==e.status}])},(0,o.zw)(e.status),3)]),(0,l._)("td",null,[(0,l._)("ul",B,[(0,l._)("li",W,[(0,l.Wm)(be,{variant:"text-primary",class:"d-inline-block edit-item-btn",onClick:t=>de.editdata(e)},{default:(0,l.w5)((()=>[L])),_:2},1032,["onClick"])]),(0,l._)("li",A,[(0,l.Wm)(be,{class:"text-danger d-inline-block remove-item-btn",onClick:t=>de.deletedata(e)},{default:(0,l.w5)((()=>[x])),_:2},1032,["onClick"])])])])])))),128))])]),(0,l._)("div",M,[(0,l._)("div",V,[(0,l.Wm)(ge,{class:"avatar-xl",colors:"primary:#121331,secondary:#08a88a",options:ie.defaultOptions,height:75,width:75},null,8,["options"]),D,P])])]),(0,l._)("div",Z,[(0,l._)("div",z,[1!=ie.page?((0,l.wg)(),(0,l.j4)(be,{key:0,class:(0,o.C_)(["page-item pagination-prev",{disabled:1==ie.page}]),href:"#",onClick:t[4]||(t[4]=e=>ie.page--)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Previous ")])),_:1},8,["class"])):(0,l.kq)("",!0),(0,l._)("ul",S,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(ie.pages,((e,t)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,o.C_)({active:e==ie.page,disabled:"..."==e}),key:t,onClick:t=>ie.page=e},[(0,l.Wm)(be,{class:"page",href:"#","data-i":"1","data-page":"8"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(e),1)])),_:2},1024)],10,U)))),128))]),ie.page<ie.pages.length?((0,l.wg)(),(0,l.j4)(be,{key:1,class:"page-item pagination-next",href:"#",onClick:t[5]||(t[5]=e=>ie.page++)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Next ")])),_:1})):(0,l.kq)("",!0)])])]),(0,l.Wm)(_e,{modelValue:ie.addCustomerModal,"onUpdate:modelValue":t[8]||(t[8]=e=>ie.addCustomerModal=e),id:"showModal","hide-footer":"",title:" Add Customer","header-class":"p-3 bg-light",class:"v-modal-custom",centered:"","no-close-on-backdrop":""},{default:(0,l.w5)((()=>[(0,l.Wm)(fe,{action:"#",id:"addform",class:"tablelist-form",autocomplete:"off"},{default:(0,l.w5)((()=>[j,q,N,J,Y,(0,l._)("div",F,[T,(0,l.Wm)(pe,{modelValue:ie.date1,"onUpdate:modelValue":t[6]||(t[6]=e=>ie.date1=e),config:ie.config,class:"form-control",id:"joindate"},null,8,["modelValue","config"]),Q]),H,(0,l._)("div",O,[(0,l.Wm)(re,{type:"button",id:"closemodal",variant:"light",onClick:t[7]||(t[7]=e=>ie.addCustomerModal=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Close ")])),_:1}),(0,l.Wm)(re,{type:"button",variant:"success",onClick:de.adddata},{default:(0,l.w5)((()=>[(0,l.Uk)("Add Customer")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(_e,{modelValue:ie.editCustomerModal,"onUpdate:modelValue":t[11]||(t[11]=e=>ie.editCustomerModal=e),id:"editmodal","hide-footer":"",title:"Update Customer","header-class":"p-3 bg-light",class:"v-modal-custom",centered:"","no-close-on-backdrop":""},{default:(0,l.w5)((()=>[(0,l.Wm)(fe,{action:"#",id:"addform",class:"tablelist-form",autocomplete:"off"},{default:(0,l.w5)((()=>[K,R,$,G,X,(0,l._)("div",ee,[te,(0,l.Wm)(pe,{modelValue:ie.date1,"onUpdate:modelValue":t[9]||(t[9]=e=>ie.date1=e),config:ie.config,class:"form-control",id:"edtjoindate"},null,8,["modelValue","config"]),ae]),le,(0,l._)("div",se,[(0,l.Wm)(re,{type:"button",variant:"light",id:"edtclosemodal",onClick:t[10]||(t[10]=e=>ie.editCustomerModal=!1)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Close ")])),_:1}),(0,l.Wm)(re,{type:"button",variant:"success",onClick:de.updatedata},{default:(0,l.w5)((()=>[(0,l.Uk)(" Update ")])),_:1},8,["onClick"])])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}a(57658);var ie=a(39810),de=a(60547),ce=a(20614),ne=a(39880),re=a(84433),ue=a(86455),me=a.n(ue),pe=a(6154),he=a(98804),fe=a(724),ve=a(78014),be={page:{title:"Customers",meta:[{name:"description",content:re.W}]},data(){return{title:"Customers",items:[{text:"Ecommerce",href:"/"},{text:"Customers",active:!0}],date1:null,date:null,addCustomerModal:!1,editCustomerModal:!1,rangeDateconfig:{wrap:!0,altFormat:"M j, Y",altInput:!0,dateFormat:"d M, Y",mode:"range"},config:{enableTime:!1,dateFormat:"d M, Y"},searchQuery:null,defaultOptions:{animationData:fe},defaultOptions2:{animationData:ve},page:1,perPage:8,value:"All",value1:null,pages:[],customerList:[{id:1,customerId:"#VZ2101",customer:"Mary Cousar",email:"marycousar@velzon.com",phone:"580-464-4694",date:"06 Apr, 2021",status:"Active",statusClass:"success"},{id:2,customerId:"#VZ2102",customer:"Jeff Taylor",email:"jefftaylor@velzon.com",phone:"863-577-5537",date:"15 Feb, 2021",status:"Active",statusClass:"success"},{id:3,customerId:"#VZ2103",customer:"Robert McMahon",email:"robertmcmahon@velzon.com",phone:"786-253-9927",date:"12 Jan, 2021",status:"Active",statusClass:"success"},{id:4,customerId:"#VZ2104",customer:"Michael Morris",email:"michaelmorris@velzon.com",phone:"805-447-8398",date:"19 May, 2021",status:"Block",statusClass:"danger"},{id:5,customerId:"#VZ2105",customer:"Kevin Dawson",email:"kevindawson@velzon.com",phone:"213-741-4294",date:"14 Apr, 2021",status:"Active",statusClass:"success"},{id:6,customerId:"#VZ2106",customer:"Carolyn Jones",email:"carolynjones@velzon.com",phone:"414-453-5725",date:"07 Jun, 2021",status:"Active",statusClass:"success"},{id:7,customerId:"#VZ2107",customer:"Glen Matney",email:"glenmatney@velzon.com",phone:"515-395-1069",date:"02 Nov, 2021",status:"Active",statusClass:"success"},{id:8,customerId:"#VZ2108",customer:"Charles Kubik",email:"charleskubik@velzon.com",phone:"231-480-8536",date:"25 Sep, 2021",status:"Block",statusClass:"danger"},{id:9,customerId:"#VZ2109",customer:"Herbert Stokes",email:"herbertstokes@velzon.com",phone:"312-944-1448",date:"20 Jul, 2021",status:"Block",statusClass:"danger"},{id:10,customerId:"#VZ21010",customer:"Timothy Smith",email:"timothysmith@velzon.com",phone:"973-277-6950",date:"13 Dec, 2021",status:"Active",statusClass:"success"},{id:11,customerId:"#VZ21011",customer:"Johnny Evans",email:"johnnyevans@velzon.com",phone:"407-645-1767",date:"01 Oct, 2021",status:"Block",statusClass:"danger"},{id:12,customerId:"#VZ21012",customer:"Kevin Dawson",email:"kevindawson@velzon.com",phone:"213-741-4294",date:"14 Apr, 2021",status:"Active",statusClass:"success"}]}},computed:{displayedPosts(){return this.paginate(this.customerList)},resultQuery(){if(this.searchQuery){const e=this.searchQuery.toLowerCase();return this.displayedPosts.filter((t=>t.customer.toLowerCase().includes(e)||t.email.toLowerCase().includes(e)||t.phone.includes(e)||t.date.toLowerCase().includes(e)||t.status.toLowerCase().includes(e)))}if(null!==this.date){if(null!==this.date)var e=this.date.split(" to ")[0],t=this.date.split(" to ")[1];return this.displayedPosts.filter((a=>new Date(a.date.slice(0,12))>=new Date(e)&&new Date(a.date.slice(0,12))<=new Date(t)?a:null))}return null!==this.value?this.displayedPosts.filter((e=>e.status===this.value||"All"==this.value?e:null)):this.displayedPosts}},created(){this.setPages()},filters:{trimWords(e){return e.split(" ").splice(0,20).join(" ")+"..."}},beforeMount(){pe.Z.get("https://api-node.themesbrand.website/apps/customer").then((e=>{this.customerList=[],e.data.data.forEach((e=>{const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var a=new Date(e.date);e.date=a.getDate()+" "+t[a.getMonth()]+", "+a.getFullYear(),this.customerList.push(e)}))})).catch((e=>{console.log(e)}))},methods:{editdata(e){this.editCustomerModal=!0;let t=this.customerList.findIndex((t=>t.customerId==e.customerId));document.getElementById("edtidfield1").value=this.customerList[t]._id,document.getElementById("edtcustomername").value=this.customerList[t].customer,document.getElementById("edtemail").value=this.customerList[t].email,document.getElementById("edtphone").value=this.customerList[t].phone,document.getElementById("edtjoindate").value=this.customerList[t].date,document.getElementById("edtstatusfield").value=this.customerList[t].status},updatedata(){let e=this.customerList.findIndex((e=>e._id==document.getElementById("edtidfield1").value));this.customerList[e].customer=document.getElementById("edtcustomername").value,this.customerList[e].email=document.getElementById("edtemail").value,this.customerList[e].phone=document.getElementById("edtphone").value,this.customerList[e].date=document.getElementById("edtjoindate").value,this.customerList[e].status=document.getElementById("edtstatusfield").value,"Active"==this.customerList[e].status?this.customerList[e].statusClass="success":this.customerList[e].statusClass="danger",document.getElementById("edtclosemodal").click(),pe.Z.patch(`https://api-node.themesbrand.website/apps/customer/${document.getElementById("edtidfield1").value}`,this.customerList[e]).then((()=>{})).catch((e=>{console.log(e)}))},deletedata(e){me().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#f46a6a",confirmButtonColor:"#34c38f",confirmButtonText:"Yes, delete it!"}).then((t=>{t.value&&(this.customerList.splice(this.customerList.indexOf(e),1),pe.Z["delete"](`https://api-node.themesbrand.website/apps/customer/${e._id}`).then((()=>{})).catch((e=>{console.log(e)})),me().fire("Deleted!","Your file has been deleted.","success"))}))},adddata(){var e,t=document.getElementById("customername").value,a=document.getElementById("email").value,l=document.getElementById("phone").value,s=document.getElementById("joindate").value,o=document.getElementById("statusfield").value;if(e="Active"==o?"success":"danger",null!=t&&null!=a&&null!=l&&null!=s&&null!=o){var i={id:"x",customerId:"#VZ2",customer:t,email:a,phone:l,date:s,status:o,statusClass:e};this.customerList.push(i),pe.Z.post("https://api-node.themesbrand.website/apps/customer",i).then((()=>{})).catch((e=>{console.log(e)}))}document.getElementById("closemodal").click(),document.getElementById("addform").reset()},setPages(){let e=Math.ceil(this.customerList.length/this.perPage);for(let t=1;t<=e;t++)this.pages.push(t)},paginate(e){let t=this.page,a=this.perPage,l=t*a-a,s=t*a;return e.slice(l,s)},deleteMultiple(){let e=[];var t=document.getElementsByName("chk_child");if(t.forEach((function(t){if(1==t.checked){var a=t.parentNode.parentNode.parentNode,l=a.querySelector(".id a").innerHTML;e.push(l)}})),"undefined"!==typeof e&&e.length>0){if(!confirm("Are you sure you want to delete this?"))return!1;var a=this.customerList;e.forEach((function(e){a=a.filter((function(t){return t.customerId!=e}))})),this.customerList=a,document.getElementById("checkAll").checked=!1;var l=document.getElementsByName("chk_child");l.forEach((function(e){1==e.checked&&(e.checked=!1,e.closest("tr").classList.remove("table-active"))}))}else me().fire({title:"Please select at least one checkbox",confirmButtonClass:"btn btn-info",buttonsStyling:!1,showCloseButton:!0})},SearchData(){this.value=this.value1}},mounted(){var e=document.getElementById("checkAll");e&&(e.onclick=function(){var t=document.querySelectorAll('.form-check-all input[type="checkbox"]');1==e.checked?t.forEach((function(e){e.checked=!0,e.closest("tr").classList.add("table-active"),document.getElementById("remove-actions").style.display="block"})):t.forEach((function(e){e.checked=!1,e.closest("tr").classList.remove("table-active"),document.getElementById("remove-actions").style.display="none"}))});var t=document.querySelectorAll("#customerTable .form-check-input");Array.from(t).forEach((function(e){e.addEventListener("change",(function(e){var t=document.querySelectorAll("#customerTable .form-check-input:checked").length;e.target.closest("tr").classList.contains("table-active"),document.getElementById("remove-actions").style.display=t>0?"block":"none"}))}))},components:{Layout:ce.Z,PageHeader:ne.Z,lottie:he.Z,Multiselect:ie.Z,flatPickr:de.Z}},ge=a(83744);const _e=(0,ge.Z)(be,[["render",oe]]);var ye=_e}}]);
//# sourceMappingURL=966.8eea1af8.js.map