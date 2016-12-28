import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    { name: 'Angel', id: 1 },
    { name: 'Daniel', id: 2 },
    { name: 'Javier', id: 3 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
