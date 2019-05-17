import { CanActivate, CanActivateChild, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';
import { TeacherComponent } from '../teacher/teacher/teacher.component';
import { Candidate } from '../models/candidate';
import { CandidateService } from '../service/candidate.service';

@Injectable()
export class CheckCandidateGuard implements CanActivate
{
    
    constructor(private candidateService:CandidateService,private router: Router,)
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        if (this.candidateService.IsLogged()==true) 
        { 
            alert('Ban co quyen');
            return true; 
        } 
        
        this.candidateService.redirectUrl = state.url;
        this.router.navigate(['/']);
        return false;
        // let status=this.candidateService.IsLogged();
        // if(status==false)
        // {
        //     alert('you dont have permission');
        // }
        // if(status==true)
        // {
        //     alert('ccc');
        // }
        // return this.candidateService.IsLogged();
    }

    
}