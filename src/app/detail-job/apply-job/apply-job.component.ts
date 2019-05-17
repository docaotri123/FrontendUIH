import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.scss']
})
export class ApplyJobComponent implements OnInit {
  @Input() listCandidate:any;
  @Input() infoJob:any;
  imagePath:any;
  image:string;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  
  fileToUpload: File = null;//khai bao gia tri

  handleFileInput(files: FileList) {
    alert('cc');
      // var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    this.fileToUpload = files.item(0);
    myReader.onloadend = (e) => {
       this.image =myReader.result as string;
     }
     myReader.readAsDataURL(this.fileToUpload);
    
     myReader.onload = (): void => {
       const base64String: string = (myReader.result as string).match(
           /.+;base64,(.+)/
       )[1];
       
      
      this.imagePath=base64String;
     };
  }

  changeListener($event) : void {
     this.readThis($event.target);
   }

   readThis(inputValue: any): void {
  //   alert(inputValue.files[0]);
     var file:File = inputValue.files[0];
     var myReader:FileReader = new FileReader();
  
     myReader.onloadend = (e) => {
       this.image =myReader.result as string;
     }
     myReader.readAsDataURL(file);
    
     myReader.onload = (): void => {
       const base64String: string = (myReader.result as string).match(
           /.+;base64,(.+)/
       )[1];
  //     alert(base64String);
       this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
                  + base64String);
     };
    }

    pdfSrc: string = '/pdf-test.pdf';
    file:File;
    upload(event) {
    this.file = event.target.files[0];
  }
    

}
