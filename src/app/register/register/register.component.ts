import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Service/Api-Service/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private router: ActivatedRoute, private route: Router,private api:ApiServiceService) {}
  registerSchema: any = {
    customerName: '',
    mobileNumber: '',
    address: '',
    gender: '',
  };

  navigateToLogin() {
    this.route.navigate(['/login']);
  }
  validationForRegistration() {
    let valid = false;

    if (this.registerSchema.customerName.length <= 5) {
      alert('First Name must be 5 characters long');
      return valid;
    }

    if (this.registerSchema.mobileNumber.length !== 10) {
      alert('Please provide a valid 10-digit Mobile Number');
      return valid;
    }

    if (this.registerSchema.address.length < 5) {
      alert('Please provide a valid Address');
      return valid;
    }

    if (this.registerSchema.gender.length < 3) {
      alert('Please provide Gender');
      return valid;
    }

    valid = true;
    return valid;
  }

  registerCustomer() {
    if (this.validationForRegistration()) {
      console.log(this.registerSchema);
    }
  }

  registerAsCustomer(body:any) {
    this.api.registerCustomer(body).subscribe(
      (res) => {
        if (res) {
        }
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
