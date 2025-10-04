"use client"

import type { Product } from "@/types/product"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, X, ShoppingBag } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ShoppingListProps {
  products: Product[]
  onRemoveProduct: (productId: string) => void
  onClearList: () => void
}

export function ShoppingList({ products, onRemoveProduct, onClearList }: ShoppingListProps) {
  const sortedProducts = [...products].sort((a, b) => a.aisle - b.aisle)
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0)

  const groupedByAisle = sortedProducts.reduce(
    (acc, product) => {
      if (!acc[product.aisle]) {
        acc[product.aisle] = []
      }
      acc[product.aisle].push(product)
      return acc
    },
    {} as Record<number, Product[]>,
  )

  return (
    <Card className="sticky top-24 shadow-lg">
      <CardHeader className="border-b border-border">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Shopping List
          </CardTitle>
          {products.length > 0 && (
            <Button variant="ghost" size="sm" onClick={onClearList} className="text-destructive hover:text-destructive">
              <Trash2 className="w-4 h-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {products.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm leading-relaxed">
              No items selected yet.
              <br />
              Start adding products!
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[400px]">
              <div className="p-4 space-y-4">
                {Object.entries(groupedByAisle).map(([aisle, aisleProducts]) => (
                  <div key={aisle} className="space-y-2">
                    <div className="flex items-center gap-2 sticky top-0 bg-background py-1">
                      <div className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
                        Aisle {aisle}
                      </div>
                      <div className="h-px bg-border flex-1" />
                    </div>
                    <div className="space-y-2">
                      {aisleProducts.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 p-2 rounded-lg bg-card hover:bg-muted/50 transition-colors group"
                        >
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-12 h-12 rounded object-cover bg-secondary"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.category}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm">${product.price.toFixed(2)}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => onRemoveProduct(product.id)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t border-border p-4 bg-muted/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Items:</span>
                <span className="font-semibold">{products.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Total Price:</span>
                <span className="text-xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
