import { useState,useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
let AppFunction = ()=>{
  let [products,setProducts]= useState([])
  useEffect(()=>{
    /*fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))*/
      axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        setProducts(res.data)
      .catch((error)=>{
        console.log(error)
      })
      })
  },[])
return(
  <>
  <header>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <Nav.Link href="#action2">Contact us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  <Container>
    <h1>Products List</h1>
    <Row>
      {products.map((product,index)=>{
        return(
          <Col xs={3}>
          <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.Title}</Card.Title>
            <Card.Text>
              ${product.price}
            </Card.Text>
            <a href={`product-details/${product.id}`}>
                        <Button variant="primary" onClick={()=>setcount(count+1)}>View Product</Button></a>
          </Card.Body>
        </Card>      
          </Col>
        )
      })}
      
    </Row> 
  </Container>
  </>
)
}
export default AppFunction