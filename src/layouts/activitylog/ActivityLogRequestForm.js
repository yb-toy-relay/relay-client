import Card from "@mui/material/Card";
import { useState } from "react";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDButton from "../../components/MDButton";
import Email from "./forms/Email";
import AppToken from "./forms/AppToken";
import ApiKey from "./forms/ApiKey";
import ActivityKind from "./forms/ActivityKind";
import DateRange from "./forms/DateRange";
import TimeZone, { DEFAULT_TIME_ZONE } from "./forms/TimeZone";

function ActivityLogRequestForm(prop) {
  const { onSubmitHandler } = prop;
  const [email, setEmail] = useState({
    name: "email",
    value: "",
    error: false,
    errorMessage: "invalid email",
  });

  const [appToken, setAppToken] = useState({
    name: "appToken",
    value: "",
    error: false,
    errorMessage: "invalid app token",
  });

  const [apiKey, setApiKey] = useState({
    name: "apiKey",
    value: "",
    error: false,
    errorMessage: "invalid api key",
  });

  const [activityKind, setActivityKind] = useState({
    name: "activityKind",
    value: "",
    error: false,
    errorMessage: "invalid activity kind",
  });

  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState({
    name: "startDate",
    value: today,
    error: false,
    errorMessage: "invalid start date",
  });
  const [endDate, setEndDate] = useState({
    name: "endDate",
    value: today,
    error: false,
    errorMessage: "invalid end date",
  });

  const [timezone, setTimezone] = useState({
    name: "timezone",
    value: DEFAULT_TIME_ZONE,
    error: false,
    errorMessage: "invalid timezone",
  });

  const sendRequestHandler = (event) => {
    event.preventDefault();

    const isEmpty = (stateObject, setState) => {
      if (stateObject.value === "") {
        setState({ ...stateObject, error: true });
        return true;
      }
      setState({ ...stateObject, value: stateObject.value, error: false });
      return false;
    };

    if (isEmpty(email, setEmail)) {
      return;
    }
    if (isEmpty(appToken, setAppToken)) {
      return;
    }
    if (isEmpty(apiKey, setApiKey)) {
      return;
    }
    if (isEmpty(activityKind, setActivityKind)) {
      return;
    }
    if (isEmpty(startDate, setStartDate)) {
      return;
    }
    if (isEmpty(endDate, setEndDate)) {
      return;
    }
    if (isEmpty(timezone, setTimezone)) {
      return;
    }

    const onSuccessCallback = () => {
      setEmail({ ...email, error: false });
      setAppToken({ ...appToken, error: false });
      setApiKey({ ...apiKey, error: false });
      setActivityKind({ ...activityKind, value: "", error: false });
      setStartDate({ ...startDate, error: false });
      setEndDate({ ...endDate, error: false });
      setTimezone({ ...timezone, error: false });
    };

    const body = {
      apiKey: apiKey.value,
      email: email.value,
      appToken: appToken.value,
      activityKind: activityKind.value,
      startDate: startDate.value,
      endDate: endDate.value,
      timezone: timezone.value,
    };
    onSubmitHandler({ body, onSuccessCallback });
  };
  return (
    <Card>
      <MDBox p={2}>
        <MDTypography variant="h4">CSV Request</MDTypography>
      </MDBox>
      <MDBox pt={2} pb={3} px={3}>
        <MDBox component="form" role="form">
          <Email email={email} setEmail={setEmail} />
          <AppToken appToken={appToken} setAppToken={setAppToken} />
          <ApiKey apiKey={apiKey} setApiKey={setApiKey} />
          <ActivityKind activityKind={activityKind} setActivityKind={setActivityKind} />
          <DateRange
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
          <TimeZone timezone={timezone} setTimezone={setTimezone} />
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
