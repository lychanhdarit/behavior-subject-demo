import { Component } from '@angular/core';
import { CommonService } from '../services/commonService';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: []
})
export class ContentComponent {
  title = 'behavior-subject-demo';
  result: number = 0;
  constructor(
    private commonService: CommonService, 
  ) { }
  ngOnInit(): void {
    this.commonService.test$.subscribe(rs => this.result = rs);
    this.commonService.reset();
  }
  Reset(): void {
    this.commonService.reset();
  }
}
