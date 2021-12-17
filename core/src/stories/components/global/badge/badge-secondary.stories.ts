import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Global/Badge',
  decorators: [withDesign],
};

const Template = ({ dsColor, dsSize, slot }) => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center">

          <!-- component -->
          <ion-badge ds-name="secondary" .dsColor=${dsColor} ds-size=${dsSize}>${slot}</ion-badge>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Secondary = Template.bind({});
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=1972%3A356',
  },
}
Secondary.argTypes = {
  dsColor: {
    options: MedColor,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'MedColor' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsSize: {
    options: [undefined, 'xxs', 'xs', 'sm', 'md', 'lg'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'xxs | xs | sm | md | lg' },
      defaultValue: { summary: 'undefined' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'UNIFESP 2020',
  },
};
