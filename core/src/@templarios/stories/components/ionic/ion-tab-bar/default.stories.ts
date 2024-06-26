import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';

export default {
  title: 'Components/Ionic/Tab Bar',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-tabs>

        <ion-tab tab="questao">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="gabarito-comentado">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="cartao-resposta"
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="duvidas">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab tab="recursos">
          <ion-nav></ion-nav>
        </ion-tab>

        <ion-tab-bar slot="bottom" ds-color=${dsColor}>
          <ion-tab-button mode="ios" tab="questao">
            <div class="tp-tab-button">
              <ion-icon class="med-icon" name="med-questao"></ion-icon>
              <ion-label>Questão</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button mode="ios" tab="gabarito-comentado">
            <div class="tp-tab-button">
              <ion-icon class="med-icon" name="med-gabarito"></ion-icon>
              <ion-label>Gabarito Comentado</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button mode="ios" tab="cartao-resposta">
            <div class="tp-tab-button">
              <ion-icon class="med-icon" name="med-cartao"></ion-icon>
              <ion-label>Cartão Resposta</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button mode="ios" tab="duvidas">
            <div class="tp-tab-button">
              <ion-icon class="med-icon" name="med-duvidas"></ion-icon>
              <ion-label>Dúvidas</ion-label>
            </div>
          </ion-tab-button>

          <ion-tab-button mode="ios" tab="recursos">
            <div class="tp-tab-button">
              <ion-icon class="med-icon" name="med-recursos"></ion-icon>
              <ion-label>Recursos</ion-label>
            </div>
          </ion-tab-button>
        </ion-tab-bar>

      </ion-tabs>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=13948%3A31953',
  },
};
Default.argTypes = {
  'ds-color': {
    options: [undefined, ...Object.values(MedColors)],
    control: { type: 'select' },
    description: 'Define a cor do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
