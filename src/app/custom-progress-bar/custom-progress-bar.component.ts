import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrls: ['./custom-progress-bar.component.css']
})
export class CustomProgressBarComponent implements OnInit {

  @Input() total: number;
  @Input() current: number;

  constructor() { }

  ngOnInit(): void {
  }

}
