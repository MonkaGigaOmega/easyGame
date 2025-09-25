export interface shopitem {
  id: number;
  isBought: boolean;
  price: number;
  power: number;
  description: string;
}

let sum = 0;
export const shopList: shopitem[] = Array(6)
  .fill(null)
  .map((_, index) => {
    sum += index + 1;
    return {
      id: index,
      isBought: false,
      price: sum * 100,
      power: index + 1,
      description: `Увеличивает урон на ${index + 1}`,
    };
  });
