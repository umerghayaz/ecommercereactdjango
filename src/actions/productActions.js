import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,

  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

import axios from "axios";
 export const  ListProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    // await axios.get("http://127.0.0.1:8000/prodWucts/").then((res)=>{
    //   console.log('GH',res.data)
    const { data } = await axios.get('http://127.0.0.1:8000/products/')
//     axios.get("http://127.0.0.1:8000/product/").then((res)=>{
// console.log('data',res.data )
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    // })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// export default listProducts;
 export const  ListProductDetails  = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    // await axios.get("http://127.0.0.1:8000/prodWucts/").then((res)=>{
    //   console.log('GH',res.data)
    const { data } = await axios.get(`http://127.0.0.1:8000/products/${id}`)
//     axios.get("http://127.0.0.1:8000/product/").then((res)=>{
// console.log('data',res.data )
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

    // })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export default listProducts ;
