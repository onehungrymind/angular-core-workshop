import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customers-status',
  templateUrl: './customers-status.component.html',
  styleUrls: ['./customers-status.component.scss']
})
export class CustomersStatusComponent {
  customerGroups;

  @Input() set customers(value) {
    if(!value) return;
    this.customerGroups = this.groupCustomers(value);
  };

  groupCustomers(customers) {
    const grouped = this.groupBy(customers, 'status');
     return Object.keys(grouped)
      .map(key => ({ status: key, count: grouped[key] }));
  }

  groupBy(collection, property) {
    return collection.reduce((acc, curr) => {
      const key = curr[property]
      const existingEntry = acc[key];
      return (existingEntry) ?
        { ...acc, [key]: existingEntry + 1 } : // Increment it thereafter
        { ...acc, [key]: 1 }; // Set it the first time
    }, {});
  }
}
