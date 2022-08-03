import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';
import { MedColors } from '../../../../../templarios';

export default {
  title: 'Components/Ionic/Avatar/Test',
  decorators: [withDesign],
};

const Template = ({ }) => {
  return html`
    <ion-app>
      <ion-content>
        ${Object.values(MedColors).map(color => {
          return html`
            <ion-avatar ds-color=${color}>
              <ion-label>AB<ion-label>
            </ion-avatar>
          `
        })}
      </ion-content>
    </ion-app>
  `;
};

export const Color = Template.bind({});
Color.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/01.-Componentes?node-id=5248%3A39909',
  },
};
