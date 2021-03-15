import { Component } from '@angular/core';
import { TodoStoreService } from '../services/todo-store.service';

@Component({
  selector: 'statistics',
  template: `
    <div>
      Statistics
      <div>
        <span>Pendientes: {{ store.statistics.incompleted }}</span>
        <span>| {{ store.statistics.percentIncompleted | percent }}</span>
      </div>
      <div>
        <span>Completadas: {{ store.statistics.completed }}</span>
        <span>| {{ store.statistics.percentCompleted | percent }}</span>
      </div>

      <bar-chart
        [width]="store.statistics.percentCompleted * 100"
        bgColor="green"
      ></bar-chart>
      <bar-chart
        [width]="store.statistics.percentIncompleted * 100"
        bgColor="orangered"
      ></bar-chart>
    </div>
  `,
  styles: [
  ]
})
export class StatisticsComponent {

  constructor(
    public store: TodoStoreService
  ) { }

}
