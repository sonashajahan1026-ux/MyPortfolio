import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Get In Touch
        </Typography>

        <Typography
          sx={{
            color: "#38bdf8",
            textAlign: "center",
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          Let's connect and build something great together
        </Typography>

        <Paper
          elevation={0}
          sx={{
            backgroundColor: "#1e293b",
            padding: { xs: 3, md: 5 },
            borderRadius: 3,
            border: "1px solid rgba(56,189,248,0.15)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            I'm currently open to new opportunities
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              lineHeight: 1.8,
              marginBottom: 4,
            }}
          >
            I'm actively seeking opportunities as a Junior Full-Stack Web
            Developer or MERN Stack Developer in the UAE. Feel free to reach
            out if you'd like to connect or discuss an opportunity.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            {/* Email */}
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:sonashajahan26@outlook.com"
              sx={{
                backgroundColor: "#38bdf8",
                color: "#0f172a",
                fontWeight: 700,
                padding: "12px 20px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#7dd3fc",
                },
              }}
            >
              Email Me
            </Button>

            {/* LinkedIn */}
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/sona-shajahan/"
              target="_blank"
              sx={{
                borderColor: "#38bdf8",
                color: "#38bdf8",
                fontWeight: 600,
                padding: "12px 20px",
                textTransform: "none",
              }}
            >
              LinkedIn
            </Button>

            {/* GitHub */}
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/sonashajahan1026-ux"
              target="_blank"
              sx={{
                borderColor: "#3a3e40",
                color: "#38bdf8",
                fontWeight: 600,
                padding: "12px 20px",
                textTransform: "none",
              }}
            >
              GitHub
            </Button>
          </Stack>

          <Typography
            sx={{
              color: "#94a3b8",
              marginTop: 4,
            }}
          >
            📍 Dubai, UAE
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;