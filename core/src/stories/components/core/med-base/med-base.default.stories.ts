import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from "../../../../global/templarios/color.enum";

export default {
  title: 'Components/Core/Base OK',
  decorators: [withDesign],
  parameters: {
    layout: 'centered',
  },
};

const Template = ({ dsColor, radius, spacingV, spacingH }) => {
  return html`
    <style>
      /* !NÃO UTILIZAR! Apenas para estória */
        .middle {
          padding: 0 16px;
          flex: 1;
        }
      /* !NÃO UTILIZAR! Apenas para estória */
    </style>

    <ion-app>
      <ion-content>
        <div class="full-height-center">

          <!-- component markdown -->
          <med-base .dsColor=${dsColor} .radius=${radius} .spacingV=${spacingV} .spacingH=${spacingH}>
            <med-type slot="start">Left</med-type>
            <med-type class="middle" slot="middle">Middle</med-type>
            <med-type slot="end">Right</med-type>
          </med-base>
          <!-- component markdown -->

        </div>
      </ion-content>
    </ion-app>
  `
}

export const Default = Template.bind({});
Default.parameters = {
  layout: 'centered',
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=7380%3A50289',
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
  radius: {
    options: [undefined, 's02', 's04', 's08'],
    control: { type: 'select'},
    description: 'Define a variação de borde-radius do componente.',
    table: {
      type:  { summary: 's02 | s04 | s08 ' },
      defaultValue: { summary: 'undefined' },
    },
  },
  spacingV: {
    options: [undefined, 's00', 's02', 's04', 's08', 's12', 's16', 's24'],
    control: { type: 'select'},
    description: 'Define a variação de padding vertical do componente.',
    table: {
      type:  { summary: 's02 | s04 | s08 | s12 | s16 | s24' },
      defaultValue: { summary: 'undefined' },
    },
  },
  spacingH: {
    options: [undefined, 's00', 's02', 's04', 's08', 's12', 's16', 's24'],
    control: { type: 'select'},
    description: 'Define a variação de padding horizontal do componente.',
    table: {
      type:  { summary: 's02 | s04 | s08 | s12 | s16 | s24'  },
      defaultValue: { summary: 'undefined' },
    },
  },
};
