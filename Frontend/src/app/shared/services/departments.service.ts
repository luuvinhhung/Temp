import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IDepartment } from './../../core/models/IDepartment';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Identifiers } from '@angular/compiler';

@Injectable()
export class DepartmentsService {
  private _departments: BehaviorSubject<Array<IDepartment>> = new BehaviorSubject(new Array());
  private department: IDepartment;
  get departments() {
    return this._departments.asObservable();
  }
  constructor(private http: Http) { }
  getDepartments(page: Number, pageSize: Number) {
    return this.getDepartmentsFromServer(page, pageSize);
  }
  private getDepartmentsFromServer(pageIn: Number, pageSizeIn: Number) {
    this.http.get('http://localhost:8888/api/Branch/GetAll?page=' + pageIn +
    '&pageSize=' + pageSizeIn).subscribe(res => {
      const departments = res.json();
      this._departments.next(departments);
    });
  }
  getAllDepartments() {
    return this.getAll();
  }
  private getAll() {
    this.http.get('http://localhost:8888/api/Branch/GetAllAll').subscribe(res => {
      const departments = res.json();
      this._departments.next(departments);
    });
  }
  getDepartmentsByIdFromServer(id) {
    this.http.get('http://localhost:8888/api/Branch/GetByCode?code=' + id).subscribe(res => {
      const departments = res.json();
      this._departments.next(departments);
    });
  }

  removeDepartment(id: number) {
    return this.http.delete('http://localhost:8888/api/Branch/Delete?code=' + id).subscribe(() => {
      const index = this._departments.getValue().findIndex(b => b.Id === id);
      this._departments.getValue().splice(index, 1);
      this._departments.next(this._departments.getValue());
    });
  }
  createDepartment(departAdd: IDepartment) {
    return this.http.post('http://localhost:8888/api/Branch/Create', departAdd).subscribe(() => {
      this._departments.getValue().push(departAdd);
      const newDepart = this._departments.getValue();
      this._departments.next(newDepart);
    });
  }
  editDepartment(departEdit: IDepartment) {
    return this.http.put('http://localhost:4147/api/chinhanh/update', departEdit).subscribe(() => {
      this._departments.getValue().push(departEdit);
      const newDepart = this._departments.getValue();
      this._departments.next(newDepart);
    });
  }

}
