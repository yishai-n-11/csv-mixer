import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.scss'],
})
export class MixerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fileChanged(event: any) {
    console.log('event', event.target.files[0]);
    const file = event.target.files[0];
    console.log('file', file);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file, 'utf-8');
  }
}
