import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface LayoutProps {}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 20px;
`;

export default Layout;
