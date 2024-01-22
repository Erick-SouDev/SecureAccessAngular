import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 
  formLogin !: FormGroup

  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
      this.formLogin = this.formBuilder.group({
        email:['' ,[Validators.required ,Validators.email]],
        senha:['',[Validators.required , ]]

      })
   
  }

  logar(){
   
  }
  
}
