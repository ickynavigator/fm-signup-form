/**
 * @param {string} title
 * @param {string} type
 * @param {string} value
 */
const myValidate = (title, type, value) => {
  let returnStatement = ``;

  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  switch (type) {
    case "empty":
      if (value.length < 1) returnStatement = `${title} cannot be empty`;
      break;
    case "email":
      if (!re.test(value)) returnStatement = `Looks like this is not an email`;
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
  } else {
    element.classList.remove("form-control-error");
    document.querySelector(`#${title}-err`).innerText = "";
  }
};

const validateChecker = (e, title, type) => {
  const el = e.target;
  const err = myValidate(title, type, el.value);
  printError(el.id, err, el);
  return err === "valid" ? true : false;
};

const btnDisabler = () => {};

var fnValid = false;
var lnValid = false;
var emValid = false;
var pwValid = false;

document.querySelector(`#input-fn`).addEventListener("input", (e) => {
  fnValid = validateChecker(e, "First Name", "empty");
});
document.querySelector(`#input-ln`).addEventListener("input", (e) => {
  lnValid = validateChecker(e, "Last Name", "empty");
});
document.querySelector(`#input-em`).addEventListener("input", (e) => {
  emValid = validateChecker(e, "Email", "email");
});
document.querySelector(`#input-pw`).addEventListener("input", (e) => {
  pwValid = validateChecker(e, "Password", "empty");
});

document.querySelector(`#my-form`).addEventListener("submit", (e) => {
  e.preventDefault();
});
