import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import UpdateJobModal from "../modal/UpdateJobModal";
import { useDeleteJobMutation } from "../../features/job/jobApi";
import { toast } from "react-toastify";

const JobCard = ({ job, refetch }) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleUpdateModalOpen = (job) => {
    setSelectedJob(job);
    setUpdateModalOpen(true);
  };

  const handleUpdateModalClose = () => {
    setUpdateModalOpen(false);
  };

  const [deleteJob, { isLoading }] = useDeleteJobMutation();

  const jobDeleteHandler = async (job) => {
    const response = await deleteJob({ id: job._id });
    if (response.data.success) {
      toast.success("Job Deleted Successfully.");
      refetch();
    }
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "1rem",
        backgroundColor: "#f0f0f0",
        width: "100%",
        height: "100%",
      }}
    >
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="h6" color="primary">
          {job.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.company}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {job.location}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <Button
          onClick={() => handleUpdateModalOpen(job)}
          size="small"
          color="primary"
          variant="contained"
        >
          Update
        </Button>
        <Button
          onClick={() => jobDeleteHandler(job)}
          size="small"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          Delete
        </Button>
      </CardActions>
      <UpdateJobModal
        job={selectedJob}
        open={updateModalOpen}
        onClose={handleUpdateModalClose}
        refetchJobs={refetch}
      />
    </Card>
  );
};

export default JobCard;
