import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, Button } from 'antd';
import classes from './hero.styles.module.scss';

Hero.propTypes = {

};

const items = [
  {
    key: '1',
    title: 'Web and mobile payment built for developers',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    title: 'Work better together. Schedule meetings',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function Hero(props) {
  return (
    <div id='home' className={classes.hero}>
      <Carousel >
        {items.map(item => {
          return (
            <div key={item.key} className={classes.containerFluid}>
              <div className={classes.content}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className={classes.btnHolder}>
                  <Button type="primary" size="large">Learn More</Button>
                  <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel >
    </div>

  );
}

export default Hero;