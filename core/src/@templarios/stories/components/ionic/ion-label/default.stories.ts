import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors, MedType } from '../../../../templarios';

export default {
  title: 'Components/Ionic/Label',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, token, 'token-md': tokenMd, 'token-sm': tokenSm, slot }) => {
  return html`
    <ion-app>
      <ion-content>
        <ion-label ds-color=${dsColor} token=${token} token-md=${tokenMd} token-sm=${tokenSm}> ${slot} </ion-label>
      </ion-content>
    </ion-app>
  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=12435%3A44300',
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
  token: {
    options: [undefined, ...Object.values(MedType)],
    control: { type: 'select' },
    description: 'Define o token do componente.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedType).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  'token-md': {
    options: [undefined, ...Object.values(MedType)],
    control: { type: 'select' },
    description: 'Define o token do componente em breakpoints abaixo de 768px.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedType).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  'token-sm': {
    options: [undefined, ...Object.values(MedType)],
    control: { type: 'select' },
    description: 'Define o token do componente em breakpoints abaixo de 576px.',
    defaultValue: undefined,
    table: {
      type: { summary: Object.values(MedType).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque imperdiet luctus.',
  },
};
