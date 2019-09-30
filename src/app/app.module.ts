import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatGridListModule, MatInputModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifLoaderComponent } from './gif/gif-loader.component';
import { StartupComponent } from './startup/startup.component';

@NgModule({
  declarations: [
    AppComponent,
    GifLoaderComponent,
    StartupComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
