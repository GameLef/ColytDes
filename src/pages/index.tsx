import { useEffect } from 'react';
import styles from '@/models/Index/index.scss';
import { Icon } from '@ricons/utils';
import { Terminal } from '@ricons/tabler';
import { Button, Space, Typography } from 'antd';
import _ from 'lodash';

export default function HomePage() {
  useEffect(() => {}, []);

  const formatText = (text: string): string[] => {
    const tempText = text.split('');
    return _.map(_.chunk(tempText, 36), (value) => value.join(''));
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['base-left']}>
        <div className={styles['user-info']}>
          <Space size={26}>
            <div className={styles['user-info-image']}>
              <img src={'https://tuapi.eees.cc/api.php?category=dongman&type=302'} width={120} height={120} alt={''} />
            </div>
            <div className={styles['user-info-info']}>
              <div className={styles['user-info-name']}>
                <Typography.Title level={3}>Hello World</Typography.Title>
              </div>
              <Space>
                {['文章', '归档', '标签'].map((value) => (
                  <div className={styles['user-info-tag']}>
                    <Typography.Text>{value}</Typography.Text>
                  </div>
                ))}
              </Space>
            </div>
          </Space>
        </div>
      </div>

      <div className={styles['base-center']}>
        <div className={styles['announcement']}>
          <div className={styles['announcement-text']}>{':/user/data/ # input command enter to run...'}</div>
          <Icon size={22}>
            <Terminal />
          </Icon>
        </div>

        <div className={styles['content-list']}>
          <div className={styles['content-item']}>
            <div className={styles['content-code']}>{'# test message id 114514. 2022-11-09'}</div>
            <div className={styles['content-card']}>
              <div className={styles['content-image']}>
                <Button type={'default'} ghost={true} className={styles['content-open--button']}>
                  open
                </Button>
              </div>
              <div style={{ height: '12px' }}></div>
              <div className={styles['content-title']}>
                <Typography.Title>Hello World！！</Typography.Title>
              </div>
              <div className={styles['content-description']}>
                {/*{formatText(*/}
                {/*  `'Hello,World!' 中文意思是“你好，世界”。因为 The C Programming Language 中使用它做为第一个演示程序，后来的程序员在学习编程或进行设备调试时延续了这一习惯。`*/}
                {/*).map((value, index, array) => (*/}
                {/*  <div>*/}
                {/*    <Typography.Text mark={true}>{value}</Typography.Text>*/}
                {/*  </div>*/}
                {/*))}*/}
                <div>
                  <Typography.Text mark={true}>{`'Hello,World!' 中文意思是“你好，世界”。因为 The C Programming Language 中`}</Typography.Text>
                </div>
                <div>
                  <Typography.Text mark={true}>{`使用它做为第一个演示程序，后来的程序员在学习编程或进行设备调试时延续了`}</Typography.Text>
                </div>
                <div>
                  <Typography.Text mark={true}>{`这一习惯。`}</Typography.Text>
                </div>
              </div>
              <div style={{ height: '24px' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['base-right']}></div>
    </div>
  );
}
