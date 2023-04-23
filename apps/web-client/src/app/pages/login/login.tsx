import { Button, Form, Input, message } from 'antd';
import axios from '../../utils/axios';

interface LoginForm {
  email: string;
  password: string;
}

export function Login() {
  const onFinish = async (values: LoginForm) => {
    try {
      const response = await axios.post('auth/login', values);

      message.success('Login successful');
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
      <Form
        name="login"
        layout="vertical"
        style={{ maxWidth: 600, width: '100%' }}
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
