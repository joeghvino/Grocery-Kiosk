import type { Product } from "@/types/product"

export const products: Product[] = 
     //transform the product.json data to this product.ts file format
     [
    {
        
        id: 1,
        name: "Bowl & Basket Fresh White Eggs, Large, 18 count, 36 oz",
        price: 4.29,
        aisle: "A1",
        image: "https://images.cdn.shoprite.com/detail/00041190467556_1",
        category: "Animal product",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
    {
        
        id: 2,
        name: "Oscar Mayer Original Naturally Hardwood Smoked Bacon, 16 oz",
        price: 6.99,
        aisle: "A2",
        image: "https://images.cdn.shoprite.com/detail/00044700019887_1",
        category: "Animal product",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
    {
        
        id: 3,
        name: "Bowl & Basket Whole Milk, one gallon",
        price: 4.59,
        aisle: "A3",
        image: "https://images.cdn.shoprite.com/detail/00041190467150_1",
        category: "Dairy",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
    {
        
        id: 4,
        name: "Chobani Mixed Berry on the Bottom Vanilla Greek Yogurt Value Pack, 5.3 oz, 4 count",
        price: 4.99,
        aisle: "A4",
        image: "https://images.cdn.shoprite.com/detail/00818290016263_1",
        category: "Dairy",
        store: [ "Metuchen", "Edison" ]
    },
    {
        
        id: 5,
        name: "Bowl & Basket White Sandwich Sliced Bread, 20 oz",
        price: 1.49,
        aisle: "A5",
        image: "https://images.cdn.shoprite.com/detail/00041190576586_1",
        category: "Bakery",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
    {
        
        id: 6,
        name: "TURKEY HILL Chocolate Chip Cookie Dough Premium Ice Cream, 1.44 qt",
        price: 4.99,
        aisle: "B1",
        image: "https://images.cdn.shoprite.com/detail/00020735161258_1",
        category: "Frozen",
        store: [ "New Brunswick" ]
    },
    {
        
        id: 7,
        name: "Freschetta Four Cheese Pizza, 26.11 oz",
        price: 3.99,
        aisle: "B2",
        image: "https://images.cdn.shoprite.com/detail/00072180639837_1",
        category: "Frozen",
        store: [ "Edison" ]
    },
    {
        
        id: 8,
        name: "Popsicle Tropicals Ice Pops, 18 count, 29.7 fl oz",
        price: 6.79,
        aisle: "B3",
        image: "https://images.cdn.shoprite.com/detail/00077567001214_596",
        category: "Frozen",
        store: [ "New Brunswick", "Metuchen" ]
    },
    {
        
        id: 9,
        name: "Kevin's Natural Foods Beef Bolognese Frozen Bowls, 9.5 oz",
        price: 4.99,
        aisle: "B4",
        image: "https://images.cdn.shoprite.com/cell/00810264027459_1",
        category: "Frozen",
        store: [ "Metuchen" ]
    },
    {
        
        id: 10,
        name: "Simply Potatoes Signature Seasoned Diced Potatoes, 20 oz",
        price: 3.99,
        aisle: "B5",
        image: "https://images.cdn.shoprite.com/detail/00020169222099_1",
        category: "Frozen",
        store: [ "New Brunswick", "Edison" ]
    },
    {
        
        id: 11,
        name: "Fresh Cantaloupe Melon Slices",
        price: 1.99,
        aisle: "C1",
        image: "https://images.cdn.shoprite.com/detail/00209750000005_1",
        category: "Produce",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
    {
        
        id: 12,
        name: "Heavenly Sweet Bites Diced Red Onion, 7 oz",
        price: 2.99,
        aisle: "C2",
        image: "https://assets.wakefern.com/is/image/wakefern/88194580035-001?$Mi9Product_detail$",
        category: "Produce",
        store: [ "New Brunswick" ]
    },
    {
        
        id: 13,
        name: "Sunnyside Fresh Celery & Carrot Sticks, 8 oz",
        price: 3.99,
        aisle: "C3",
        image: "https://assets.wakefern.com/is/image/wakefern/81003518329-001?$Mi9Product_detail$",
        category: "Produce",
        store: [ "Edison" ]
    },
    {
        
        id: 14,
        name: "Bowl & Basket Sliced Sweet Red Apples, Cheese & Pretzel Snackers, 4.75 oz",
        price: 3.99,
        aisle: "C4",
        image: "https://images.cdn.shoprite.com/detail/00041190071951_597",
        category: "Produce",
        store: [ "New Brunswick", "Metuchen"]
    },
    {
        
        id: 15,
        name: "Taylor Farms Ginger Garlic Veggies and Sauce Stir Fry Kit, 14 oz",
        price: 4.49,
        aisle: "C5",
        image: "https://images.cdn.shoprite.com/detail/00030223041252_1",
        category: "Produce",
        store: [ "Metuchen", "Edison" ]
    },
    {
        
        id: 16,
        name: "USDA Choice Beef Loin New York Strip Steak, Bone In, Average Weight 2 lb Pack",
        price: 17.98,
        aisle: "D1",
        image: "https://images.cdn.shoprite.com/detail/00200131000003_322",
        category: "Animal product",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
    {
        
        id: 17,
        name: "Laura's Lean Beef 96% Lean 4% Fat Ground Beef, 16 oz",
        price: 9.29,
        aisle: "D2",
        image: "https://images.cdn.shoprite.com/detail/00612669317063_1",
        category: "Animal product",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
     {
        
        id: 18,
        name: "Bowl & Basket Boneless Skinless Fresh Chicken Breasts with Rib Meat Value Size",
        price: 9.06,
        aisle: "D3",
        image: "https://assets.wakefern.com/is/image/wakefern/25161500000-001?$Mi9Product_detail$",
        category: "Animal product",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
     {
        
        id: 19,
        name: "Bowl & Basket 93% Fat Free Ground Turkey, 20.8 oz",
        price: 4.49,
        aisle: "D4",
        image: "https://images.cdn.shoprite.com/detail/00041190413157_1",
        category: "Animal product",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    },
     {
        
        id: 20,
        name: "Fresh Pork Loin Baby Back Rib, Bone In, Average Weight 2.75 lb Pack",
        price: 12.35,
        aisle: "D5",
        image: "https://assets.wakefern.com/is/image/wakefern/20114400000-001?$Mi9Product_detail$",
        category: "Animal product",
        store: [ "New Brunswick", "Metuchen", "Edison" ]
    }
]
      
      
  


