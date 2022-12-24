import { Directive, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Directive()
export abstract class BaseCvaArray<Entity extends Record<string, any>> implements ControlValueAccessor, Validator, OnDestroy {

  protected formArray: FormArray<FormControl<Entity>>;
  protected onChange = (_: Array<Entity>): void => {};
  protected onTouched = (): void => {};
  protected onValidatorChange = (): void => {};
  protected destroy$ = new Subject<void>();

  constructor(entities: Array<Entity>, private defaultEntity: Entity) {
    this.formArray = this.getNewFormArray(entities);
  }

  private getNewFormControl(entity: Entity): FormControl<Entity> {
    return new FormControl(entity, { nonNullable: true, validators: [Validators.required] });
  }

  private getNewFormArray(entities: Array<Entity>): FormArray<FormControl<Entity>> {
    const formArray = new FormArray(entities.map((entity) => this.getNewFormControl(entity)));
    formArray.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((entity) => {
      this.onChange(entity);
    });
    return formArray;
  }

  protected deleteControl(index: number): void {
    this.formArray.removeAt(index);
  }

  protected pushNewControl(): void {
    this.formArray.push(this.getNewFormControl(this.defaultEntity));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(entities: Array<Entity>): void {
    this.formArray = this.getNewFormArray(entities);
  }

  registerOnChange(fn: (_: Array<Entity>) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formArray.disable();
    }
    else {
      this.formArray.enable();
    }
  }

  validate(): ValidationErrors | null {
    return this.formArray.valid ? null : { errors: this.formArray.errors };
  }

}
