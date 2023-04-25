import { Button, Card, Form, Input, Select, message } from 'antd';
import axios from '../../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Challenge } from '../../../models/challenge';

interface NewChallengeForm {
  name: string;
  tags: string[];
}

export function EditChallenge() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get<Challenge>(`challenges/${id}`);

      setChallenge(response.data);
      setLoading(false);
    })();
  }, [id]);

  const onFinish = async (values: NewChallengeForm) => {
    try {
      await axios.put(`challenges/${challenge?.id}`, {
        name: values.name,
        tags: values.tags,
      });

      message.success('Challenge edited successfully');
      navigate('/admin/challenges');
    } catch (error: any) {
      message.error('Challenge creation failed');
    }
  };

  return (
    <Card loading={loading} title={`Edit Challenge - ${challenge?.name}`}>
      <Form
        name="editChallenge"
        layout="vertical"
        initialValues={{}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          initialValue={challenge?.name}
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
          initialValue={challenge?.tags}
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
            Edit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default EditChallenge;
