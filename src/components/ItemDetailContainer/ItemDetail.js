
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './ItemDetail.css'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
      <article className="CardItem">
          <header className="Header">
              <h2 className="ItemHeader">
                  {name}
              </h2>
          </header>
          <picture>
              <img src={img} alt={name} className="ItemImg"/>
          </picture>
          <section>
              <p className="Info">
                  Categoria: {category}
              </p>
              <p className="Info">
                  Descripción: {description}
              </p>
              <p className="Info">
                  Precio: {price}
              </p>
          </section>           
          <footer className='ItemFooter'>
          </footer>
      </article>
  )
}

export default ItemDetail;

/*
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


*/



