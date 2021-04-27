import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterAction } from '../../core/store/action';
import { State, getUser, getReg } from '../../core/store/index';
import { User } from '../../core/interfaces';
import { filter, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.scss'],
})
export class RegisterComponent {
  isInvalid: boolean = false;
  formRegister: FormGroup;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
      agree: new FormControl(false, Validators.requiredTrue),
    });
  }

  handleSubmit(): void {
    this.isInvalid = false;

    if (!this.formRegister.valid) {
      this.isInvalid = true;
      return
    }

    this.store.dispatch(new RegisterAction(this.formRegister.value));
    const register$ = this.store.select(getReg);

    register$.pipe(
      filter(v => !!v),
      take(1),
      tap(() => this.router.navigate([''], { queryParams: { reg: true } }))
    ).subscribe()
  }
}
