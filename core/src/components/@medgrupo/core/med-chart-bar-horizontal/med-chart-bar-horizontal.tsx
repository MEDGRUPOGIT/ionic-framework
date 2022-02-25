import { Component, Host, h, Prop } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-chart-bar-horizontal',
  styleUrl: 'med-chart-bar-horizontal.scss',
  shadow: true,
})
export class MedChartBarHorizontal {
  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * Define a variação de tamanho do componente.
    */
   @Prop() dsSize?: 'md';

  /**
   * Define a visibilidade do label.
   */
  @Prop({ reflect: true }) label = true;

  /**
   * Define o valor do componente.
   */
  @Prop({ reflect: true, mutable: true }) value = 0;

  render() {
    const { dsColor, dsSize, label, value } = this;
    let progressClass, progressWidth;

    if(value > 100) {
      progressClass = 'med-chart-bar-horizontal--spill';
      progressWidth = 100;
    } else if (value === 100) {
      progressWidth = 100;
      progressClass = 'med-chart-bar-horizontal--full';
    } else {
      progressWidth = value;
      progressClass = '';
    }

    return (
      <Host class={generateMedColor(dsColor, {
          [`med-chart-bar-horizontal ${progressClass}`]: true,
          [`med-chart-bar-horizontal--${dsSize}`]: dsSize !== undefined,
        })}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="1"
        role="progressbar">
        <div class="med-chart-bar-horizontal__container">
          <div class="med-chart-bar-horizontal__progress" part="progress" style={{ '--progress': `${progressWidth === 0 ? -100 : progressWidth - 100}` }}></div>
          <div class="med-chart-bar-horizontal__track" part="track"></div>
        </div>
        {label && <med-type class="med-chart-bar-horizontal__label">{value}%</med-type>}
      </Host>
    );
  }
}
