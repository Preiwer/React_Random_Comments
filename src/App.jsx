import {
  Box,
  Chip,
  Typography,
  Container,
  Button,
  Stack,
  Paper,
  Skeleton,
} from "@mui/material";
import { useEffect, useState } from "react";
import Part from "./components/Part";
import ColorSchemeSwitcher from "./components/ColorSchemeSwitcher";
import "./App.css";
import axios from "axios";

function App() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const [data, setData] = useState([]);
  const [colorScheme, setColorScheme] = useState(true);
  const [loader, setLoader] = useState(true);

  const rand = (param) => Math.ceil(Math.random() * param);

  async function fetchData() {
    try {
      // const templ = await axios.get(url);
      const res = await axios.get(
        url + `?id=${rand((await axios.get(url)).data.length)}`
      );
      setData(res.data);
      setLoader(false);
      console.warn(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: 0,
          width: "100%",
          height: "100%",
          backgroundColor: colorScheme ? "#fff" : "#141A1F",
          color: colorScheme ? "#141A1F" : "#fff",
          transition: "background-color .5s",
        }}
      >
        <Typography>Random Comments</Typography>
        <Stack width={"40vw"} alignItems={"center"} gap={3}>
          {loader ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                width: "70%",
              }}
            >
              <Skeleton width={"100%"} animation={"wave"}>
                <Part
                  title="Name"
                  content="frfrf"
                  colorScheme={colorScheme}
                  h={"50px"}
                />
              </Skeleton>
              <Skeleton width={"100%"}>
                <Part
                  title="Body"
                  content="ffsfds"
                  colorScheme={colorScheme}
                  sx={{ minHeight: "100px" }}
                  h={"100px"}
                />
              </Skeleton>
              <Skeleton animation={"wave"}>
                <Chip
                  label="dsgsdsgsderhwh@gmail.com"
                  variant="outlined"
                  color="info"
                />
              </Skeleton>
            </Box>
          ) : (
            data.map((elem, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Part
                  title="Name"
                  content={elem.name}
                  colorScheme={colorScheme}
                  h={"50px"}
                />
                <Part
                  title="Body"
                  content={elem.body}
                  colorScheme={colorScheme}
                  sx={{ minHeight: "100px" }}
                  h={"100px"}
                />
                <Chip label={elem.email} variant="outlined" color="info" />
              </Box>
            ))
          )}

          {/* {data.map((elem, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Part
                title="Name"
                content={elem.name}
                colorScheme={colorScheme}
                h={"50px"}
              />
              <Part
                title="Body"
                content={elem.body}
                colorScheme={colorScheme}
                sx={{ minHeight: "100px" }}
                h={"100px"}
              />
              <Chip label={elem.email} variant="outlined" color="info" />
            </Box>
          ))} */}

          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Button
              onClick={() => {
                fetchData();
                setLoader(true);
              }}
              variant="contained"
            >
              Random
            </Button>
            <ColorSchemeSwitcher
              colorScheme={colorScheme}
              setColorScheme={setColorScheme}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default App;
