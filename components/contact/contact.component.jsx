import React from 'react';
import PropTypes from 'prop-types';
import classes from './contact.styles.module.scss';
import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;
Contact.propTypes = {

};

function Contact(props) {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div id='contact' className={`block ` + classes.contact}>
      <div className="container-fluid">
        <div className={classes.titleHolder}>
          <h3>Get in Touch</h3>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <div className={classes.form}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="Fullname"
              rules={[
                {
                  required: true,
                  message: 'Please input your full-name!',
                },
              ]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email address!',
                },
              ]}
            >
              <Input
                type="email"
                placeholder="Email Address"
              />
            </Form.Item>
            <Form.Item
              name="telephone"
              rules={[
                {
                  required: true,
                  message: 'Please input your telephone!',
                },
              ]}
            >
              <Input
                type="number"
                placeholder="Telephone"
              />
            </Form.Item>

            <Form.Item
              name="Subject"
              rules={[
                {
                  required: true,
                  message: 'Please input your subject!',
                },
              ]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              name="message"
            >
              <TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>I agree with terms and conditions.</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;