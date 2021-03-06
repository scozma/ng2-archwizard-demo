import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalStepsComponent } from './optional-steps.component';
import {ArchwizardModule} from 'ng2-archwizard';

@NgModule({
  imports: [
    CommonModule,
    ArchwizardModule
  ],
  declarations: [OptionalStepsComponent],
  exports: [OptionalStepsComponent]
})
export class OptionalStepsModule { }
