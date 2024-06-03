import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'scss-testing';
  blocksClasses: string[] = [];

  ngOnInit(): void {
    const classTypes: string[] = [
      'xs',
      's',
      'm',
      'l',
      'xl'
    ];

    for (const classType of classTypes) {
      this.blocksClasses.push(`visible-${classType}`);
    }
  }
}
