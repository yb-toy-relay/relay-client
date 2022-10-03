import { Grid, TextField } from "@mui/material";
import MDBox from "../../../components/MDBox";

export default function AppToken(prop) {
  const { appToken, setAppToken } = prop;

  const appTokenChangeHandler = (event) => {
    setAppToken({ ...appToken, value: event.target.value });
  };

  return (
    <Grid item xs={12} lg={12}>
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
    </Grid>
  );
}
