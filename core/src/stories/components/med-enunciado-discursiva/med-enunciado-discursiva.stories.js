import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Team/Enunciado Discursiva',
  decorators: [withDesign],
};

const TemplateDefault = ({enunciado}) => {
  return html`
    <ion-app>
      <ion-content>

        <!-- component -->
        <med-enunciado-discursiva>
          ${enunciado}
        </med-enunciado-discursiva>
        <!-- component -->

      <ion-content>
    </ion-app>
    `
}

export const EnunciadoDiscursiva = TemplateDefault.bind({});
EnunciadoDiscursiva.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}
EnunciadoDiscursiva.argTypes = {
  enunciado: {
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae leo egestas, maximus elit eget, auctor dui. Nunc quis pulvinar magna, at dapibus est. Suspendisse volutpat euismod ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris malesuada semper purus non vehicula. Integer convallis sollicitudin.',
    control: { type: 'text' },
    description: 'Emento definido via slot.'
  },
};
