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


  insertQuesType = <FormGroup>this.linearScaleQuestion;

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


  questionForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    questions: new FormArray([
      this.insertQuesType
    ]),
  });


  selectedQuestionIndex = 0;


  constructor() { }

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
      new FormGroup ({
        question: new FormControl(""),
        quesType: new FormControl(""),
        options: new FormArray([
          new FormControl(""),
        ])
      })
    );
  }

  showQuesIndex(event: number){
    console.log(event);
    this.selectedQuestionIndex=event;
    this.selected = <string>this.questionForm.controls['questions'].controls[event].controls['quesType'].value;

    if(this.selected=='Checkbox') {
      this.insertQuesType=this.checkboxQuestions;
    }

    if(this.selected=='Multiple Choice') {
      this.insertQuesType=this.multipleChoiceQuestions;
    }

    if(this.selected=='Linear Scale') {
      this.insertQuesType=this.linearScaleQuestion;
    }

    if(this.selected=='Short Text') {
      this.insertQuesType=this.shortTextQuestion;
    }

    console.log(this.insertQuesType.value,this.selected);
  }




  typeSelect(){
    console.log("show=",this.questionForm.controls['questions'].controls[0].controls['quesType'].value);

  }

}
