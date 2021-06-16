import React from 'react';
import { Card, List, Button } from 'antd';
import PropTypes from 'prop-types';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { REMOVE_FOLLOWER_REQUEST, UNFOLLOW_REQUEST } from '../reduers/user';

const FollwList = ({ header, data }) => {
  const dispatch = useDispatch();
  const onCancel = (id) => () => {
    if (header === '팔로잉') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      });
    } else {
      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id,
      });
    }
  };

  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={(
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>더 보기</Button>
        </div>
      )}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card
            actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}
          >
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollwList.propTypes = {
  header: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default FollwList;
