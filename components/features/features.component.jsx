import React from 'react';
import PropTypes from 'prop-types';
import classes from './features.styles.module.scss';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

Features.propTypes = {

};

function Features(props) {
  return (
    <div id='features' className={`block ` + classes.features}>
      <div className="container-fluid">
        <div className={classes.titleHolder}>
          <h3>Key Features and Benefits</h3>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <div>
          <Row gutter={[16, 16]}>
            <Col sm={{span: 12}} md={{span: 8}}>
              <Card
                hoverable
                cover={<img alt="example" src='/assets/images/modern-design.jpg' />}
              >
                <Meta title="Modern Design" description="www.instagram.com" />
              </Card>
            </Col>
            <Col sm={{span: 12}} md={{span: 8}}>
              <Card
                hoverable
                cover={<img alt="example" src='/assets/images/clean-design.jpg' />}
              >
                <Meta title="Clean and Elegant" description="www.instagram.com" />
              </Card>
            </Col>
            <Col sm={{span: 12}} md={{span: 8}}>
              <Card
                hoverable
                cover={<img alt="example" src='/assets/images/great-support.jpg' />}
              >
                <Meta title="Great Support" description="www.instagram.com" />
              </Card>
            </Col>

            <Col sm={{span: 12}} md={{span: 8}}>
              <Card
                hoverable
                cover={<img alt="example" src='/assets/images/easy-customise.jpg' />}
              >
                <Meta title="Easy to customise" description="www.instagram.com" />
              </Card>
            </Col>
            <Col sm={{span: 12}} md={{span: 8}}>
              <Card
                hoverable
                cover={<img alt="example" src='/assets/images/unlimited-features.jpg' />}
              >
                <Meta title="Unlimited Features" description="www.instagram.com" />
              </Card>
            </Col>
            <Col sm={{span: 12}} md={{span: 8}}>
              <Card
                hoverable
                cover={<img alt="example" src='/assets/images/advanced-option.jpg' />}
              >
                <Meta title="Advanced Options" description="www.instagram.com" />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Features;