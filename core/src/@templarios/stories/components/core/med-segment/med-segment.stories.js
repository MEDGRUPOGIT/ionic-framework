import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../templarios';
import { MedIcons } from '../../../assets/constants';

export default {
  title: 'Components/Core/Segment',
  decorators: [withDesign],
};

const Template = ({ dsColor, dsName, dsSize, label, active, disabled }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="full-height-flex">

          <!-- component markdown-->
          <med-segment>
            <ion-chip .dsColor=${dsColor} ds-name=${dsName} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled}></ion-chip>
            <ion-chip .dsColor=${dsColor} ds-name=${dsName} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled}></ion-chip>
            <ion-chip .dsColor=${dsColor} ds-name=${dsName} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled}></ion-chip>
            <ion-chip .dsColor=${dsColor} ds-name=${dsName} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled}></ion-chip>
            <ion-chip .dsColor=${dsColor} ds-name=${dsName} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled}></ion-chip>
            <ion-chip .dsColor=${dsColor} ds-name=${dsName} ds-size=${dsSize} label=${label} ?active=${active} ?disabled=${disabled}></ion-chip>
          </med-segment>
          <!-- component markdown-->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=13516%3A51045',
  },
}
Default.argTypes = {
  dsColor: {
    options: Object.values(MedColors),
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: Object.values(MedColors).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsName: {
    options: [undefined, 'secondary'],
    control: { type: 'radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'sm', 'md'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'sm | md' },
      defaultValue: { summary: 'undefined' },
    },
  },
  label: {
    control: { type: 'text' },
    description: 'Define o texto do componente.',
    defaultValue: 'Chip',
    table: {
      type:  { summary: 'string' },
      defaultValue: { summary: 'Chip' },
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
  active: {
    active: false,
    control: { type: 'boolean' },
    description: 'Define o estado active do componente.',
    table: {
      type:  { summary: 'boolean' },
      defaultValue: { summary: 'undefined' },
    },
  },
  iconLeft: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-fechar',
    description: 'Define o icone left do componente.',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-fechar' },
    },
  },
  iconRight: {
    options: MedIcons,
    control: { type: 'select'},
    defaultValue: 'med-fechar',
    description: 'Define o icone right do componente.',
    table: {
      type:  { summary: ['string'] },
      defaultValue: { summary: 'med-fechar' },
    },
  },
};
