import { DarkMode, LightMode } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";

function ColorSchemeSwitcher({ colorScheme, setColorScheme }) {
  const handleSwitch = () => {
    setColorScheme(!colorScheme);
  };
  return (
    <Tooltip arrow title={colorScheme?'Switch to Dark theme':'Switch to Light Theme'}>
      <Button variant="outlined" onClick={handleSwitch}>
        {colorScheme ? <DarkMode /> : <LightMode />}
      </Button>
    </Tooltip>
  );
}

export default ColorSchemeSwitcher;
