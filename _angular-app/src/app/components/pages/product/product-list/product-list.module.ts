import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ProductListRoutes} from "./product-list.routing";
import {ProductListComponent} from "./product-list.component";
import {ProductNewModalComponent} from "../product-new-modal/product-new-modal.component";
import {ProductEditModalComponent} from "../product-edit-modal/product-edit-modal.component";
import {ProductDeleteModalComponent} from "../product-delete-modal/product-delete-modal.component";
import {ModalModule} from "../../../bootstrap/modal/modal.module";
import {NumberFormatBrPipe} from "../../../../pipes/number-format-br.pipe";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProductListRoutes),
        FormsModule,
        NgxPaginationModule,
        ModalModule
    ],
    declarations: [
        ProductListComponent,
        ProductNewModalComponent,
        ProductEditModalComponent,
        ProductDeleteModalComponent,
        NumberFormatBrPipe,]
})
export class ProductListModule {
}
