import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogComponent } from './shared/dialog/dialog.component';
import { DialogService } from './shared/dialog/dialog.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'Angular';

  @ViewChild('appDialog') appDialog: DialogComponent;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.dialogService.register(this.appDialog);
  }

  showDialog() {
    this.dialogService.show()
      .then((res) => {
        console.warn('ok clicked');
      })
      .catch((err) => {
        console.warn('rejected');
      });
  }
}
