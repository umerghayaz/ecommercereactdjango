import {React,useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap'
// import products from '../product'
import Product from '../components/Product'
import {useDispatch,useSelector} from 'react-redux'
import {ListProducts} from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
const Homescreen = () => {
  const dispatch=useDispatch()
  // var productList = undefined;
  useEffect(()=>{
    dispatch(ListProducts())
    // console.log('EE1',productList)
  },[dispatch])
  const productList=useSelector((state)=>state.productList)
  console.log('productList',productList)
  const {error,loading,products}=productList;

  // useEffect(()=>{
  //   console.log('EE',productList)
  // },[productList])
  

  
  return (
    <div>
      {loading ?<Loader/>:error?<Message variant='danger'>{error}</Message>:
      <Row>
      {products?.map(product=>(
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
         <Product product={product}/></Col>
       
      ))}
     


    </Row>}
      
    </div>
  );
}

export default Homescreen;
