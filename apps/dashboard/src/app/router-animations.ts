import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';

export const ROUTER_ANIMATION = trigger('routerAnimations', [
  // this will skip on load
  transition(':enter, initial => *', []),

  // this occurs between each route change
  transition('* => *', [
    // route-level animations require that both the new and old pages are
    // aligned at the top of the container using absolute positioning. The
    // top container (the one with [@routerAnimations]) needs to relative...
    style({position: 'relative'}),
    query(':enter, :leave', style({position: 'absolute', top: 0, left: 0, right: 0})),

    // hide all the cards since each route makes use of that
    query(':enter', [
      style({opacity: 0, transform: 'translateY(100%)'})
    ]),

    // animate away an in each of the cards on the pages
    group([
      query(':leave', stagger('200ms', [
        animate('600ms cubic-bezier(.35,0,.25,1)', style({transform: 'translateY(-100%)', opacity: 0}))
      ])),
      query(':enter', stagger('200ms', [
        animate('600ms cubic-bezier(.35,0,.25,1)', style({opacity: 1, transform: 'translateY(0%)'})),
      ])),
    ]),
  ])
]);
