import React from 'react';
import PropTypes from 'prop-types';
import classes from './main-footer.styles.module.scss';
import { Layout } from 'antd';
import { BackTop } from 'antd';

const { Footer } = Layout;
MainFooter.propTypes = {

};

function MainFooter(props) {
  return (
    <Footer className={classes.footer}>
      <div className="container-fluid">
        <div className={classes.logo}>
          <i className={"fas fa-bolt "}></i>
          <a href="http://google.com">Tech</a>
        </div>
        <div className={classes.socialContact}>
          <ul className={classes.list}>
            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className={classes.copyright}>
          <p>Copyright © 2020 Tech</p>
        </div>
        <BackTop>
          <div className={classes.goTop}><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </Footer>
  );
}

export default MainFooter;