
let user = document.getElementById('name').value
let mail = document.getElementById('email').value
let phone = document.getElementById('phone').value
let password = document.getElementById('password').value
let check = document.getElementById('check').value
let err = document.querySelector('#message')
let btn = document.getElementById('button').value
let date = document.getElementById('date').getFullYear
let gender =document.getElementById('male').value

err.innerText = "sdfsffeef "

btn.addEventListener("click", registration)

function registration(){
    if(!user || !phone || !email || !phone || !password || !check || !date){
        err.innerText = "fill all the fields"
        
    }
    if(email[0]==Number){
        err.innerText = "enter a valid email"
    }
    if(email.indexOf('@')==(-1) || email.indexOf('.')==(-1) || email.indexOf('@') > email.indexOf('.') || email.lastIndexOf('.')!= email.indexOf('.')){
        err.innerText = "enter valid email"
    }
    if(password.lenght<9){
        err.innerText = "password must be 8 character"
    }
    if(password.charCodeAt(password[0])<(64) || password.charCodeAt(password[0])>(98)){
        err.innerText = "paasword first letter should be capital"
    }
    let i=0,f=0
    while(i<password.length){
        if(password[i]==" "){
            f++
        }
        i++
    }
    if(f>0){
       err.innerText = "no space in password"
    }
    if(2022-date<18){
        btn.disabled =true
    }
    if(password!=check){
        err.innerText = 'confirm and password should be same'
    }
    if(gender.checked == true){
        btn.disabled = true
    }
    

}


