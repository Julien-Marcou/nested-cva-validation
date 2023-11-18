import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MarkAllAsTouchedDirective } from '../../directives/mark-all-as-touched.directive';
import { Person } from '../../models/person';
import { BaseCvaArray } from '../../utils/base-cva-array';
import { PersonCvaComponent } from '../person-cva/person-cva.component';

@Component({
  standalone: true,
  selector: 'app-person-list-cva',
  templateUrl: './person-list-cva.component.html',
  styleUrls: ['./person-list-cva.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    PersonCvaComponent,
    MarkAllAsTouchedDirective,
  ],
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
