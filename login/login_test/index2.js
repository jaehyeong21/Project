let newID = localStorage.getItem("ID");
let newpwd = localStorage.getItem("pwd");

login.addEventListener("click", login_button);
function login_button(){
  if(username.value === newID){
    if(password.value === newpwd)
      alert("로그인 성공!"); 
  }
  else
    alert("다시 입력해주세요");
}