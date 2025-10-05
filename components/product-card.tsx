"use client"

import type { Product } from "@/types/product"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  isSelected: boolean
  onToggle: () => void
}

export function ProductCard({ product, isSelected, onToggle }: ProductCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:shadow-lg relative overflow-hidden",
        isSelected && "ring-2 ring-primary shadow-lg",
      )}
      onClick={onToggle}
    >
      {isSelected && (
        <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground rounded-full p-1">
          <Check className="w-4 h-4" />
        </div>
      )}
      <CardContent className="p-4 space-y-3">
        <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-sm leading-tight text-balance">{product.name}</h4>
          <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm font-underline text-black" >Available at: {product.store.join(", ")}</p>
        </div>
      </CardContent>
    </Card>
  )
}
