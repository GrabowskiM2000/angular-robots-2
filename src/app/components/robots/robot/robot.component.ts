import { Component, OnInit, Input } from '@angular/core';
import { Robot } from './robots';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {

  @Input() robot!: Robot;

  constructor() { }

  ngOnInit(): void {
  }

}
