import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {UserListRoutes} from "./user-list.routing";
import {UserListComponent} from "./user-list.component";
import {UserNewModalComponent} from "../user-new-modal/user-new-modal.component";
import {UserEditModalComponent} from "../user-edit-modal/user-edit-modal.component";
import {UserDeleteModalComponent} from "../user-delete-modal/user-delete-modal.component";
import {ModalModule} from "../../../bootstrap/modal/modal.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserListRoutes),
        FormsModule,
        NgxPaginationModule,
        ModalModule
    ],
    declarations: [
        UserListComponent,
        UserNewModalComponent,
        UserEditModalComponent,
        UserDeleteModalComponent,
    ]
})
export class UserListModule {
}
