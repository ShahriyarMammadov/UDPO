import React, { useState } from "react";
import "./index.scss";
import { Button, Form, Input, message } from "antd";
import axios from "axios";

const ContactMe = ({ text }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [btnBoading, setBtnLoading] = useState(false);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} Yazmaq Vacibdir!",
    types: {
      email: "${label} Düzgün Deyil!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const sendWriteToUs = async (values) => {
    try {
      if (
        values?.user?.Ad?.length <= 4 ||
        values?.user?.email?.length <= 8 ||
        values?.user?.Telefon?.length <= 8
      ) {
        return messageApi.warning("Məlumatları Tam Daxil Edin");
      }
      setBtnLoading(true);

      const { data } = await axios.post(
        "https://udpobackend-production.up.railway.app/writeToUs/addWriteToUs",
        {
          fullName: values?.user?.Ad,
          email: values?.user?.email,
          text: values?.user?.Qeydiniz,
          phoneNumber: values?.user?.Telefon,
        }
      );
      messageApi.success(data?.message);
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      console.log(error?.response?.data);
    }
  };

  const addQonaqKitabi = async (values) => {
    try {
      if (
        values?.user?.Ad?.length <= 4 ||
        values?.user?.email?.length <= 8 ||
        values?.user?.Telefon?.length <= 8
      ) {
        return messageApi.warning("Məlumatları Tam Daxil Edin");
      }
      setBtnLoading(true);

      const { data } = await axios.post(
        "https://udpobackend-production.up.railway.app/qonaqKitabi/addqonaqkitabi",
        {
          fullName: values?.user?.Ad,
          email: values?.user?.email,
          text: values?.user?.Qeydiniz,
          phoneNumber: values?.user?.Telefon,
        }
      );

      messageApi.success(data?.message);
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      console.log(error?.response?.data);
    }
  };

  return (
    <div id="contactMeComponent">
      {contextHolder}

      <div className="container">
        <h2>{text}</h2>

        <div className="form">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={
              text === "Qeydlərinizi Əlavə Edin"
                ? addQonaqKitabi
                : sendWriteToUs
            }
            style={{
              maxWidth: 800,
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "Ad"]}
              label="Tam Adınız"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name={["user", "Telefon"]} label="Telefon Nömrəsi">
              <Input />
            </Form.Item>

            <Form.Item
              name={["user", "Qeydiniz"]}
              label="Qeydiniz"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea allowClear showCount maxLength={180} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit" loading={btnBoading}>
                Göndər
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
