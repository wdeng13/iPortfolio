import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  RELEVANT_COURSEWORK = [
    'Data Structure & Algorithms',
    'Design & Analysis of Algorithms',
    'Intro to Artificial Intelligence',
    'Social Media Mining',
    'Database Management',
    'Distributed Software Development',
    'Principles of Programming Language',
    'Intro to Theoretical Computer Science',
    'Operating System',
    'Intro to Software Engineering',
    'Mobile Development',
    'Multimedia Information Systems',
    'Intro Human Computer Interaction',
    'Intro to Programming Languages',
    'Principles of Programming with Java',
    'Object-Oriented Program & Data'
  ]

  constructor() { }

  ngOnInit() {
    this.RELEVANT_COURSEWORK = this.RELEVANT_COURSEWORK.sort();
  }

}
