export function isEmpty(stateObject, setState) {
  if (stateObject.value === "") {
    setState({ ...stateObject, error: true });
    return true;
  }
  setState({ ...stateObject, value: stateObject.value, error: false });
  return false;
}

const VALID_EMAIL_FORMAT = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export function isNotEmailFormat(email, setEmail) {
  if (!VALID_EMAIL_FORMAT.test(email.value)) {
    setEmail({ ...email, error: true, errorMessage: "not a valid email format" });
    return true;
  }
  setEmail({ ...email, value: email.value, error: false });
  return false;
}
