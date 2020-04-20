import { Component, OnInit, forwardRef } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-foo",
  templateUrl: "template.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FooComponent),
      multi: true,
    },
  ],
})
export class FooComponent implements ControlValueAccessor, OnInit {
  form: FormGroup;
  onchange: any;
  ontouch: any;
  disabled;

  constructor(private fb: FormBuilder) {}

  writeValue(obj: any): void {
    console.log("write value trigger", obj);
  }
  registerOnChange(fn: any): void {
    this.onchange = fn;
  }
  registerOnTouched(fn: any): void {
    this.ontouch = fn;
  }
  setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    if (!this.form) {
      this.form = this.fb.group({ name: "guodong", age: 19 });
    }
  }
}
