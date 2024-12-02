import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

export default function RegisterForm({ addStudent }) {
  const [formEntries, setFormEntries] = useState({});
  const [errors, setErrors] = useState({ email: "", password: "" });

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const Student = Object.fromEntries(formData.entries());
    setErrors({});

    if (validateForm(Student)) {
      addStudent(Student);
      setFormEntries({});
    }
  };

  const validateForm = (entries) => {
    const newErrors = {};

    if (!entries.email.includes("@")) {
      newErrors.email = "Valid Email is required.";
    }
    if (entries.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormEntries({ ...formEntries, [name]: value });
  };

  return (
    <>
    <h2>Add Student</h2>
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
        value={formEntries.fname || ""}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Last Name"
        name="sname"
        value={formEntries.sname || ""}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Birth Date"
        name="bdate"
        type="date"
        value={formEntries.bdate || ""}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel>Gender</InputLabel>
        <Select
          label="Gender"
          name="gender"
          value={formEntries.gender || ""}
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
        value={formEntries.address || ""}
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
        value={formEntries.PhoneNumber || ""}
        onChange={handleChange}
        required
        type="number"
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        name="email"
        value={formEntries.email || ""}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        name="password"
        value={formEntries.password || ""}
        onChange={handleChange}
        type="password"
        required
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Register
      </Button>
    </Box>
    </>
  );
}
