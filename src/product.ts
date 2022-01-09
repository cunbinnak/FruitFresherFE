import { categories } from "./categories";

export class product{
    

    public productid!:number;
    public productname!:string;
    public price!:number;
    public description!:string;
    public createDate!: Date;
    public creator!:string;
    public urlImg!: string;
    public productStatus!:boolean;
    public categories !:string;
    public quantity!:number;
}