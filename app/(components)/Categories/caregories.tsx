import classes from './categories.module.css';
import Hoddies from '../../../assets/hoddies.svg';
import Top from '../../../assets/top.svg';
import TShirt from '../../../assets/T-Shirt.svg';
import Sweeter from '../../../assets/Sweeter.svg';
import Designer from '../../../assets/Designer.svg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Categories() {
  return (
    <>
      <Container className={classes.container}>
        <Row className={classes.row}>
          <Col xs={12} sm={12} md={3} className={classes.categoryCol}>
            <div className={classes.imageContainer}>
              <Hoddies className={classes.image} />
              <Button className={classes.imageButton}>Shop Hoodies</Button>
            </div>
            <div className={classes.imageContainer}>
              <Top className={classes.image} />
              <Button className={classes.imageButton}>Shop Tanktop</Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className={classes.categoryCol}>
            <div className={classes.imageContainer}>
              <TShirt className={classes.image} />
              <Button className={classes.imageButton}>Shop T-Shirt</Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} className={classes.categoryCol}>
            <div className={classes.imageContainer}>
              <Sweeter className={classes.image} />
              <Button className={classes.imageButton}>Shop Sweater</Button>
            </div>
            <div className={classes.imageContainer}>
              <Designer className={classes.image} />
              <Button className={classes.imageButton}>Shop Designer</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
