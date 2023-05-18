import React from "react";
import ScrollableBottomSheet from "@/components/bottom-sheet/ScrollableBottomSheet";

export interface BottomSheetPageProps {}

const BottomSheetPage: React.FC<BottomSheetPageProps> = (props) => {
  return (
    <>
      {/*<BottomSheetExample />*/}
      {/*<SimpleBottomSheet />*/}
      <ScrollableBottomSheet />
    </>
  );
};

export default BottomSheetPage;
