import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoStoreService } from './services/todo-store.service';
import { StatisticsComponent } from './components/statistics.component';
import { BarChartComponent } from './components/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    StatisticsComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
