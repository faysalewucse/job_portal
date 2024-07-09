import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useCreateJobMutation } from "../../features/job/jobApi";
import { toast } from "react-toastify";

const AddJobModal = ({ open, onClose, dept, refetch }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: dept?.description,
    company: "",
    location: "",
    department: dept?.title,
  });

  const [createJob, { isLoading }] = useCreateJobMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createJob(formValues);
      if (response.data.success) {
        toast.success("Job Created Successfully.");
        refetch();
        onClose();
      }
    } catch (error) {
      toast.error("Failed to create job.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Job</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            margin="normal"
            required
            value={formValues.title}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            margin="normal"
            required
            value={formValues.description}
            defaultValue={dept?.description}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id="company"
            name="company"
            label="Company"
            variant="outlined"
            margin="normal"
            required
            value={formValues.company}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            margin="normal"
            required
            value={formValues.location}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            id="department"
            name="department"
            label="Department"
            variant="outlined"
            margin="normal"
            required
            value={formValues.department}
            defaultValue={dept?.title}
            onChange={handleChange}
          />
          <DialogActions>
            <Button onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" color="primary" disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} /> : "Add Job"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddJobModal;
