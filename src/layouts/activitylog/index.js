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
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDTypography from "../../components/MDTypography";

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
    value: "Asia/Seoul",
    label: "Asia/Seoul",
  },
  {
    value: "UTC",
    label: "UTC",
  },
];

function ActivityLog() {
  const [email, setEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const [appToken, setAppToken] = useState("");
  const appTokenChangeHandler = (event) => {
    setAppToken(event.target.value);
  };

  const [apiKey, setApiKey] = useState("");
  const apiKeyChangeHandler = (event) => {
    setApiKey(event.target.value);
  };

  const [activityKind, setActivityKind] = useState("");
  const activityKindChangeHandler = (event) => {
    setActivityKind(event.target.value);
  };

  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
  };
  const [endDate, setEndDate] = useState(today);
  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value);
  };

  const [timezone, setTimezone] = useState("Asia/Seoul");
  const timezoneChangeHandler = (event) => {
    setTimezone(event.target.value);
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
                    <MDInput
                      required
                      type="email"
                      label="Email"
                      value={email}
                      fullWidth
                      onChange={emailChangeHandler}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      required
                      type="text"
                      label="App Token"
                      value={appToken}
                      fullWidth
                      onChange={appTokenChangeHandler}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      required
                      type="text"
                      label="Api Key"
                      value={apiKey}
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
                      value={activityKind}
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
                    <MDInput
                      required
                      type="date"
                      label="Start Date"
                      value={startDate}
                      onChange={startDateChangeHandler}
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      required
                      type="date"
                      label="End Date"
                      value={endDate}
                      onChange={endDateChangeHandler}
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <TextField
                      id="timezone-select"
                      select
                      label="Time Zone"
                      value={timezone}
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
                    <MDButton variant="gradient" color="info" fullWidth>
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
