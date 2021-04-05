import { NgModule } from '@angular/core';
import { CourseInfoAndQuestionsComponent } from './course-info-and-questions/course-info-and-questions.component'
import { RouterModule, Routes } from '@angular/router';
import { QuestionsMlComponent } from './questions-ml/questions-ml.component';
import { RequireTAPositionsComponent } from './require-tapositions/require-tapositions.component';
import { HoursComponent } from './hours/hours.component';
import { ApplicantInformationComponent } from './applicant-information/applicant-information.component';
import { TAApplyAndRankComponent } from './ta-apply-and-rank/ta-apply-and-rank.component';
import { DepartmentTASelectionComponent } from './department-ta-selection/department-ta-selection.component';
import { UploadApplicantComponent } from './upload-applicant/upload-applicant.component';
import { AdjustTahoursComponent } from './adjust-tahours/adjust-tahours.component';
import { AdjustCoursehoursComponent } from './adjust-coursehours/adjust-coursehours.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsMlComponent },
  { path: 'RequireTAPositionsComponent', component: RequireTAPositionsComponent},
  { path: 'hours', component: HoursComponent},
  { path: 'Info', component: CourseInfoAndQuestionsComponent},
  { path: 'applicants', component: ApplicantInformationComponent},
  { path: 'ta-apply-and-rank', component: TAApplyAndRankComponent },
  { path: 'ece-ta-selection', component: DepartmentTASelectionComponent },
  { path: 'Info', component: CourseInfoAndQuestionsComponent},
  { path: 'adjusthours', component: AdjustTahoursComponent},
  { path: 'coursehours', component: AdjustCoursehoursComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
