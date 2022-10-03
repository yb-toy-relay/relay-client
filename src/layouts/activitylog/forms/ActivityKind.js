import { MenuItem, TextField } from "@mui/material";
import MDBox from "../../../components/MDBox";

const ACTIVITY_KINDS = [
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

export default function ActivityKind(prop) {
  const { activityKind, setActivityKind } = prop;

  const activityKindChangeHandler = (event) => {
    setActivityKind({ ...activityKind, value: event.target.value });
  };

  return (
    <MDBox mb={2}>
      <TextField
        required
        id="activity-kind-select"
        select
        label="Activity Kind"
        name={activityKind.name}
        value={activityKind.value}
        error={activityKind.error}
        helperText={activityKind.error && activityKind.errorMessage}
        onChange={activityKindChangeHandler}
        InputProps={{
          classes: { root: "select-input-styles" },
        }}
        fullWidth
      >
        {ACTIVITY_KINDS.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </MDBox>
  );
}
