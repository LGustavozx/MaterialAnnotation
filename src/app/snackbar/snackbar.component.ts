import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarMsnComponent } from './snackbar-msn/snackbar-msn.component';


@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public openSnackBar() {
    const snackBar = this.snackbar.open('Hello People', 'Close', {
      duration: 2000
    })

    snackBar.afterDismissed().subscribe(_ => {
      console.log('Dismissed');
    })

    snackBar.onAction().subscribe(_ => {
      console.log('After Action');
    })
  }

  public openFromComp() {
    this.snackbar.openFromComponent(SnackbarMsnComponent, {
      data: 'Hello People',
      duration: 2500,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    })
  }

}
