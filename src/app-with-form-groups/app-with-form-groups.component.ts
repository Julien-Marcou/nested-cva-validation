import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PersonFormArrayComponent } from './components/person-form-array/person-form-array.component';
import { PersonFormArray } from './forms/person-form-array';
import { Person } from './models/person';

@Component({
  standalone: true,
  selector: 'app-with-form-groups',
  templateUrl: './app-with-form-groups.component.html',
  styleUrls: ['./app-with-form-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    PersonFormArrayComponent,
  ],
})
export class AppWithFormGroupComponent {

  protected personList: Array<Person> = [
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'Jane', lastname: 'Doe' },
    { firstname: '', lastname: '' },
  ];

  protected formGroup = new FormGroup({
    personList: new PersonFormArray(this.personList),
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
