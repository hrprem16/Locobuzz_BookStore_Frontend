import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  selectedRating: number = 0;

  updateRating(rating: number) {
    this.selectedRating = rating;
  }

  submitFeedback() {
    if (this.selectedRating) {
      alert('Thank you for your feedback! You rated us ' + this.selectedRating + ' stars.');
      // Here you can send the rating to your server for further processing
    } else {
      alert('Please select a rating!');
    }
  }


}
