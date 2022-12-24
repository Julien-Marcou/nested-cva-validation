import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonFormArray } from './forms/person-form-array';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

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

}
