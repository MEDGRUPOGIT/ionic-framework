import { Component, Host, h, Prop, Method } from '@stencil/core';
import { MedColor } from '../../../../interface';
import { generateMedColor } from '../../../../utils/med-theme';

@Component({
  tag: 'med-agrupador',
  styleUrl: 'med-agrupador.scss',
  shadow: true,
})
export class MedAgrupador {

  /**
    * Define a cor do componente.
    */
  @Prop({ reflect: true }) dsColor?: MedColor;

  /**
    * TODO.
    */
  @Prop({ reflect: true }) texto1 = `Expandir a lista`;

  /**
    * TODO.
    */
  @Prop({ reflect: true }) texto2 = `Ocultar a lista`;

  /**
    * Define o estado do componente.
    */
  @Prop({ reflect: true, mutable: true }) collapsed = false;

  /**
    * Define o estado do componente programaticamente.
    */
  @Method()
  async toggle(event?: Event) {
    event?.stopPropagation();
    this.collapsed = !this.collapsed;
  }

  render() {
    const { dsColor, collapsed, texto1, texto2 } = this;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-agrupador': true,
          'med-agrupador--collapsed': collapsed
        })}
        onClick={(event: any) => { this.toggle(event) }}>
        <div class="med-agrupador__expandir">{texto1}</div>
        <div class="med-agrupador__ocultar">{texto2}</div>
        <ion-icon class="med-icon med-agrupador__icon" name="med-baixo"></ion-icon>
      </Host>
    );
  }

}

