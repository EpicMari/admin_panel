import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@date-io/date-fns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const ChangeOrder = ({ row: { status, totalPrice, createdAt } }) => {
  const [value, setValue] = useState(createdAt);
  const [select, setSelect] = useState(status);
  const [price, setPrice] = useState(totalPrice);

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <TextField
        variant="standard"
        label="Price"
        value={price}
        onChange={handlePrice}
        type="number"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Status"
          onChange={handleSelect}
          defaultValue={select}
          variant="standard"
        >
          <MenuItem value="pending">pending</MenuItem>
          <MenuItem value="complete">complete</MenuItem>
        </Select>
      </FormControl>
      <Button color="primary" variant="contained">
        Save
      </Button>
      <Button color="error" variant="contained">
        Cancel
      </Button>
    </>
  );
};

export default ChangeOrder;
