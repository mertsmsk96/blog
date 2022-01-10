import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Document } from '../document/document';
import { Observable,throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class DocumentService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/documents"

  getDocuments(categoryName):Observable<Document[]>{

    let newPath = this.path;
    if(categoryName){
      newPath += "?categoryName=" + categoryName
    }

    return this.http.get<Document[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )    
  }
  handleError(err:HttpErrorResponse){
    let errorMessage  = ""
    if(err.error instanceof ErrorEvent){
      errorMessage = 'Bir hata oluştu '+err.error.message
    }else{
      errorMessage = "Sistemsel bir hata"
    }
    return throwError(errorMessage);
  }
}
