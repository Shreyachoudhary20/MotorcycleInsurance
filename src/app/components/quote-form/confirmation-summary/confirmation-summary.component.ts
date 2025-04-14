import { Component, ViewChild, ElementRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-confirmation-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation-summary.component.html',
  styleUrls: ['./confirmation-summary.component.css']
})
export class ConfirmationSummaryComponent implements OnInit {
  submitted = false;

  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;

  @Input() customerInfo: any = {};
  @Input() driverInfo: any = {};
  @Input() motorcycleInfo: any = {};
  @Input() coverageInfo: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.allDataFilled()) {
      console.warn('Missing data. Redirecting...');
    }
  }

  allDataFilled(): boolean {
    return (
      this.customerInfo?.name &&
      this.customerInfo?.email &&
      this.driverInfo?.licenseNo &&
      this.motorcycleInfo?.makeModel &&
      this.coverageInfo?.type
    );
  }

  generatePdf(): void {
    html2canvas(this.pdfContent.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('quote-summary.pdf');
    });
  }

  submitQuote(): void {
    this.submitted = true;
  }

  goBack(): void {
    this.router.navigate(['/get-quote']);
  }
}



