const courseModel = [
  // Course 1
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 2
  {
    id: 2,
    name: "Advanced React Native Techniques",
    instructor: "Jane Smith",
    description:
      "Dive deeper into React Native with advanced techniques and best practices.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?f=webp",
    duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Intermediate React Native knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Advanced State Management",
        content: "Using Redux and Context API for advanced state management.",
      },
      {
        week: 2,
        topic: "Performance Optimization",
        content:
          "Optimizing app performance with memoization and PureComponent.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Diana Smith",
        email: "diana@example.com",
      },
      // Additional enrolled students...
    ],
  },
  // Course 3
  {
    id: 3,
    name: "Introduction to Machine Learning",
    instructor: "Alice Lee",
    description:
      "Learn the fundamentals of machine learning and its applications.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Hey_Machine_Learning_Logo.png",
    duration: "10 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Understanding of statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning concepts and algorithms.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content:
          "Understanding supervised learning algorithms such as linear regression and decision trees.",
      },
      // Additional weeks and topics...
    ],
    students: [
      // Enrolled students for this course...
    ],
  },
  // Course 4
  {
    id: 4,
    name: "Web Development Bootcamp",
    instructor: "David Johnson",
    description:
      "Comprehensive training program covering HTML, CSS, and JavaScript.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://e7.pngegg.com/pngimages/913/851/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text.png",
    duration: "6 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "HTML Basics",
        content: "Introduction to HTML syntax and basic tags.",
      },
      {
        week: 2,
        topic: "CSS Fundamentals",
        content:
          "Styling HTML elements with CSS, including selectors and properties.",
      },
      // Additional weeks and topics...
    ],
    students: [
      // Enrolled students for this course...
    ],
  },
  // Course 5
  {
    id: 5,
    name: "Data Science Fundamentals",
    instructor: "Emma White",
    description:
      "Explore the basics of data science, including data analysis and visualization.",
    enrollmentStatus: "Open",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/4824/4824797.png",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Understanding of statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science principles and applications.",
      },
      {
        week: 2,
        topic: "Data Analysis with Python",
        content:
          "Using libraries like Pandas for data manipulation and analysis.",
      },
      // Additional weeks and topics...
    ],
    students: [
      // Enrolled students for this course...
    ],
  },
  // Course
];

export default courseModel;
