import { MenuItem, TextField } from "@mui/material";
import MDBox from "../../../components/MDBox";

export const DEFAULT_TIME_ZONE = "Asia/Seoul";

const TIMEZONES = [
  {
    value: DEFAULT_TIME_ZONE,
    label: DEFAULT_TIME_ZONE,
  },
  {
    value: "UTC",
    label: "UTC",
  },
];

export default function TimeZone(prop) {
  const { timezone, setTimezone } = prop;
  const timezoneChangeHandler = (event) => {
    setTimezone({ ...timezone, value: event.target.value });
  };
  return (
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
        {TIMEZONES.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </MDBox>
  );
}
