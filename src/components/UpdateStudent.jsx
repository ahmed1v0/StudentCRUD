import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../StudentContext";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

export default function UpdateStudent() {
  const { updateStudent, selectedStudent } = useContext(StudentContext);
  const [updatedEntry, setUpdatedEntry] = useState({ ...selectedStudent });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedEntry({ ...updatedEntry, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    updateStudent(updatedEntry);
    navigate("/list-students");
  };

  return (
    <>
      <h2>Update Student</h2>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ maxWidth: 500, margin: "0 auto", padding: 3 }}
      >
        <TextField
          fullWidth
          margin="normal"
          label="First Name"
          name="fname"
          value={updatedEntry.fname || ""}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Last Name"
          name="sname"
          value={updatedEntry.sname || ""}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Birth Date"
          name="bdate"
          type="date"
          value={updatedEntry.bdate || ""}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            value={updatedEntry.gender || ""}
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={updatedEntry.address || ""}
          onChange={handleChange}
          required
          multiline
          rows={4}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          name="PhoneNumber"
          value={updatedEntry.PhoneNumber || ""}
          onChange={handleChange}
          required
          type="number"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Update
        </Button>
      </Box>
    </>
  );
}
