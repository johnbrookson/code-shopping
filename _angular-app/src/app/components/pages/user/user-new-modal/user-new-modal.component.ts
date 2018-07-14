import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {User} from "../../../../models";
import {UserHttpService} from "../../../../services/http/user-http.service";

@Component({
    selector: 'app-user-new-modal',
    templateUrl: './user-new-modal.component.html',
    styleUrls: ['./user-new-modal.component.css']
})
export class UserNewModalComponent implements OnInit {

    user: User = {
        name: '',
        email: '',
        password: 'secret',
        role: 2,
        active: true
    };

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public userHttp: UserHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        this.userHttp.create(this.user)
            .subscribe((user) => {
                this.onSuccess.emit(user);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event) {
        // console.log($event)
    }
}
