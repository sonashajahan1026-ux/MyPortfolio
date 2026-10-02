import {
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#111827",
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
          About Me
        </Typography>

        <Typography
          sx={{
            color: "#38bdf8",
            textAlign: "center",
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          Get to know me
        </Typography>

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 5,
            alignItems: "center",
          }}
        >
          {/* About Text */}
          <Box
            sx={{
              flex: 1.4,
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                marginBottom: 2,
              }}
            >
              MERN Stack Developer based in Dubai, UAE
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.9,
                marginBottom: 2,
              }}
            >
              I'm a B.Tech Computer Science graduate and a passionate MERN
              Stack Developer with hands-on experience in building responsive
              and user-friendly web applications.
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.9,
              }}
            >
              I enjoy turning ideas into functional applications using React.js,
              Node.js, Express.js, and MongoDB. I'm passionate about learning
              modern technologies, solving problems, and continuously improving
              my skills as a Full-Stack Developer.
            </Typography>
          </Box>

          {/* Quick Information Card */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "#1e293b",
                padding: 4,
                borderRadius: 3,
                border: "1px solid rgba(56,189,248,0.2)",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#38bdf8",
                  fontWeight: 700,
                  marginBottom: 3,
                  fontSize: "1.2rem",
                }}
              >
                Quick Information
              </Typography>

              <Typography sx={{ color: "#e2e8f0", marginBottom: 2 }}>
                📍 <strong>Location:</strong> Dubai, UAE
              </Typography>

              <Typography sx={{ color: "#e2e8f0", marginBottom: 2 }}>
                🎓 <strong>Education:</strong> B.Tech Computer Science
              </Typography>

              <Typography sx={{ color: "#e2e8f0", marginBottom: 2 }}>
                💻 <strong>Role:</strong> MERN Stack Developer
              </Typography>

              <Typography sx={{ color: "#e2e8f0" }}>
                🛂 <strong>Visa:</strong> UAE Residence Visa
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;