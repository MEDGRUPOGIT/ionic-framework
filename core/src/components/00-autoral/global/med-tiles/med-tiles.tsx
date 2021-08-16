import { Component, Host, h, Prop } from '@stencil/core';
import { createColorClasses } from '../../../../utils/theme';
import { Color, Neutral } from '../../../../interface';

@Component({
  tag: 'med-tiles',
  styleUrl: 'med-tiles.scss',
  shadow: true,
})
export class MedTiles {

  @Prop() titulo?: string;
  @Prop() label?: string;
  @Prop() badge?: string;
  @Prop() neutral?: Neutral;
  @Prop() color?: Color;
  @Prop() solid = false;
  @Prop({ reflect:true }) selected = false;

  render() {
    const { color, neutral, titulo, label, selected, solid } = this;
    return (
      <Host
      class={createColorClasses(color, {
        'med-tiles': true,
        'med-solid': solid,
        'med-tiles--selected': selected
      }, neutral)}
      >
        <div class="med-tiles__border"></div>
        <div class="med-tiles__content">
          <h3 class="med-tiles__title" innerHTML={titulo}></h3>
          <h4 class="med-tiles__label"  innerHTML={label}></h4>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
