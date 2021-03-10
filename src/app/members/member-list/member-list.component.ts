import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any ={};
  searchMode = false;


  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getUser();
  }

  getUser(){
    this.accountService.getUsers(this.model).subscribe(response =>{
    console.log(response);
    this.searchMode =!this.searchMode;
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }


}
