import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public router: Router;
  constructor(private routes:Router) { 
    this.router = routes;
  }

  ngOnInit(): void {
  }

  sign_up(signing:string):void{
    this.routes.navigate(['/register']);
  }

}
