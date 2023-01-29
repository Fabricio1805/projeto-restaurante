export interface IProduct{
  _id: string;
  name: string;
  price: number;
  description: string;
  imagePath: string;
  ingredients: {
    name: string;
    icon: string;
    _id: string;
  }[];
}
