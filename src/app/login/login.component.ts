import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  
  username: string='';
  password: string='';
person: any;
Check(){
if(this.username=="Shubham" || this.password=="War"){
  sessionStorage.setItem('person', this.username + this.password);
  alert("Welcome Shubham Verma");
this.router.navigate(['/user']);
this.username = ""
this.password = ""
}
else if(this.username=="Ritik" || this.password=="Payal"){
  sessionStorage.setItem('person', this.username + this.password);
  alert("Welcome Ritik Sharma");
  this.router.navigate(['/user']);
  this.username = ""
this.password = ""
}
else{
  alert("Invalid Credentials");
}
}
}
