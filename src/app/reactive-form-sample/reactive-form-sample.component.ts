import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { delay, of, Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-reactive-form-sample',
  templateUrl: './reactive-form-sample.component.html',
  styleUrls: ['./reactive-form-sample.component.scss']
})
export class ReactiveFormSampleComponent implements OnInit, OnDestroy {
  isSubmitted = false;
  form!: FormGroup;
  private onDestroy$ = new Subject();

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.debugForm();
    this.setValueToForm();
  }

  ngOnDestroy() {
    this.onDestroy$.next(0);
  }

  private createForm() {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
        ],
      ],
      roles: this.fb.group({
        frontend: [false],
        backend: [false],
        sre: [false],
      }),
      gender: [null, Validators.required],
      skills: this.fb.array([]),
    });
  }

  private debugForm() {
    this.form.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        console.log(this.form)
      });
  }

  private setValueToForm() {
    // Web APIでの情報取得を擬似再現
    const apiResponse = {
      name: '田中花子',
      roles: {
        backend: true
      },
      // gender: 'female'
    }
    of(apiResponse)
      .pipe(
        delay(3000)
      )
      .subscribe(resp => {
        this.form.patchValue(resp);
      })
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  addSkill() {
    const friendFormGroup = this.fb.group({
      skill: ['', [Validators.required]],
      years: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });

    this.skills.push(friendFormGroup);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submit() {
    this.isSubmitted = true;
    console.log(this.form)
  }

}
