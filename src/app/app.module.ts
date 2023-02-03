import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { ListView1Component } from './list-view1/list-view1.component';
import { ScrollComponent } from './scroll/scroll.component';

import { CarServiceService } from './car-service.service';
import { AppRoutingModule } from './routingmodule/routingmodule.module';

@NgModule({
  imports: [
    BrowserModule,
    MatDividerModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, ScrollComponent, ListView1Component],
  providers: [CarServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
