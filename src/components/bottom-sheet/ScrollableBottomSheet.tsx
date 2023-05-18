import React, { Ref, useRef } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import { RefHandles } from "react-spring-bottom-sheet/dist/types";
import MasonryImageList from "@/components/mui-example/MasonryImageList";
import styled from "styled-components";
import Button from "@mui/material/Button";

export interface ScrollableBottomSheetProps {}

const ScrollableBottomSheet: React.FC<ScrollableBottomSheetProps> = (props) => {
  const sheetRef = useRef<BottomSheetRef>();
  return (
    <>
      <BottomSheet
        defaultSnap={({ maxHeight }) => maxHeight / 2}
        open
        ref={sheetRef as Ref<RefHandles>}
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 10,
          maxHeight / 4,
          maxHeight * 0.6,
        ]}
        expandOnContentDrag
      >
        <SheetContent>
          <Button
            onClick={() => sheetRef.current?.snapTo(200)}
            variant={"contained"}
          >
            200
          </Button>
          <MasonryImageList />
        </SheetContent>
      </BottomSheet>
    </>
  );
};

const SheetContent = styled.div`
  margin: 10px;
`;

export default ScrollableBottomSheet;
