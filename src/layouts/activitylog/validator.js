export function isEmpty(stateObject, setState) {
  if (stateObject.value === "") {
    setState({ ...stateObject, error: true });
    return true;
  }
  setState({ ...stateObject, value: stateObject.value, error: false });
  return false;
}

const VALID_EMAIL_FORMAT = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/;

export function isNotEmailFormat(email, setEmail) {
  if (!VALID_EMAIL_FORMAT.test(email.value)) {
    setEmail({ ...email, error: true, errorMessage: "not a valid email format" });
    return true;
  }
  setEmail({ ...email, value: email.value, error: false });
  return false;
}

export function isStartDateBeforeEndDate(startDate, setStartDate, endDate) {
  const start = Date.parse(startDate.value);
  const end = Date.parse(endDate.value);
  if (start <= end) {
    setStartDate({ ...startDate, value: startDate.value, error: false });
    return true;
  }
  setStartDate({ ...startDate, error: true, errorMessage: "start date is greater than end date" });
  return false;
}

export function isValidRange(startDate, setStartDate, endDate, setEndDate) {
  const start = Date.parse(startDate.value);
  const end = Date.parse(endDate.value);
  const offset = 24 * 3600 * 1000;
  const days7 = 7 * 24 * 3600 * 1000;
  const requestPeriod = end - start + offset;
  if (requestPeriod <= days7) {
    setStartDate({ ...startDate, value: startDate.value, error: false });
    setEndDate({ ...endDate, value: endDate.value, error: false });
    return true;
  }
  setStartDate({ ...startDate, error: true, errorMessage: "maximum search range is 7 days" });
  setEndDate({ ...endDate, error: true, errorMessage: "maximum search range is 7 days" });
  return false;
}
