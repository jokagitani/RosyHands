import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
const CardProduct = (props) => {
    return(
  <Card>
    <Image src={props.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.love} <span className='block-price'></span><span className='block-price'>S$8</span></span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
    )
};

export default CardProduct