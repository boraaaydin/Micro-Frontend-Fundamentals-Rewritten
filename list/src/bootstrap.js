import data from "../../db/data.json"
import lodash from 'lodash'

let appName="This is set from index.js in list application";
for (let i=0;i<3;i++){
    appName+= `<div onclick="javascript:window.location.href='?list_id=${data.list[i].id}'">${data.list[i].title}</div>`
}
document.getElementById("dev-list").innerHTML=appName;
console.log("application is running:",appName);