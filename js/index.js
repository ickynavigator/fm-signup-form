/**
 * @param {string} title
 * @param {string} type
 * @param {string} value
 */
const Myvalidate = (title, type, value) => {
  let returnStatement = ``;

  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  switch (type) {
    case "empty":
      if (value.length < 1) returnStatement = `${title} cannot be empty`;
      break;
    case "email":
      if (re.test(value)) returnStatement = `Looks like this is not an email`;
      break;
    default:
      returnStatement = ``;
      break;
  }

  return returnStatement.length !== 0 ? returnStatement : "valid";
};

document.querySelector("#input-fn").addEventListener("input", (e) => {
  const err = Myvalidate("First Name", "empty", e.target.value);
  console.log(err);
});
