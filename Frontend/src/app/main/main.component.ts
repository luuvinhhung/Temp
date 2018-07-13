import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private _opened: Boolean = false;
  private _docked: Boolean = true;
  private _mode: String = 'over';
  private _dockedSize: String = '60px';
  private _backDrop: Boolean = false;
  private activeDashboard: Boolean = false;
  private activeDepartments: Boolean = false;
  private activeEmployees: Boolean = false;
  private activeProducts: Boolean = false;
  constructor(private route: Router) { }

  ngOnInit() {
  }
  private _toggleSidebar() {
    this._opened = !this._opened;
    this._docked = !this._docked;
  }
  depart() {
    this.route.navigate(['/home/branchs']);
    this.activeDepartments = true;
    this.activeDashboard = this.activeEmployees = this.activeProducts = false;
  }
  employ() {

  }
  product() {
    this.route.navigate(['/home/products']);
    this.activeProducts = true;
    this.activeDashboard = this.activeEmployees = this.activeDepartments = false;
  }
}
