import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './works.styles.module.scss';
import { Modal, Button } from 'antd';

Works.propTypes = {

};

function Works(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id='works' className={`block ` + classes.works}>
      <div className="container-fluid">
        <div className={classes.titleHolder}>
          <h3>How it works</h3>
          <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
        </div>
        <div className={classes.contentHolder}>
          <Button type="primary" onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
          <Modal
            title="Woocommerce Tutorial"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            destroyOnClose={true}
          >
            <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"></iframe>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Works;