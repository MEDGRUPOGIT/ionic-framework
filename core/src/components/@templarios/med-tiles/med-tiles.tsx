import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../@templarios/types/color.type';
import { generateMedColor } from '../../../@templarios/utilities/color';

@Component({
  tag: 'med-tiles',
  styleUrl: 'med-tiles.scss',
  shadow: true,
})
export class MedTiles {
  @Prop({ reflect: true }) dsColor?: MedColor;

  @Prop() titulo?: string;

  @Prop() label?: string;

  @Prop() badge?: string;

  @Prop() solid = false;

  @Prop({ reflect:true }) selected = false;

  render() {
    const { dsColor, titulo, label, selected, solid } = this;
    return (
      <Host
        class={generateMedColor(dsColor, {
          'med-tiles': true,
          'med-solid': solid,
          'med-tiles--selected': selected
        })}
      >
        <div class="med-tiles__border"></div>
        <div class="med-tiles__content">
          <med-type class="med-tiles__title" innerHTML={titulo}></med-type>
          <med-type class="med-tiles__label"  innerHTML={label}></med-type>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
