import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "./utils/constants";
import SearchBar from "./SearchBar";
import { Typography } from "@mui/material";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="./" exact style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} sx={{borderRadius:"20%"}}></img>
      <Typography variant="h5" sx={{ color: "#fff" }} p={2}>
        MadTube
      </Typography>
    </Link>

    <SearchBar></SearchBar>
  </Stack>
);

export default Navbar;
