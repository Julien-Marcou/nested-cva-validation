import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Person } from '../../models/person';
import { BaseCvaGroup } from '../../utils/base-cva-group';

@Component({
  selector: 'app-person-cva',
  templateUrl: './person-cva.component.html',
  styleUrls: ['./person-cva.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonCvaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonCvaComponent),
      multi: true,
    },
  ],
})
export class PersonCvaComponent extends BaseCvaGroup<Person> {

  constructor() {
    super({
      firstname: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      lastname: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });
  }

}
