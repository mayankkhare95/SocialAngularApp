import { Component, Input, OnInit, Output } from '@angular/core';
import { Injectable, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any ={};


  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  

//   url: string = 'https://jsonplaceholder.typicode.com/users';
// usersArray: Array = [];

// constructor(private http: Http) {
//   this.http.get(this.url).subscribe(data => {
//     // Populating usersArray with names from API
//     data.json().forEach(element => {
//       this.usersArray.push(element.name);
//     });
//   });
}


