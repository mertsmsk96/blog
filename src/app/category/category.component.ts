import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
  })
}

  categories: Category[];

  title ="Kategoriler"

}
