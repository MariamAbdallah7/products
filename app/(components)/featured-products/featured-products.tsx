
import { Row, Col, Container } from 'react-bootstrap';
import classes from './feattured-products.module.css'

async function fetchdetails() {
  const response = await fetch(
    "https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts"
  );
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
}
interface Props {
  id: any;
  image: any;
  name: String;
  price: String;
}

export default async function FeaturedProducts() {
  const data: Props[] = await fetchdetails();

  return (
    <>
      <p className={classes.header}>Featured products</p>
      <p className={classes.header2} >What’s more, we do it right!</p>

      <Container>
        <Row >
          <div className={classes.cardStyle}>
            {data.map((product: Props) => (
              <Col xs={12} sm={6} md={4} lg={3} key={product.id} >
                <div className={`${classes.elementDiv} card`}>
                  <img
                    className={`${classes.imgStyle} card-img-top`}
                    src={product.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className={`${classes.name} card-title`}>{product.name}</h5>
                    <p className={`${classes.price} card-text`}>Price: {product.price}</p>
                  </div>
                </div>
              </Col>
            ))}
          </div>
        </Row>
      </Container>
    </>
  )
}