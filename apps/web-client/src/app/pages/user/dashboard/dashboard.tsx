import { useEffect, useState } from 'react';
import { Content } from '../../../models/content';
import axios from '../../../utils/axios';
import { Card, Col, Row, Image, Spin } from 'antd';

export function Dashboard() {
  const [loading, setLoading] = useState<boolean>(false);
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await axios.get<{
        data: Content[];
        totalCount: number;
      }>(`contents?take=${20}&skip=${0}`);

      setContents(response.data.data);
      setLoading(false);
    })();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 26,
      }}
    >
      <Row>
        {loading && <Spin spinning={loading} />}
        {contents.map((content) => (
          <Col key={content.id}>
            <Card title={content.id}>
              <Image src={content.imageUrl} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Dashboard;
