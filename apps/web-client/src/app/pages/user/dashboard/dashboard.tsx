import { useEffect, useState } from 'react';
import { Content } from '../../../models/content';
import axios from '../../../utils/axios';
import { Card, Col, Row, Image, Spin } from 'antd';
import { LikeFilled, LikeOutlined } from '@ant-design/icons';

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

  const handleDeleteLike = async (contentId: number) => {
    setContents(
      contents.map((content) => {
        if (content.id === contentId) {
          return {
            ...content,
            liked: false,
            likes: content.likes - 1,
          };
        }
        return content;
      })
    );

    await axios.delete(`likes?contentId=${contentId}`);
  };

  const handleCreateLike = async (contentId: number) => {
    setContents(
      contents.map((content) => {
        if (content.id === contentId) {
          return {
            ...content,
            liked: true,
            likes: content.likes + 1,
          };
        }
        return content;
      })
    );

    await axios.post(`likes`, {
      contentId,
    });
  };

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
            <Card
              title={`${content.user.username} posted this content for #${content.challenge.name}`}
              actions={[
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  {content.likes}
                  {content.liked ? (
                    <LikeFilled
                      onClick={() => handleDeleteLike(content.id)}
                      key="like"
                    />
                  ) : (
                    <LikeOutlined
                      onClick={() => handleCreateLike(content.id)}
                      key="like"
                    />
                  )}
                </div>,
              ]}
            >
              <Image src={content.imageUrl} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Dashboard;
