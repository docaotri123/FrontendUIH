import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../service/login.service';
import { TeacherComponent } from '../teacher/teacher/teacher.component';

@Injectable()
export class CheckLoginGuard implements CanActivate
{
    
    constructor(private loginservice:LoginService)
    {

    }
    canActivate()
    {
        let status=this.loginservice.IsLogged();
        if(status==false)
        {
            alert('you dont have permission');
        }
        if(status==true)
        {
            alert('ccc');
        }
        return this.loginservice.IsLogged();
    }
}