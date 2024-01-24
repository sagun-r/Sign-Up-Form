const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", (e) => {
  const pwd = document.getElementsByClassName("pwd")[0].value;
  const confirmPwd = document.getElementsByClassName("confirmPwd")[0].value;
  const hiddenPwd = document.getElementsByClassName("hiddenPwd")[0];
  hiddenPwd.style.display = "none";

  //checks if value in password input
  if (pwd) {
    //checks if password has value and if it matches confirm password
    if (pwd === confirmPwd) {
      hiddenPwd.style.display = "none";
    } else {
      e.preventDefault();
      return (hiddenPwd.style.display = "block");
    }
  }
});
