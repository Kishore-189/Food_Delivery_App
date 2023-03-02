
import img1 from './img/a2b1.jpg';
import img4 from './img/bheemans.jpg';
import img3 from './img/dimora.jpg';
import img6 from './img/fathima.jpg';
import img5 from './img/gowrikrishna.jpg';
import img2 from './img/sarabavan.jpg'

const Pizzadata = [
  {
    name: "Adyar Anandha Bavan",
    varients: ["Veg", "Non-Veg", "Egg"],
    prices: [
      {
        Veg: 200,
        "Non-Veg": 400,
        Egg: 300,
      },
    ],
    category: "Veg and Nonveg",
    image: img1,
    description: "We contains both veg and non veg",
  },
  {
    name: "Saravana Bavan Hotel",
    varients: ["Main-Course", "Starters", "Desserts"],
    prices: [
      {
        "Main-Course": 400,
        Starters: 300,
        Desserts: 250,
      },
    ],
    category: "Veg",
    image: img2,
    description: "We contains Veg only",
  },
  {
    name: "Dimora Restaurant",
    varients: ["Chicken", "Mutton", "Fish"],
    prices: [
      {
        Chicken: 200,
        Mutton: 400,
        Fish: 300,
      },
    ],
    category: "nonveg",
    image: img3,
    description: "We contains non veg only",
  },
  {
    name: "Bheeman's Restaurant",
    varients: ["Veg", "Non-Veg", "Egg"],
    prices: [
      {
        Veg: 250,
        "Non-Veg": 500,
        Egg: 300,
      },
    ],
    category: "Veg and Nonveg",
    image: img4,
    description: "We contains both veg and non veg",
  },
  {
    name: "Gowri Krishna Restaurant",
    varients: ["Main-Course", "Starters", "Desserts"],
    prices: [
      {
        "Main-Course": 300,
        Starters: 200,
        Desserts: 150,
      },
    ],
    category: "Veg",
    image: img5,
    description: "We contains Veg only",
  },
  {
    name: "Fathima Restaurant",
    varients: ["Chicken", "Mutton", "Fish"],
    prices: [
      {
        Chicken: 300,
        Mutton: 400,
        Fish: 350,
      },
    ],
    category: "nonveg",
    image: img6,
    description: "We contains non veg only",
  },
];

export default Pizzadata;
