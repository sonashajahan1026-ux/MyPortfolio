import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Experience
        </Typography>

        <Typography
          sx={{
            color: "#38bdf8",
            textAlign: "center",
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          My professional journey
        </Typography>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#1e293b",
            color: "white",
            padding: { xs: 3, md: 5 },
            borderRadius: 3,
            border: "1px solid rgba(56,189,248,0.15)",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              marginBottom: 1,
            }}
          >
            Software Development Intern
          </Typography>

          <Typography
            sx={{
              color: "#38bdf8",
              fontWeight: 600,
              marginBottom: 1,
            }}
          >
            Luminar Technolab | Trivandrum, India
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              marginBottom: 3,
            }}
          >
            September 2025 – April 2026
          </Typography>

          <Box
            component="ul"
            sx={{
              color: "#cbd5e1",
              paddingLeft: 3,
              lineHeight: 2,
              margin: 0,
            }}
          >
            <li>
              Gained hands-on experience in Full-Stack Web Development
              with a focus on the MERN Stack.
            </li>

            <li>
              Developed responsive and interactive web applications using
              HTML5, CSS3, JavaScript, React.js, and Bootstrap.
            </li>

            <li>
              Built and integrated RESTful APIs using Node.js and Express.js.
            </li>

            <li>
              Worked with MongoDB and Mongoose for database management and
              implemented CRUD operations.
            </li>

            <li>
              Used Git and GitHub for version control and Postman for API
              testing and debugging.
            </li>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Experience;