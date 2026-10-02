import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const skills = [
  {
    category: "Front-End Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "React Router",
      "Bootstrap",
      "Material UI",
      "Responsive Web Design",
    ],
  },
  {
    category: "Back-End Development",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "API Integration",
      "CRUD Operations",
      "Authentication",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "npm"],
  },
];

function Skills() {
  return (
    <Box
      id="skills"
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
          Technical Skills
        </Typography>

        <Typography
          sx={{
            color: "#38bdf8",
            textAlign: "center",
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          Technologies I work with
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} key={skill.category}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  backgroundColor: "#1e293b",
                  padding: 4,
                  borderRadius: 3,
                  border: "1px solid rgba(56,189,248,0.15)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#38bdf8",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#38bdf8",
                    fontWeight: 700,
                    marginBottom: 3,
                  }}
                >
                  {skill.category}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.2,
                  }}
                >
                  {skill.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        backgroundColor: "#334155",
                        color: "#e2e8f0",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;