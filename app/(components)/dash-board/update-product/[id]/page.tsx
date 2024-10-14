"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';


const UpdateProductPage = ({ params }: { params: { id: string } }) => {
    const id = params.id;
   
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts/${id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image, name, price })
            });

            if (res.ok) {
                console.log('Product updated successfully');
                window.location.reload()
            } else {
                console.log('Failed to update product');
            }
        } catch (e) {
            console.error('Error during update:', e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        axios
      .get(`https://670825ed8e86a8d9e42e355b.mockapi.io/products/featuredProducts/${id}`)
      .then((response) => {
        const data =response.data
        console.log(data);
        setImage(data.image);
        setName(data.name);
        setPrice(data.price);
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return (
        <>
        
        
<Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={name} 
                onChange={(e) => setName(e.target.value)}  
              autoFocus
            />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product price"
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
            />
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product image URL"
              value={image} 
                onChange={(e) => setImage(e.target.value)} 
            />
            
          </Form.Group>
        </Form>
        <Modal.Footer  style={{justifyContent:'center'}}>
        
        <Button  variant="primary" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Loading ...' : 'Edit'}
        </Button>
      </Modal.Footer>
        </>
        
        
    );
}

export default UpdateProductPage;
