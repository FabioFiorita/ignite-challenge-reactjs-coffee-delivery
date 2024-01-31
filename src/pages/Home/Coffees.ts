import { v4 } from 'uuid'

import americanoImg from '../../assets/americano.png'
import arabeImg from '../../assets/arabe.png'
import cafeGeladoImg from '../../assets/cafe-gelado.png'
import cafeLeiteImg from '../../assets/cafe-leite.png'
import cappuccinoImg from '../../assets/cappuccino.png'
import chocolateQuenteImg from '../../assets/chocolate-quente.png'
import cubanoImg from '../../assets/cubano.png'
import expressoCremosoImg from '../../assets/expresso-cremoso.png'
import expressoImg from '../../assets/expresso.png'
import havaianoImg from '../../assets/havaiano.png'
import irlandesImg from '../../assets/irlandes.png'
import latteImg from '../../assets/latte.png'
import macchiatoImg from '../../assets/macchiato.png'
import mochaccinoImg from '../../assets/mochaccino.png'

export interface Tag {
  id: string
  title: string
}

export interface Coffe {
  image: string
  title: string
  description: string
  price: number
  tags: Tag[]
}

const expresso: Coffe = {
  title: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  image: expressoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
  ],
}

const americano: Coffe = {
  title: 'Expresso Americano',
  description: 'Expresso diluído, menos intenso que o tradicional',
  image: americanoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
  ],
}

const cremoso: Coffe = {
  title: 'Expresso Cremoso',
  description: 'Café expresso tradicional com espuma cremosa',
  image: expressoCremosoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
  ],
}

const gelado: Coffe = {
  title: 'Expresso Gelado',
  description: 'Bebida preparada com café expresso e cubos de gelo',
  image: cafeGeladoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
    {
      id: v4(),
      title: 'gelado',
    },
  ],
}

const cafeLeite: Coffe = {
  title: 'Café com Leite',
  description: 'Meio a meio de expresso tradicional com leite vaporizado',
  image: cafeLeiteImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
    {
      id: v4(),
      title: 'com leite',
    },
  ],
}

const latte: Coffe = {
  title: 'Latte',
  description:
    'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  image: latteImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
    {
      id: v4(),
      title: 'com leite',
    },
  ],
}

const cappuccino: Coffe = {
  title: 'Capuccino',
  description:
    'Bebida com canela feita de doses iguais de café, leite e espuma',
  image: cappuccinoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
    {
      id: v4(),
      title: 'com leite',
    },
  ],
}

const macchiato: Coffe = {
  title: 'Macchiato',
  description: 'Café expresso misturado com um pouco de leite quente e espuma',
  image: macchiatoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
    {
      id: v4(),
      title: 'com leite',
    },
  ],
}

const mochaccino: Coffe = {
  title: 'Mocaccino',
  description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  image: mochaccinoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'Tradicional',
    },
    {
      id: v4(),
      title: 'com leite',
    },
  ],
}

const chocolateQuente: Coffe = {
  title: 'Chocolate Quente',
  description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  image: chocolateQuenteImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'especial',
    },
    {
      id: v4(),
      title: 'com leite',
    },
  ],
}

const cubano: Coffe = {
  title: 'Cubano',
  description:
    'Drink gelado de café expresso com rum, creme de leite e hortelã',
  image: cubanoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'especial',
    },
    {
      id: v4(),
      title: 'alcoólico',
    },
    {
      id: v4(),
      title: 'gelado',
    },
  ],
}

const havaiano: Coffe = {
  title: 'Havaiano',
  description: 'Bebida adocicada preparada com café e leite de coco',
  image: havaianoImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'especial',
    },
  ],
}

const arabe: Coffe = {
  title: 'Árabe',
  description: 'Bebida preparada com grãos de café árabe e especiarias',
  image: arabeImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'especial',
    },
  ],
}

const irlandes: Coffe = {
  title: 'Irlandês',
  description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  image: irlandesImg,
  price: 9.9,
  tags: [
    {
      id: v4(),
      title: 'especial',
    },
    {
      id: v4(),
      title: 'alcoólico',
    },
  ],
}

export const coffes: Coffe[] = [
  expresso,
  americano,
  cremoso,
  gelado,
  cafeLeite,
  latte,
  cappuccino,
  macchiato,
  mochaccino,
  chocolateQuente,
  cubano,
  havaiano,
  arabe,
  irlandes,
]
