import { Router } from '@angular/router';
import { checkboxQuestion } from './../../../models/model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques-builder',
  templateUrl: './ques-builder.component.html',
  styleUrls: ['./ques-builder.component.scss']
})
export class QuesBuilderComponent implements OnInit {


  selected="Checkbox";

  ranges = [
    0,20,40,60,80,100
  ];

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

  linearScaleQuestion = new FormGroup ({
    question: new FormControl(""),
    quesType: new FormControl(""),
    description: new FormControl(""),
    rangeStart: new FormControl(""),
    rangeEnd: new FormControl(""),
    labelLeft: new FormControl(""),
    labelRight: new FormControl("")
  });

  shortTextQuestion = new FormGroup({
    question: new FormControl(""),
    answer: new FormControl("")
  });


  checkboxQuestions = new FormGroup ({
    question: new FormControl(""),
    quesType: new FormControl(""),
    options: new FormArray([
      new FormControl(""),
    ])
  });


  insertQuesType = <FormGroup>this.checkboxQuestions;

  // checkboxQuestions = new FormArray([
  //   checkboxQuestion
  // ])


  // questionForm = new FormGroup({
  //   title: new FormControl(""),
  //   description: new FormControl(""),
  //   questions: new FormArray([
  //     this.checkboxQuestions
  //   ]),
  // });

  everyQuesType = new FormGroup({

    question: new FormControl(""),
    answer: new FormControl(""),
    quesType: new FormControl(""),
    description: new FormControl(""),
    rangeStart: new FormControl(""),
    rangeEnd: new FormControl(""),
    labelLeft: new FormControl(""),
    labelRight: new FormControl(""),
    options: new FormArray([
      new FormControl(""),
    ])

  });


  questionForm = new FormGroup({
    title: new FormControl(""),
    formDescription: new FormControl(""),
    questions: new FormArray([
      new FormGroup({

        question: new FormControl(""),
        answer: new FormControl(""),
        quesType: new FormControl(""),
        description: new FormControl(""),
        rangeStart: new FormControl(""),
        rangeEnd: new FormControl(""),
        labelLeft: new FormControl(""),
        labelRight: new FormControl(""),
        options: new FormArray([
          new FormControl(""),
        ])

      })
    ]),
  });




  selectedQuestionIndex = 0;


  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  get options() {
    // return this.checkboxQuestions.controls['options'] as FormArray;
    // console.log(this.selectedQuestionIndex,"get")
    return this.questionForm.controls['questions'].controls[this.selectedQuestionIndex].controls['options'] as FormArray;
  }

  display() {
    console.log(this.questionForm.value);
  }

  addOptions(idx: number) {
    // (<FormArray>this.checkboxQuestions.controls['options']).push(new FormControl(""));
    (<FormArray>this.questionForm.controls['questions'].controls[idx].controls['options']).push(new FormControl(""));
  }

  get questions() {
    return this.questionForm.controls['questions'] as FormArray;
  }

  addQuestions() {
    (<FormArray>this.questionForm.controls['questions']).push(
      // this.everyQuesType
      new FormGroup({

        question: new FormControl(""),
        answer: new FormControl(""),
        quesType: new FormControl(""),
        description: new FormControl(""),
        rangeStart: new FormControl(""),
        rangeEnd: new FormControl(""),
        labelLeft: new FormControl(""),
        labelRight: new FormControl(""),
        options: new FormArray([
          new FormControl(""),
        ])

      })
    );
    // this.selected= 'Checkbox';
  }

  showQuesIndex(event: number){
    console.log(event);
    this.selectedQuestionIndex=event;
    this.selected = <string>this.questionForm.controls['questions'].controls[event].controls['quesType'].value;

  }




  typeSelect(){
    console.log("show=",this.questionForm.controls['questions'].controls[0].controls['quesType'].value);
    this.selected = (this.questionForm.controls['questions'].controls[0].controls['quesType'].value) as string ;
  }

  deleteItem(quesNum: number, optionNum: number) {
    // console.log(event);
    // this.questionForm.controls['questions'].controls[quesNum].controls['options'].splice
    (this.questionForm.controls['questions'].controls[quesNum].controls['options'] as FormArray).removeAt(optionNum);
  }


}
