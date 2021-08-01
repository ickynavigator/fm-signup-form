var [fnValid, lnValid, emValid, pwValid] = [false, false, false, false];
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const myValidate = (title, type, value) => {
  let returnStatement = ``;

  switch (type) {
    case "empty":
      if (value.length < 1) returnStatement = `${title} cannot be empty`;
      break;
    case "email":
      if (!emailRegex.test(value))
        returnStatement = `Looks like this is not an email`;
      break;
    default:
      returnStatement = ``;
      break;
  }

  return returnStatement.length !== 0 ? returnStatement : "valid";
};

const printError = (title, error, element) => {
  if (error !== "valid") {
    element.classList.add("form-control-error");
    document.querySelector(`#${title}-err`).innerText = error;
    document.querySelector(`#${title}-err-img`).style.visibility = "visible";
  } else {
    element.classList.remove("form-control-error");
    document.querySelector(`#${title}-err`).innerText = "";
    document.querySelector(`#${title}-err-img`).style.visibility = "hidden";
  }
};

const validateChecker = (e, title, type) => {
  const el = e.target;
  const err = myValidate(title, type, el.value);
  printError(el.id, err, el);
  return err === "valid" ? true : false;
};

const btnDisabler = () => {
  document.querySelector(`input[type="submit"]`).disabled =
    !fnValid || !lnValid || !emValid || !pwValid ? true : false;
};

document.querySelector(`#input-fn`).addEventListener("input", (e) => {
  fnValid = validateChecker(e, "First Name", "empty");
  btnDisabler();
});
document.querySelector(`#input-ln`).addEventListener("input", (e) => {
  lnValid = validateChecker(e, "Last Name", "empty");
  btnDisabler();
});
document.querySelector(`#input-em`).addEventListener("input", (e) => {
  emValid = validateChecker(e, "Email", "email");
  btnDisabler();
});
document.querySelector(`#input-pw`).addEventListener("input", (e) => {
  pwValid = validateChecker(e, "Password", "empty");
  btnDisabler();
});
