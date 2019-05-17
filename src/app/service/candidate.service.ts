import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogService } from './log.service';
@Injectable()
export class CandidateService implements CanActivate
{
    redirectUrl: string;
    public _isLogin=false;
    name:string;
    id:Number;
    canActivate(){
        return this._isLogin;   
         
    }
    IsLogged():boolean{
        return this._isLogin;
        
    }
    SetLoggin(isLoggin:boolean)
    {
        this._isLogin=isLoggin;
    }

    Check(name:string,password:string):boolean
    {
        if(name=="candidate" && password=="123456")
        {
            return true;
        }
        return false;
    }
    setName(x:string)
    {
        this.name=x;
    }
    getName()
    {
        return this.name;
    }
    setId(x:Number)
    {
        this.id=x;
    }
    getId()
    {
        return this.id;
    }
   
  
      
    
     
    
}