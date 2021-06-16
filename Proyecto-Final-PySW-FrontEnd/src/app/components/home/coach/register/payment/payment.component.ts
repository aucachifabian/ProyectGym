import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/payment/payment';
import { Student } from 'src/app/models/student/student';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { StudentService } from 'src/app/services/student/student.service';
import * as printJS from 'print-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  Student: Array<Student>;
  student: Student;

  payment = new Payment()


  constructor(private paymentService: PaymentService,
    private studentService: StudentService) {
    this.getStudents()
  }
  ngOnInit(): void {
  }


  print() {
    printJS('printJS-form', 'html');
  }

  createPayment() {
    this.paymentService.createPayment(this.payment).subscribe(
      result => {
        console.log(result);
        console.log(this.payment);
      },
      err => {
      }
    )
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      result => {
        this.Student = new Array<Student>();
        result.forEach(element => {
          this.student = new Student();
          Object.assign(this.student, element);
          this.Student.push(this.student);
        });
        console.log(this.Student);
      },
      err => {
        console.log(err);
      }
    )
  }

  async buscar_student() {
    await this.studentService.getStudent(this.payment.student._id).subscribe(
      reslt => {
        this.payment.name_arrangement = reslt.arrangement.name
        this.payment.amount_hour = reslt.arrangement.amount_hour
        this.payment.amount_day = reslt.arrangement.amount_day
        this.payment.price = reslt.arrangement.price
        console.log(reslt.arrangement)
      },
      err => {
        console.log(err)
      }
    )
  }




}
