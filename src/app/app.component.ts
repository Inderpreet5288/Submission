import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubmissionComponent } from './submission/submission.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports:  [
    CommonModule,
    RouterModule,
    SubmissionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Submission';
}
