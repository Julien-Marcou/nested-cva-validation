import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PersonFormArray } from '../../forms/person-form-array';
import { PersonFormGroupComponent } from '../person-form-group/person-form-group.component';

@Component({
  standalone: true,
  selector: 'app-person-form-array',
  templateUrl: './person-form-array.component.html',
  styleUrls: ['./person-form-array.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgForOf,
    PersonFormGroupComponent,
  ],
})
export class PersonFormArrayComponent {

  @Input({ required: true }) public formArray!: PersonFormArray;

}
