import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonListCvaComponent } from './components/person-list-cva/person-list-cva.component';
import { MarkAllAsTouchedDirective } from './directives/mark-all-as-touched.directive';
import { Person } from './models/person';

@Component({
  standalone: true,
  selector: 'app-with-control-value-accessors',
  templateUrl: './app-with-control-value-accessors.component.html',
  styleUrls: ['./app-with-control-value-accessors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    PersonListCvaComponent,
    MarkAllAsTouchedDirective,
  ],
})
export class AppWithControlValueAccessorsComponent {

  protected personList: Array<Person> = [
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'Jane', lastname: 'Doe' },
    { firstname: '', lastname: '' },
  ];

  protected formGroup = new FormGroup({
    personList: new FormControl<Array<Person>>(this.personList, { nonNullable: true, validators: [Validators.required, Validators.minLength(1)]}),
  });

  constructor() {
    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  protected onSubmit(): void {
    this.formGroup.markAllAsTouched();
  }

}
