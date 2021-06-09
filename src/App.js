import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductAPI from './api/productAPI'
import CategoryAPI from './api/categoryAPI'
import Routers from './Routers'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // call API
    const getProducts = async () => {
      try {
        const { data: products } = await ProductAPI.getAll();
        setProducts(products)
        // console.log(products)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts();
  }, [])
  //
  useEffect(() => {
    // call API
    const getCategories = async () => {
      try {
        const { data: categories } = await CategoryAPI.getAll();
        setCategories(categories)
        // console.log(categories)
      } catch (error) {
        console.log(error)
      }
    }
    getCategories();
  }, [])
  //add product
  const addProduct = async (id, product) => {
    try {
      await ProductAPI.add(id, product)
    } catch (error) {
      console.log(error)
    }
    setProducts([
      ...products,
      product
    ])
  }
  //edit
  const updateProductt = async (id, product) => {
    try {
      const { data } = await ProductAPI.update(id, product)
      const newProduct = products.map(value => value._id == id ? data : value)
      setProducts(newProduct)
    } catch (error) {
      console.log(error)
    }
  }
  // delete
  const deleteProduct = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProducts = products.filter(value => value._id !== id);
      setProducts(newProducts)
    } catch (error) {
      console.log(error)
    }
  }
  //add cate
  const addCate = async (id,cate) => {
    try {
      await CategoryAPI.add(id,cate)
    } catch (error) {
      console.log(error)
    }
    setCategories([
      ...categories,
      cate
    ])
  }
  //edit
  const updateCate = async (id, category) => {
    try {
      const { data } = await CategoryAPI.update(id, category)
      const newCate = categories.map(value => value._id == id ? data : value)
      setCategories(newCate)
    } catch (error) {
      console.log(error)
    }
  }
  // delete
  const deleteCate = async (id) => {
    try {
      await CategoryAPI.remove(id);
      const newCate = categories.filter(value => value._id !== id);
      setCategories(newCate)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <Routers products={products} onAdd={addProduct} onUpdate={updateProductt} onDelete={deleteProduct}
        categories={categories} onCateAdd={addCate} onCateUpdate={updateCate} onCateDelete={deleteCate} />
    </div>
  )
}

export default App;
