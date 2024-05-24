import { Component } from '@angular/core';
import { SwalMessages } from '../../../commons/_dto/swal-messages';
import { Router } from '@angular/router';

declare var $: any; // JQuery

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent { 

  swal: SwalMessages = new SwalMessages(); // Swal messages

  constructor(private router: Router) {} // Inject Router in constructor

  goToProgress() {
    this.router.navigate(['/progreso']); // Navigate to desired view
  }

  goToComunidad() {
    this.router.navigate(['/comunidad']); // Navigate to desired view
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
  }

  showRegisterModal() {
    $("#registerModal").modal("show");
  }
}