import { Component, Element, Event, EventEmitter, h, Host, Prop, State, Watch } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';
import { Gesture, GestureConfig } from '../../../../interface';
import { createGesture } from '../../../../utils/gesture';

declare var ResizeObserver: any;

@Component({
  tag: 'med-calendar',
  styleUrl: 'med-calendar.scss',
  scoped: true,
})
export class MedCalendar {
  @Element() hostElement!: any;

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop({ reflect: true }) mes?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) ano?: string;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true  }) container?: string;

  /**
   * todo
   */
  @Prop({ reflect: true }) disable = false;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) choice = 'Semana';

  /**
   * todo
   */
  @State() width = 166;

  /**
   * todo
   */
  @Event() medClick!: EventEmitter;

  /**
   * todo
   */
  @Event() medSwipe!: EventEmitter;

  private gesture!: Gesture;

  private containerEl!: HTMLElement;

  connectedCallback() {
    this.init();

    const resizeObserver = new ResizeObserver(() => {
      this.init();
    });

    if(this.container) {
      const container = document.querySelector(`.${this.container}`);

      resizeObserver.observe(container);
    } else {
      resizeObserver.observe(document.body);
    }
  }

  init() {
    /* if(this.container) {
      const container = document.querySelector(`.${this.container}`);
      const containerWidth: any = container?.clientWidth;

      if(containerWidth < 1200) {
        this.width = containerWidth / 7;
      }
    } else {
      const windowWidth = window.innerWidth;

      if(windowWidth < 1200) {
        this.width = windowWidth / 7;
      }
    } */
  }

  @Watch('container')
  watchPropHandler(newValue: any) {
    if (newValue !== this.container) { }
    this.init();
  }

  componentDidLoad() {
    let direction: string;

    const options: GestureConfig = {
      el: this.containerEl,
      gestureName: 'swipe',
      onStart: () => {},
      onMove: (event) => {
        if (event.deltaX > 0) {
          direction = 'right';
        } else {
          direction = 'left';
        }
      },
      onEnd: () => {
        this.medSwipe.emit(direction);
      }
    };

    this.gesture = createGesture(options);
    this.gesture.enable();
  }

  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
    }
  }

  private onChoiceClick() {
    this.choice = this.choice === 'Semana' ? 'Mês' : 'Semana';
    this.medClick.emit(this.choice);
  }

  private onMonthClick(type: string) {
    this.medClick.emit(type);
  }

  render() {
    const { dsColor, mes, ano, disable } = this;

    return (
      <Host from-stencil
        class={generateMedColor(dsColor, {
          'med-calendar': true,
          'med-calendar--disable': disable,
        })}
        style={{ '--width': `${this.width}` }}>
        <div class="header">
          <div class="header__left">
            <ion-button icon-only mode="ios" ds-size="xxs" fill="clear" onClick={() => this.onMonthClick('prev')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-esquerda"></ion-icon>
            </ion-button>

            <med-type class="header__type" token="p16b">
              {mes} {ano}
            </med-type>

            <ion-button icon-only mode="ios" ds-size="xxs" fill="clear" onClick={() => this.onMonthClick('next')}>
              <ion-icon slot="icon-only" class="med-icon" name="med-direita"></ion-icon>
            </ion-button>
          </div>

          <div class="header__right">
            <ion-button mode="ios" ds-size="xxs" fill="clear" onClick={() => this.onChoiceClick()}>
              <med-type class="choice__type">{this.choice}</med-type>
              <ion-icon class="med-icon header__icon" name="med-baixo"></ion-icon>
            </ion-button>
          </div>
        </div>

        <div class="content">
          <div class="content__header">
            <div class="content__week-day">
              <med-type class="content__week-type">Seg</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Ter</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Qua</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Qui</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Sex</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Sab</med-type>
            </div>
            <div class="content__week-day">
              <med-type class="content__week-type">Dom</med-type>
            </div>

          </div>
          <div class="content__container" ref={(el) => { this.containerEl = el as any }}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
