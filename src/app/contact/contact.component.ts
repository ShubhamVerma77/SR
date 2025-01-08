import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';  // Import FormsModule
import { Observable } from 'rxjs'; // Import Observable for type checking
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,  
  imports: [FormsModule,CommonModule,ReactiveFormsModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  gmail1 = "sv8144906@gmail.com";
  gmail2 = "talk2ritiksharma@gmail.com";
 service = inject(PortfolioService)

 contactform= new FormGroup({
  name:new FormControl('', Validators.required),
  phonenumber: new FormControl('', Validators.required),
  message:new FormControl('', Validators.required)
  
 });
submitted: boolean = false;
 Contactus(data:any) {
  this.submitted = true;
this.service.postData(data).subscribe(res=>{
  if(this.contactform.valid){
    alert("Data Saved Successfully")
    console.log(res);
    this.submitted = false;
    this.contactform.reset();
  }
  else{
    alert("Please Fill All The Fields");
    this.submitted = true;
  }

})
 }
}
