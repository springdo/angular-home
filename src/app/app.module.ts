import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabNavBarComponent } from './components/tab-nav-bar/tab-nav-bar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { BlindsModule } from './components/blinds/blinds.module';
import { LightsModule } from './components/lights/lights.module';
import { CleaningModule } from './components/cleaning/cleaning.module';
import { NotificationModule } from './components/notification/notification.module';

@NgModule({
  declarations: [AppComponent, TabNavBarComponent],
  imports: [
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    HomeModule,
    BlindsModule,
    LightsModule,
    CleaningModule,
    NotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
