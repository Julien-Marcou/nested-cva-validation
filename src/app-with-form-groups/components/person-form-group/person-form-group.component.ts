import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PersonFormGroup } from '../../forms/person-form-group';

@Component({
  selector: 'app-person-form-group',
  templateUrl: './person-form-group.component.html',
  styleUrls: ['./person-form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormGroupComponent {

  @Input() public formGroup!: PersonFormGroup;

}
