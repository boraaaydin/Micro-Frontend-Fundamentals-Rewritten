import data from '../../db/data.json'
import lodash from 'lodash'

let detail="This is set from index.js in detail application";
console.log("application is running:",detail);

var list_id = getParameterByName("list-id")

if(list_id){
    detail+= `<div>${data.list[list_id].detail}</div>`
    console.log(`Index ${list_id} selected in detail app`)
}
else{
    detail+= `<div>${data.list[1].detail}</div>`
}


document.getElementById("dev-detail").innerHTML=detail;

function getParameterByName(name, url = window.location.href) {
    // name = name.replace(/[\[\]]/g, '\\$&');
    // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    //     results = regex.exec(url);
    // if (!results) return null;
    // if (!results[2]) return '';
    // return decodeURIComponent(results[2].replace(/\+/g, ' '));
    return 2;
}