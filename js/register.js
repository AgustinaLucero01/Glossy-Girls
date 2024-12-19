let singin=document.querySelector("#sing_in");
let singup=document.querySelector("#sing_up");
let singInForm=document.querySelector(".form_sign_in");
let body=document.querySelector(".register");

singup.onclick=function(){
    body.classList.add("form_slide");
    if(body.classList.contains("form_slide")){
        body.style.background="#e57a1c";
    }
}

singin.onclick=function() {
    body.classList.remove("form_slide");
    body.style.background="#b59e67";
    
}

 