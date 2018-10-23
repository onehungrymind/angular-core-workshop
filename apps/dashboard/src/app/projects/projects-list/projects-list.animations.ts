import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';

export const LIST_ANIMATION = trigger('listAnimation', [
  transition(':enter, :leave, * => pending', []),
  transition('* => *', [
    // animate both the newly entered and removed items on the page
    // at the same time
    group([
      query(':enter', [
        style({ opacity: 0, height: '0px' }),
        stagger('50ms', [
          animate('500ms cubic-bezier(.35,0,.25,1)', style('*'))
        ])
      ], { optional: true }),

      query(':leave', [
        stagger('50ms', [
          animate('500ms cubic-bezier(.35,0,.25,1)', style({ opacity: 0, height: '0px', borderTop: 0, borderBottom: 0 }))
        ])
      ], { optional: true })
    ]),
  ]),
])
