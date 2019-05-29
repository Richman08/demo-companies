import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth/auth.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  protected loginForm: FormGroup;
  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this._buildForm();
  }

  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }

  protected login() {
    const {username, password} = this.loginForm.value;
    this.auth.logIn(username,password);
}
protected _buildForm() {
  this.loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
}
}
