import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/userInterface';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private URL="http://localhost:8080/"
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    //testing///
    return this.http.get<User[]>("");

  }
  
  getSingleUser():Observable<User>{
    return this.http.get<User>(this.URL+"");

  }
  createUsers(user :User):Observable<User>{
    return this.http.post<User>(this.URL+'',user);

  }

}
