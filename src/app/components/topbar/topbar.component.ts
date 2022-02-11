import { Component, NgModule, OnInit} from '@angular/core'; 
import { Robot } from '../robots/robot/robots';
import { Validators, FormBuilder } from '@angular/forms';
import {maxSame} from '../../utils/validators';


declare function inputOnClick(): string;
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  robots : Robot[] = [];
  public getArray = ()=>this.robots.map(r=>r.name)
  public form = this.fb.group({
    name: [null, [Validators.required, maxSame(this.getArray, 2)]]})

  constructor(private fb: FormBuilder){}

  submitForm(){
    if(this.form.invalid){
      return;
    }
      let robot = new Robot();
      robot.name = this.form.get('name')?.value;
      robot.isCompleted= true;
      this.robots.push(robot);
      this.form.reset({
        name: null
      });
    }

  
}
