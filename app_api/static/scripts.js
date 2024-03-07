//////////////////////////////////////
// Fetchek

async function olvaso_fetch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}


async function kuldo_fetch(url, szotar){
    const response = await fetch(url, {
        method:'POST',
        headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify(szotar)
    }
    );
    const json_promise = await response.json();
    return json_promise;
}


gomb.onclick = getrandom;

async function getrandom(){
    let random = await olvaso_fetch('http://127.0.0.1:8000/api/randomszam/');
    alert(random);
}
