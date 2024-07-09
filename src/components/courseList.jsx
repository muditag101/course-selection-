import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  IconButton, // Import IconButton
} from "@mui/material";
import { Dashboard } from "@mui/icons-material"; // Import Dashboard icon
import courseModel from "../../public/coursesapi";

const CourseList = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useState(() => {
    setFilteredCourses(courseModel);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = courseModel.filter(
      (course) =>
        course.name.toLowerCase().includes(value) ||
        course.instructor.toLowerCase().includes(value)
    );
    setFilteredCourses(filtered);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="Search by course name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ input: { color: "white" } }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
        />
        {/* Dashboard icon */}
        <IconButton component={Link} to="/dashboard" color="inherit">
          <Dashboard /> &nbsp; DashBoard
        </IconButton>
      </div>
      <div style={{ maxHeight: "400px", overflowY: "scroll" }}>
        <Grid container spacing={3}>
          {filteredCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Instructor:</strong> {course.instructor}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    component={Link}
                    to={`/course/${course.id}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default CourseList;
