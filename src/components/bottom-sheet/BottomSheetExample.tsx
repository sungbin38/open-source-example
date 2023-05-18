import React, { useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import Button from "@mui/material/Button";
import styled from "styled-components";

export interface BottomSheetProps {}

const BottomSheetExample: React.FC<BottomSheetProps> = (props) => {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<BottomSheetRef>();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        variant={"outlined"}
        onClick={() => setOpen((prevState) => !prevState)}
      >
        Open
      </Button>
      <BottomSheet onDismiss={handleClose} open={open} ref={sheetRef}>
        <BottomSheetTitle>My awesome content here</BottomSheetTitle>

        <BottomSheetItemWrapper>
          <div>Hello</div>
          <Button
            variant={"contained"}
            onClick={() => {
              sheetRef.current?.snapTo(({ maxHeight }) => maxHeight);
            }}
          >
            Expand to full height
          </Button>
        </BottomSheetItemWrapper>
      </BottomSheet>
    </>
  );
};

const BottomSheetTitle = styled.div`
  padding: 20px;
`;

const BottomSheetItemWrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: 20px;
`;

export default BottomSheetExample;
