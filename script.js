// your code here
let submit = document.getElementById('button');
let h3 = document.getElementById('url');
let name = document.getElementById('name');
let year = document.getElementById('year');

function url(event){
    event.preventDefault()
   

    if(name.value != "" && year.value != ""){
        h3.innerText = 'https://localhost:8080/?name=' +name.value+"&year="+year.value;
    }else{
        if(name.value != ""){
            h3.innerText = 'https://localhost:8080/?name=' +name.value;
        }else if(year.value != ""){
            h3.innerText = 'https://localhost:8080/?year=' +year.value;
        }else{
            h3.innerText= 'https://localhost:8080/';
        }
    }

}

submit.addEventListener('click',url);
