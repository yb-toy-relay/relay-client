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
import Card from "@mui/material/Card";
import { MenuItem } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "../../components/MDTypography";

function ActivityLog() {
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
                    <MDInput type="email" label="Email" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="App Token" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Api Token" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      size="large"
                      select
                      labelId="activity-kind-label"
                      id="activity-kind-select"
                      label="Activity Kind"
                      InputProps={{
                        classes: { root: "select-input-styles" },
                      }}
                      fullWidth
                    >
                      <MenuItem value="install">Install</MenuItem>
                      <MenuItem value="event">Event</MenuItem>
                      <MenuItem value="reattribution">Reattribution</MenuItem>
                    </MDInput>
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      size="large"
                      select
                      labelId="timezone-label"
                      id="timezone-select"
                      label="Time Zone"
                      InputProps={{
                        classes: { root: "select-input-styles" },
                      }}
                      fullWidth
                    >
                      <MenuItem value="Asia/Seoul">Asia/Seoul</MenuItem>
                      <MenuItem value="UTC">UTC</MenuItem>
                    </MDInput>
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="date"
                      label="Start Date"
                      value={new Date().toISOString().slice(0, 10)}
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="date"
                      label="End Date"
                      value={new Date().toISOString().slice(0, 10)}
                      fullWidth
                    />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
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
      <Footer />
    </DashboardLayout>
  );
}

export default ActivityLog;
