import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { TemplariosAvatarSize, MedColors } from '../../../../templarios';

export default {
  title: 'Components/CSS Framework/Avatar',
  decorators: [withDesign],
};

const Template = ({ 'ds-color': dsColor, 'ds-size': dsSize }) => {
  return html`
        <div>
          <div tp-avatar ds-color=${dsColor} ds-size=${dsSize}>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"" />
          </div>
        </div>

        <div>
          <div tp-avatar ds-color=${dsColor} ds-size=${dsSize}>
            <label tp-label>AB<label>
          </div>
        </div>

  `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=5248%3A39909',
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
  'ds-size': {
    options: [undefined, ...Object.values(TemplariosAvatarSize)],
    control: { type: 'select' },
    description: 'Define a variação de tamanho do componente.',
    defaultValue: 'sm',
    table: {
      type: { summary: Object.values(TemplariosAvatarSize).join(' |') },
      defaultValue: { summary: 'undefined' },
    },
  },
};
