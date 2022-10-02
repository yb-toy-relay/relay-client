/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */
import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { MenuItem, TextField } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "../../components/MDTypography";

const DEFAULT_TIME_ZONE = "Asia/Seoul";

const activityKinds = [
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

const timezones = [
  {
    value: DEFAULT_TIME_ZONE,
    label: DEFAULT_TIME_ZONE,
  },
  {
    value: "UTC",
    label: "UTC",
  },
];

function ActivityLog() {
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
    if (email.value === "") {
      setEmail({ ...email, error: true });
      return;
    }

    if (appToken.value === "") {
      setAppToken({ ...appToken, error: true });
      return;
    }

    if (apiKey.value === "") {
      setApiKey({ ...apiKey, error: true });
      return;
    }

    if (activityKind.value === "") {
      setActivityKind({ ...activityKind, error: true });
      return;
    }

    if (startDate.value === "") {
      setStartDate({ ...startDate, error: true });
      return;
    }

    if (endDate.value === "") {
      setEndDate({ ...endDate, error: true });
      return;
    }

    if (timezone.value === "") {
      setTimezone({ ...timezone, error: true });
      return;
    }

    const activityLogRequest = {
      apiKey: apiKey.value,
      email: email.value,
      appToken: appToken.value,
      activityKind: activityKind.value,
      startDate: startDate.value,
      endDate: endDate.value,
      timezone: timezone.value,
    };
    console.log(activityLogRequest);

    // after http 200
    if (email.value === "success") {
      setEmail({ ...email, value: email.value, error: false });
      setAppToken({ ...appToken, value: appToken.value, error: false });
      setApiKey({ ...apiKey, value: apiKey.value, error: false });
      setActivityKind({ ...activityKind, value: activityKind.value, error: false });
      setStartDate({ ...startDate, value: startDate.value, error: false });
      setEndDate({ ...endDate, value: endDate.value, error: false });
      setTimezone({ ...timezone, value: timezone.value, error: false });
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
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
                      {activityKinds.map((option) => (
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
                      {timezones.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </MDBox>
                  <MDBox mt={4} mb={2}>
                    <MDButton
                      variant="gradient"
                      color="info"
                      onClick={sendRequestHandler}
                      fullWidth
                    >
                      Send CSV File to Email
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ActivityLog;
