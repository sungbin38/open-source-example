import React from "react";
import SimplePortal from "@/components/reach-example/portal/SimplePortal";

export interface ReachPageProps {}

const ReachPage: React.FC<ReachPageProps> = (props) => {
  return (
    <>
      <SimplePortal param={123} />
    </>
  );
};

export default ReachPage;
