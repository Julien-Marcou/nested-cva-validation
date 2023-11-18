import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppWithControlValueAccessorsComponent } from '../app-with-control-value-accessors/app-with-control-value-accessors.component';
import { AppWithFormGroupComponent } from '../app-with-form-groups/app-with-form-groups.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AppWithFormGroupComponent,
    AppWithControlValueAccessorsComponent,
  ],
})
export class AppComponent {}
