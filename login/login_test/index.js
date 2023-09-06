let username = document.querySelector("#username");
let confirm_username = document.querySelector("#confirm_username");
let email = document.querySelector("#email");
let confirm_email = document.querySelector("#confirm_email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");
let confirm_password1 = document.querySelector("#confirm_password1");
let button = document.querySelector("#submit");
let login = document.querySelector("#login");
/* let guests = [[ID,""],[email,""],[PW,""]]; */

let arr_ID = new Array(5);
let arr_PW = new Array(5);
let arr_email = new Array(5);

arr_ID = username.value;
arr_email = email.value;
arr_PW = password.value;

button.addEventListener("click", signbutton);

function signbutton(){
  if (username.value.length < 2){
    confirm_username.innerText = "사용자 이름은 최소 2자 이상입니다.";
  }

  if (email.value === ""){
    confirm_email.innerText ="사용자 이메일을 입력해주세요";
  }

  if (password.value !== confirm_password.value){
    confirm_password1.innerText ="비밀번호가 일치하지 않습니다.";
  }

  if(username.value.length >= 2 && email.value.length !== "" && password.value === confirm_password.value){
    localStorage.setItem("ID", arr_ID);
    localStorage.setItem("email", arr_email.value);
    localStorage.setItem("pwd", arr_PW.value);

  }
}
