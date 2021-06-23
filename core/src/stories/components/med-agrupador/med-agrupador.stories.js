import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Global/Agrupador',
  decorators: [withDesign],
};

const TemplateDefault = () => {
  return html`
    <ion-app class="storybook-only">
      <div class="storybook-only__container">

        <!-- component -->
          <med-agrupador>
            Expandir a lista
            <ion-icon name="med-arrow-down" color="brand-primary"></ion-icon>
          </med-agrupador>
        <!-- component -->

      <ion-content>
    </ion-app>
  `
}

export const Agrupador = TemplateDefault.bind({});
Agrupador.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/2j9jNt3PmQXpzD3IQJkyZe/Componentes?node-id=2781%3A8634',
  },
  actions: {
    handles: ['btnLeftClick', 'btnRightClick'],
  },
}
Agrupador.argTypes = {

};
