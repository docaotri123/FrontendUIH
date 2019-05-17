import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AdminService implements CanActivate
{
    redirectUrl: string;
    public _isLogin=false;
    name:string;
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
        if(name=="teacher" && password=="123456")
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
}