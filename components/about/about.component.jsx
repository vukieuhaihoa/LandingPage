import React from 'react';
import PropTypes from 'prop-types';
import classes from './about.styles.module.scss';
import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Flat Design',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Workflow',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

AboutUs.propTypes = {

};

function AboutUs(props) {
  return (
    <div id='aboutus' className={`block ` + classes.about}>
      <div className='container-fluid'>
        <div className={classes.titleHolder}>
          <h3>About Us</h3>
          <p>dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className={classes.contentHolder} >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
        </div>
        <div className={classes.addInfor}>
          <Row gutter={[16, 16]}>
            {items.map(item => {
              return (<Col key={item.key} xs={{span: 24}} md={{span: 8}}>{
                <div className={classes.content}>
                  <div className={classes.icon}>
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              }</Col>);
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;