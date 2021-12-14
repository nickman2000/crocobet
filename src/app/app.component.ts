import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  castInfo$ : Observable<IData[]> = this.http.get<IData[]>('https://jsonplaceholder.typicode.com/todos');
  castPosts$ : Observable<IPost[]> = this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');



  // ცვლადების შექმნა
  custumersNames : string[]  = [];
  custumersInfo: string[] = [];
  showCustumerInfo: boolean = false;
  custumerInfo: any[] = [];
  custumerId: number = 0;
  custumerUserId: number = 0;
  custumerName: string = '';
  custumerCompleted: string = '';
  showPost: boolean = false;
  postData: any[] = [];


  constructor (private readonly http: HttpClient) {}
    
  ngOnInit () {}

  // მომხმარებლის ინფორმაციის გახსნა, და ვარიაბლებში ჩასეტვა ჰტმლ ისთვის
  openInfo(item:IData) {
    this.showCustumerInfo = true;
    this.custumerInfo.push(item);
    this.custumerId = item.id;
    this.custumerUserId = item.userId;
    this.custumerName = item.title;
    if (item.completed) {
      this.custumerCompleted = 'დიახ';
    } else {
      this.custumerCompleted = 'არა';
    }
  }
  // უკან დაბრუნების  ღილაკი 
  backToCustumers(){
    this.custumerInfo = [];
    this.showCustumerInfo = false;
  }

  //პოსტების გამოჩენა
  showPosts() {
    this.showPost = true;
  }

  //მომხმარებლის გვერდზე დაბრუნება 
  goBackPage () {
    this.showPost = false;
  }

  //მთავარ გვერდზე დაბრუნება
  onMainPage(){
    this.showPost = false;
    this.showCustumerInfo = false;
  }

}

// ჩვენი დაგეთილი ინფოს ინტერფეისი
interface IData {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

interface IPost {
  userId: number,
  id: number,
  title: string,
  body: Title,
}

