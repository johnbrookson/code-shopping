import {Component, OnInit} from '@angular/core';
import pace from 'pace';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor() {
    }

    ngOnInit(): void {
        pace.start({
            document: false
        });
    }

}
