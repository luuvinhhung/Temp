import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: String = localStorage.getItem('username');
  password: String = localStorage.getItem('password');
  access: Boolean;
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    if (this.username && this.password) {
      this.access = true;
    }
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
