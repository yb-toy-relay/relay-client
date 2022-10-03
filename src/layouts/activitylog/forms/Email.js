import { TextField } from "@mui/material";
import MDBox from "../../../components/MDBox";

export default function Email(prop) {
  const { email, setEmail } = prop;

  const emailChangeHandler = (event) => {
    setEmail({ ...email, value: event.target.value });
  };

  return (
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
  );
}
