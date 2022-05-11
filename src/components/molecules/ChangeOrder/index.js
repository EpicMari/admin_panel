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

const ChangeOrder = ({
  row: { status, totalPrice, createdAt, docId },
  closeModal,
  editOrder,
}) => {
  const [newData, setNewData] = useState(createdAt);
  const [newStatus, setNewStatus] = useState(status);
  const [newPrice, setNewPrice] = useState(totalPrice);
  console.log(docId);
  const handlePrice = (e) => {
    setNewPrice(e.target.value);
  };

  const handleSelect = (event) => {
    setNewStatus(event.target.value);
  };

  return (
    <>
      <TextField
        variant="standard"
        label="Price"
        value={newPrice}
        onChange={handlePrice}
        type="number"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={newData}
          onChange={(newValue) => {
            setNewData(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={newStatus}
          label="Status"
          onChange={handleSelect}
          defaultValue={newStatus}
          variant="standard"
        >
          <MenuItem value="PENDING">PENDING</MenuItem>
          <MenuItem value="COMPLETED">COMPLETED</MenuItem>
        </Select>
      </FormControl>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          editOrder(docId, newStatus, newPrice, newData);
          closeModal();
        }}
      >
        Save
      </Button>
      <Button color="error" variant="contained" onClick={closeModal}>
        Cancel
      </Button>
    </>
  );
};

export default ChangeOrder;
