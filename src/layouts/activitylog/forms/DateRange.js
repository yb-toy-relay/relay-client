import { TextField } from "@mui/material";
import MDBox from "../../../components/MDBox";

export default function DateRange(prop) {
  const { startDate, endDate, setStartDate, setEndDate } = prop;

  const startDateChangeHandler = (event) => {
    setStartDate({ ...startDate, value: event.target.value });
  };

  const endDateChangeHandler = (event) => {
    setEndDate({ ...endDate, value: event.target.value });
  };

  return (
    <MDBox mb={2}>
      <MDBox mb={2}>
        <TextField
          required
          type="date"
          label="Start Date"
          name={startDate.name}
          value={startDate.value}
          error={startDate.error}
          helperText={startDate.error && startDate.errorMessage}
          onChange={startDateChangeHandler}
          fullWidth
        />
      </MDBox>
      <MDBox>
        <TextField
          required
          type="date"
          label="End Date"
          name={endDate.name}
          value={endDate.value}
          error={endDate.error}
          helperText={endDate.error && endDate.errorMessage}
          onChange={endDateChangeHandler}
          fullWidth
        />
      </MDBox>
    </MDBox>
  );
}
