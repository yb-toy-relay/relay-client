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
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Navbars/DashboardNavbar";
import { useState } from "react";
import ActivityLogRequestForm from "./ActivityLogRequestForm";
import AlertSnackBar from "./AlertSnackBar";
import { relayClientApi } from "../../endpoint";

function ActivityLog() {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [message, setMessage] = useState("");

  const handleSuccess = (successMessage) => {
    setOpen(true);
    setSeverity("success");
    setMessage(successMessage);
  };

  const handleError = (errorMessage) => {
    setOpen(true);
    setSeverity("error");
    setMessage(errorMessage);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // send http request
  const activityLogPostHandler = (request) => {
    fetch(`${relayClientApi()}/relay/v1/activity-log/csv`, {
      method: "POST",
      body: JSON.stringify(request.body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 204) {
          request.onSuccessCallback();
          handleSuccess(`No Data. status: ${response.status}`);
          return;
        }
        if (response.ok) {
          request.onSuccessCallback();
          handleSuccess(`Request Success. status: ${response.status}`);
          return;
        }
        handleError(`Request Failed. status: ${response.status}`);
      })
      .catch((err) => {
        console.error("http request not available:", err);
        handleError("Unknown Error.");
      });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} lg={12}>
            <ActivityLogRequestForm onSubmitHandler={activityLogPostHandler} />
          </Grid>
        </Grid>
      </MDBox>
      <AlertSnackBar open={open} severity={severity} message={message} handleClose={handleClose} />
    </DashboardLayout>
  );
}

export default ActivityLog;
