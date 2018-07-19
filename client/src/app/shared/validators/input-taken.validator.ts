import { AbstractControl } from '@angular/forms';
import { UserService } from '../services/user.service';

export class ValidateInputTaken {
  static createValidator(_userService: UserService, controlName: string) {
    return (control: AbstractControl) => {
      return new Promise(resolve => {
        _userService
          .fetchByKey(controlName, control.value)
          .map(res => {
            const resp = res[0] ? { taken: true } : null;
            return resp;
          })
          .subscribe(resp => resolve(resp));
      });
    };
  }

  static existsInDatabase(_userService: UserService, controlName: string) {
    return (control: AbstractControl) => {
      return new Promise(resolve => {
        _userService
          .fetchByKey(controlName, control.value)
          .map(res => {
            const resp = res[0] ? null : { not_exists: true };
            return resp;
          })
          .subscribe(resp => resolve(resp));
      });
    };
  }
}
