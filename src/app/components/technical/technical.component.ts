import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'technical',
  imports: [SkillComponent],
  template: `
    <div class="skills">
      <skill [percentage]="80" label="Angular"></skill>
      <skill [percentage]="66" label="C/C++"></skill>
      <skill [percentage]="50" label=".net"></skill>
      <skill [percentage]="40" label="Java"></skill>
      <skill [percentage]="80" label="Swift"></skill>
      <skill [percentage]="70" label="Objective-C"></skill>
      <skill [percentage]="90" label="BPMN Modelers"></skill>
      <skill [percentage]="40" label="Graphic Design"></skill>
      <skill [percentage]="70" label="ELK Stack"></skill>
      <skill [percentage]="50" label="Salesforce"></skill>
    </div>
  `,
  styleUrl: './technical.component.css',
})
export class TechnicalComponent {}
