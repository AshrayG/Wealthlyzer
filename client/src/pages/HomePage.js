import React, { useState } from "react";
import { Form, Input, Modal, Select } from "antd";
import Layout from "../components/Layout/Layout";
import axios from 'axios';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const[loading,setLoading] =useState(false)
  const handleSubmit = async(value) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post
    } catch (error) {
      
    }
  };
  return (
    <Layout>
      <div className="filters">
        <div>Range Filters</div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="content"></div>
      <Modal
        title="Add Transaction"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="type" name="type">
            <Select>
              <Select.Option value="income"> Income </Select.Option>
              <Select.Option value="expense">Expenditure</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="interest">Interest</Select.Option>
              <Select.Option value="others">Food</Select.Option>
              <Select.Option value="others">Movie</Select.Option>
              <Select.Option value="others">Transportation</Select.Option>
              <Select.Option value="others">Self Improvement</Select.Option>
              <Select.Option value="others">Education</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              {" "}
              SAVE{" "}
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
