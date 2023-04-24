import { Button, Card, Form, Input, message } from 'antd';
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';

interface SignUpForm {
  email: string;
  username: string;
  password: string;
}

export function SignUp() {
  const onFinish = async (values: SignUpForm) => {
    try {
      const response = await axios.post('auth/sign-up', values);

      message.success('Sign up successful');
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
          name="Sign Up"
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
                message: 'Please enter a correct email',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please enter a username',
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
            <Link to="/login">Already have an account?</Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default SignUp;
