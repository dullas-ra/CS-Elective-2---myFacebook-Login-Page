function validate(){

    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email=="admin" && password=="admin"){
        location.replace('homepage.html');
    }
    else{
      alert("failed");
   }
   return false;
}
