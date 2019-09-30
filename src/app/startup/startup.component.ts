import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-startup',
    templateUrl: './startup.component.html'
})
export class StartupComponent {
    constructor(public dialog: MatDialog) { }
    title = 'myApp';
}
