import React from 'react'
import { Card, Image } from 'semantic-ui-react'



const ItemDetail = ({img, name, precio, description }) => (
  <Card>
    <Image src={img} className="imagen" />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{precio}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content> 
  </Card>
)

export default ItemDetail;

