import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  @ViewChild('menuBtn', { static: false }) menuBtn: ElementRef;
  formGroup: FormGroup;
  selectedDr:string='Select Doctor'
  Doctorlist:any[]=[
    {
      name:"Dr Arun", specializedIN:"Cardiologist"
    },
    {
      name:"Dr Amal", specializedIN:"orthopedic"
    },
    {
      name:"Dr Ashna", specializedIN:"gynaecologist"
    },
    {
      name:"Dr Brinda", specializedIN:"pediatrician"
    }
  ]
  constructor(private formBuilder: FormBuilder,
    public toastr : ToastrService) {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      phone: [null, Validators.required],
      location: [null, Validators.required],
      email: [null],
      doctor: [null, Validators.required],
      specializedIN:[null],
      date:[null,Validators.required],
      details:[null]
    });
  }

  ngOnInit(): void {

  }

  selectDoctor(Doc){

    this.selectedDr=Doc.name;
    this.formGroup.patchValue({
      doctor:Doc.name,
      specializedIN:Doc.specializedIN
    })
  }

  onSubmit(data){
localStorage.setItem('data',JSON.stringify(data))
this.toastr.success('Sucessfully applied')
window.history.back()
  }
}
