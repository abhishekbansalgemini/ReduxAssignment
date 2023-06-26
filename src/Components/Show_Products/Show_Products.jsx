import React from 'react'
import './Show_Products.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../ProductReducer/ProductReducer';
import { Link } from 'react-router-dom';

function Show_Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const productDelete = (id) => {
    dispatch(deleteProduct({
      id: id
    }))
  }

  return (
    <main>
      <section className="products">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.img} alt="Product 1" className="product-image" />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{"$" + product.price}</p>
            <div className="product-actions">
              <Link to={`/updateproduct/${product.id}`} className="btn btn-update">Update</Link>
              <button className="btn-delete btn btn-danger" onClick={() => productDelete(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Show_Products;
