import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Product } from '../interface/product.intercace';

@Injectable()
export class ProductService {
     private products :Product[]=[{
        id:1,name:"mobile",price:200000},
        {id:2,name:"laptop",price:300000},
        {id:3,name:"tab",price:3500}
];
  getAllProducts(){
    return this.products;
  }
  getProductById(id:number){
    const value= this.products.find(pro=>pro.id===id);
    if(!value){ throw new NotAcceptableException("value not found")};
    return value;
  }
  //post 
  createProduct(product:{name:string;price:number}){
  const newProduct={
    id:this.products.length+1,
    name:product.name,
    price:product.price
  }
    this.products.push(newProduct)
    return newProduct

  }
  //put
  updateProduct(id:number,product:{name:string;price:number}){
    const index=this.products.findIndex(p=>p.id===id);
    if (index===-1){
      throw new NotAcceptableException("not found")
    }
    this.products[index]={
      id:id,
      name:product.name,
      price:product.price
    }
    return this.products[index]
  }
  //patch
  patchProduct(id:number,product:{name?:string;price?:number}){
    const exitProduct=this.products.find(p=>p.id===id)
    if(!exitProduct){
      throw new NotAcceptableException("not found")
    }
    if(product.name!==undefined){
      exitProduct.name=product.name
    }
    if(product.price!== undefined){
      exitProduct.price=product.price
    }
    return exitProduct;
    
  }
  deleteProduct(id:number){
    const index=this.products.findIndex(p=>p.id==id)
    if (index===-1){
      throw new NotAcceptableException("not")
    }
    const d=this.products.splice(index,1)
    return d
  }
}
 