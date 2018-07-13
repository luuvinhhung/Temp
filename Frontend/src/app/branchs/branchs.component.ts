import { IDepartment } from './../core/models/IDepartment';
import { DepartmentsService } from './../shared/services/departments.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BranchDialogComponent } from '../branch-dialog/branch-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.scss']
})
export class BranchsComponent implements OnInit {
  departments: IDepartment[];
  editDepartments: IDepartment[];
  editDepartments2: IDepartment;
  chooseDeparts: IDepartment[];
  pageSize: Number = 3;
  page: Number = 1;
  user: String = localStorage.getItem('username');
  branchDialogRef: MatDialogRef<BranchDialogComponent>;
  constructor(private _departmentsService: DepartmentsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this._departmentsService.getDepartments(this.page, this.pageSize);
    this._departmentsService.departments.subscribe(departments => {
      this.departments = departments;
      this.chooseDeparts = departments;
    });
    // sort by name
    this.departments.sort(function (a, b) {
      const nameA = a.Name; // ignore upper and lowercase
      const nameB = b.Name; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  // getByIdDepartment(depart: IDepartment) {
  //   this._departmentsService.getDepartmentsByIdFromServer(depart.Id);
  //   this._departmentsService.departments.subscribe(departments => {
  //   this.editDepartments = departments;
  //   });
  //   this.editDepartments2 = this.editDepartments.find(x => x.Id === depart.Id);
  //   console.log(this.editDepartments2.ChiNhanhId);

  // }
  delDepartment(depart: IDepartment) {
    this._departmentsService.removeDepartment(depart.Id);
    // console.log(depart.Id);
  }
  searchDepart(keyw: string) {
    this._departmentsService.getAllDepartments();
    this._departmentsService.departments.subscribe(departments => {
      this.departments = departments;
    });
    this.departments = this.chooseDeparts.filter(depart => depart.Name.toLowerCase().includes(keyw.toLowerCase()));
  }
  addDepartment(departAdding) {
    this._departmentsService.createDepartment(departAdding);
  }
  changePageSize() {
    this._departmentsService.getDepartments(this.page, this.pageSize);
    this._departmentsService.departments.subscribe(departments => {
      this.departments = departments;
    });
    // sort by name
    this.departments.sort(function (a, b) {
      const nameA = a.Name; // ignore upper and lowercase
      const nameB = b.Name; // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
  changePage(pageNumber: Number) {
    console.log(pageNumber);
    // this._departmentsService.getDepartments(pageNumber, this.pageSize);
    // this._departmentsService.departments.subscribe(departments => {
    //   this.departments = departments;
    //   this.chooseDeparts = departments;
    // });
    // // sort by name
    // this.departments.sort(function (a, b) {
    //   const nameA = a.Name; // ignore upper and lowercase
    //   const nameB = b.Name; // ignore upper and lowercase
    //   if (nameA < nameB) {
    //     return -1;
    //   }
    //   if (nameA > nameB) {
    //     return 1;
    //   }
    //   // names must be equal
    //   return 0;
    // });
  }
  // popup button add
  openDialog() {
    this.branchDialogRef = this.dialog.open(BranchDialogComponent, {
      hasBackdrop: false
    });

    // this.branchDialogRef
    //   .afterClosed().subscribe(departments => {
    //     this.departments = departments;
    //   });
    //   .afterClosed()
    //     .pipe(filter(name => name))
    //     .subscribe((name) => this.departments.push({ BranchCode: '', Name: name, Address: '',
    //     PhoneNumber: '', CreatedDate: new Date(), CreatedBy: this.user}));
  }
}
