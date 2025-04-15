export class Product {
  constructor(
    public id: number,
    public productName: string,
    public price: number,
    public quantity: number = 1
  ) {}
}
