import { Box, Button, Container, Stack, Typography } from "@mui/material";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const downloadResume = () => {
    window.open("/Sona_Shajahan_Resume.pdf", "_blank");
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            sx={{
              color: "#38bdf8",
              fontWeight: 600,
              marginBottom: 2,
            }}
          >
            Hi, I'm
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5rem",
              },
              lineHeight: 1.1,
              marginBottom: 2,
            }}
          >
            Sona Shajahan
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: "#94a3b8",
              fontWeight: 600,
              marginBottom: 3,
              fontSize: {
                xs: "1.5rem",
                md: "2rem",
              },
            }}
          >
            MERN Stack Developer | Full-Stack Web Developer
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              maxWidth: "650px",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              marginBottom: 4,
            }}
          >
            I build responsive, user-friendly, and scalable web applications
            using React.js, Node.js, Express.js, and MongoDB.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              onClick={scrollToProjects}
              sx={{
                backgroundColor: "#38bdf8",
                color: "#0f172a",
                fontWeight: 700,
                padding: "12px 24px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#7dd3fc",
                },
              }}
            >
              View My Projects
            </Button>

            <Button
              variant="outlined"
              onClick={scrollToContact}
              sx={{
                borderColor: "#38bdf8",
                color: "#38bdf8",
                fontWeight: 600,
                padding: "12px 24px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#7dd3fc",
                  color: "#7dd3fc",
                },
              }}
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              onClick={downloadResume}
              sx={{
                borderColor: "#94a3b8",
                color: "#e2e8f0",
                fontWeight: 600,
                padding: "12px 24px",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#38bdf8",
                  color: "#38bdf8",
                },
              }}
            >
              Download Resume
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
