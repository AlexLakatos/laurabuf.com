import { Component, Input } from '@angular/core';

@Component({
  selector: 'skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  @Input() percentage;
  @Input() label;
}
