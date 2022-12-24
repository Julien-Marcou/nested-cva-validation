import { Directive, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

type EntityControls<Entity> = {
  [K in keyof Entity]: FormControl<Entity[K]>;
};

type EntityFromGroup<Entity> = FormGroup<EntityControls<Entity>>;

@Directive()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export abstract class BaseCvaGroup<Entity extends Record<string, any>> implements ControlValueAccessor, Validator, OnDestroy {

  protected formGroup: EntityFromGroup<Entity>;
  protected onChange = (_: Entity): void => {};
  protected onTouched = (): void => {};
  protected onValidatorChange = (): void => {};
  protected destroy$ = new Subject<void>();

  constructor(controls: EntityControls<Entity>) {
    this.formGroup = new FormGroup(controls);
    this.formGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((entity) => {
      this.onChange(entity as unknown as Entity);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public writeValue(entity: Entity): void {
    this.formGroup.setValue(entity);
  }

  public registerOnChange(fn: (_: Entity) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    }
    else {
      this.formGroup.enable();
    }
  }

  public validate(): ValidationErrors | null {
    return this.formGroup.valid ? null : { errors: this.formGroup.errors };
  }

}
