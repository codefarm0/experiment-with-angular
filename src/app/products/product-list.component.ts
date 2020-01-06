import { Component } from '@angular/core';

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
    pageTitle: string = "Product List";
    products: any[] = [
        {
            "productId":1
        },
        {
            "productId":11
        },
        {
            "productId":12
        }
    ]
}