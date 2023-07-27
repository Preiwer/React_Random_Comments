import { Typography, Paper } from "@mui/material";

function Part({ title, content, colorScheme, h }) {
  return (
    <Typography>
      <strong>{title}:</strong>
      <Paper
        sx={{
          padding: "10px",
          color: colorScheme ? "#141A1F" : "#fff",
          backgroundColor: colorScheme ? "#fff" : "#141A1F",
          width: '100%',
          minHeight: h
        }}
        elevation={1}
      >
         {content}
      </Paper>
    </Typography>
  );
}

export default Part;
