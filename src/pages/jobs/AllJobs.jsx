import React, { useEffect } from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { useGetJobsQuery } from "../api/jobApi";

const AllJobs = () => {
  const { data: jobs, error, isLoading, isError, refetch } = useGetJobsQuery();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Typography variant="h5">Loading...</Typography>;
  if (isError)
    return <Typography variant="h5">Error: {error.message}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Jobs
      </Typography>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body1">{job.description}</Typography>
                {/* Add more job details as needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllJobs;
