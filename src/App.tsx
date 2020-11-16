import React from 'react'
import './App.css'
import {Product, EmptyProduct} from './Product'
import {Results} from './Results'

const savedState = loadState()

function App() {
  const [products, setProducts] = React.useState(savedState)

  const onChangeGoodness = (idx: number) => {
    return (good: boolean) => {
      const next = [...products]
      next[idx] = {
        ...products[idx] ?? EmptyProduct,
        good
      }
      setProducts(next)
      saveState(next)
    }
  }

  const onChangeTitle = (idx: number) => {
    return (title: string) => {
      const next = [...products]
      next[idx] = {
        ...products[idx] ?? EmptyProduct,
        title
      }
      setProducts(next)
      saveState(next)
    }
  }

  const onChangeIngredients = (idx: number) => {
    return (ingredients: string) => {
      const next = [...products]
      next[idx] = {
        ...products[idx] ?? EmptyProduct,
        ingredients
      }
      setProducts(next)
      saveState(next)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">SusGoop</div>
        <span className="ColumnHeader">
          <span className="ColumnHeaderTitle">Good?</span>
        </span>
        <div className="Products">
          {products.map((p, i) => (
            <Product
              key={i}
              {...p}
              onChangeGoodness={onChangeGoodness(i)}
              onChangeTitle={onChangeTitle(i)}
              onChangeIngredients={onChangeIngredients(i)}
            />
          ))}
          <Product
            key={products.length}
            good={false}
            title={""}
            ingredients={""}
            onChangeGoodness={onChangeGoodness(products.length)}
            onChangeTitle={onChangeTitle(products.length)}
            onChangeIngredients={onChangeIngredients(products.length)}
          />
        </div>
        <Results products={products} />
      </header>
    </div>
  )
}

export default App

function saveState(state: Product[]) {
  localStorage.setItem('ingredients-state', JSON.stringify(state))
}

function loadState(): Product[] {
  const saved = localStorage.getItem('ingredients-state')
  return saved ? JSON.parse(saved) : []
}