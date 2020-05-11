import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule,
    MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule,
    MatSidenavModule, MatListModule, MatDialogModule, MatMenuModule, MatTooltipModule,MatTabsModule,
    MatDividerModule, MatCardModule, MatSnackBarModule
  ],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSelectModule,
    MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule,
    MatSidenavModule, MatListModule, MatDialogModule, MatMenuModule, MatTooltipModule,MatTabsModule,
    MatDividerModule, MatCardModule, MatSnackBarModule
  ]
})
export class MaterialModule {}
