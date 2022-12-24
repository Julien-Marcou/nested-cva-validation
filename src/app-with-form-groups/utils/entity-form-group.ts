import { FormControl, FormGroup } from '@angular/forms';

export abstract class EntityFormGroup<Entity extends {}> extends FormGroup<{
  [K in keyof Entity]: FormControl<Entity[K]>;
}> {}
