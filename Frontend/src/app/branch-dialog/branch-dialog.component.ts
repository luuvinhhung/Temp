import { DepartmentsService } from './../shared/services/departments.service';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IDepartment } from './../core/models/IDepartment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-branch-dialog',
  templateUrl: './branch-dialog.component.html',
  styleUrls: ['./branch-dialog.component.css']
})
export class BranchDialogComponent implements OnInit {
  departments: IDepartment[];
  chooseDeparts: IDepartment[];
  user: String = localStorage.getItem('username');
  toDay: Date = new Date();
  form: FormGroup;
  constructor(private toastr: ToastrService,
    private _departmentsService: DepartmentsService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BranchDialogComponent>
  ) { }

  departAdding: IDepartment = {
    Name: '',
    Address: '',
    PhoneNumber: '',
    // CreatedDate: this.toDay,
    // CreatedBy: this.user,
    // UpdateDate: this.toDay,
    // UpdateBy: this.user,
  };

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      address: '',
      phone: ''
    });
    // this._departmentsService.getAllDepartments();
    // this._departmentsService.departments.subscribe(departments => {
    //   this.departments = departments;
    //   this.chooseDeparts = departments;
    // });
  }

  submit(form) {
    this.dialogRef.close();
  }
  // searchDepart(keyw: string) {
  //   this._departmentsService.getAllDepartments();
  //   this._departmentsService.departments.subscribe(departments => {
  //     this.departments = departments;
  //   });
  //   this.departments = this.chooseDeparts.filter(depart => depart.Name.toLowerCase().includes(keyw.toLowerCase()));
  // }
  addDepartment(departAdding) {
    if (departAdding.Name !== '' && departAdding.Address !== '' && departAdding.PhoneNumber !== '') {
      this._departmentsService.createDepartment(departAdding);
      this.dialogRef.close();
      this.toastr.success('Branch Added!', 'Success!');
    } else {
      this.toastr.error('Name, Address, Phone is required', 'Error!', {
        timeOut: 3000,
      });
    }
  }
}
