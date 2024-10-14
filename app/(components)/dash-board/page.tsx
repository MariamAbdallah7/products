'use client';

import Table from 'react-bootstrap/Table';
import classes from './page.module.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CreateProduct from '../dash-board/create-product/page'; 
import FetchDetails from './Fetch'; 
import UpdateProductPage from './update-product/[id]/page';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit , faTrash ,faEye} from '@fortawesome/free-solid-svg-icons';
import ProductDetails from './view-product/[id]/page';


interface Props {
  data: {
    id: any;
    image: any;
    name: String;
    price: String;
  }[];
}

const Dashboard = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [productId, setProductId] = useState(null);

  const handleEditClick = (id:any) => {
    setProductId(id);
    setShowEditModal(true);
  };
  const handleViewClick = (id:any) => {
    setProductId(id);
    setShowViewModal(true);
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseViewModal = () => setShowViewModal(false);

  const [data, setData] = useState<Props['data']>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await FetchDetails();
      setData(data);
    }
    fetchData();
  }, []);

  const deleteProduct = (id: any) => {
    axios
      .delete(`https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts/${id}`)
      .then((response) => {
        console.log(response);
        const updatedData = data.filter((product) => product.id !== id);
        setData(updatedData); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className={classes.addButton} onClick={handleShow}>Add Product</Button>
      
      <CreateProduct show={show} handleClose={handleClose} /> 
      <Table striped bordered hover className={classes.table}>
        <thead>
          <tr >
            <th>#</th>
            <th>Image</th>  
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={product.image} className={classes.image} alt="Product image" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td >
                {/* <Button type="submit"  href={`/dash-board/update-product/${product.id}`}>Edit</Button> */}
                <Button className={classes.actionsButton} onClick={() => handleEditClick(product.id)}><FontAwesomeIcon icon={faEdit} /></Button>
                <Button className={classes.viewButton} onClick={() => handleViewClick(product.id)}><FontAwesomeIcon icon={faEye} /></Button>
                <Button className={classes.deleteButton} onClick={() => deleteProduct(product.id)}>
                <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {productId && <UpdateProductPage params={{ id: productId }}  />}
        </Modal.Body>
      </Modal>

      <Modal show={showViewModal} onHide={handleCloseViewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {productId && <ProductDetails params={{ id: productId }}  />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;
