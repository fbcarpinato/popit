import { Button, Card, Table, Tag, Typography, message } from 'antd';
import { useEffect, useState } from 'react';
import { Challenge } from '../../../models/challenge';
import axios from '../../../utils/axios';
import { Link } from 'react-router-dom';
import { PlusCircleOutlined } from '@ant-design/icons';

export function ChallengesList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await axios.get<{
        data: Challenge[];
        totalCount: number;
      }>(`challenges?take=${10}&skip=${page * 10}`);

      setChallenges(response.data.data);
      setTotalCount(response.data.totalCount);
      setLoading(false);
    })();
  }, [page]);

  const handleDelete = async (challengeId: number) => {
    await axios.delete(`challenges/${challengeId}`);

    setChallenges(
      challenges.filter((challenge) => challenge.id !== challengeId)
    );

    message.success('Challenge deleted successfully');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, challenge: Challenge) => (
        <Link to={`/admin/challenges/${challenge.id}`}>{name}</Link>
      ),
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: string[]) =>
        tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        )),
    },
    {
      title: 'Actions',
      render: (challenge: Challenge) => (
        <Typography.Link onClick={() => handleDelete(challenge.id)}>
          Delete
        </Typography.Link>
      ),
    },
  ];

  return (
    <Card
      title="Challenges"
      loading={loading}
      extra={[
        <Link to="/admin/challenges/new">
          <Button>
            <PlusCircleOutlined />
            Create
          </Button>
        </Link>,
      ]}
    >
      <Table
        rowKey={'id'}
        dataSource={challenges}
        columns={columns}
        pagination={{
          hideOnSinglePage: true,
          total: totalCount,
          onChange: setPage,
        }}
      />
    </Card>
  );
}

export default ChallengesList;
