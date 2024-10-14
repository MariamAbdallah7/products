'use client';

import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './create-product.module.css'

// interface CreateProductProps {
//   show: boolean;
//   handleClose: () => void;
// }

const CreateProduct = () => {
  const [image, setImage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setErrors({
      name: '',
      price: '',
      image: '',
    });

    let isValid = true;

    if (!name) {
      setErrors(prev => ({ ...prev, name: 'Name is required' }));
      isValid = false;
    }
    if (!price) {
      setErrors(prev => ({ ...prev, price: 'Price is required' }));
      isValid = false;
    }
    if (!image) {
      setErrors(prev => ({ ...prev, image: 'Image URL is required' }));
      isValid = false;
    }

    if (!isValid) return;

    setIsLoading(true);

    try {
      const productData = {
        name,
        price,
        image,
      };
      const response = await axios.post(
        'https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts',
        productData
      );
      console.log(response);
      window.location.reload();

    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    if (errors.price) setErrors(prev => ({ ...prev, price: '' }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
    if (errors.image) setErrors(prev => ({ ...prev, image: '' }));
  };

  return (
    // <Modal show={show} onHide={handleClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Create Product</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={handleNameChange}
              autoFocus
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              value={price}
              onChange={handlePriceChange}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product image URL"
              value={image}
              onChange={handleImageChange}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Form.Group>

          <div className={classes.groupButtons}> 
          {/* <Button variant="secondary" >
          Close
        </Button> */}
        <Button variant="primary" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Loading ...' : 'Submit'}
        </Button>
          </div>
         
        </Form>
      
  );
}
export default CreateProduct