import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";


const projects = [
  {
    title: "Bookstore E-Commerce Web App",
    image: "/images/BookstoreImg.png",
    points: [
      "Built a full-stack book marketplace with React, Node.js, Express and MongoDB.",
      "Implemented JWT authentication, Google sign-in and role-based admin access.",
      "Integrated Stripe checkout and deployed on Vercel and Render.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Google Auth",
      "Vercel",
      "Render",
    ],
    github: "https://github.com/sonashajahan1026-ux/BookstoreFE",
    live: "https://bookstore-fe-p6om.vercel.app/",
  },
  {
    title: "Resume Builder",
    image: "/images/ResumeImg.png",
    points: [
      "Built a multi-step resume form with live preview and PDF download.",
      "Implemented create, edit and delete of saved resumes through a REST API.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Axios",
      "Material UI",
      "React Router",
      "REST APIs",
    ],
    github: "https://github.com/sonashajahan1026-ux/ResumeBuilderFE",
    live: "https://resume-builder-fe-cyan.vercel.app/",
  },
  {
    title: "Expense Tracker",
    image: "/images/ExpenseTrackerImg.png",
    points: [
      "Built a responsive web app to add, view and delete daily expenses by title, amount and category.",
      "Used browser Local Storage to keep expense data saved after page refresh, with no backend needed.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "DOM Manipulation",
      "Local Storage",
    ],
    github: "https://github.com/sonashajahan1026-ux/EXPENSE_TRACKER",
    live: "https://sonashajahan1026-ux.github.io/EXPENSE_TRACKER/",
  },
];

function Projects() {
  return (
    <Box
      id="projects"
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
          Featured Projects
        </Typography>

        <Typography
          sx={{
            color: "#38bdf8",
            textAlign: "center",
            marginBottom: 6,
            fontWeight: 500,
          }}
        >
          A selection of projects I've built
        </Typography>

        {/* CSS grid: 1 column on phones, 2 on tablets, 3 on desktops */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#1e293b",
                color: "white",
                borderRadius: 3,
                border: "1px solid rgba(56,189,248,0.15)",
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  borderColor: "#38bdf8",
                },
              }}
            >
              {/* Project screenshot */}
              <Box
                component="img"
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: 190,
                  objectFit: "cover",
                  objectPosition: "top",
                  backgroundColor: "#334155",
                  display: "block",
                }}
              />

              <CardContent sx={{ flexGrow: 1, padding: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    marginBottom: 2,
                  }}
                >
                  {project.title}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    paddingLeft: 2.5,
                    marginBottom: 3,
                  }}
                >
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </Box>

                {/* Technologies */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {project.technologies.map((technology) => (
                    <Box
                      key={technology}
                      sx={{
                        backgroundColor: "#334155",
                        color: "#38bdf8",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {technology}
                    </Box>
                  ))}
                </Box>
              </CardContent>

              {/* Project Links */}
              <CardActions sx={{ padding: 3, paddingTop: 0 }}>
                <Button
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#e2e8f0",
                    textTransform: "none",
                  }}
                >
                  GitHub
                </Button>

                <Button
                  startIcon={<LaunchIcon />}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#38bdf8",
                    textTransform: "none",
                  }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
