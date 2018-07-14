import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from "./category-list.component";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
import {CategoryListRoutes} from "./category-list.routing";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {FormsModule} from "@angular/forms";
import {ModalModule} from "../../../bootstrap/modal/modal.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CategoryListRoutes),
        FormsModule,
        NgxPaginationModule,
        ModalModule,
    ],
    declarations: [
        CategoryListComponent,
        CategoryNewModalComponent,
        CategoryEditModalComponent,
        CategoryDeleteModalComponent,
    ]
})
export class CategoryListModule {
}
