import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { departments } from "../../constant";
import AddJobModal from "../../components/modal/AddJobModal";
import { useGetJobsByDeptQuery } from "../../features/job/jobApi";
import JobCard from "../../components/card/JobCard";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [department, setDepartment] = useState(null);

  const handleModalOpen = (dept) => {
    setDepartment(dept);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const { data, isLoading, isError, refetch } = useGetJobsByDeptQuery();

  if (isLoading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "85vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (isError) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "85vh" }}
      >
        <Typography variant="h6" color="error">
          Failed to load jobs. Please try again later.
        </Typography>
      </Grid>
    );
  }

  const jobData = data?.payload || {};

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "85vh" }}
    >
      <Grid item xs={12} md={10} lg={8}>
        <Box style={{ width: "100%" }} p={2} color="white" textAlign="center">
          <Typography variant="h4" gutterBottom>
            Browse Open Positions By Category
          </Typography>
          <Typography variant="h6" gutterBottom>
            We are always looking for talented people
          </Typography>
        </Box>
        {departments.map((dept, index) => (
          <Accordion key={index} style={{ marginBottom: 20 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{dept.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{dept.description}</Typography>
              {jobData[dept.title.toLowerCase().replace(" ", "_")]?.length >
              0 ? (
                jobData[dept.title.toLowerCase().replace(" ", "_")].map(
                  (job) => <JobCard key={job._id} job={job} refetch={refetch} />
                )
              ) : (
                <Typography>No jobs available in this category.</Typography>
              )}
              <Button
                onClick={() => handleModalOpen(dept)}
                variant="outlined"
                color="primary"
                style={{ marginLeft: "auto", marginTop: "1rem" }}
              >
                Add Job
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
      <AddJobModal
        dept={department}
        open={modalOpen}
        refetch={refetch}
        onClose={handleModalClose}
      />
    </Grid>
  );
};

export default Home;
