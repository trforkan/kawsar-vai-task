import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques-builder',
  templateUrl: './ques-builder.component.html',
  styleUrls: ['./ques-builder.component.scss']
})
export class QuesBuilderComponent implements OnInit {


  selected="Checkbox";

  quesTypes = [
    "Multiple Choice",
    "Linear Scale",
    "Checkbox",
    "Short Text",
    "File Upload"
  ];

  multipleChoiceQuestions = new FormGroup ({
    question: new FormControl(""),
    quesType: new FormControl(""),
    options: new FormArray([
      new FormControl("")
    ])
  });


  checkboxQuestions = new FormGroup ({
    question: new FormControl(""),
    quesType: new FormControl(""),
    options: new FormArray([
      new FormControl(""),
    ])
  });


  // questionForm = new FormGroup({
  //   title: new FormControl(""),
  //   description: new FormControl(""),
  //   questions: new FormArray([
  //     this.checkboxQuestions
  //   ]),
  // });


  questionForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    questions: new FormArray([
      this.checkboxQuestions
    ]),
  });






  constructor() { }

  ngOnInit(): void {
  }

  get options() {
    return this.checkboxQuestions.controls['options'] as FormArray;
  }

  display() {
    console.log(this.questionForm.value);
  }

  addOptions() {
    (<FormArray>this.checkboxQuestions.controls['options']).push(new FormControl(""));
  }

  get questions() {
    return this.questionForm.controls['questions'] as FormArray;
  }

  addQuestions() {
    this.questionForm.controls['questions'].push(this.checkboxQuestions);
  }

}
