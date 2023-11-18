import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Person } from '../models/person';
import { EntityFormGroup } from '../utils/entity-form-group';

export class PersonFormGroup extends EntityFormGroup<Person> {
  private touchedSubject$ = new Subject<void>();
  public readonly touched$ = this.touchedSubject$.asObservable();

  constructor(person: Person = {firstname: '', lastname: ''}) {
    super({
      firstname: new FormControl(person.firstname, { nonNullable: true, validators: [Validators.required] }),
      lastname: new FormControl(person.lastname, { nonNullable: true, validators: [Validators.required] }),
    });
  }

  public override markAsTouched(opts?: { onlySelf?: boolean | undefined } | undefined): void {
    super.markAsTouched(opts);
    this.touchedSubject$.next();
  }

  public override markAllAsTouched(): void {
    super.markAllAsTouched();
  }
}
