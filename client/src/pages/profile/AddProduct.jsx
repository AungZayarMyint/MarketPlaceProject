import React from "react";
import { Checkbox, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { SquaresPlusIcon } from "@heroicons/react/24/solid";

const AddProduct = () => {
  const categoriesOptions = [
    {
      value: "clothing_and_fashion",
      label: "Clothing and Fashion",
    },
    {
      value: "electronics_and_gadgets",
      label: "Electronics and Gadgets",
    },
    {
      value: "home_and_furniture",
      label: "Home and Furniture",
    },
    {
      value: "beauty_and_personal_care",
      label: "Beauty and Personal Care",
    },
    {
      value: "books_and_media",
      label: "Books and Media",
    },
    {
      value: "sports_and_fitness",
      label: "Sports and Fitness",
    },
    {
      value: "toys_and_games",
      label: "Toys and Games",
    },
  ];

  const checkBoxOptions = [
    {
      label: "Accessories",
      value: "accessories",
    },
    {
      label: "Warranty",
      value: "warranty",
    },
    {
      label: "Bills",
      value: "bills",
    },
  ];

  return (
    <section>
      <h1 className="text-xl font-extrabold my-5 text-red-600 ">
        WHAT YOU WANT TO SELL?
      </h1>
      <Form layout="vertical">
        <Form.Item
          name="product_name"
          label="Product Name"
          rules={[
            {
              required: true,
              message: "Product name must be include!",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Product name ..." />
        </Form.Item>

        <Form.Item
          name="product_description"
          label="Product Description"
          rules={[
            {
              required: true,
              message: "Product Description must be include!",
            },
          ]}
          hasFeedback
        >
          <TextArea rows={5} />
        </Form.Item>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="product_price"
              label="Product Price"
              rules={[
                {
                  required: true,
                  message: "Product price must be include!",
                },
              ]}
              hasFeedback
            >
              <Input type="number" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="product_category"
              label="Choose a category"
              rules={[
                {
                  required: true,
                  message: "Category must be choose!",
                },
              ]}
              hasFeedback
            >
              <Select defaultValue={""} options={categoriesOptions} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              name="product_used_for"
              label="Used for .."
              rules={[
                {
                  required: true,
                  message: "Product's used time have to show",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="e.g., 3-months ago ..." />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="product_details" label="This product has">
          <Checkbox.Group options={checkBoxOptions} defaultValue={[""]} />
        </Form.Item>

        <button
          className="font-medium text-lg text-center my-4 rounded-md flex items-end justify-center text-red-600 bg-gray-50 shadow-md gap-2 p-2 w-full"
          type="button"
        >
          <SquaresPlusIcon width={30} />
          Sell
        </button>
      </Form>
    </section>
  );
};

export default AddProduct;
