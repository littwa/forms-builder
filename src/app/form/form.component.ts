import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  submit(): void {
    console.log(this.form);
    this.form.reset();
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      address: new FormGroup({
        country: new FormControl('us'),
        city: new FormControl(''),
      }),
      skills: new FormArray([]),
    });
  }
  setCapital(): void {
    const mapCity = { ua: 'Kiev', us: 'Vashik', gm: 'Berlik' };
    const key = this.form.get('address').get('country').value;
    this.form.patchValue({ address: { city: mapCity[key] } });
  }
  // addSkills(): void {
  //   const control = new FormControl('');
  //   const arrSkills = this.form.get('skills');
  //   // (<FormArray>arrSkills).push(control);
  //   (arrSkills as FormArray).push(control);
  //   console.log(this.form.get('skills').value);
  // }
}
