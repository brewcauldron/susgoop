import React from 'react'
import {Product} from './Product'
import './Results.css'

export type Props = {
  products: Product[]
}

export function Results({products}: Props) {
  const goods: {[ingredient: string]: Product[]} = {}
  const bads: {[ingredient: string]: Product[]} = {}
  for (const product of products) {
    const ingredients = product.ingredients.split(',')
    for (const ingredientUnsanitized of ingredients) {
      const ingredient = ingredientUnsanitized.toLowerCase().trim()
      if (product.good) {
        const prev = goods[ingredient]
        if (prev) {
          prev.push(product)
        } else  {
          goods[ingredient] = [product]
        }
      } else {
        const prev = bads[ingredient]
        if (prev) {
          prev.push(product)
        } else  {
          bads[ingredient] = [product]
        }
      }
    }
  }

  const badIngredients: string[] = []
  for (const ingredient in bads) {
    if (!goods[ingredient]) {
      badIngredients.push(ingredient)
    }
  }

  return <>
    <div key="title" className="ResultsTitle">{badIngredients.length} Sus Ingredients:</div>
    {badIngredients.map(i => <div className="ResultsIngredient" key={i}>{i}</div>)}
  </>
}