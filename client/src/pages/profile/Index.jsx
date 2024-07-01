import { Tabs } from "antd";
import React from "react";
import Products from "./Products";
import AddProduct from "./AddProduct";

const Index = () => {
  const items = [
    {
      key: "1",
      label: "PRODUCTS",
      children: <Products />,
    },
    {
      key: "2",
      label: "ADD PRODUCTS",
      children: <AddProduct />,
    },
    {
      key: "3",
      label: "NOTIFICATION",
      children: "Content of Tab Pane 1",
    },
    {
      key: "4",
      label: "PROFILE",
      children: "Content of Tab Pane 1",
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} tabPosition="left" />;
};

export default Index;
