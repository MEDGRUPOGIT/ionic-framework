import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";
import { MedIcons } from '../../../constants';

export default {
  title: 'Components/Core/@OK Button',
  decorators: [withDesign],
};

const Template = ({ dsColor, disabled, expand, dsSize, iconLeft, iconRight, iconOnly, slot }) => {
  console.log(dsSize);
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        ion-button {
          margin: 5px 15px;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>
        <ion-row>
          <ion-col>
            <div>
              <ion-button .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>${slot} ${dsSize}</ion-button>
            </div>

            <div>
              <ion-button .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                <ion-icon slot="start" class="med-icon" name=${iconLeft}></ion-icon>
                ${slot} ${dsSize}
              </ion-button>
            </div>

            <div>
              <ion-button .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                ${slot} ${dsSize}
                <ion-icon slot="end" class="med-icon" name=${iconRight}></ion-icon>
              </ion-button>
            </div>

            <div>
              <ion-button .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                <ion-icon slot="icon-only" class="med-icon" name=${iconOnly}></ion-icon>
              </ion-button>
            </div>
          </ion-col>

          <ion-col>
            <div>
              <ion-button ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>${slot} ${dsSize}</ion-button>
            </div>

            <div>
              <ion-button ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                <ion-icon slot="start" class="med-icon" name=${iconLeft}></ion-icon>
                ${slot} ${dsSize}
              </ion-button>
            </div>

            <div>
              <ion-button ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                ${slot} ${dsSize}
                <ion-icon slot="end" class="med-icon" name=${iconRight}></ion-icon>
              </ion-button>
            </div>

            <div>
              <ion-button ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                <ion-icon slot="icon-only" class="med-icon" name=${iconOnly}></ion-icon>
              </ion-button>
            </div>
          </ion-col>

          <ion-col>
            <div>
              <ion-button ds-name="tertiary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>${slot} ${dsSize}</ion-button>
            </div>

            <div>
              <ion-button ds-name="tertiary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                <ion-icon slot="start" class="med-icon" name=${iconLeft}></ion-icon>
                ${slot} ${dsSize}
              </ion-button>
            </div>

            <div>
              <ion-button ds-name="tertiary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                ${slot} ${dsSize}
                <ion-icon slot="end" class="med-icon" name=${iconRight}></ion-icon>
              </ion-button>
            </div>

            <div>
              <ion-button ds-name="tertiary" .dsColor=${dsColor} ds-size=${dsSize} ?disabled=${disabled} .expand=${expand}>
                <ion-icon slot="icon-only" class="med-icon" name=${iconOnly}></ion-icon>
              </ion-button>
            </div>
          </ion-col>
        </ion-row>
      </ion-content>
    </ion-app>
  `
}

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=3398%3A561',
  },
}
Overview.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    description: 'Define o estado disabled do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'md', 'sm', 'xs', 'xxs'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'md' | 'sm' | 'xs' | 'xxs'  },
      defaultValue: { summary: 'undefined' },
    },
  },
  expand: {
    defaultValue: 'none',
    options: [undefined, 'block'],
    control: { type: 'radio'},
    description: "Define a variação de estilo do componente.",
    table: {
      type:  { summary: ['block'] },
      defaultValue: { summary: 'undefined' },
    },
  },
  iconLeft: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-esquerda',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-esquerda' },
    },
  },
  iconRight: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-direita',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-direita' },
    },
  },
  iconOnly: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-fechar',
    description: '**Atributo utilizado apenas no storybook. Não é um atributo do componente!.**',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-fechar' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'Button',
  },
};
