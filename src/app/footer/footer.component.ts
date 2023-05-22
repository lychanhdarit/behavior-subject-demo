import { Component } from '@angular/core';
import { CommonService } from '../services/commonService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: []
})
export class FooterComponent {
  title = 'behavior-subject-demo';
  result: number = 0;
  constructor(
    private commonService: CommonService, 
  ) { }
  ngOnInit(): void {
    this.commonService.test$.subscribe(rs => this.result = rs);
  }
}
