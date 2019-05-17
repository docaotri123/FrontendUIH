import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: any;
  location1: SelectItem[];
  level: SelectItem[];
  listJob:any[]=[
  ]



  constructor(private jobService: JobService,private router: Router) 
  {
        this.searchForm = new FormGroup({
        skill: new FormControl(''),
        location: new FormControl(''),
        level: new FormControl('')
        });
    }

  ngOnInit() {
    this.location1 = 
    [
      {label: 'Vui lòng chọn khu vực', value: ''},
      {label: 'Sài Gòn', value: 'HoChiMinh'},
      {label: 'Hà Nội', value: 'Hà Nội'},
      {label: 'Tây Ninh', value: 'Tây Ninh'},
    ];
    this.level=[
      {label: 'Vui lòng chọn kỹ năng', value: ''},
      {label:'Intership',value:'Internship'},
      {label:'Fresher',value:'Fresher'},
      {label:'Developer',value:'Developer'},
    ]
  }
  onSearch()
  {
    // this.jobService.searchJobs(JSON.stringify(this.searchForm.value))
    // .subscribe(res =>{
    //   console.log(res);
    // //location.href = '/detailjob';
    // this.router.navigate(['\listjob',res]);
    // });
   
    if(this.searchForm.value.location==undefined)
    {
       this.searchForm.value.location="tatca";
        alert('cc');
    }
    if(this.searchForm.value.level==undefined)
    {
        this.searchForm.value.level="tatca";
        
    }
    if(this.searchForm.value.skill.length==0)
    {
        this.searchForm.value.skill="tatca";
    }
    console.log(this.searchForm.value.skill);
    console.log(this.searchForm.value.location);
    console.log(this.searchForm.value.level);
    

   this.router.navigate(['listjob',this.searchForm.value.skill,this.searchForm.value.location,this.searchForm.value.level]);
  }
}
