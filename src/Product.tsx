import React from 'react'
import './Product.css'

export type Product = {good: boolean, title: string, ingredients: string}

export type Props = Product & {
  onChangeGoodness: (goodness: boolean) => void
  onChangeTitle: (title: string) => void
  onChangeIngredients: (ingredients: string) => void
}

// eslint-disable-next-line
export function Product({onChangeGoodness, onChangeTitle, onChangeIngredients, good, title, ingredients}: Props) {
  return (
    <div key="Product" className="row padding">
      <input key="Good" className="margin" type={"checkbox"} checked={good} onChange={e => onChangeGoodness(!good)} />
      <input key="Name" className="right-margin subtitle" value={title} onChange={e => onChangeTitle(e.target.value)} autoFocus={false} placeholder={"Product name"} />
      <input key="Ingredients" className="grow body" value={ingredients} onChange={e => onChangeIngredients(e.target.value)} autoFocus={false} placeholder={"Enter the ingredients separated by commas"} />
    </div>
  )
}

export const EmptyProduct: Product = {
  good: false,
  title: '',
  ingredients: ''
}
