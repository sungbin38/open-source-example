import React from "react";
import { Portal } from "@reach/portal";

export interface SimplePortalProps {
  s;
}

const SimplePortal: React.FC<SimplePortalProps> = (props) => {
  return (
    <>
      <Portal>
        <div>Stuff goes here</div>
      </Portal>
    </>
  );
};

export default SimplePortal;
