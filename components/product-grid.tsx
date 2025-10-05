"use client"

import { products } from "@/lib/products"
import { ProductCard } from "./product-card"
import type { Product } from "@/types/product"
import { ca } from "date-fns/locale"


interface ProductGridProps {
  selectedProducts: Product[]
  onProductToggle: (product: Product) => void
  townFilter?: string        //new prop to filter by town

}


export function ProductGrid({ selectedProducts, onProductToggle, townFilter }: ProductGridProps) {
  // replace with: (skip filter if no townFilter)
 
const categories = Array.from(new Set(products.map((p) => p.category)))


  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-balance">Available Products</h2>
        <p className="text-muted-foreground leading-relaxed">Select items to add to your shopping list</p>
      </div>

      {categories.map((category) => {
        // Filter products by category AND by town if townFilter is provided
        const categoryProducts = products.filter((p) =>
          p.category === category &&
          (!townFilter || (p.store && Array.isArray(p.store) && p.store.includes(townFilter)))
        )
        
        // Skip rendering this category if no products match the filters
        if (categoryProducts.length === 0) return null
        
        const aisle = categoryProducts[0]?.aisle

        return (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                
              </div>
              <h3 className="text-xl font-semibold">{category}</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isSelected={selectedProducts.some((p) => p.id === product.id)}
                  onToggle={() => onProductToggle(product)}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
