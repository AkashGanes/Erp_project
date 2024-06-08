<<<<<<< HEAD
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginSignupService } from '../service/login-signup.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { error } from 'console';
=======
import { Component } from '@angular/core';
>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrl: './staff-view.component.scss'
})
<<<<<<< HEAD
export class StaffViewComponent implements OnInit,OnDestroy{
constructor(public router:ActivatedRoute,private service:LoginSignupService,private  sanitizer: DomSanitizer){}
id!:number
allInformation:any={

}
image:any
pdf:any
fileSizeMap: { [key: number]: string } = {};

ngOnInit(): void {
 this.id= this.router.snapshot.params['id']
 this.service.getBasicInformation(this.id).subscribe((res:any)=>{
  // console.log(res)
  this.allInformation=res
  this.fetchFileSizes();
  // console.log(this.allInformation.picture.name)
 },(error) => {
  console.error('Error fetching basic information', error);
})

}
getImage(id:number){

  if (this.image) {
    window.URL.revokeObjectURL(this.image);
  }
  this.service.getImage(id).subscribe((resp:Blob)=>{
    console.log(`Received image response for id ${id}`, resp);
    if (resp instanceof Blob) {
      const contentType = resp.type;
      const blob = new Blob([resp], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      this.image = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      window.open(url, '_blank');
    } else {
      console.error('Image response is not a Blob', resp);
    }
  },
  (error)=>{
    console.error('Error fetching image', error);
  })
}
getPdf(id:number): void {
  // Revoke the previous Blob URL if it exists
  if (this.pdf) {
    window.URL.revokeObjectURL(this.pdf as string);
  }

  this.service.getFile(id).subscribe((resp: Blob) => {
    console.log(`Received file response for id ${id}`, resp);
    if (resp instanceof Blob) {
      const contentType = resp.type;
      if (contentType !== 'application/pdf') {
        console.error('The response is not a PDF.');
        return;
      }
      const blob = new Blob([resp], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      window.open(url, '_blank');
    } else {
      console.error('File response is not a Blob', resp)
    }
  }, (error:any) => {
    console.error('Error fetching PDF', error);
  });
}

ngOnDestroy(): void {
  // Revoke the Blob URL to avoid memory leaks
  if (this.image) {
    window.URL.revokeObjectURL(this.image);
  }
}

fetchFileSizes(): void {
  const files = [
    this.allInformation.picture,
    this.allInformation.resume,
    ...this.allInformation.personalInformation.map((info: any) => info.documentOfProof),
    ...this.allInformation.educationalQualifications.map((edu: any) => edu.documentOfQualification),
    ...this.allInformation.workExp.map((exp: any) => exp.releavedLetter)
  ];
  // console.log(files)
  files.forEach(file => {
    if (file && file.id) {
      const fileExtension = this.getFileExtension(file.name).toLowerCase();
      if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
        this.fetchFileSize(file.id, true);
      } else {
        this.fetchFileSize(file.id, false);
      }
    }
  });
}
getFileExtension(fileName: string): string {
  return fileName.split('.').pop() || '';
}
fetchFileSize(id: number, isImage: boolean): void {
  const fetchService = isImage ? this.service.getImage(id) : this.service.getFile(id);

  fetchService.subscribe(
    (resp: Blob) => {
      if (resp instanceof Blob) {
        const size = this.convertFileSize(resp.size);
        this.fileSizeMap[id] = size;
      } else {
        console.error(`Unexpected response type for id ${id}`, resp);
      }
    },
    (error) => {
      console.error(`Error fetching file size for id ${id}`, error);
    }
  );
}
convertFileSize(size: number): string {
  if (size < 1024) {
    return size + ' bytes';
  } else if (size >= 1024 && size < 1048576) {
    return (size / 1024).toFixed(2) + ' KB';
  } else {
    return (size / 1048576).toFixed(2) + ' MB';
  }
}
getFileSize(id: number): string {
  return this.fileSizeMap[id] || 'Loading...';
}
}
=======
export class StaffViewComponent {

}
>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f
