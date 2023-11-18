import { FormArray, Validators } from '@angular/forms';
import { Person } from '../models/person';
import { PersonFormGroup } from './person-form-group';

export class PersonFormArray extends FormArray<PersonFormGroup> {
  constructor(personList: Array<Person> = []) {
    super([], { validators: [Validators.required, Validators.minLength(1)] });
    personList.forEach((person) => this.pushNew(person));
  }

  private getNewPersonFormGroup(person?: Person): PersonFormGroup {
    return new PersonFormGroup(person);
  }

  public pushNew(person?: Person): void {
    this.push(this.getNewPersonFormGroup(person));
  }
}
