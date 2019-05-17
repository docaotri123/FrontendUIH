import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-info-candidate',
  templateUrl: './info-candidate.component.html',
  styleUrls: ['./info-candidate.component.scss']
})
export class InfoCandidateComponent implements OnInit {
  id:string;
  
  idJob:string;
  inforCandidate:any[]=[];
  x:any;
  image:string;
  imagePath:any;
  img:string;
  constructor(private route:ActivatedRoute,private jobService:JobService,private _sanitizer: DomSanitizer) 
  {
    this.id=this.route.snapshot.params['id'];
    this.idJob=this.route.snapshot.params['idJob'];
  }
  ngOnInit() {
    this.jobService.getImageCV(this.id)
    .subscribe(res =>{
        this.img=res;
     });
    //tim kiem thong tin va hien thi ra day
    
    
    //  this.jobService.candidate(this.id)
    //  .subscribe(response => {
    //        this.inforCandidate=response;
    //        this.x=response;
    //        console.log(this.inforCandidate.length);
    //      // cach 1:  console.log("Tai sao"+this.inforCandidate[0].email);
        
    //  },err=>{
    //     //alert('an that  that bai');
    // });
  }
  CC()
  {
    this.jobService.getCV(2)
    .subscribe(res =>{
      this.img=res;
    
     });
 
  }
  // @ViewChild('content') content:ElementRef
  // Export()
  // {
  //   alert('ccc');
  //   let doc=new jsPDF();
  //   let specialElemenHandlers={
  //     '#editor':function(element,redderer)
  //     {
  //       return true;
  //     }
  //   }
  //   let content=this.content.nativeElement;
  //   doc.fromHTML(content.innerHTML,15,15,{
  //     'width':190,
  //     'elementHandlers':specialElemenHandlers
  //   });
  //   alert(this.img);
  //   doc.addImage(this.img,'JPEG',15,40,180,160);
  //   doc.save('test.pdf');
  // }



  // @ViewChild('screen') screen: ElementRef;
  // @ViewChild('canvas') canvas: ElementRef;
  // @ViewChild('downloadLink') downloadLink: ElementRef;

  // downloadImage(){
  //   var huy;
  //   html2canvas(this.screen.nativeElement).then(canvas => {
  //     this.canvas.nativeElement.src = canvas.toDataURL();
  //     huy=canvas.toDataURL('image/png');
  //     this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
  //     var imgageData =canvas.toDataURL("image/png");
  //     alert(imgageData);
  //     this.imagePath=imgageData;
  //     // var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
  //     // this.imagePath=this.canvas;
  

  //     //alert(this.downloadLink.nativeElement.href);

  //     //this.downloadLink.nativeElement.click();

  //   });
   
   
    // var file1:File;


    // //var file:File=file1;
    // var myReader:FileReader = new FileReader();

    // myReader.onloadend = (e) => {
    //   this.image =myReader.result as string;
    // }
    // myReader.readAsDataURL(file1);
    
    // myReader.onload = (): void => {
    //   const base64String: string = (myReader.result as string).match(
    //       /.+;base64,(.+)/
    //   )[1];
    //   this.img=base64String;
    //   alert(this.img);
    //   alert("concac");
    //   //alert(base64String);
    //   // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    //   //            + base64String);
    // };
  //}
  
  // changeListener($event) : void {
  //   this.readThis($event.target);
  // }

  // readThis(inputValue: any): void {
  //   alert(inputValue.files[0]);
  //   var file:File = inputValue.files[0];
  //   var myReader:FileReader = new FileReader();
  
  //   myReader.onloadend = (e) => {
  //     this.image =myReader.result as string;
  //   }
  //   myReader.readAsDataURL(file);
    
  //   myReader.onload = (): void => {
  //     const base64String: string = (myReader.result as string).match(
  //         /.+;base64,(.+)/
  //     )[1];
  //     alert(base64String);
  //     this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
  //                + base64String);
  //   };

  // }

}
