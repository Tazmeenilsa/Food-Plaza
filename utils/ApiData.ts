export const ApiData = {
    categories: [
        {
            id: 1,
            name: "Pizza",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
        },
        {
            id: 2,
            name: "Burgers",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
        },
        {
            id: 3,
            name: "Drinks",
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500"
        },
        {
            id: 4,
            name: 'Desserts',
            image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=500'
        }
    ],
    foods: [
        // Pizzas
        {
            id: 101,
            name: "Margherita Pizza",
            categoryId: 1,
            price: 8.99,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=869",
            description: "Classic delight with mozzarella cheese and tomato sauce"
        },
        {
            id: 102,
            name: "Pepperoni Pizza",
            categoryId: 1,
            price: 10.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=869",
            description: "Loaded with pepperoni & cheese"
        },
        {
            id: 103,
            name: "Veggie Supreme",
            categoryId: 1,
            price: 11.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=387",
            description: "Loaded with fresh vegetables and cheese"
        },
        {
            id: 104,
            name: "BBQ Chicken",
            categoryId: 1,
            price: 12.99,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400",
            description: "Grilled chicken with BBQ sauce and red onions"
        },
        {
            id: 105,
            name: "Hawaiian",
            categoryId: 1,
            price: 11.49,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400",
            description: "Ham and pineapple with mozzarella"
        },

        // Burgers
        {
            id: 201,
            name: "Cheese Burger",
            categoryId: 2,
            price: 6.49,
            rating: 4.3,
            image: "https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?q=80&w=870",
            description: "Grilled beef patty with cheese and fresh veggies"
        },
        {
            id: 202,
            name: "Chicken Burger",
            categoryId: 2,
            price: 7.29,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?q=80&w=812",
            description: "Crispy chicken breast with mayo and lettuce"
        },
        {
            id: 203,
            name: "Bacon Cheeseburger",
            categoryId: 2,
            price: 8.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1673006768363-e09be1444330?q=80&w=465",
            description: "Classic cheeseburger with crispy bacon"
        },
        {
            id: 204,
            name: "Veggie Burger",
            categoryId: 2,
            price: 7.99,
            rating: 4.5,
            image: "https://plus.unsplash.com/premium_photo-1672363353886-a106864f5cb9?q=80&w=387",
            description: "Plant-based patty with fresh vegetables"
        },
        {
            id: 205,
            name: "Mushroom Swiss",
            categoryId: 2,
            price: 9.49,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1683882330182-eb8f64d7231c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzaHJvb20lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D",
            description: "Beef patty with sautéed mushrooms and Swiss cheese"
        },

        // Drinks
        {
            id: 301,
            name: "Coca Cola",
            categoryId: 3,
            price: 1.99,
            rating: 4.0,
            image: "https://plus.unsplash.com/premium_photo-1725075086631-b21a5642918b?q=80&w=387",
            description: "Refreshing cold drink"
        },
        {
            id: 302,
            name: "Orange Juice",
            categoryId: 3,
            price: 2.49,
            rating: 4.1,
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=387",
            description: "Freshly squeezed orange juice"
        },
        {
            id: 303,
            name: "Iced Tea",
            categoryId: 3,
            price: 1.99,
            rating: 4.2,
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Refreshing iced tea with lemon"
        },
        {
            id: 304,
            name: "Strawberry Milkshake",
            categoryId: 3,
            price: 3.99,
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1669277038674-9d00b4ff41fa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Creamy milkshake with fresh strawberries"
        },
        {
            id: 305,
            name: "Mineral Water",
            categoryId: 3,
            price: 1.49,
            rating: 4.0,
            image: "https://images.unsplash.com/photo-1567331711402-509c12c41959?q=80&w=400",
            description: "Natural mineral water, 500ml"
        },

        // Desserts
        {
            id: 401,
            name: "Chocolate Brownie",
            categoryId: 4,
            price: 4.99,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=400",
            description: "Warm chocolate brownie with vanilla ice cream"
        },
        {
            id: 402,
            name: "Cheesecake",
            categoryId: 4,
            price: 5.49,
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=400",
            description: "New York style cheesecake with berry compote"
        },
        {
            id: 403,
            name: "Tiramisu",
            categoryId: 4,
            price: 5.99,
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Classic Italian dessert with coffee and mascarpone"
        },
        {
            id: 404,
            name: "Ice Cream Sundae",
            categoryId: 4,
            price: 4.99,
            rating: 4.5,
            image: "https://plus.unsplash.com/premium_photo-1664392060458-fb1908b79323?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Vanilla ice cream with chocolate sauce and sprinkles"
        }
    ]
}
