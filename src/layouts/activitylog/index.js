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
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useState } from "react";
import ActivityLogRequestForm from "./ActivityLogRequestForm";
import AlertSnackBar from "./AlertSnackBar";

function ActivityLog() {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
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
  const sendActivityLogRequestHandler = (request) => {
    console.log(request);
    // http 200
    if (request.email === "success") {
      request.onSuccess();
      handleSuccess("200 OK");
    } else {
      handleError("500 ERROR");
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <ActivityLogRequestForm onSubmitHandler={sendActivityLogRequestHandler} />
          </Grid>
        </Grid>
      </MDBox>
      <AlertSnackBar open={open} severity={severity} message={message} handleClose={handleClose} />
    </DashboardLayout>
  );
}

export default ActivityLog;
