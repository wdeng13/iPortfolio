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
    { name: 'Swift, C#, SQL', level: 65 },
    { name: 'Angular, GIT, Node.js, Axure RP', level: 75 }
  ];

  OTHER_SKILLS = [
    { name: 'Chinese (Mandarin)', level: 90 },
    { name: 'Chinese (Cantonese)', level: 100 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
