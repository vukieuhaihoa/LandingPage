import React from 'react';
import PropTypes from 'prop-types';
import classes from './main-layout.styles.module.scss';
import MainHeader from './main-header/main-header.component';
import MainFooter from './main-footer/main-footer.component';
import { Layout } from 'antd';

const { Content } = Layout;

MainLayout.propTypes = {

};

function MainLayout(props) {
  return (
    <Layout className='mainLayout'>
      <MainHeader />
      <Content>
        {props.children}
      </Content>
      <MainFooter />
    </Layout>
  );
}

export default MainLayout;