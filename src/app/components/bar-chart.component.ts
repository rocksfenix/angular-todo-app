import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bar-chart',
  template: `
    <div class="container">
      <div
        class="bar"
        [style.width]="widthPercent"
        [style.background]="bgColor"
      ></div>
    </div>
  `,
  styles: [`
  
  .container {
    position: relative;
    width: 100%;
    height: 15px;
  }

  .bar {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: blue;
    transition: width 450ms ease;
  }

  `]
})
export class BarChartComponent implements OnInit {
  @Input() width = 0
  @Input() bgColor = '#222'

  get widthPercent() {
    return this.width + '%'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
