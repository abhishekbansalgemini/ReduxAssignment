import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../AddProduct/AddProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../ProductReducer/ProductReducer';

function UpdateProduct() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const requireProduct = products.filter((product) => product.id == id);
  const [productName, setProductName] = useState(requireProduct[0].title);
  const [productDes, setProductDes] = useState(requireProduct[0].description);
  const [productPrice, setProductPrice] = useState(requireProduct[0].price);
  const [productImage, setProductImage] = useState(requireProduct[0].img);
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

  const productUpdate = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      dispatch(
        updateProduct({
          id: id,
          title: productName,
          description: productDes,
          price: productPrice,
          img:
            productImage !== requireProduct[0].img
              ? URL.createObjectURL(productImage)
              : productImage,
        })
      );
      navigate('/');
    }
  };

  return (
    <>
      <main>
        <form className="add-product-form">
          <h1>Update Product</h1>

          <div className="form-group">
            <label htmlFor="product-name">Product Name:</label>
            <input
              type="text"
              id="product-name"
              name="productName"
              value={productName}
              required
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
              value={productDes}
              rows="4"
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
              value={productPrice}
              step="0.01"
              onChange={handleInputChange}
              required
            />
            {errors.productPrice && <span className="error">{errors.productPrice}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-price">Product Image:</label>
            <input
              type="file"
              id="product-image"
              name="productImage"
              step="0.01"
              onChange={handleInputChange}
              required
            />
            {errors.productImage && <span className="error">{errors.productImage}</span>}
          </div>

          <div className="form-group">
            <input type="submit" value="Update Product" onClick={productUpdate} />
          </div>
        </form>
      </main>
    </>
  );
}

export default UpdateProduct;
