import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Simulados',
  decorators: [withDesign],
};

const Template = ( {valoresChart, valoresLabel} ) => {

  setTimeout(() => {
    document.querySelector('med-chart-radial').valores = valoresChart.valoresChart;
  }, 1000);

  setTimeout(() => {
    document.querySelector('med-chart-radial-label').valores = valoresLabel.valoresLabel;
  }, 1000);

  return html`
    <div class="container container--height-100vh">
      <med-header>
        <med-navbar class="header" slot="navbar">
          <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
            <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
          </ion-back-button>

          <ion-label class="header__title" slot="title" token="p16xb">2022 R1
          SIM 01</ion-label>
          <ion-label class="header__subtitle" slot="subtitle" token="p14x">Geral 01</ion-label>
        </med-navbar>
      </med-header>

      <main class="resumo">
        <div class="resumo__top">
          <ion-item ds-color="brand" spacing-v="s00" spacing-h="s04"     mode="ios" lines="none">
            <ion-button class="resumo__button" mode="ios" fill="clear" ds-color="neutral-10" ds-size="xxs">
              <ion-icon slot="start" class="med-icon" name="med-trofeu"></ion-icon>
                REALIZADO MODO PROVA (EM 20/10/2022)
              <ion-icon slot="end" class="med-icon" name="med-baixo"></ion-icon>
            </ion-button>
          </ion-item>
        </div>

        <div class="resumo__middle">
          <div class="resumo__classificacao">
            <div class="resumo__linha">
              <ion-label token="p12x">Qual seria sua classificação &nbsp;</ion-label>
              <ion-button class="resumo__opcoes" mode="ios" fill="clear" ds-size="xxs" no-padding="true">
                no Brasil
              </ion-button>
            </div>

            <div class="resumo__linha">
              <ion-label token="p12x">&nbsp; em &nbsp;</ion-label>
              <ion-button class="resumo__opcoes" mode="ios" fill="clear" ds-size="xxs" no-padding="true">
                Todas as Unidades
              </ion-button>
            </div>

            <div class="resumo__linha">
              <ion-label token="p12x">&nbsp; em &nbsp;</ion-label>
              <ion-button class="resumo__opcoes" mode="ios" fill="clear" ds-size="xxs" no-padding="true">
                Todas as Especialidades
              </ion-button>
            </div>
          </div>

          <div class="resumo__range-container">
            <ion-icon class="med-icon resumo__icon resumo__icon--start" name="med-usuario"></ion-icon>
            <div class="resumo__progress">
              <ion-range class="resumo__range" min="20" max="80" step="2" ds-color="fb-warning">
              </ion-range>
              <div class="resumo__posicao-container" style="--porcentagem: 50">
              <ion-label class="resumo__posicao" token="p14xx"> 100° </ion-label>
              <ion-label class="resumo__sua-nota" token="p10"> Sua nota </ion-label>
              <ion-label class="resumo__nota" token="p12xb"> 5.0 </ion-label>
            </div>
            </div>
            <ion-icon class="med-icon resumo__icon resumo__icon--end" name="med-acertou"></ion-icon>
          </div>

          <div class="resumo__participantes">
            <ion-label token="p14x" ds-color="neutral-8">Total de</ion-label>
            <ion-label token="p14xb" ds-color="neutral-8">&nbsp; 15000 &nbsp;</ion-label>
            <ion-label token="p14x" ds-color="neutral-8">participantes</ion-label>
          </div>

          <div class="resumo__questoes">
            <med-chart-radial titulo="100" subtitulo="Questoes" ds-size="lg"></med-chart-radial>
            <med-chart-radial-label></med-chart-radial-label>
          </div>

          <ion-item ds-color="brand" spacing-v="s00" spacing-h="s04"     mode="ios" lines="none">
          <ion-button class="resumo__button" mode="ios" fill="clear" ds-color="neutral-10" ds-size="xxs">
            <ion-icon slot="start" class="med-icon" name="med-apostila"></ion-icon>
              MODO PROVA
            </ion-button>
          </ion-item>

          <div class="resumo__questoes">
            <med-chart-radial titulo="100" subtitulo="Questoes" ds-size="lg"></med-chart-radial>
            <med-chart-radial-label></med-chart-radial-label>
          </div>

          <ion-item ds-color="brand" spacing-v="s00" spacing-h="s04"     mode="ios" lines="none">
          <ion-button class="resumo__button" mode="ios" fill="clear" ds-color="neutral-10" ds-size="xxs">
            <ion-icon slot="start" class="med-icon" name="med-apostila"></ion-icon>
              MODO ESTUDO
          </ion-button>
          </ion-item>

          <div class="resumo__questoes">
            <med-chart-radial titulo="100" subtitulo="Questoes" ds-size="lg"></med-chart-radial>
            <med-chart-radial-label></med-chart-radial-label>
          </div>
        </div>

        <div class="resumo__bottom">
          <ion-item ds-color="neutral-2" gap="s08" spacing-v="s08" spacing-h="s16" mode="ios" lines="none" detail="false">
            <ion-button slot="start" mode="ios" fill="clear" icon-only ds-size="xxs">
              <ion-icon slot="icon-only" class="med-icon" name="med-duvidas"></ion-icon>
            </ion-button>

            <div class="resumo__modo-container">
              <ion-button class="resumo__modo" mode="ios">
                MODO PROVA
              </ion-button>
              <ion-button class="resumo__modo" mode="ios">
                MODO ESTUDO
              </ion-button>
            </div>

          </ion-item>
        </div>
      </main>
    </div>
  `;
};

export const Resumo = Template.bind({});
Resumo.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
Resumo.argTypes = {
  valoresChart: {
    description: "Define os valores do gráfico.",
    defaultValue: {
      valoresChart: [
        {
          cor: 'med-color-fb-success',
          label: 'acertos',
          quantia: 15,
          ignoreBarra: false,
        },
        {
          cor: 'med-color-fb-caution',
          label: 'acertos',
          quantia: 30,
          ignoreBarra: false,
       },
       {
          cor: 'med-color-revalida',
          label: 'teste',
          quantia: 45,
          ignoreBarra: false,
      },
       {
         cor: '',
          label: 'restantes',
          quantia: 10,
          ignoreBarra: true,
        }
      ],
    },
    control: { type: 'array' },
    description: 'Define a lista...',
    table: {
      type:  { summary: 'MedRadialItem[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
  valoresLabel: {
    defaultValue: {
      valoresLabel: [
        {
          cor: 'med-color-fb-success',
          label: 'Acertos',
          quantia: 32,
          ignoreBarra: false,
        },
        {
          cor: 'med-color-fb-warning',
          label: 'Erros',
          quantia: 16,
          ignoreBarra: false,
        },
        {
          cor: '',
          label: 'Restantes',
          quantia: 52,
          ignoreBarra: true,
        }
      ],
    },
    control: { type: 'array' },
    description: 'Define a lista...',
    table: {
      type:  { summary: 'MedRadialItem[]' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
