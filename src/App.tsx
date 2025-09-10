import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useAtom } from "jotai";
import "./App.css";
import isDarkModeAtom from "./atoms/isDarkModeAtom";
import LayoutRoot from "./Pages/LayoutRoot";

function App() {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        className="App overflow-hidden"
        color={"text.primary"}
        bgcolor={"background.default"}
      >
        <LayoutRoot />
      </Box>
    </ThemeProvider>
  );
}

export default App;
