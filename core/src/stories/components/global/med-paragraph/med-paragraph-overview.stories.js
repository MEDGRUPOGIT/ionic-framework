import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColor } from '../../../constants';

export default {
  title: 'Components/Core/Paragraph',
  decorators: [withDesign],
};

const Template = ({dsColor, dsSize, dsName, slot}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component -->
        <med-paragraph .dsColor=${dsColor} ds-size=${dsSize} ds-name=${dsName}>
          <h1>${slot}</h1>
        </med-paragraph>
        <!-- component -->

      </ion-content>
    </ion-app>
  `
}

export const Overview = Template.bind({});
Overview.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=6105%3A46607',
  },
}
Overview.argTypes = {
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
    options: [undefined, 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    control: { type: 'radio'},
    description: "Define a variação de tamanho componente.",
    table: {
      type:  { summary: 'xxs | xs | sm | base | md | lg | xl' },
      defaultValue: { summary: 'undefined' },
    },
  },
  dsName: {
    options: [undefined, 'high'],
    control: { type: 'inline-radio'},
    description: "Define a variação do componente.",
    table: {
      type:  { summary: 'secondary | transparent' },
      defaultValue: { summary: 'undefined' },
    },
  },
  slot: {
    control: { type: 'text' },
    defaultValue: 'Exemplo de Título',
  },
};
