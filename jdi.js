// function registration(){
//     // var name=document.getElementById("i1").value;
//     // var email=document.getElementById("i2").value;
//     // var pass=document.getElementById("i3").value;
//     // var cpass=document.getElementById("i4").value; 
//     // alert(`your name ${name} your email ${email} your pass is ${pass} your cpass ${[cpass]} `)
// }
var nme=[];
var email=[];
var pass=[];
var cpass=[];
i=0;
function registration(){
          nme[i]=document.getElementById("i1").value;
          email[i]=document.getElementById("i2").value;
          pass[i]=document.getElementById("i3").value;
          cpass[i]=document.getElementById("i4").value; 
          if (pass[i]!=cpass[i]){
              alert("Password is not match")
              document.getElementById("i3").value="";
              document.getElementById("i4").value="";
            }
          else if (document.getElementById("i3").value.length<6){
              alert("Password minimum lenght is 6")
            }
          else if (document.getElementById("i3").value.length>8){
              alert("Password maximum lenght is 8")
            }

          else if (pass[i]==cpass){
            alert(`Are you sure?\nusername=${nme}\nEmail=${email}`);
            // alert(`Are you sure ? username = ${nme} email = ${email}`)
            i++;
            document.getElementById("i1").value="";
            document.getElementById("i2").value="";
            document.getElementById("i3").value="";
            document.getElementById("i4").value="";
            location.href="jdi2.html";
          }
          console.log(nme);
          console.log(email);
          console.log(pass);
          console.log(cpass);
  
}
var a=document.getElementById("in1").value;
var b=document.getElementById("in2").value;

function login(){
  // if (a==="Bhuvan" && b==="Bhuvan"){
    alert("successfully Login!!\n:)")
    location.href="Travilia.com.html"
 
  // }
  // else{
  //   alert("Invalid username and Password")
  // }

}
function tsubmit(){
  alert("Successfully Submit")
  document.getElementById("txta").value="";

}
function psubmit(){
  alert("Successfully Post")
  document.getElementById("posta").value="";
}