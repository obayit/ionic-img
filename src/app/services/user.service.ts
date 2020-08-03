import { Injectable } from '@angular/core';

interface User{
  email: string
  uid: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor() { }
  setUser(user: User){
    this.user = user;
  }
  getUid(){
    return this.user.uid;
  }
}
