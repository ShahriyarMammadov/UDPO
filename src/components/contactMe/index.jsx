import React from "react";
import "./index.scss";
import { Button, Form, Input } from "antd";

const ContactMe = () => {
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

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div id="contactMeComponent">
      <div className="container">
        <h2>Bizə Müraciət</h2>

        <div className="form">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 800,
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "Ad, Soyad"]}
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

            <Form.Item
              name={["user", "Telefon Nömrəsi"]}
              label="Telefon Nömrəsi"
            >
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
              <Button type="primary" htmlType="submit">
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
