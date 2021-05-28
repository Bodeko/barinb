import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { AdminRoomEditDialogModule } from '../admin-room-edit-dialog';
import { AdminRoomRemoveDialogModule } from '../admin-room-remove-dialog';
import { AdminRoomViewDialogModule } from '../admin-room-view-dialog';
import { AdminRoomActionsComponent } from './admin-room-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    AdminRoomEditDialogModule,
    AdminRoomRemoveDialogModule,
    AdminRoomViewDialogModule,
  ],
  declarations: [AdminRoomActionsComponent],
  exports: [AdminRoomActionsComponent],
})
export class AdminRoomActionsModule {}