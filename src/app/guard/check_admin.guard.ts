import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';
import { TeacherComponent } from '../teacher/teacher/teacher.component';
import { AdminService } from '../service/admin.service';

@Injectable()
export class CheckAdminGuard implements CanActivate
{
    
    constructor(private adminSerive:AdminService,private router: Router)
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        if (this.adminSerive.IsLogged()==true) 
        { 
            alert('Ban co quyen');
            return true; 
        } 
        alert('Ban ko co quyen')
        this.adminSerive.redirectUrl = state.url;
        this.router.navigate(['/']);
        return false;
        // let status=this.adminSerive.IsLogged();
        // if(status==false)
        // {
        //     alert('you dont have permission');
        // }
        // if(status==true)
        // {
        //     alert('ccc');
        // }
        // return this.adminSerive.IsLogged();
    }
}

//b1:dang nhap vao trong he thong
//b2: