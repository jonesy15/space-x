import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/core/calendar/calendar.component';
import { DriverTrainingComponent } from './components/core/driver-training/driver-training.component';
import { FinancesComponent } from './components/core/finances/finances.component';
import { RaceStrategyComponent } from './components/core/race-strategy/race-strategy.component';
import { WearCalculatorComponent } from './components/core/wear-calculator/wear-calculator.component';
import { WingsplitsComponent } from './components/core/wingsplits/wingsplits.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'driver-training', component: DriverTrainingComponent },
  { path: 'finances', component: FinancesComponent },
  { path: 'race-strategy', component: RaceStrategyComponent },
  { path: 'wear-calculator', component: WearCalculatorComponent },
  { path: 'wingsplits', component: WingsplitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
