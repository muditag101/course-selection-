import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Home, Dashboard } from "@mui/icons-material"; // Import Home and Dashboard icons
import courseModel from "../../public/coursesapi";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = courseModel.find(
      (course) => course.id === parseInt(id)
    );
    setCourse(foundCourse);
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        {/* Home icon */}
        <IconButton component={Link} to="/" color="inherit">
          <Home />
        </IconButton>
        <Typography variant="h4" gutterBottom>
          {course.name}
        </Typography>
        {/* Dashboard icon */}
        <IconButton component={Link} to="/dashboard" color="inherit">
          <Dashboard />
        </IconButton>
      </Box>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Instructor: {course.instructor}
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 2 }}>
        {course.description}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Enrollment Status: {course.enrollmentStatus}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Duration: {course.duration}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Schedule: {course.schedule}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Location: {course.location}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Pre-requisites: {course.prerequisites.join(", ")}
      </Typography>
      <Box mt={2}>
        <Accordion
          sx={{ "&:hover": { boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" } }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
          >
            <Typography>Syllabus</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {course.syllabus.map((item) => (
                <li
                  key={item.week}
                  sx={{ "&:hover": { backgroundColor: "#f0f0f0" } }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Week {item.week}: {item.topic}
                  </Typography>
                  <Typography>{item.content}</Typography>
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default CourseDetails;
