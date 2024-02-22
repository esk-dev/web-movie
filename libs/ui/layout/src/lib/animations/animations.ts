import {
  state,
  style,
  animate,
  trigger,
  transition,
} from '@angular/animations';

export const openCloseAnimation = trigger('openClose', [
  state(
    'open',
    style({
      borderRadius: 10,
      height: 100,
      width: '85vw',
    })
  ),
  state(
    'close',
    style({
      borderRadius: 7,
      height: 35,
      width: 125,
    })
  ),
  transition('open => close', [animate('0.2s linear')]),
  transition('close => open', [animate('0.2s linear')]),
]);
