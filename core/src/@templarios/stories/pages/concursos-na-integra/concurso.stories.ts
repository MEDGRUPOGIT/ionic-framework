import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pages/Medsoft/Concursos na  Integra',
  decorators: [withDesign],
};

const Template = () => {
  return html`
  <ion-app>
    <med-header>
      <med-navbar slot="navbar">
        <ion-back-button slot="left" mode="ios" text="" ds-size="xxs">
          <ion-icon class="med-icon" name="med-esquerda"></ion-icon>
        </ion-back-button>

          <ion-label slot="title" token="p16b">CONCURSOS NA ÍNTEGRA</ion-label>
      </med-navbar>

      <div class="input-concursos" slot="toolbar">
        <ion-icon class="med-icon" name="med-busca"></ion-icon>
        <ion-input mode="md" ds-color="neutral-2" placeholder="Digite o nome de um concurso..."></ion-input>
      </div>
    </med-header>

    <ion-content class="concursos-resultados">
      <div class="concursos-resultados__content">
        <ion-label class="ano" ds-color="neutral-10" token="p16xb">2022</ion-label>
        <div class="grid">
          <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
          <med-tiles class="grid__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
        </div>

        <ion-label class="ano" ds-color="neutral-10" token="p16xb">2021</ion-label>
        <div class="grid">
          <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
          <med-tiles class="grid__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
        </div>

        <ion-label class="ano" ds-color="neutral-10" token="p16xb">2019</ion-label>
        <div class="grid">
          <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
          <med-tiles class="grid__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
        </div>

        <ion-label class="ano" ds-color="neutral-10" token="p16xb">2018</ion-label>
        <div class="grid">
          <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
          <med-tiles class="grid__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
        </div>

        <ion-label class="ano" ds-color="neutral-10" token="p16xb">2017</ion-label>
        <div class="grid">
          <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
          <med-tiles class="grid__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
        </div>

        <ion-label class="ano" ds-color="neutral-10" token="p16xb">2016</ion-label>
        <div class="grid">
          <med-tiles class="grid__tiles" titulo="R01 SIM 01" label="Geral 01"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 02" label="Geral 02"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 03" label="Geral 03"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 04" label="Geral 04"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 05" label="Geral 05"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 06" label="Geral 06"></med-tiles>
          <med-tiles class="grid__tiles" titulo="R01 SIM 07" label="Geral 07"></med-tiles>
          <med-tiles class="grid__tiles" titulo="SIM EXTRA" label="QUESTÕES COVID"></med-tiles>
        </div>
      </div>
    </ion-content>
  </ion-app>
  `;
};

export const Concurso = Template.bind({});
Concurso.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
