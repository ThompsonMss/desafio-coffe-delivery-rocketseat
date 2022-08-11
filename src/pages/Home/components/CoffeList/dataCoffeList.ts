import imageCoffeExpresso from '@/assets/images/expresso.svg'
import imageCoffeAmericano from '@/assets/images/americano.svg'
import imageCoffeExpressoCremoso from '@/assets/images/expressoCremoso.svg'
import imageCoffeCafeGelado from '@/assets/images/cafeGelado.svg'
import imageCoffeCafeComLeite from '@/assets/images/cafeComLeite.svg'
import imageCoffeLatte from '@/assets/images/latte.svg'
import imageCoffeCapuccino from '@/assets/images/capuccino.svg'
import imageCoffeMacchiato from '@/assets/images/macchiato.svg'
import imageCoffeMochaccino from '@/assets/images/mochaccino.svg'
import imageCoffeChocolateQuente from '@/assets/images/chocolateQuente.svg'
import imageCoffeCubano from '@/assets/images/cubano.svg'
import imageCoffeHavaiano from '@/assets/images/havaiano.svg'
import imageCoffeArabe from '@/assets/images/arabe.svg'
import imageCoffeIrlandes from '@/assets/images/irlandes.svg'

interface ITypeOfCoffe {
  id: number;
  name: string;
}

export interface ICoffe {
  id: number;
  image: string;
  typeOfCoffe: ITypeOfCoffe[]
  name: string;
  desc: string;
  value: number;
  amount: number;
}

export const dataCoffes: ICoffe[] = [
  {
    id: 1,
    image: imageCoffeExpresso,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }],
    name: 'Expresso Tradicional',
    desc: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.90,
    amount: 1
  },
  {
    id: 2,
    image: imageCoffeAmericano,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }],
    name: 'Expresso Americano',
    desc: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.90,
    amount: 1
  },
  {
    id: 3,
    image: imageCoffeExpressoCremoso,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }],
    name: 'Expresso Cremoso',
    desc: 'Café expresso tradicional com espuma cremosa',
    value: 9.90,
    amount: 1
  },
  {
    id: 4,
    image: imageCoffeCafeGelado,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }, { id: 2, name: 'Gelado' }],
    name: 'Expresso Gelado',
    desc: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.90,
    amount: 1
  },
  {
    id: 5,
    image: imageCoffeCafeComLeite,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }, { id: 3, name: 'Com leite' }],
    name: 'Café com Leite',
    desc: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.90,
    amount: 1
  },
  {
    id: 6,
    image: imageCoffeLatte,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }, { id: 3, name: 'Com leite' }],
    name: 'Latte',
    desc: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.90,
    amount: 1
  },
  {
    id: 7,
    image: imageCoffeCapuccino,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }, { id: 3, name: 'Com leite' }],
    name: 'Capuccino',
    desc: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.90,
    amount: 1
  },
  {
    id: 8,
    image: imageCoffeMacchiato,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }, { id: 3, name: 'Com leite' }],
    name: 'Macchiato',
    desc: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.90,
    amount: 1
  },
  {
    id: 9,
    image: imageCoffeMochaccino,
    typeOfCoffe: [{ id: 1, name: 'Tradicional' }, { id: 3, name: 'Com leite' }],
    name: 'Mocaccino',
    desc: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.90,
    amount: 1
  },
  {
    id: 10,
    image: imageCoffeChocolateQuente,
    typeOfCoffe: [{ id: 4, name: 'Especial' }, { id: 3, name: 'Com leite' }],
    name: 'Chocolate Quente',
    desc: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.90,
    amount: 1
  },
  {
    id: 11,
    image: imageCoffeCubano,
    typeOfCoffe: [{ id: 4, name: 'Especial' }, { id: 5, name: 'Alcoólico' }, { id: 6, name: 'Gelado' }],
    name: 'Cubano',
    desc: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.90,
    amount: 1
  },
  {
    id: 12,
    image: imageCoffeHavaiano,
    typeOfCoffe: [{ id: 4, name: 'Especial' }],
    name: 'Havaiano',
    desc: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.90,
    amount: 1
  },
  {
    id: 13,
    image: imageCoffeArabe,
    typeOfCoffe: [{ id: 4, name: 'Especial' }],
    name: 'Árabe',
    desc: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.90,
    amount: 1
  },
  {
    id: 14,
    image: imageCoffeIrlandes,
    typeOfCoffe: [{ id: 4, name: 'Especial' }, { id: 5, name: 'Alcoólico' }],
    name: 'Irlandês',
    desc: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.90,
    amount: 1
  }
]