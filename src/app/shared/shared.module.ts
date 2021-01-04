import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';

@NgModule({
  imports: [CommonModule],
  exports: [DialogComponent],
  declarations: [DialogComponent],
  providers: [DialogService]
})
export class SharedModule { }