import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  service= inject(PortfolioService)
  ngOnInit(): void {

 this.FetchUser();
  } 
  contactus: any[] = [];
  
  

  FetchUser(){
    this.service.getUser().subscribe((res:any)=>{
      if(res==null){
        console.log("No data found");
        return;
      }
      this.contactus = Object.values(res);
      console.log(res);
    })
  }
}
