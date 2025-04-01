import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ this is important
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-confirmation-summary',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './confirmation-summary.component.html',
  styleUrls: ['./confirmation-summary.component.css']
})
export class ConfirmationSummaryComponent {
  submitted = false;

  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;

  generatePdf(): void {
    html2canvas(this.pdfContent.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('quote-summary.pdf');
    });
  }

  submitQuote(): void {
    this.submitted = true;
  }
}

