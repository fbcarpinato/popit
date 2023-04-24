import { Card, Table } from 'antd';
import { useEffect, useState } from 'react';
import { User } from '../../../models/user';
import axios from '../../../utils/axios';

export function UsersList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await axios.get<{ data: User[]; totalCount: number }>(
        `users?take=${10}&skip=${page * 10}`
      );

      setUsers(response.data.data);
      setTotalCount(response.data.totalCount);
      setLoading(false);
    })();
  }, [page]);

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => <>actions</>,
    },
  ];

  return (
    <Card title="Users" loading={loading}>
      <Table
        rowKey={'id'}
        dataSource={users}
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

export default UsersList;
