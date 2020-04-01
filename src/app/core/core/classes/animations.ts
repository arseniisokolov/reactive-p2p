import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

/** Angular анимации */
export class Animations {

    public static getFadeIn(time = 300): AnimationTriggerMetadata {
        return trigger('fadeIn', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [
                style({ opacity: 0 }),
                animate(time)
            ]),
            transition(':leave', animate(0, style({ opacity: 0 })))
        ]);
    }

    public static getFadeOut(time = 300): AnimationTriggerMetadata {
        return trigger('fadeOut', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [
                style({ opacity: 0 }),
                animate(0)
            ]),
            transition(':leave', animate(time, style({ opacity: 0 })))
        ]);
    }

    public static getFadeInOut(time = 300): AnimationTriggerMetadata {
        return trigger('fadeInOut', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [
                style({ opacity: 0 }),
                animate(time)
            ]),
            transition(':leave', animate(time, style({ opacity: 0 })))
        ]);
    }

}