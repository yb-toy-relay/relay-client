import { Grid, TextField } from "@mui/material";
import MDBox from "../../../components/MDBox";

export default function ApiKey(prop) {
  const { apiKey, setApiKey } = prop;

  const apiKeyChangeHandler = (event) => {
    setApiKey({ ...apiKey, value: event.target.value });
  };

  return (
    <Grid item xs={12} lg={12}>
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
    </Grid>
  );
}
