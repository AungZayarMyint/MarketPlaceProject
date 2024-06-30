import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

const AuthForm = ({ isLoginPage }) => {
  const handleOnFinish = async (values) => {
    console.log(values);
  };

  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="w-[450px]">
        <h1 className="text-3xl font-bold mb-4 text-teal-500">
          POINT.IO - {isLoginPage ? "LOGIN" : "REGISTER"}
        </h1>
        <Form layout="vertical" onFinish={handleOnFinish}>
          {!isLoginPage && (
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Name must be include!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="name..."></Input>
            </Form.Item>
          )}

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Email must be include!",
              },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="email..."></Input>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Password must be include!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="password..."></Input.Password>
          </Form.Item>

          <FormItem>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </FormItem>
        </Form>
      </div>
    </section>
  );
};

export default AuthForm;
