import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-call-agent',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './call-agent.component.html',
  styleUrls: ['./call-agent.component.css']
})
export class CallAgentComponent {
  isAgentModalOpen = false;

  openAgentModal(): void {
    this.isAgentModalOpen = true;
  }

  closeAgentModal(): void {
    this.isAgentModalOpen = false;
  }
}
