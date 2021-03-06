import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';

// validate an input field by regex
function validateByRegex(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const err = regex.test(control.value);
    return err ?  null : {'regexError': control.value};
  };
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @Output('onSubmit') submitEmitter = new EventEmitter<{lastName: string, code: string}>();

  bookingForm = this.formBuilder.group({
    bookingCode: ['',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(6),
      validateByRegex(/^[a-zA-Z 2-9\.\,\+\-]*$/) // all characters and numbers 2-9
    ]],
    lastName: ['',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      validateByRegex(/^[a-zA-Z]*$/) // only english alphabet
    ]],
  });
  
  hasErrors(fieldName: string) {
    const formConroll = this.bookingForm.controls[fieldName];
    if (formConroll.dirty && formConroll.errors) {
      return Object.values(formConroll.errors).length > 0;
    }
    return false;
  }

  onSubmit() {
    const controls = this.bookingForm.controls;
    this.submitEmitter.emit({
      code: controls.bookingCode.value,
      lastName: controls.lastName.value
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
