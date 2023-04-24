import { Card, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { Challenge } from '../../../models/challenge';
import axios from '../../../utils/axios';

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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
  ];

  return (
    <Card title="Challenges" loading={loading}>
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
