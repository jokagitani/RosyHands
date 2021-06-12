import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
const CardProduct = (props) => {
    return(
  <Card>
    <Image src={props.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2021 April (´∀｀)♡</span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
    )
};

export default CardProduct