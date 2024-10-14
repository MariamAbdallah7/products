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
import Swal from 'sweetalert2';


interface Props {
  data: {
    id: string;
    image: string;
    name: string;
    price: string;
  }[];
}

const Dashboard = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [productId, setProductId] = useState<string | null>(null);

  const handleEditClick = (id:string) => {
    setProductId(id);
    setShowEditModal(true);
  };
  const handleViewClick = (id:string) => {
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

  const deleteProduct = (id: string) => {
    axios
      .delete(`https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts/${id}`)
      .then((response) => {
        console.log(response);
        const updatedData = data.filter((product) => product.id !== id);
        setData(updatedData); 
        Swal.fire({
          title: 'Success!',
          icon: 'success',
          timer: 3000, 
        });

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
      
      {/* <CreateProduct show={show} handleClose={handleClose} />  */}
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
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img src={product.image} className={classes.image} alt="Product image" />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td >
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CreateProduct   />
        </Modal.Body>
      </Modal>
      
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
