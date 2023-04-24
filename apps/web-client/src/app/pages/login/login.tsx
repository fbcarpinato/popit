import { Button, Card, Form, Input, message } from 'antd';
import axios from '../../utils/axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import { useEffect } from 'react';

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const navigate = useNavigate();

  const { user, refetch } = useUser();

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user]);

  const onFinish = async (values: LoginForm) => {
    try {
      await axios.post('auth/login', values);

      message.success('Login successful');

      await refetch();
      navigate('/admin');
    } catch (error: any) {
      message.error(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Card style={{ maxWidth: 600, width: '100%' }} title="Welcome to PopIt">
        <Form
          name="login"
          layout="vertical"
          initialValues={{}}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please insert a correct email',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Link to="/sign-up">Don't have an account?</Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
