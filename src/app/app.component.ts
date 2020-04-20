import { Component, Injector } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "notebook-dong";
  fb: FormBuilder;
  form: FormGroup;
  isUI:boolean;
  constructor(private injector: Injector) {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      resource: this.fb.control(""),
    });
  }

  change(isUi:boolean){
    console.log('test',isUi)
     if(isUi){
      //  solve method here!
      // this.form.setControl('resource',this.fb.control(''))
       this.form.patchValue({
         resource: {
           name:'gg'
         }
       })
     }
     this.isUI=isUi
  }
}
