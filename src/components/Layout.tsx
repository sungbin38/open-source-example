import React, { PropsWithChildren } from "react";

export interface LayoutProps {}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { children } = props;
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
