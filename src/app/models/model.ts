export interface login {
  email: string | null,
  password: string | null,
};


export interface checkboxQuestion {
  question: string | null,
  answers: string[] | null
};


export interface multichoiceQuestion {
  question: string | null,
  answers: string[] | null
};


export interface linearScaleQuestion {
  question: string | null,
  description: string | null,
  range: number[] | null,
  labelLeft: string | null,
  labelRight: string | null
};

export interface shortTextQuestion {
  question: string | null,
  answer: string | null
};


export interface questionForm {
  title: string | null,
  description: string | null,
  questions : {
    checkBox: checkboxQuestion[] | null,
    multiChoice: multichoiceQuestion[] | null,
    linearScale: linearScaleQuestion[] | null,
    shortText: shortTextQuestion[] | null,
  }
}
