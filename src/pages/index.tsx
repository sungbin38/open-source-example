import Link from "next/link";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} direction={"column"}>
        <Grid item>
          <Link href={"/bottom-sheet"}>
            <Button variant="contained">Bottom Sheet</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href={"/reach"}>
            <Button variant="contained">Reach</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href={"/react-spring"}>
            <Button variant="contained">React Spring</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

const Wrapper = styled.div``;
