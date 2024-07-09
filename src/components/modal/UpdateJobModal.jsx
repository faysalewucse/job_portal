import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import {
  useGetJobsByDeptQuery,
  useUpdateJobMutation,
} from "../../features/job/jobApi";

const UpdateJobModal = ({ open, onClose, job }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    department: "",
  });

  useEffect(() => {
    if (job) {
      setFormValues({
        title: job.title,
        description: job.description,
        company: job.company,
        location: job.location,
        department: job.department,
      });
    }
  }, [job]);

  const { refetch } = useGetJobsByDeptQuery();
  const [updateJob, { isLoading }] = useUpdateJobMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateJob({ id: job._id, ...formValues });
    if (response.data.success) {
      toast.success("Job Updated Successfully.");
      refetch();
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Job</DialogTitle>
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
            onChange={handleChange}
          />
          <DialogActions>
            <Button onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" color="primary" disabled={isLoading}>
              {isLoading ? <CircularProgress size={24} /> : "Update Job"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateJobModal;
