
const csrftoken = getCookie('csrftoken');

function getCookie(name) {
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                return decodeURIComponent(cookie.substring(name.length + 1));
            }
        }
    }
    return null;
}


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

kuldgomb.onclick = szovegkuldes;

async function szovegkuldes(){
    let szotar = {
        'szoveg': szoveg_textarea.value,
    };
    let url = 'http://127.0.0.1:8000/api/szoveg/';
    let visszajelzés = await kuldo_fetch(url, szotar);
    alert(visszajelzés);
}

