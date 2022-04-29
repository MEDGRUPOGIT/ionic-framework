import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-cartao-resposta-item',
  styleUrl: 'med-cartao-resposta-item.scss',
  shadow: true,
})
export class MedCartaoRespostaItem {

  /**
   * TODO
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

   /**
   * TODO
   */
  @Prop({ reflect: true }) anulada = false;

  /**
   * TODO
   */
  @Prop({ reflect: true }) impressa = false;

  /**
   * TODO
   */
  @Prop({ reflect: true }) ativa = false;

  render() {
    const { dsColor, anulada, impressa, ativa } = this;

    return (
      <Host from-stencil class={generateMedColor(dsColor, {
        'med-cartao-resposta-item': true,
        'med-cartao-resposta-item--anulada': anulada,
        'med-cartao-resposta-item--impressa': impressa,
        'med-cartao-resposta-item--ativa': ativa,
      })}>
        <div class="container">
          {/* <slot name="icon-left-top"></slot>
          <slot  name="icon-right-top"></slot> */}
          <button class="item-button">
            <slot></slot>
          </button>
          {/* <slot  name="icon-left-bottom"></slot>
          <slot  name="icon-right-bottom"></slot> */}
        </div>
      </Host>
    );
  }

}
