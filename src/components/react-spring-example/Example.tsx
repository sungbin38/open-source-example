import React from "react";
import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export interface ExampleProps {}

const AnimatedDiv = styled(animated.div)``;

const Example: React.FC<ExampleProps> = (props) => {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const onClickLeft = () => {
    api.start({
      from: {
        x: 1000,
      },
      to: {
        x: 0,
      },
    });
  };

  const onClickRight = () => {
    api.start({
      from: {
        x: 500,
      },
      to: {
        x: 1000,
      },
    });
  };

  return (
    <>
      <Grid container spacing={2} direction={"column"}>
        <Grid item>
          <Button onClick={onClickLeft} variant={"outlined"}>
            left
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={onClickRight} variant={"outlined"}>
            right
          </Button>
        </Grid>
        <Grid item>
          <AnimatedDiv
            style={{
              width: 80,
              height: 80,
              background: "#ff6d6d",
              borderRadius: 8,
              ...springs,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Example;
