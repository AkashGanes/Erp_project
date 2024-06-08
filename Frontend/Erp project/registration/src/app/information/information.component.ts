import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss'
})
export class InformationComponent {
  informations: { info: string, number: string ,doc: string}[] = [] = [];
  router: any;
  
  addInformation() {
    this.informations.push({ info: '', number: '',doc:''});
    
  }
 
  removeInformation(index: number) {
    this.informations.splice(index, 1);
  }
  resetForm() {
    this.informations = [];
  }
 
  experiences: { company: string, joined: string ,releaved: string, ctc: string,  reletter:string,reason: string} [] = [] =[] =[] = [] = []= [];
  
  addExperience() {
    this.experiences.push({ company: '', joined: '',releaved:'',ctc:'',reletter:'',reason:''});
    
  }
 
  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }
  resetButton() {
    this.experiences = [];
  }
  qualifications: { qualification: string, specialization: string ,academicyear: string,document: string}[] = [] = []= [];
  

  addQualification() {
    this.qualifications.push({ qualification: '', specialization: '',academicyear:'',document:''});
    
  }

 


  removeQualification(index: number) {
    this.qualifications.splice(index, 1);
  }
  reset() {
    this. qualifications= [];
  }
  formData: any = {
    gender: '',
    email: '',
    date: '',
    agree: false
  };
  submit: boolean = false;

  onSubmit(form: any) {
    this.submit = true;
    if (form.valid) {
      // Handle form submission logic here
      console.log('Form Submitted!', this.formData);
    } else {
      console.log('Form is invalid');
    }
  }
  
}
