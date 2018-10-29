import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article: Article = { id: '', title: '', text: '' };
  id: string;
  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.getArticle(this.id).subscribe(
      article => {
        this.article = article;
        console.log(this.article);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }

  editArticle(title, text): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.editArticle(this.id, title, text).subscribe(data => {
      this.article = data;
      console.log(data);
    });
  }
}
