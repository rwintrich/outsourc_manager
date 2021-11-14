import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';



@NgModule({
  declarations: [
    LoginComponent,
    EsqueciSenhaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NaoLogadoModule { }
