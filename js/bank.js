document.getElementById('submit-button').addEventListener('click', function(){
    const emailField=document.getElementById("user-email");
    const userEmail=emailField.value;


    const passField=document.getElementById("user-password");
    const userpass=passField.value;
    
    if(userEmail == "sontan@gmail.com" && userpass == "secreat"){
window.location.href="banking.html"
    }

    
})