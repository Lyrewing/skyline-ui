export class Book{
    Id:Number
    Name:string
    Author:string
    Summary:string
    Cover:string
    BookCategory?:Category
}
export enum Category{
    Article,
    Story,
    Document,
    TV
}