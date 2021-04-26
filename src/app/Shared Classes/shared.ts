

export interface IProduct
 {
    ID:number,
    Name:string,    
    Quantity :number,
    Price:number,
    Img:string,
    discont:DiscountOffers
 }
 export interface ICategory
 {
    ID:number,
    Name:string
 }

 export enum DiscountOffers
 {
    NoDiscount=0,
    firstDiscount=10,
    secondDiscount=15
 }