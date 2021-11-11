import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('more12345'),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: 'Hot Chilli',
      slug: 'hot-chilli',
      image: '/images/hotChilliMeat',
      price: 1500,
      description:
        'Spicy sauce, chili pepper, mozzarella, sweet chili sauce, tomato sauce',
      category: 'pizza',
      rating: 4,
    },
    {
      name: 'Super Supreme',
      slug: 'super-supreme',
      image: '/images/superSupreme.png',
      price: 2000,
      description:
        'Spicy sauce, mushrooms, bell peppers, olives, red onions, mozzarella, tomato sauce',
      category: 'pizza',
      rating: 4.5,
    },
    {
      name: 'BBQ Chicken',
      slug: 'bbq-chicken',
      image: '/images/bbqChicken.png',
      price: 2000,
      description:
        'Chicken, red onions, corn, mozzarella, bbq sauce, tomato sauce, bbq sauce',
      category: 'pizza',
      rating: 3,
    },
    {
      name: 'Hot Pepperoni',
      slug: 'hot-pepperoni',
      image: '/images/hotPepperoni.png',
      price: 2000,
      description:
        'Pepperoni, mozzarella, tomato sauce, spicy sauce, chili pepper',
      category: 'pizza',
      rating: 4,
    },
    {
      name: 'Hot Chicken Supreme',
      slug: 'hot-chicken-supreme',
      image: '/images/chickenSupreme.png',
      price: 2000,
      description:
        'Spicy sauce, chicken and spicy chicken, mushrooms, bell peppers, olives, red onions, mozzarella, tomato sauce',
      category: 'pizza',
      rating: 5,
    },
    {
      name: 'Hot BBQ Beef',
      slug: 'hot-bbq-beef',
      image: '/images/bbqBeef.png',
      price: 2000,
      description:
        'Mayonnaise, spicy sauce, spicy meatballs, bell peppers, red onions, mozzarella, suya sauce, tomato sauce, suya spice',
      category: 'pizza',
      rating: 4,
    },
  ],
}

export default data
