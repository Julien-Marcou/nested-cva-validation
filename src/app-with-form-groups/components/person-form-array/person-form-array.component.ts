import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PersonFormArray } from '../../forms/person-form-array';

@Component({
  selector: 'app-person-form-array',
  templateUrl: './person-form-array.component.html',
  styleUrls: ['./person-form-array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormArrayComponent {

  @Input() formArray!: PersonFormArray;

}
