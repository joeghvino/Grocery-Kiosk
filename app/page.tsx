"use client"

import { useState } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ShoppingList } from "@/components/shopping-list"
import { Search, ShoppingCart, Store } from "lucide-react"
import type { Product } from "@/types/product"
import  Searchbar  from "@/components/searchbar"

export default function GroceryShoppingApp() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

  const handleProductToggle = (product: Product) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== Number(productId)))
  }

  const handleClearList = () => {
    setSelectedProducts([])
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-balance">Smart Grocery List</h1>
                <p className="text-sm text-muted-foreground">Shop efficiently by aisle</p>
               
              </div>
            </div>
            <Searchbar />
            <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">{selectedProducts.length}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductGrid selectedProducts={selectedProducts} onProductToggle={handleProductToggle} />
          </div>
          <div className="lg:col-span-1">
            <ShoppingList
              products={selectedProducts}
              onRemoveProduct={handleRemoveProduct}
              onClearList={handleClearList}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
