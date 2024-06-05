import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit {

  userListObj: any = [];
  ngOnInit(): void {
    this.userListObj = [{ name: "Admin" }, { name: "User" }]
  }
}
