import { Component, OnInit } from '@angular/core';
import{emp} from './emp';
import { EmployeeService } from './emp.service';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
 export class EmpComponent {
   employees : emp []=[]
  constructor(private _employeeService:EmployeeService) {
    this.employees = this._employeeService.getEmployees();
   }


} 

