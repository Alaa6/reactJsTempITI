import '../style/header.css' ;
import {context} from '../App'
import {useContext} from 'react'
const { Link } = require("react-router-dom");





function Product() {
  let contextValue = useContext(context)

  return (
    <div>   
       {contextValue}
    </div>

  );
}

export default Product;
