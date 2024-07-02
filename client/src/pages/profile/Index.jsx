import { Tabs } from "antd";
import React, { useState } from "react";
import Products from "./Products";
import AddProduct from "./AddProduct";
import General from "./General";

const Index = () => {
  const [activeTabKey, setActiveTabKey] = useState("1");

  const items = [
    {
      key: "1",
      label: "PRODUCTS",
      children: <Products />,
    },
    {
      key: "2",
      label: "SELL PRODUCTS",
      children: <AddProduct setActiveTabKey={setActiveTabKey} />,
    },
    {
      key: "3",
      label: "NOTIFICATION",
      children: "Content of Tab Pane 1",
    },
    {
      key: "4",
      label: "GENERAL",
      children: <General />,
    },
  ];

  return (
    <Tabs
      activeKey={activeTabKey}
      onChange={(key) => setActiveTabKey(key)}
      items={items}
      tabPosition="left"
    />
  );
};

export default Index;
