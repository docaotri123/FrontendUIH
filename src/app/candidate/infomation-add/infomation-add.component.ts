import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CandidateService } from 'src/app/service/candidate.service';
import { JobService } from 'src/app/service/job.service';
import * as html2canvas from 'html2canvas';
import { ReviewCV } from 'src/app/models/reviewCV';
import { ImageCV } from 'src/app/models/ImageCV';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-infomation-add',
  templateUrl: './infomation-add.component.html',
  styleUrls: ['./infomation-add.component.scss']
})
export class InfomationAddComponent implements OnInit {
  inforCandidate:any;
  inforCandidate1:any;
  candidateSkill:any;
  candidateLanguage:any;
  candidateExperience:any;
  image:string;
  img:string;
  review:ImageCV;
  imgageData:string;
  constructor(private candidateService:CandidateService,private jobService: JobService) { }
  
  ngOnInit() {
    if(this.candidateService.IsLogged()==true)
    {
      this.jobService.getInfoCandidate(this.candidateService.getId())
      .subscribe(res =>{
        this.inforCandidate=res;
    
        
      });

       this.jobService.getCandidateSkill(this.candidateService.getId())
       .subscribe(res =>{
         this.candidateSkill=res;
        // console.log(this.candidateSkill);
       });

       this.jobService.getLanguage(this.candidateService.getId())
       .subscribe(res =>{
         this.candidateLanguage=res;
         //console.log(this.candidateLanguage);
       });

       this.jobService.getExperience(this.candidateService.getId())
       .subscribe(res =>{
         this.candidateExperience=res;
         console.log(this.candidateExperience);
       });

     
    }
  }


  downloadImage(){
    // html2canvas(this.screen.nativeElement).then(canvas => {
    //   this.canvas.nativeElement.src = canvas.toDataURL();
    //   this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
    //   this.downloadLink.nativeElement.download = 'marble-diagram.png';
    //   //alert(this.downloadLink.nativeElement.href);
    //   var file:File =this.screen.nativeElement.file;
    //   var myReader:FileReader = new FileReader();

    //   myReader.onloadend = (e) => {
    //     this.image =myReader.result as string;
    //   }
    //   myReader.readAsDataURL(file);
      
    //   myReader.onload = (): void => {
    //     const base64String: string = (myReader.result as string).match(
    //         /.+;base64,(.+)/
    //     )[1];
    //     this.img=base64String;
    //     //alert(base64String);
    //     // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    //     //            + base64String);
    //   };

    //   //this.downloadLink.nativeElement.click();

    // });
  }

  UploadCV()
  {
    this.jobService.getInfoCandidate(this.candidateService.getId())
    .subscribe(res =>{
      this.inforCandidate=res;
      
    });

     this.jobService.getCandidateSkill(this.candidateService.getId())
     .subscribe(res =>{
       this.candidateSkill=res;
     });

     this.jobService.getLanguage(this.candidateService.getId())
     .subscribe(res =>{
       this.candidateLanguage=res;
     });

     this.jobService.getExperience(this.candidateService.getId())
     .subscribe(res =>{
       this.candidateExperience=res;
       console.log(this.candidateExperience);
     });

  }
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

  
  OK()
  {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.imgageData =canvas.toDataURL("image/png");
      this.review=new ImageCV();
      this.review.UserId=this.candidateService.getId();
      this.review.Charcode=this.imgageData;
      this.jobService.urlupdateCV(this.review)
      .subscribe(res =>{
        if(res=="OK")
        {
          alert("Update CV thanh cong");
        }
        else
        {
          alert("Update CV that bai");
        }
      });
      
      this.jobService.getCV(this.candidateService.getId())
      .subscribe(res =>{
        this.img=res;
        alert(res);
      });

      




      //alert(this.downloadLink.nativeElement.href);
      // var file:File =this.screen.nativeElement.file;
      // var myReader:FileReader = new FileReader();

      // myReader.onloadend = (e) => {
      //   this.image =myReader.result as string;
      // }
      // myReader.readAsDataURL(file);
      
      // myReader.onload = (): void => {
      //   const base64String: string = (myReader.result as string).match(
      //       /.+;base64,(.+)/
      //   )[1];
      //   this.img=base64String;
      //   //alert(base64String);
      //   // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      //   //            + base64String);
      // };
    });
  }
  @ViewChild('content') content:ElementRef
  Export()
  {
    alert('ccc');
    let doc=new jsPDF();
    let specialElemenHandlers={
      '#editor':function(element,redderer)
      {
        return true;
      }
    }
    let content=this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':300,
       'height':300,
      'elementHandlers':specialElemenHandlers
    });
    alert(this.img);
    doc.addImage(this.img,'JPEG',15,40,300,300);
    doc.save('test.pdf');
  }
}
