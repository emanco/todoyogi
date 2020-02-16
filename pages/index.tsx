import React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Schedule from "./schedule";

export default function Index() {
  return (
    <Container>
      <Box>
        <Schedule/>
      </Box>
    </Container>
  );
}
