import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'skills',
  imports: [SkillComponent],
  template: `
    <div class="skills">
      <skill [percentage]="100" label="Motivation"></skill>
      <skill [percentage]="90" label="Innovation"></skill>
      <skill [percentage]="86" label="Scrum Master"></skill>
      <skill [percentage]="70" label="Project Management"></skill>
      <skill [percentage]="93" label="Teamwork"></skill>
      <skill [percentage]="89" label="Creativity"></skill>
      <skill [percentage]="90" label="Fast Learning"></skill>
      <skill [percentage]="100" label="Analytical Thinking"></skill>
    </div>
  `,
  styleUrl: './skills.component.css',
})
export class SkillsComponent {}
