import React from 'react';
import './Business.css';

class Business extends React.Component {
    // state = {  }
    render() { 
  return (
        <div class="Business">
  <div class="image-container">
    <img src={this.props.business.imageSrc} alt=''/>
  </div>
        <h2>{this.props.business.name}</h2>
  <div class="Business-information">
    <div class="Business-address">
      <a href={`http://maps.google.com/maps?q=${this.props.business.address},
      ${this.props.business.city},${this.props.business.city},${this.props.business.zipCode}`} 
      target="_blank" title="View on Google map">
      <p>{this.props.business.address}</p>
      <p>{this.props.business.city}</p>
      <p>{this.props.business.state} {this.props.business.zipCode}</p>
      </a>

    </div>
    <div class="Business-reviews">
      <h3>{this.props.business.category}</h3>
      <h3 class="rating">{this.props.business.rating} stars</h3>
      <p>{this.props.business.reviewCount} reviews</p>
    </div>
  </div>
</div>
        );
    }
}
 
export default Business;