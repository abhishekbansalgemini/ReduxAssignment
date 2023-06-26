import React, { useState } from 'react';
import './AddProduct.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../ProductReducer/ProductReducer';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDes, setProductDes] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!productName.trim()) {
      newErrors.productName = 'Product name is required';
    }

    if (!productDes.trim()) {
      newErrors.productDes = 'Product description is required';
    }

    if (productPrice <= 0) {
      newErrors.productPrice = 'Product price must be greater than 0';
    }

    if (!productImage) {
      newErrors.productImage = 'Product image is required';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: '',
    }));

    if (e.target.name === 'productName') {
      setProductName(e.target.value);
    } else if (e.target.name === 'productDes') {
      setProductDes(e.target.value);
    } else if (e.target.name === 'productPrice') {
      setProductPrice(e.target.value);
    } else if (e.target.name === 'productImage') {
      setProductImage(e.target.files[0]);
    }
  };

  const productAdd = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(
        addProduct({
          id: Date.now() + Math.random(),
          title: productName,
          description: productDes,
          price: productPrice,
          img: productImage === null ? '' : URL.createObjectURL(productImage),
        })
      );
      navigate('/');
    }
  };

  return (
    <>
      <main>
        <form className="add-product-form">
          <h1>Add Product</h1>

          <div className="form-group">
            <label htmlFor="product-name">Product Name:</label>
            <input
              type="text"
              id="product-name"
              name="productName"
              required
              value={productName}
              onChange={handleInputChange}
              autoFocus
            />
            {errors.productName && <span className="error">{errors.productName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-description">Product Description:</label>
            <textarea
              id="product-description"
              name="productDes"
              rows="4"
              value={productDes}
              onChange={handleInputChange}
              required
            ></textarea>
            {errors.productDes && <span className="error">{errors.productDes}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-price">Product Price:</label>
            <input
              type="number"
              id="product-price"
              name="productPrice"
              step="0.01"
              value={productPrice}
              onChange={handleInputChange}
              required
            />
            {errors.productPrice && <span className="error">{errors.productPrice}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-image">Product Image:</label>
            <input
              type="file"
              id="product-image"
              name="productImage"
              step="0.01"
              onChange={handleInputChange}
              required
            /> <br />
            {errors.productImage && <span className="error">{errors.productImage}</span>}
          </div>

          <div className="form-group">
            <input type="submit" value="Add Product" onClick={productAdd} />
          </div>
        </form>
      </main>
    </>
  );
}

export default AddProduct;
