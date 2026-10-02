import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";

function Education() {
  return (
    <Box
      id="education"
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
          Education
        </Typography>

        <Typography
          sx={{
            color: "#38bdf8",
            textAlign: "center",
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          My academic background
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
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              borderColor: "#38bdf8",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              marginBottom: 1,
            }}
          >
            Bachelor of Technology in Computer Science
          </Typography>

          <Typography
            sx={{
              color: "#38bdf8",
              fontWeight: 600,
              marginBottom: 1,
            }}
          >
            College of Engineering Perumon
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              marginBottom: 3,
            }}
          >
            2021 – 2025
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#334155",
                padding: "10px 16px",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#e2e8f0",
                  fontWeight: 600,
                }}
              >
                CGPA: 8.06
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#334155",
                padding: "10px 16px",
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#e2e8f0",
                  fontWeight: 600,
                }}
              >
                Computer Science Engineering
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Education;