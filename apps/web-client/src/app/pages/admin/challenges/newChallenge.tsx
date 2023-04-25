import { Button, Card, Form, Input, Select, message } from 'antd';
import axios from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';

interface NewChallengeForm {
  name: string;
  tags: string[];
}

export function NewChallenge() {
  const navigate = useNavigate();

  const onFinish = async (values: NewChallengeForm) => {
    try {
      await axios.post('challenges', {
        name: values.name,
        tags: values.tags,
      });

      message.success('Challenge created successfully');
      navigate('/admin/challenges');
    } catch (error: any) {
      message.error('Challenge creation failed');
    }
  };

  return (
    <Card title="New Challenge">
      <Form
        name="newChallenge"
        layout="vertical"
        initialValues={{}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please insert a name',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tags"
          name="tags"
          rules={[{ required: true, message: 'Please enter at least one tag' }]}
        >
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Tags Mode"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default NewChallenge;
