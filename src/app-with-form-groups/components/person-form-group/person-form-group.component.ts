import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFormGroup } from '../../forms/person-form-group';

@Component({
  standalone: true,
  selector: 'app-person-form-group',
  templateUrl: './person-form-group.component.html',
  styleUrls: ['./person-form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
})
export class PersonFormGroupComponent implements OnInit {

  @Input({ required: true }) public formGroup!: PersonFormGroup;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.formGroup.touched$.subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

}
