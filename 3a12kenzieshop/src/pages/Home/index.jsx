import React, { useEffect, useState } from "react";
import formatValue from "../../utils/formatValue";
import { CircularProgress } from "@mui/material";
import { Container, ProductList } from "./styles";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { toast } from 'react-hot-toast'
import Header from '../../components/Header'
import { motion } from "framer-motion";

function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    
  async function loadProducts() {
    const response = await api.get("/products/");

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));

    setLoading(false);
    setProducts(data);
  }
  useEffect(() => {
    loadProducts();
  }, []);

  const addCart = (product) => {
    dispatch(addToCartThunk(product))
    toast.success(`Produto adicionado!`)
  }
  return (

    <motion.div
        className="form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      
    <Header />
    <Container>
      {loading ? (
          <div className='loading'>
                <CircularProgress size={50} />
          </div>
      ) : (
        <ProductList>
        
          {products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <strong>{product.title}</strong>
              <div>
                <span>{product.priceFormatted}</span>
                <button
                  type="button"
                  onClick={() => addCart(product)}
                >
                  <span>Adicionar ao carrinho</span>
                </button>
              </div>
            </li>
          ))}
        </ProductList>
      )}
    </Container>
    </motion.div>
  );
}
export default Home;
