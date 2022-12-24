import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    personList: new FormControl<Array<Person>>(this.personList, { nonNullable: true, validators: [Validators.required]}),
  });

  constructor() {
    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

}
