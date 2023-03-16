let outputText = document.getElementById('outText');
let formContent = document.getElementById('submitForm');
let formMethod = document.getElementById("submitForm").method;
let radioSelect = document.getElementsByName("way");
function postFunction(){
    formMethod = "POST";
    var formData = new FormData(formContent);

    // fetch method
    if (radioSelect[0].checked) {
        fetch("https://httpbin.org/post",{
            method: "POST",
            body: formData,
        })
        .then((response) => response.text())
        .then((text) => {
            outputText.innerHTML = text;
        })

    // xmlhttprequest
    } else {
        var xmreq = new XMLHttpRequest();
        xmreq.open('POST','https://httpbin.org/post');
        xmreq.onload = () => {
            if (xmreq.readyState == XMLHttpRequest.DONE){
                let rsp = xmreq.responseText;
                outputText.innerHTML = rsp;
            }
        } 
        xmreq.send(formData);
    }
    
}

function getFunction(){
    formMethod = "GET";
    var formData = new FormData(formContent);
    let queryString = new URLSearchParams(formData).toString();

    // fetch method
    if (radioSelect[0].checked) {
        fetch("https://httpbin.org/get?" + queryString)
        .then((response) => response.text())
        .then((text) => {
            outputText.innerHTML = text;
        })

    // xmlhttprequest
    } else {
        var xmreq = new XMLHttpRequest();
        xmreq.open('GET','https://httpbin.org/get?'+ queryString);
        xmreq.onload = () => {
            if (xmreq.readyState == XMLHttpRequest.DONE){
                outputText.innerHTML = xmreq.responseText;
            }
        } 
        xmreq.send(formData);
    }
}

function putFunction(){
    formMethod = "POST";
    var formData = new FormData(formContent);
    
    // fetch method
    if (radioSelect[0].checked) {
        var formData = new FormData(formContent);
        fetch("https://httpbin.org/put",{
            method: "PUT",
            body: formData,
        })
        .then((response) => response.text())
        .then((text) => {
            outputText.innerHTML = text;
        })

    // xmlhttprequest
    } else {
        var xmreq = new XMLHttpRequest();
        xmreq.open('PUT','https://httpbin.org/put');
        xmreq.onload = () => {
            if (xmreq.readyState == XMLHttpRequest.DONE){
                outputText.innerHTML = xmreq.responseText;
            }
            
        } 
        xmreq.send(formData);
    }
}

function deleteFunction(){
    formMethod = "GET";
    var formData = new FormData(formContent);
    let queryString = new URLSearchParams(formData).toString();

    // fetch method
    if (radioSelect[0].checked) {
        fetch("https://httpbin.org/delete?" + queryString,{
        method: "DELETE",
        })
        .then((response) => response.text())
        .then((text) => {
            outputText.innerHTML = text;
        })

    // xmlhttprequest
    } else {
        var xmreq = new XMLHttpRequest();
        xmreq.open('DELETE','https://httpbin.org/delete?'+ queryString);
        xmreq.onload = () => {
            if (xmreq.readyState == XMLHttpRequest.DONE){
                outputText.innerHTML = xmreq.responseText;
            }
        } 
        xmreq.send(formData);
    }
}