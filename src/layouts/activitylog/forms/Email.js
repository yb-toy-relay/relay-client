import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import MDBox from "../../../components/MDBox";

export default function Email(prop) {
  const { email, setEmail } = prop;

  const emailChangeHandler = (event) => {
    setEmail({ ...email, value: event.target.value });
  };

  return (
    <Grid item xs={12} lg={12}>
      <MDBox mb={2}>
        <TextField
          required
          type="email"
          label="Email"
          name={email.name}
          value={email.value}
          error={email.error}
          helperText={email.error && email.errorMessage}
          onChange={emailChangeHandler}
          fullWidth
        />
      </MDBox>
    </Grid>
  );
}
