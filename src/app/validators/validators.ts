import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to validate institutional email
export function institutionalEmailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email: string = control.value;
    if (email && !email.endsWith('@spit.ac.in')) {
      return { 'invalidInstitutionalEmail': true };
    }
    return null;
  };
}

