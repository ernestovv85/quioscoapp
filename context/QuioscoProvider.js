import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const QuioscoContext = createContext()

export const QuioscoProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [currentCategory, setCurrentCategory] = useState({})
  const [product, setProduct] = useState({})
  const [modal, setModal] = useState(false)
  const getCategories = async () => {
    const { data } = await axios('/api/categories')
    setCategories(data)
  }
  useEffect(() => {
    getCategories()
  }, [])

  const handleCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id)
    setCurrentCategory(category[0])
  }

  const handleSetProduct = (product) => {
    setProduct(product)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  return (
    <QuioscoContext.Provider
      value={{
        categories,
        currentCategory,
        handleCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
