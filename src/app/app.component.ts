import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InternshipManagementSystem';
  getUrl()
{
  return "url('https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiy8PWv8uPkAhWBT30KHaTeABIQjRx6BAgBEAQ&url=https%3A%2F%2Fwallpapercave.com%2Findigo-wallpapers&psig=AOvVaw3M-0WD-ACt78sc_lRCswSo&ust=1569223269216379')";
}
}
