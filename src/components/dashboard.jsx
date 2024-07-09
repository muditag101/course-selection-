import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  LinearProgress,
  Box,
  IconButton,
  Tooltip,
  Zoom,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import courseModel from "../../public/coursesapi";

const Dashboard = () => {
  const [courses, setCourses] = useState(courseModel);
  const markAsCompleted = (id) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, progress: 100 } : course
      )
    );
  };

  return (
    <Container sx={{ py: 4 }}>
      <Tooltip title="Home" arrow TransitionComponent={Zoom}>
        <IconButton
          component={Link}
          to="/"
          color="inherit"
          sx={{ mb: 2, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } }}
        >
          <Home /> &nbsp;&nbsp;Home
        </IconButton>
      </Tooltip>
      {courses.map((course) => (
        <Card
          key={course.id}
          sx={{
            display: "flex",
            mb: 2,
            transition: "all 0.3s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 150 }}
            image={course.thumbnail}
            alt={course.name}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <Typography component="div" variant="h5">
                {course.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {course.instructor}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Due Date: {course.dueDate}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={course.progress}
                sx={{ mt: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => markAsCompleted(course.id)}
                disabled={course.progress === 100}
                sx={{ mt: 2, "&:hover": { backgroundColor: "#1976d2" } }}
              >
                {course.progress === 100 ? "Completed" : "Mark as Completed"}
              </Button>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Container>
  );
};

export default Dashboard;
