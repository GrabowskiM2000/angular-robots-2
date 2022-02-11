import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RobotComponent } from './components/robots/robot/robot.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RobotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }