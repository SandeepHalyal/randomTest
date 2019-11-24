import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { MainService } from "../main.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements AfterContentChecked, OnInit {
  employeeData: any = {
    name: "XYZ",
    desg: "Designation",
    newctc: 0,
    ctc: 0
  };
  type: any;
  decoy: any;
  letter: any;

  desgOptions: any;
  newDesg = false;
  toggle() {
    this.newDesg = !this.newDesg;
  }

  constructor(private service: MainService, private route: ActivatedRoute) { }

  ngAfterContentChecked() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.letter = this.route.snapshot.paramMap.get('letter')
  }

  ngOnInit() {
    this.service.apiMiddleWareGet("letters/sendDesg").subscribe(res => {
      this.desgOptions = res;
    })
  }

  editLetter(data: any) {
    console.log(data)
    this.employeeData = data;
    console.log(this.employeeData)
    this.service.apiMiddlewarepPost(this.employeeData, "letters/appletter").subscribe(res => {
      console.log(res)
    })
  }
}
