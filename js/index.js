var [fnValid, lnValid, emValid, pwValid] = [false, false, false, false];

const myValidate = (title, type, value) => {
  let returnStatement = ``;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  const el = e;
  const err = myValidate(title, type, el.value);
  printError(el.id, err, el);
  return err === "valid" ? true : false;
};

const btnDisabler = () => {
  document.querySelector(`input[type="submit"]`).disabled =
    !fnValid || !lnValid || !emValid || !pwValid ? true : false;
};

document.querySelector(`#input-fn`).addEventListener("input", (e) => {
  fnValid = validateChecker(e.target, "First Name", "empty");
  btnDisabler();
});
document.querySelector(`#input-ln`).addEventListener("input", (e) => {
  lnValid = validateChecker(e.target, "Last Name", "empty");
  btnDisabler();
});
document.querySelector(`#input-em`).addEventListener("input", (e) => {
  emValid = validateChecker(e.target, "Email", "email");
  btnDisabler();
});
document.querySelector(`#input-pw`).addEventListener("input", (e) => {
  pwValid = validateChecker(e.target, "Password", "empty");
  btnDisabler();
});

document.querySelector(`#my-form`).addEventListener("submit", (e) => {
  e.preventDefault();

  fnValid = validateChecker(
    document.querySelector(`#input-fn`),
    "First Name",
    "empty"
  );
  lnValid = validateChecker(
    document.querySelector(`#input-ln`),
    "Last Name",
    "empty"
  );
  emValid = validateChecker(
    document.querySelector(`#input-em`),
    "Email",
    "email"
  );
  pwValid = validateChecker(
    document.querySelector(`#input-pw`),
    "Password",
    "empty"
  );

  btnDisabler();
});
