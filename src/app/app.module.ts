import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { CalendarComponent } from './components/core/calendar/calendar.component';
import { DriverTrainingComponent } from './components/core/driver-training/driver-training.component';
import { FinancesComponent } from './components/core/finances/finances.component';
import { RaceStrategyComponent } from './components/core/race-strategy/race-strategy.component';
import { WearCalculatorComponent } from './components/core/wear-calculator/wear-calculator.component';
import { WingsplitsComponent } from './components/core/wingsplits/wingsplits.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    DriverTrainingComponent,
    FinancesComponent,
    RaceStrategyComponent,
    WearCalculatorComponent,
    WingsplitsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
