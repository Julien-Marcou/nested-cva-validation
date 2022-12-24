import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Person } from '../../models/person';
import { BaseCvaArray } from '../../utils/base-cva-array';

@Component({
  selector: 'app-person-list-cva',
  templateUrl: './person-list-cva.component.html',
  styleUrls: ['./person-list-cva.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonListCvaComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PersonListCvaComponent),
      multi: true,
    },
  ],
})
export class PersonListCvaComponent extends BaseCvaArray<Person> {

  constructor() {
    super([], { firstname: '', lastname: '' });
  }

}
