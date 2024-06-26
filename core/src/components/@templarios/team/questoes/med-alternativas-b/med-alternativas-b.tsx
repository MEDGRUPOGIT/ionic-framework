import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch
} from '@stencil/core';
import {
  MedAlternativaInterface,
  MedAlternativasInternoInterface
} from '../../../../../@templarios/interfaces/alternativas.interface';
import { MedColor } from '../../../../../@templarios/types/color.type';
import { generateMedColor } from '../../../../../@templarios/utilities/color';
import { MedAlternativasBase } from '../med-alternativas/med-alternativas-base';

@Component({
  tag: 'med-alternativas-b',
  styleUrl: 'med-alternativas-b.scss',
  shadow: true
})
export class MedAlternativasB implements MedAlternativasInternoInterface {
  @Element() hostElement!: HTMLElement;

  /**
   * todo
   */
  @Prop() dsColor?: MedColor;

  /**
   * todo
   */
  @Prop() dsSkin?: any;

  /**
   * todo
   */
  @Prop() dsSkinConfig?: any;

  /**
   * todo
   */
  @Prop({ mutable: true }) alternativas: MedAlternativaInterface | any = [];

  /**
   * todo
   */
  @Prop() keyAlternativa = 'Alternativa';

  /**
   * todo
   */
  @Prop() keyEnunciado = 'Enunciado';

  /**
   * todo
   */
  @Prop() keyImagem = 'Imagem';

  /**
   * todo
   */
  @Prop() keyPorcentagem = 'Porcentagem';

  /**
   * todo
   */
  @Prop() keyRiscada = 'Riscada';

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) respostaCorreta!: string;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) mostraResposta!: boolean;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) alternativaSelecionada!: string;

  /**
   * todo
   */
  @Prop({ mutable: true }) permiteRiscar = true;

  /**
   * todo
   */
  @Prop({ mutable: true }) permiteDesmarcar = false;

  /**
   * todo
   */
  @Prop({ mutable: true, reflect: true }) mostrarProgressBar = true;

  /**
   * todo
   */
  @Event() medChange!: EventEmitter<MedAlternativaInterface>;

  /**
   * todo
   */
  @Event() medRiscada!: EventEmitter<MedAlternativaInterface>;

  /**
   * todo
   */
  @Event() medGalleryRequest!: EventEmitter<MedAlternativaInterface>;

  /**
   * todo
   */
  @State() blockMouseEvents = false;

  /**
   * todo
   */
  @State() permiteAlterar = true;

  /**
   * todo
   */
  @State() riscarAtivoIndice = -1;

  baseClass = new MedAlternativasBase(this);

  @Listen('click', { target: 'window' })
  handleClick(event: any) {
    this.baseClass.handleClick(event);
  }

  @Watch('alternativas')
  onAlternativasChanged(
    newValue: MedAlternativaInterface | any,
    oldValue: MedAlternativaInterface | any
  ) {
    this.baseClass.onAlternativasChanged(newValue, oldValue);
  }

  render() {
    const {
      dsColor,
      permiteRiscar,
      mostraResposta,
      alternativaSelecionada,
      mostrarProgressBar
    } = this;
    const exibeAcerto = this.alternativaSelecionada && mostraResposta;

    return (
      <Host
        from-stencil
        class={generateMedColor(dsColor, {
          'med-alternativas': true
        })}
      >
        <div class='med-alternativas__list' role='list'>
          {this.alternativas.map((alternativa: any, indice: number) => (
            <div
              role='listitem'
              onTouchStart={(event) =>
                this.baseClass.onTouchStart(event, indice)
              }
              onTouchEnd={(event) =>
                this.baseClass.onTouchEnd(event, alternativa)
              }
              onMouseDown={(event) =>
                this.baseClass.onTouchStart(event, indice)
              }
              onMouseUp={(event) =>
                this.baseClass.onTouchEnd(event, alternativa)
              }
              class={`
                med-alternativas__item med-alternativas__item--${
                  alternativa[this.keyAlternativa]
                }
                ${permiteRiscar ? 'med-alternativas__item--permite-riscar' : ''}
                ${
                  alternativa[this.keyRiscada] && permiteRiscar
                    ? 'med-alternativas__item--riscado'
                    : ''
                }
                ${
                  exibeAcerto &&
                  alternativa[this.keyAlternativa] === this.respostaCorreta &&
                  this.respostaCorreta === this.alternativaSelecionada
                    ? 'med-alternativas__item--correta'
                    : ''
                }
                ${
                  exibeAcerto &&
                  alternativa[this.keyAlternativa] === this.respostaCorreta &&
                  this.respostaCorreta !== this.alternativaSelecionada
                    ? 'med-alternativas__item--certa'
                    : ''
                }
                ${
                  exibeAcerto &&
                  alternativa[this.keyAlternativa] !== this.respostaCorreta &&
                  alternativa[this.keyAlternativa] ===
                    this.alternativaSelecionada
                    ? 'med-alternativas__item--incorreta'
                    : ''
                }
                ${
                  !exibeAcerto &&
                  alternativa[this.keyAlternativa] ===
                    this.alternativaSelecionada
                    ? 'med-alternativas__item--selecionada'
                    : ''
                }
              `}
            >
              <div class='med-alternativas__wrapper'>
                <div class='med-alternativas__container'>
                  <div class='med-alternativas__left'>
                    {alternativa[this.keyAlternativa]}
                  </div>
                  <div
                    class='med-alternativas__right'
                    innerHTML={alternativa[this.keyEnunciado]}
                  >
                    {alternativa[this.keyImagem] && (
                      <div
                        class={`image-container ${
                          alternativa[this.keyEnunciado]
                            ? 'image-container--margin'
                            : ''
                        }`}
                        onClick={(event) =>
                          this.baseClass.imageRequest(event, alternativa)
                        }
                      >
                        <div class='image-container__wrapper'>
                          <img
                            class='image-container__image'
                            src={alternativa[this.keyImagem]}
                          />

                          <div class='image-container__button'>
                            <ion-icon
                              class='med-icon image-container__icon'
                              name='med-busca'
                            ></ion-icon>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    class={`med-alternativas__riscar ${
                      indice === this.riscarAtivoIndice && permiteRiscar
                        ? 'med-alternativas__riscar--show'
                        : ''
                    }`}
                    onClick={(event) =>
                      this.baseClass.riscar(event, alternativa)
                    }
                  >
                    {(alternativa[this.keyRiscada] ? 'Retomar' : 'Riscar') +
                      ' alternativa'}
                  </div>
                </div>
              </div>

              <med-chart-bar-horizontal
                label
                class={`
                med-alternativas__progress-bar
                ${
                  mostraResposta && alternativaSelecionada && mostrarProgressBar
                    ? 'med-alternativas__progress-bar--toggle'
                    : ''
                }
              `}
                value={Math.round(alternativa[this.keyPorcentagem] * 100)}
              ></med-chart-bar-horizontal>

              {/* <ion-progress-bar ds-name="skin" percentage class={`
                med-alternativas__progress-bar
                ${mostraResposta && alternativaSelecionada ? 'med-alternativas__progress-bar--toggle' : '' }
              `}
                value={alternativa[this.keyPorcentagem]}>
              </ion-progress-bar> */}
            </div>
          ))}
        </div>
      </Host>
    );
  }
}
