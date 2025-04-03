import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-submission',
  imports: [CommonModule, FormsModule],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})
export class SubmissionComponent {
  Math = Math; 
  searchTerm = '';
  selectedForm = '';
  selectedStatus = '';
  selectedDate = '';
  viewMode: 'map' | 'list' = 'list';
  currentPage = 1;
  itemsPerPage = 10;

  submissions = [
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: 'Oct 6, 02:38 AM',
      dueDateColor: 'red'
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
      dueDate: 'Oct 6, 01:40 PM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: 'Oct 6, 02:38 AM',
      dueDateColor: 'red'
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
      dueDate: 'Oct 6, 01:40 PM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Uncomplete',
      statusColor: 'orange',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '4140 Parker Rd. Allentown, New Mexico 31134',
      dueDate: 'Oct 7, 01:14 AM',
      dueDateColor: 'red'
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Unassigned',
      statusColor: 'gray',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: 'Oct 7, 01:14 AM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Unassigned',
      statusColor: 'gray',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      dueDate: 'Oct 7, 03:56 AM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Uncomplete',
      statusColor: 'orange',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '8502 Preston Rd. Inglewood, Maine 98380',
      dueDate: 'Oct 7, 04:20 PM',
      dueDateColor: 'red'
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Uncomplete',
      statusColor: 'orange',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '8502 Preston Rd. Inglewood, Maine 98380',
      dueDate: 'Oct 8, 04:12 AM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: 'Oct 8, 04:37 AM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Uncomplete',
      statusColor: 'orange',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '8502 Preston Rd. Inglewood, Maine 98380',
      dueDate: 'Oct 8, 04:12 AM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: 'Oct 8, 04:37 AM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      dueDate: 'Oct 9, 06:12 PM',
      dueDateColor: ''
    },
    {
      task: 'Incident: Safety Violation',
      status: 'Uncomplete',
      statusColor: 'orange',
      from: 'sam@zendu.com',
      to: 'john@zendu.com',
      address: '6626 Clark Rd. Amarillo, Texas 79118',
      dueDate: 'Oct 10, 11:00 AM',
      dueDateColor: 'red'
    },
    {
      task: 'Inspection: Vehicle Check',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'jane@zendu.com',
      to: 'fleet@zendu.com',
      address: '4431 Glenwood Ave. Dallas, Texas 75205',
      dueDate: 'Oct 10, 02:00 PM',
      dueDateColor: ''
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'dev@zendu.com',
      to: 'qa@zendu.com',
      address: '1007 Pine Valley Blvd. Denver, Colorado 80203',
      dueDate: 'Oct 11, 09:00 AM',
      dueDateColor: ''
    },
    {
      task: 'Follow-Up: Field Report',
      status: 'Unassigned',
      statusColor: 'gray',
      from: 'admin@zendu.com',
      to: 'tracy@zendu.com',
      address: '5708 Ridgecrest Dr. Miami, Florida 33101',
      dueDate: 'Oct 11, 01:15 PM',
      dueDateColor: ''
    },
    {
      task: 'Incident: Site Hazard',
      status: 'Uncomplete',
      statusColor: 'orange',
      from: 'hazard@zendu.com',
      to: 'safety@zendu.com',
      address: '9328 Elm St. Las Vegas, Nevada 89101',
      dueDate: 'Oct 11, 04:00 PM',
      dueDateColor: 'red'
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'support@zendu.com',
      address: '3098 Hilltop Ave. Chicago, Illinois 60601',
      dueDate: 'Oct 12, 08:45 AM',
      dueDateColor: ''
    },
    {
      task: 'Inspection: Monthly Audit',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'auditor@zendu.com',
      to: 'records@zendu.com',
      address: '1198 Pinecrest Rd. Seattle, Washington 98101',
      dueDate: 'Oct 12, 01:30 PM',
      dueDateColor: ''
    },
    {
      task: 'Follow-Up: Equipment Review',
      status: 'Unassigned',
      statusColor: 'gray',
      from: 'ops@zendu.com',
      to: 'maint@zendu.com',
      address: '2219 Beacon St. Boston, Massachusetts 02108',
      dueDate: 'Oct 13, 10:00 AM',
      dueDateColor: ''
    },
    {
      task: 'Inspection: Fire Drill Review',
      status: 'Uncomplete',
      statusColor: 'orange',
      from: 'safety@zendu.com',
      to: 'tracy@zendu.com',
      address: '7119 Cedar St. Phoenix, Arizona 85001',
      dueDate: 'Oct 13, 03:00 PM',
      dueDateColor: 'red'
    },
    {
      task: 'Work Flow: Requires Location',
      status: 'Low Risk',
      statusColor: 'green',
      from: 'zendu@zendu.com',
      to: 'tracy@zendu.com',
      address: '9447 Lincoln Blvd. Portland, Oregon 97201',
      dueDate: 'Oct 14, 06:00 PM',
      dueDateColor: ''
    },
    {
      task: 'Follow-Up: Risk Evaluation',
      status: 'Unassigned',
      statusColor: 'gray',
      from: 'risk@zendu.com',
      to: 'tracy@zendu.com',
      address: '8156 Spruce Ave. Columbus, Ohio 43215',
      dueDate: 'Oct 15, 08:30 AM',
      dueDateColor: ''
    }
  ];
  
  


get filteredSubmissions() {
  let result = this.submissions;

  if (this.selectedStatus) {
    result = result.filter(s => s.status === this.selectedStatus);
  }

  return result;
}

get pagedSubmissions() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  return this.filteredSubmissions.slice(start, start + this.itemsPerPage);
}

get totalPages() {
  return Math.ceil(this.filteredSubmissions.length / this.itemsPerPage);
}


goToPage(page: number) {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
}
}
