import { Injectable } from '@angular/core';


@Injectable()
export class LoginService{
    public _isLogin=false;
    name:string;
    IsLogged():boolean{
        return this._isLogin;
    }
    SetLoggin(isLoggin:boolean)
    {
        this._isLogin=isLoggin;
    }
    Check(name:string,password:string):boolean
    {
        if(name=="admin" && password=="123456")
        {
            return true;
        }
        return false;
    }
    SetName(x:string)
    {
        this.name=x;
    }
    getName()
    {
        return this.name;
    }

}