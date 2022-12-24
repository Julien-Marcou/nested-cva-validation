import { FormControl, Validators } from '@angular/forms';
import { Person } from '../models/person';
import { EntityFormGroup } from '../utils/entity-form-group';

export class PersonFormGroup extends EntityFormGroup<Person> {
  constructor(person: Person = {firstname: '', lastname: ''}) {
    super({
      firstname: new FormControl(person.firstname, { nonNullable: true, validators: [Validators.required] }),
      lastname: new FormControl(person.lastname, { nonNullable: true, validators: [Validators.required] }),
    });
  }
}
