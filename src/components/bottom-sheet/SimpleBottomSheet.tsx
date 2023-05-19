import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { BottomSheet } from "react-spring-bottom-sheet";
import { Grid } from "@mui/material";

export interface SimpleBottomSheetProps {}

const SimpleBottomSheet: React.FC<SimpleBottomSheetProps> = (props) => {
  const [open, setOpen] = useState(false);
  const onDismiss = () => {
    setOpen(false);
  };

  const header = () => {
    return <Header />;
  };

  return (
    <Wrapper>
      <Button variant={"contained"} onClick={() => setOpen(true)}>
        open
      </Button>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        header={<Header />}
        // snapPoints={({ minHeight }) => minHeight}
      >
        <SheetContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Expandable>
                <ExpandContent>
                  <SampleDiv />
                </ExpandContent>
              </Expandable>
            </Grid>
            <Grid item xs={12}>
              <Button variant={"outlined"} onClick={onDismiss}>
                Dismiss
              </Button>
            </Grid>
          </Grid>
        </SheetContent>
      </BottomSheet>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const SheetContent = styled.div`
  padding: 20px;
`;
const Expandable = styled.details``;
const ExpandContent = styled.div``;
const SampleDiv = styled.div`
  height: 300px;
`;
const Header = styled.div`
  width: 100%;
  height: 20px;
  background: cadetblue;
`;
export default SimpleBottomSheet;
