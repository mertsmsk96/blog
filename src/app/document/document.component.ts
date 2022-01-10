import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { Document } from './document';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  providers: [DocumentService]
})
export class DocumentComponent implements OnInit {
  constructor(private documentService:DocumentService,private activetedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.activetedRoute.params.subscribe(params=>{
      this.documentService.getDocuments(params["categoryName"]).subscribe(data=>{
        this.documents = data
      })
    })
   
  }

  documents : Document[];

  searchText = ""
}
