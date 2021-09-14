import { Component, Host, h, Event, EventEmitter, Prop } from '@stencil/core';
import { RateStatus } from './med-rate-like.enum';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-rate-like',
  styleUrl: 'med-rate-like.scss',
  shadow: true,
})
export class MedRateLike {
  /**
   * TODO
   */
  @Prop({ reflect: true, mutable: true }) status?: RateStatus;

  /**
   * TODO
   */
  @Event() medChange!: EventEmitter<RateStatus>;

  private onClick = (status: RateStatus) => {
    if (this.status) {
      return;
    }

    this.status = status;
    this.medChange.emit(this.status);
  }

  render() {

    return (
      <Host
        from-stencil
        class={generateMedColor(null, {
          'med-rate-like': true,
        })}>
        <button class={`button
          ${this.status === RateStatus.LIKE ? 'button--like' : ''}
          ${this.status ? 'button--disabled' : ''}`}
          onClick={() => this.onClick(RateStatus.LIKE)}>
          <ion-icon name="med-positivo" class="med-icon rate"></ion-icon>
        </button>
        <button class={`button
          ${this.status === RateStatus.DISLIKE ? 'button--dislike' : ''}
          ${this.status ? 'button--disabled' : ''}`}
          onClick={() => this.onClick(RateStatus.DISLIKE)}>
          <ion-icon name="med-negativo" class="med-icon rate" ></ion-icon>
        </button>
      </Host>
    );
  }

}
