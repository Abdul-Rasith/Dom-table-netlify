// create table and class name
var table = document.createElement("table")
table.className = "table"
// create thead
var thead = document.createElement("thead")
thead.className = "thead-dark"
// create tbody
var tbody = document.createElement("tbody")
// table row
function create_tr(){
    var tr = document.createElement("tr")
    return tr
}
// table head
function create_th(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML = content
    return ele
}
//table data(td)
function create_td(tagname,content){
    var element = document.createElement(tagname)
    element.innerHTML = content;
    return element
}
// tablehead content
var thead_tr  = create_tr()
var th1 = create_th("th","scope","col","#")
var th2 = create_th("th","scope","col","First")
var th3 = create_th("th","scope","col","Last")
var th4 = create_th("th","scope","col","Handle");
thead_tr.append(th1,th2,th3,th4);
thead.append(thead_tr);
// table body content
var tbody_tr = create_tr()
var body_th = create_th("th","scope","row","1")
var td1 = create_td("td","mark")
var td2 = create_td("td","otto")
var td3 = create_td("td","@otto")
tbody_tr.append(body_th,td1,td2,td3)
tbody.append(tbody_tr)

table.append(thead,tbody)
document.body.append(table)