import React from 'react';
// import classnames from 'classnames';

import { Row, Col, Layout } from 'antd';

const { Footer } = Layout;

export default function FooterContent() {
  return (
    <footer id="footer">
      <Footer style={{ textAlign: 'center' }}>
        <Row justify="center">
          <Col className="made-with-by" span={24}>
            <span>
              &copy; 2018 made with by :
            </span>
            <a href="https://github.com/ant-design/ant-design" target="_blank" rel="noopener noreferrer">
              <span>
                &nbsp;&nbsp;ant design
              </span>
            </a>

            <a href="https://github.com/benjycui/bisheng" target="_blank" rel="noopener noreferrer">
              <span>
              &nbsp;&nbsp;bi sheng
              </span>
            </a>
            <a
              href="http://www.miibeian.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;闽ICP备18005951号-1
              </span>
            </a>
          </Col>
        </Row>
      </Footer>
    </footer>
  );
}
