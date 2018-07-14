import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductCategoryListComponent} from "./product-category-list.component";
import {ProductCategoryListRoutes} from "./product-category-list.routing";
import {FormsModule} from "@angular/forms";
import {ProductCategoryNewComponent} from "../product-category-new/product-category-new.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProductCategoryListRoutes),
        FormsModule
    ],
    declarations: [
        ProductCategoryListComponent,
        ProductCategoryNewComponent
    ]
})
export class ProductCategoryListModule {
}
