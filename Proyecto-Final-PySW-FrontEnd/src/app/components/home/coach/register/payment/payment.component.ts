import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment/payment';
import { Student } from 'src/app/models/student/student';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { StudentService } from 'src/app/services/student/student.service';
import * as printJS from 'print-js';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public formDni : string;
  public payment : Payment;
  public student : string;

  /**************************************************************/

  constructor(private paymentService: PaymentService,
              private studentService: StudentService,
              private toastr : ToastrService) {

    this.payment = new Payment();
  }

  /**************************************************************/

  ngOnInit(): void {
  }

  /**************************************************************/

  print() {
    printJS('printJS-form', 'html');
  }

  /**************************************************************/

  public searchDni() : void {
    this.studentService.getStudentByDni(this.formDni).subscribe(
      result => {
        if(result.status == "1"){
          this.toastr.success("","Success");

          this.student = result.student.name +" "+ result.student.surname;
          this.payment.student = result.student._id;
          this.payment.name_arrangement = result.student.arrangement.name;
          this.payment.price = result.student.arrangement.price;
          this.payment.amount_day = result.student.arrangement.amount_day;
        }
        else {
          this.toastr.error(result.msg, "Error");
        }
      },

      error => {
        this.toastr.error("ERROR","ERROR");
      }
    );
  }

  /**************************************************************/

  public createPayment(formSearch : NgForm, formPrint : NgForm) : void {
    this.paymentService.createPayment(this.payment).subscribe(
      result => {
        if(result.status == "1"){
          this.toastr.success(result.msg,"Success");
          formSearch.reset();
          formPrint.reset();
          this.formDni = "";
          this.payment = new Payment();
          this.student = "";
        }
        else {
          this.toastr.error(result.msg,"Error");
        }
      },
      error => {
        this.toastr.error("ERROR","ERROR");
      }
    );
  }

  /**************************************************************/

}
