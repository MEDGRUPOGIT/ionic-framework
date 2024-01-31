import { html } from 'lit-html';
import { modalController } from '../../../../../dist/ionic/index.esm.js';

export default {
  title: 'Components/Image Zoom',
};

const createModal = async () => {
  modalController.create({
    component: 'med-image-zoom',
    cssClass: 'med-image-zoom',
    componentProps:{
      imagens: [
        {
          src: "https://via.placeholder.com/500",
          legenda: "Alternativa A - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo ultrices placerat. Ut quis ante viverra, egestas orci vitae, feugiat velit. Pellentesque luctus sapien eget vulputate dapibus. Donec in leo."
        },
      ],
      marcaAguaSuperior: '1234567890',
      marcaAguaInferior: '1234567890',
      titulo:'Alternativa A',
    }
  }).then((modal)=>{
    modal.present()
  });
}

const TemplateDefault = () => {
  return html`
    <div style="text-align: center;">

      <!-- component -->
      <ion-button ds-name="primary" @click="${createModal}">Abrir Zoom de Imagens</ion-button>
      <!-- component -->

    </div>
  `
}

export const ImageZoom = TemplateDefault.bind({});

