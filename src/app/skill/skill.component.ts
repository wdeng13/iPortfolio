import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  TECHNICAL_SKILLS = [
    { name: 'Python, Java, TypeScript', level: 80 },
    { name: 'C++, C, JavaScript, HTML & CSS', level: 70 },
    { name: 'C#', level: 60 },
    { name: 'Angular', level: 80 }
  ]

  OTHER_SKILLS = [
    { name: 'Chinese (Mandarin)', level: 90 },
    { name: 'Chinese (Cantonese)', level: 100 },
  ]

  constructor() { }

  ngOnInit() {
  }

}
