import { Directive, Input, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';


@Directive ({

  selector: "[minlen]",

  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => MinLenDirective), multi: true}]

})

export class MinLenDirective implements Validator {

  @Input() minlen!: string;


  validate(control: AbstractControl) : { [key:string]: any } | null {
    return !control.value || control.value.length >= (parseInt(this.minlen) || 2) ? null : { minlen: true };
  }

}