import { Component, h, Host, Prop } from '@stencil/core';
import { MedColor } from '../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../@templarios/utilities/color';

@Component({
  tag: 'med-chart-bar-horizontal',
  styleUrl: 'med-chart-bar-horizontal.scss',
  scoped: true,
})
export class MedChartBarHorizontal {

  /**
   * todo
   */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsSize?: 'md';

  /**
   * todo
   */
  @Prop({ reflect: true }) label = true;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) hideValue = false;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) value = 0;

  /**
   * todo
   */
  @Prop({ reflect: true, mutable: true }) labelContent: string | undefined;

  render() {
    const { dsColor, hideValue, dsSize, label, value, labelContent } = this;
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
          <div class="med-chart-bar-horizontal__progress" style={{ '--progress': `${progressWidth === 0 ? -99 : progressWidth - 100}` }}></div>
          <div class="med-chart-bar-horizontal__track"></div>
        </div>
        {label && <med-type class="med-chart-bar-horizontal__label">{!hideValue ? `${value}%` : ''}{labelContent}</med-type>}
      </Host>
    );
  }
}
