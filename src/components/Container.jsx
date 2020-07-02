import React from "react";
import { Layout } from "antd";
import AppHeader from "./header/AppHeader";
import AppContent from "./content/AppContent";

function Container(props) {
  return (
    <Layout className="layout">
      <AppHeader />
      <AppContent />
    </Layout>
  );
}

export default Container;
