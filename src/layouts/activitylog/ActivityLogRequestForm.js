import { MenuItem, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDButton from "../../components/MDButton";

const DEFAULT_TIME_ZONE = "Asia/Seoul";

const ACTIVITY_KINDS = [
  {
    value: "install",
    label: "Install",
  },
  {
    value: "event",
    label: "Event",
  },
  {
    value: "reattribution",
    label: "Reattribution",
  },
];

const TIMEZONES = [
  {
    value: DEFAULT_TIME_ZONE,
    label: DEFAULT_TIME_ZONE,
  },
  {
    value: "UTC",
    label: "UTC",
  },
];

const isNotEmpty = (stateObject, setState) => {
  if (stateObject.value === "") {
    setState({ ...stateObject, error: true });
  } else {
    setState({ ...stateObject, value: stateObject.value, error: false });
  }
};

function ActivityLogRequestForm(prop) {
  const { onSubmitHandler } = prop;
  const [email, setEmail] = useState({
    name: "email",
    value: "",
    error: false,
    errorMessage: "invalid email",
  });
  const emailChangeHandler = (event) => {
    setEmail({ ...email, value: event.target.value });
  };

  const [appToken, setAppToken] = useState({
    name: "appToken",
    value: "",
    error: false,
    errorMessage: "invalid app token",
  });
  const appTokenChangeHandler = (event) => {
    setAppToken({ ...appToken, value: event.target.value });
  };

  const [apiKey, setApiKey] = useState({
    name: "apiKey",
    value: "",
    error: false,
    errorMessage: "invalid api key",
  });
  const apiKeyChangeHandler = (event) => {
    setApiKey({ ...apiKey, value: event.target.value });
  };

  const [activityKind, setActivityKind] = useState({
    name: "activityKind",
    value: "",
    error: false,
    errorMessage: "invalid activity kind",
  });
  const activityKindChangeHandler = (event) => {
    setActivityKind({ ...activityKind, value: event.target.value });
  };

  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState({
    name: "startDate",
    value: today,
    error: false,
    errorMessage: "invalid start date",
  });
  const startDateChangeHandler = (event) => {
    setStartDate({ ...startDate, value: event.target.value });
  };
  const [endDate, setEndDate] = useState({
    name: "endDate",
    value: today,
    error: false,
    errorMessage: "invalid end date",
  });
  const endDateChangeHandler = (event) => {
    setEndDate({ ...endDate, value: event.target.value });
  };

  const [timezone, setTimezone] = useState({
    name: "timezone",
    value: DEFAULT_TIME_ZONE,
    error: false,
    errorMessage: "invalid timezone",
  });
  const timezoneChangeHandler = (event) => {
    setTimezone({ ...timezone, value: event.target.value });
  };

  const sendRequestHandler = (event) => {
    event.preventDefault();
    isNotEmpty(email, setEmail);
    isNotEmpty(appToken, setAppToken);
    isNotEmpty(apiKey, setApiKey);
    isNotEmpty(activityKind, setActivityKind);
    isNotEmpty(startDate, setStartDate);
    isNotEmpty(endDate, setEndDate);
    isNotEmpty(timezone, setTimezone);

    const onSuccessCallback = () => {
      console.log("onSuccessCallback");
      setEmail({ ...email, value: email.value, error: false });
      setAppToken({ ...appToken, value: appToken.value, error: false });
      setApiKey({ ...apiKey, value: apiKey.value, error: false });
      setActivityKind({ ...activityKind, value: "", error: false });
      setStartDate({ ...startDate, value: today, error: false });
      setEndDate({ ...endDate, value: today, error: false });
      setTimezone({ ...timezone, value: DEFAULT_TIME_ZONE, error: false });
    };

    onSubmitHandler({
      apiKey: apiKey.value,
      email: email.value,
      appToken: appToken.value,
      activityKind: activityKind.value,
      startDate: startDate.value,
      endDate: endDate.value,
      timezone: timezone.value,
      onSuccess: onSuccessCallback,
    });
  };
  return (
    <Card>
      <MDBox p={2}>
        <MDTypography variant="h4">CSV Request</MDTypography>
      </MDBox>
      <MDBox pt={2} pb={3} px={3}>
        <MDBox component="form" role="form">
          <MDBox mb={2}>
            <TextField
              required
              type="email"
              label="Email"
              name={email.name}
              value={email.value}
              error={email.error}
              helperText={email.error && email.errorMessage}
              fullWidth
              onChange={emailChangeHandler}
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              required
              type="text"
              label="App Token"
              name={appToken.name}
              value={appToken.value}
              error={appToken.error}
              helperText={appToken.error && appToken.errorMessage}
              fullWidth
              onChange={appTokenChangeHandler}
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              required
              type="text"
              label="Api Key"
              name={apiKey.name}
              value={apiKey.value}
              error={apiKey.error}
              helperText={apiKey.error && apiKey.errorMessage}
              fullWidth
              onChange={apiKeyChangeHandler}
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              required
              id="activity-kind-select"
              select
              label="Activity Kind"
              name={activityKind.name}
              value={activityKind.value}
              error={activityKind.error}
              helperText={activityKind.error && activityKind.errorMessage}
              onChange={activityKindChangeHandler}
              InputProps={{
                classes: { root: "select-input-styles" },
              }}
              fullWidth
            >
              {ACTIVITY_KINDS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </MDBox>
          <MDBox mb={2}>
            <TextField
              required
              type="date"
              label="Start Date"
              name={startDate.name}
              value={startDate.value}
              error={startDate.error}
              helperText={startDate.error && startDate.errorMessage}
              onChange={startDateChangeHandler}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              required
              type="date"
              label="End Date"
              name={endDate.name}
              value={endDate.value}
              error={endDate.error}
              helperText={endDate.error && endDate.errorMessage}
              onChange={endDateChangeHandler}
              fullWidth
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="timezone-select"
              select
              label="Time Zone"
              name={timezone.name}
              value={timezone.value}
              error={timezone.error}
              helperText={timezone.error && timezone.errorMessage}
              onChange={timezoneChangeHandler}
              InputProps={{
                classes: { root: "select-input-styles" },
              }}
              fullWidth
            >
              {TIMEZONES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </MDBox>
          <MDBox mt={4} mb={2}>
            <MDButton variant="gradient" color="info" onClick={sendRequestHandler} fullWidth>
              Send CSV File to Email
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ActivityLogRequestForm;
