import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBindingApp';

  count:number = 0;
  hideLabel:boolean = true;

  buttonPressed()
  {
    console.log("Button Pressed");
    this.count++;
  }

  starClicked()
  {
    console.log("Star Clicked");
    if(this.hideLabel == true)
    {
      this.hideLabel = false;
    }
    else
    {
      this.hideLabel = true;
    }
    
    
  }
}
