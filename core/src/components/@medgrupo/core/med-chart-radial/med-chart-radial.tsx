import { Component, Host, h, Prop } from '@stencil/core';
import { MedChartRadiaItem } from './med-chart-radial-interface';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-chart-radial',
  styleUrl: 'med-chart-radial.scss',
  scoped: true
})
export class MedChartRadial {

  /**
  * Define a cor do componente.
  */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
   * Define a variação de tamanho.
   */
  @Prop() dsSize?: 'xs' | 'sm' | 'md' | 'lg';

  /**
   * Define os valores do gráfico
   */
  @Prop({reflect: true}) valores: MedChartRadiaItem[] = [];

  /**
    * Define o texto primario.
    */
   @Prop() titulo?: string;

    /**
    * Define o texto secundario.
    */
    @Prop() subtitulo?: string;

  render() {
    const { dsColor, dsSize, titulo, subtitulo } = this;
    const totais = {
      total: 0,
      subtotais: [] as number[]
    }

    this.valores.forEach((item: MedChartRadiaItem) => {
      totais.total += item.quantia;
      totais.subtotais.push(totais.total);
    });

    const arrayReverse = this.valores.slice(0).reverse();

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-chart-radial': true,
          [`med-chart-radial--${dsSize}`]: dsSize !== undefined,
        })}>
        <svg viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="16" />
          {
            arrayReverse.map((item: MedChartRadiaItem, index: number) => {
              const subtotalIndex = this.valores.length - index - 1;
              if (!item.ignoreBarra && item.quantia !== 0) {
                return <circle cx="18" cy="18" r="16"
                  class={{'size': true, [item.cor]: true}}
                  style={{
                    '--size': `${(totais.subtotais[subtotalIndex] / totais.total) * 100}`,
                  }}
                />;
              }
            })
          }
        </svg>
        <div class="med-chart-radial__text-wrap">
          {titulo && <med-type class="med-chart-radial__titulo">{titulo}</med-type>}
          {titulo && <med-type class="med-chart-radial__subtitulo">{subtitulo}</med-type>}
        </div>
        <slot></slot>
      </Host>
    );
  }

}
