let outputText = document.getElementById('outText');
let formContent = document.getElementById('submitForm');
let formMethod = document.getElementById("submitForm").method;
function postFunction(){
    formMethod = "POST";
    //document.forms[0].submit();
    var xmreq = new XMLHttpRequest();
    var formData = new FormData(formContent);
    xmreq.open('POST','https://httpbin.org/post');
    //xmreq.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xmreq.onload = () => {
        if (xmreq.readyState == XMLHttpRequest.DONE){
            //let dataObj = JSON.parse(xmreq.response);
            //console.log(dataObj);
            let rsp = xmreq.responseText;

            outputText.innerHTML = rsp;
            //console.log(xmreq.responseText);
            //alert(xmreq.responseText);
        }
        
    } 
    xmreq.send(formData);
}

function getFunction(){
    formMethod = "GET";
    var xmreq = new XMLHttpRequest();
    var formData = new FormData(formContent);
    xmreq.open('GET','https://httpbin.org/get');
    xmreq.onload = () => {
        if (xmreq.readyState == XMLHttpRequest.DONE){
            outputText.innerHTML = xmreq.responseText;
        }
        
    } 
    xmreq.send(formData);
}

function putFunction(){
    formMethod = "POST";
    var xmreq = new XMLHttpRequest();
    var formData = new FormData(formContent);
    xmreq.open('PUT','https://httpbin.org/put');
    xmreq.onload = () => {
        if (xmreq.readyState == XMLHttpRequest.DONE){
            outputText.innerHTML = xmreq.responseText;
        }
        
    } 
    xmreq.send(formData);
}

function deleteFunction(){
    formMethod = "GET";
    var xmreq = new XMLHttpRequest();
    var formData = new FormData(formContent);
    xmreq.open('DELETE','https://httpbin.org/delete');
    xmreq.onload = () => {
        if (xmreq.readyState == XMLHttpRequest.DONE){
            outputText.innerHTML = xmreq.responseText;
        }
        
    } 
    xmreq.send(formData);
}