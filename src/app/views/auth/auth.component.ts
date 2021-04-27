import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, map, takeUntil } from 'rxjs/operators';

import { LoginAction } from '../../core/store/action';
import { State, getUser } from '../../core/store/index';
import { User } from '../../core/interfaces';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
})
export class AuthPageComponent {
  form: FormGroup;
  iRegister$: Observable<boolean>;
  user$: Observable<User>;
  public ngUnsubscribe$ = new Subject<void>()

  constructor(
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.iRegister$ = this.activatedRoute.queryParams.pipe(map(params => !!params.reg));

    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.store.select(getUser).pipe(
      takeUntil(this.ngUnsubscribe$),
      filter(user => !!user && !!user.token)
    ).subscribe(() => this.router.navigate(['sdk']));
  }

  handleSubmitForm(): void {
    this.store.dispatch(new LoginAction(this.form.value));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(null);
    this.ngUnsubscribe$.complete();
  }
}


