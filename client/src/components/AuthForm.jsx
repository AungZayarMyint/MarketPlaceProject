import { Button, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { loginUser, registerUser } from "../api_calls/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice";

const AuthForm = ({ isLoginPage }) => {
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnFinish = async (values) => {
    setSubmitting(true);

    if (isLoginPage) {
      try {
        const response = await loginUser(values);
        if (response.isSuccess) {
          message.success(response.message);
          localStorage.setItem("token", response.token);
          dispatch(setUser(response.token));
          navigate("/");
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        message.error(err.message);
      }
    } else {
      try {
        const response = await registerUser(values);
        if (response.isSuccess) {
          message.success(response.message);
          navigate("/login");
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        message.error(err.message);
      }
    }

    setSubmitting(false);
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
                {
                  min: 3,
                  message: "Name must have three characters!",
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
              {isLoginPage && !submitting && "Login"}
              {!isLoginPage && !submitting && "Register"}

              {submitting && "Submitting"}
            </Button>
          </FormItem>

          <p>
            {" "}
            {isLoginPage ? (
              <p>
                {" "}
                Don't have an account ?{" "}
                <Link to={"/register"} className="font-medium text-teal-600">
                  Register Here!
                </Link>{" "}
              </p>
            ) : (
              <p>
                Already have an account ?{" "}
                <Link to={"/login"} className="font-medium text-teal-600">
                  Login Here!
                </Link>
              </p>
            )}{" "}
          </p>
        </Form>
      </div>
    </section>
  );
};

export default AuthForm;
