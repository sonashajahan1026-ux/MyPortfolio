import { Box, Container, Typography } from "@mui/material";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#111827",
        color: "#94a3b8",
        py: 3,
        borderTop: "1px solid rgba(56,189,248,0.15)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          © {currentYear} Sona Shajahan. All rights reserved.
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            marginTop: 1,
            fontSize: "0.85rem",
          }}
        >
          Built with React.js and Material UI
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;