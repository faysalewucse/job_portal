import React, { useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useGetJobsQuery } from "../../features/job/jobApi";
import JobCard from "../../components/card/JobCard";

const AllJobs = () => {
  const { data, error, isLoading, isError, refetch } = useGetJobsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) return <Typography variant="h5">Loading...</Typography>;
  if (isError)
    return <Typography variant="h5">Error: {error.message}</Typography>;

  return (
    <Container>
      <Typography color={"white"} variant="h4" gutterBottom>
        All Jobs
      </Typography>
      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        {data.payload.jobs.map((job) => (
          <Grid
            key={job._id}
            item
            xs={12}
            sm={6}
            md={4}
            style={{ display: "flex" }}
          >
            <JobCard job={job} refetch={refetch} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllJobs;
