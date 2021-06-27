import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './main-header.styles.module.scss';
import { Layout, Button, Drawer } from 'antd';
import { Anchor } from 'antd';
const { Link } = Anchor;

const { Header } = Layout;

MainHeader.propTypes = {

};

function MainHeader(props) {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Header >
      <div className={`container-fluid ` + classes.header} >
        <div className={classes.logo} >
          <i className={"fas fa-bolt " + classes.fas}></i>
          <a href="http://google.com">Tech</a>
        </div>
        {/* <Menu className={classes.customMenu} theme='light' mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" >Home</Menu.Item>
          <Menu.Item key="aboutus" >About us</Menu.Item>
          <Menu.Item key="features" >Features</Menu.Item>
          <Menu.Item key="howitworks" >How it works</Menu.Item>
          <Menu.Item key="faq" >FAQ</Menu.Item>
          <Menu.Item key="pricing" >Pricing</Menu.Item>
          <Menu.Item key="contact" >Contact</Menu.Item>
        </Menu> */}
        <div className="mobileHidden">
          <Anchor targetOffset="65" className={classes.customMenu}>
            <Link href="#home" title="Home" />
            <Link href="#aboutus" title="About us" />
            <Link href="#features" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#home" title="Home" />
              <Link href="#aboutus" title="About us" />
              <Link href="#features" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>

      </div>
    </Header>
  );
}

export default MainHeader;