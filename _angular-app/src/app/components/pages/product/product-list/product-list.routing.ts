import {Routes} from "@angular/router";
import {ProductListComponent} from "./product-list.component";

export const ProductListRoutes: Routes = [
    {
        path: 'list',
        component: ProductListComponent
    },
];