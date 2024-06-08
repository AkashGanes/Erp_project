import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginSignupService } from '../service/login-signup.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-staff-information',
  templateUrl: './staff-information.component.html',
  styleUrl: './staff-information.component.scss'
})
export class StaffInformationComponent implements OnInit {

  @ViewChild('fileUploader') fileUploader!: ElementRef;
  @ViewChild('imageUploader') imageUploader!: ElementRef;

  pdfURL: any = ''
  pdfURLName: any = ''
  fileValid: boolean = true;
  imageURL: any = ''
  imageURLName: any = ''
  imageValid: boolean = true;

  selectedFile: File | null = null;
  selectedImage: File | null = null;

  submit = false
  basicInfoId!: any
  basicInfo = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    picture: null,
    resume: null
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private sanitizer: DomSanitizer, private router: Router, private loginService: LoginSignupService) { }
  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const id = sessionStorage.getItem('basicInfoId');
      if (id !== null) {
        this.basicInfoId = id;
        console.log(this.basicInfoId);
        this.loginService.getBasicInformation(this.basicInfoId).subscribe((resp: any) => {
          this.basicInfo = resp
          // console.log(resp)
          console.log(this.basicInfo)
        })
      }
    }



  }
  resetFileUploader() {
    this.fileUploader.nativeElement.value = null;
    this.pdfURL = ''
    this.pdfURLName = ''
    this.fileValid = true
  }
  resetImageUploader() {
    this.imageUploader.nativeElement.value = null;
    this.imageURL = ''
    this.imageURLName = ''
    this.imageValid = true
  }

  public onFileChanged(event: any) {

    console.log(event)
    var file = event.target.files[0];
    console.log(file.type)
    // this.selectedFileName=file.name
    // this.selectedFile = event.target.files[0];
    var reader = new FileReader();

    if (file.type == "application/pdf" || file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      this.pdfURLName = file.name
      this.selectedFile = file

      this.fileValid = false
      reader.readAsArrayBuffer(file)
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        var blob = new Blob([event.target.result], { type: file.type }); // Create Blob object
        var url = URL.createObjectURL(blob);
        this.pdfURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log(this.pdfURL)
      }
    } else {
      this.imageURLName = file.name
      this.imageValid = false
      this.selectedImage = file
      reader.readAsArrayBuffer(file)
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        // this.selectedFile=event.target.result
        var blob = new Blob([event.target.result], { type: file.type }); // Create Blob object
        var url = URL.createObjectURL(blob);
        // console.log(url)
        // if(file.type=="image/png" || file.type=="image/jpeg" || file.type=="image/jpg")
        this.imageURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        console.log(this.imageURL)
      }
    }

    console.log(file)


  }
  onFileChanged2(event: any, index: number, type: string) {
    const file = event.target.files[0];
    if (type === 'informations') {
      this.informations[index].documentOfProof = file;
    } else if (type === 'experiences') {
      this.experiences[index].reletter = file;
    } else if (type === 'qualifications') {
      this.qualifications[index].documentOfQualification = file;
    }
  }
  onSubmit(formGroup: any) {
    this.submit = true;
    if (formGroup.valid && this.selectedImage && this.selectedFile) {
      const formData = new FormData();
      formData.append('firstName', this.basicInfo.firstName);
      formData.append('lastName', this.basicInfo.lastName);
      formData.append('phoneNumber', this.basicInfo.phoneNumber);
      formData.append('dob', this.basicInfo.dob);
      formData.append('gender', this.basicInfo.gender);
      formData.append('maritalStatus', this.basicInfo.maritalStatus);
      formData.append('picture', this.selectedImage);
      formData.append('resume', this.selectedFile);

      this.loginService.saveBasicInformationWithFiles(formData).subscribe((response: any) => {
        console.log('Form submitted successfully', response)
        this.basicInfoId = response.id

        sessionStorage.setItem("basicInfoId", JSON.stringify(this.basicInfoId))


        // this.router.navigate(['/personal-information'])
      }, error => {
        console.error('Error submitting form', error);
      })



      console.log(formData);
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      // Proceed with form submission, e.g., call an API
      // this.http.post('your-api-endpoint', formData).subscribe(response => {
      //   console.log('Form submitted successfully', response);
      // }, error => {
      //   console.error('Error submitting form', error);
      // });
    } else {
      console.log('Form is invalid or files are not selected');
    }

  }

  changeGender(e: any) {
    // this.user.role[0].roleName = e.target.value
    // console.log(e.target.value)
    // console.log(this.user)
    // console.log(this.selectedRole)
  }


  informations: { proof: string, proofId: string, documentOfProof: any | null }[] =[];

  addInformation() {
    this.informations.push({ proof: '', proofId: '', documentOfProof: null });
    console.log(this.informations)
  }
  savePersonalDetails() {

    console.log(this.informations)

    const formData = new FormData();
    this.informations.forEach((info, index) => {
      formData.append(`proof`, info.proof);
      formData.append(`proofId`, info.proofId);
      if (info.documentOfProof) {
        formData.append(`documentOfProof`, info.documentOfProof);
      }
    });

    this.loginService.savePersonalInformation(formData, this.basicInfoId).subscribe(res => {
      console.log(res)
    })
    // const formData = new FormData();
    // this.informations.forEach((info, index) => {
    //   formData.append(`proof${index}`, info.proof);
    //   formData.append(`proofId${index}`, info.proofId);
    //   if (info.documentOfProof) {
    //     formData.append(`document${index}`, info.documentOfProof);
    //   }
    // })
    // formData.forEach((value, key) => {
    //   console.log(`${key}:`, value);
    // });
  }
  removeInformation(index: number) {
    this.informations.splice(index, 1);
  }
  resetForm() {
    this.informations = [];
  }

  qualifications: { qualification: string, specialization: string, academicyear: string, documentOfQualification: File | null }[] = [];


  addQualification() {
    this.qualifications.push({ qualification: '', specialization: '', academicyear: '', documentOfQualification: null });

  }

  saveQualification() {
    console.log(this.qualifications)
    const formData = new FormData();
    this.qualifications.forEach((qualification, index) => {
      formData.append(`specialization`, qualification.specialization);
      formData.append(`qualification`, qualification.qualification);
      formData.append(`academicYear`, qualification.academicyear);
      if (qualification.documentOfQualification) {
        formData.append(`documentOfQualification`, qualification.documentOfQualification)
      }
    });
    // formData.forEach((value,key)=>{
    //   console.log(`${key}:`,value)
    // })
    this.loginService.saveQualification(formData,this.basicInfoId).subscribe(response=>{
      console.log(response)
    })
  }

  removeQualification(index: number) {
    this.qualifications.splice(index, 1);
  }
  experiences: { company: string, joined:string, releaved: string, ctc: number|null, reletter: File|null, reason: string }[] = [] ;

  addExperience() {
    
    this.experiences.push({ company: '', joined: '', releaved: '', ctc: null, reletter: null, reason: '' });

  }
  saveExperience(){
    console.log(this.experiences)
    const formData=new FormData()
    this.experiences.forEach((experience,index)=>{
      formData.append(`companyName`,experience.company);
      formData.append('joinedDate',experience.joined)
      formData.append(`releavedDate`,experience.releaved)
      if(experience.ctc){
        formData.append(`ctc`,experience.ctc.toString())
      }
      if(experience.reletter){
        formData.append(`releavedLetter`,experience.reletter)
      }
      formData.append(`reason`,experience.reason)
    })
    this.loginService.saveExperience(formData,this.basicInfoId).subscribe(response=>{
      console.log(response)
    })
  }
  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }
  resetButton() {
    this.experiences = [];
  }
  reset() {
    this.qualifications = [];
  }
  formData: any = {
    gender: '',
    email: '',
    date: '',
    agree: false
    // };
    // submit: boolean = false;

    // onSubmit(form: any) {
    //   this.submit = true;
    //   if (form.valid) {
    //     // Handle form submission logic here
    //     console.log('Form Submitted!', this.formData);
    //   } else {
    //     console.log('Form is invalid');
    //   }
    // }

  }
}
