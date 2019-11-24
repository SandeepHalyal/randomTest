import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MainService } from "../main.service";

@Component({
  selector: 'app-all-letters',
  templateUrl: './all-letters.component.html',
  styleUrls: ['./all-letters.component.css']
})
export class AllLettersComponent implements AfterContentChecked, OnInit {

  constructor(private route: ActivatedRoute, private services: MainService) { }

  type: string = "";
  letter: string;
  decoy: string = "";
  letterList: any;
  personData: any={};
  ngAfterContentChecked() {
    this.letter = this.route.snapshot.paramMap.get('letter');
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.letter)
    if (this.decoy != this.letter){
      this.decoy = this.letter;
      this.services.apiMiddlewarepPost({ lettertype: this.letter }, "letters/sendLettersData").subscribe(res => {
        this.letterList= res;
        console.log(res);
    })
    }
  }

  getPersonData(id: any){
    this.services.apiMiddlewarepPost({id: id}, "letters/sendperson").subscribe(res=>{
      console.log(res)
      this.personData= res;
    })
  }

  ngOnInit() {
  }
}
