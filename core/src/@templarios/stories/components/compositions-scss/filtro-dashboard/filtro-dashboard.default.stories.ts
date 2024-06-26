import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Compositions-scss/Filtro Dashboard',
  decorators: [withDesign],
};

const Template = () => {
  return html`
    <ion-app>
      <ion-content>
        <div class="flex-center flex-center--xs">

          <!-- component -->
          <med-base class="cp-filtro-dashboard">
            <med-type class="cp-filtro-dashboard__type" token="p16b" slot="start">Personalize seu dashboard</med-type>

            <ion-button ds-size="sm" class="cp-filtro-dashboard__button"  mode="ios" fill="clear" slot="middle" icon-only>
              <ion-icon class="med-icon med-color-neutral med-color-neutral-8" name="med-filtro" slot="icon-only"></ion-icon>
            </ion-button>
          </med-base>
          <!-- component -->

        </div>
      </ion-content>
    </ion-app>
    `;
};

export const Default = Template.bind({});
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/1YvPOL5j7kW9Btmgkh2YzA/MEDSmart?node-id=6430%3A32282',
  },
};
Default.argTypes = {};
