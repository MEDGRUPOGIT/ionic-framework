import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { medColors, medNeutrals } from '../../../med-colors';

export default {
  title: 'Components/Core/Fab',
  decorators: [withDesign],
};

//
// Icon + label
//

const TemplateIconLabel = ({color, neutral}) => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
        <ion-fab vertical="center" horizontal="center" slot="fixed">
          <ion-fab-button .color=${color} .neutral=${neutral} ds-size="lg" ds-name="icon-label">
            <ion-icon class="med-icon" name="add"></ion-icon>
            <ion-label slot="label">Label</ion-label>
          </ion-fab-button>
        </ion-fab>
        <!-- component -->

      </div>
    </ion-app>
  `
}

export const FABIconLabel = TemplateIconLabel.bind({});
FABIconLabel.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2436%3A21',
  },
};
FABIconLabel.argTypes = {
  color: {
    options: medColors,
    control: { type: 'select'},
    description: "Define a cor do componente.",
    table: {
      type:  { summary: 'Color' },
      defaultValue: { summary: 'undefined' },
    },
  },
  neutral: {
    options: medNeutrals,
    control: { type: 'select'},
    description: "Define a cor neutral do componente.",
    table: {
      type:  { summary: 'Neutrals' },
      defaultValue: { summary: 'undefined' },
    },
  },
};
