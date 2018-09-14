import React from 'react';
import { Row, Col, Layout } from 'antd';

const { Footer } = Layout;

export default function FooterContent() {
  return (
    <footer id="footer">
      <Footer>
        <Row justify="center">
          <Col className="made-with-by" span={24}>
            <span>
              made with by :

            </span>
            <a href="https://github.com/ant-design/ant-design" target="_blank" rel="noopener noreferrer">
              {' '}
              <span>
                {' '}
                ant design

              </span>
            </a>

            <a href="https://github.com/benjycui/bisheng" target="_blank" rel="noopener noreferrer">
              {' '}
              <span>
                {' '}
                bi sheng

              </span>
            </a>
          </Col>
        </Row>
      </Footer>
    </footer>
  );
}
