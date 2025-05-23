# ion-label

Label is a wrapper element that can be used in combination with `ion-item`, `ion-input`, `ion-toggle`, and more. The position of the label inside of an item can be inline, fixed, stacked, or floating.


<!-- Auto Generated Below -->


## Usage

### Angular / javascript

```html
<!-- Default Label -->
<ion-label>Label</ion-label>

<!-- Label Colors -->
<ion-label color="primary">Primary Label</ion-label>
<ion-label color="secondary">Secondary Label</ion-label>
<ion-label color="danger">Danger Label</ion-label>
<ion-label color="light">Light Label</ion-label>
<ion-label color="dark">Dark Label</ion-label>

<!-- Item Labels -->
<ion-item>
  <ion-label>Default Item</ion-label>
</ion-item>

<ion-item>
  <ion-label class="ion-text-wrap">
    Multi-line text that should wrap when it is too long
    to fit on one line in the item.
  </ion-label>
</ion-item>

<!-- Input Labels -->
<ion-item>
  <ion-label>Default Input</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="fixed">Fixed</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="floating">Floating</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label position="stacked">Stacked</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>Toggle</ion-label>
  <ion-toggle slot="end" checked></ion-toggle>
</ion-item>

<ion-item>
  <ion-checkbox slot="start" checked></ion-checkbox>
  <ion-label>Checkbox</ion-label>
</ion-item>
```


### React

```tsx
import React from 'react';
import { IonLabel, IonItem, IonInput, IonToggle, IonCheckbox, IonContent } from '@ionic/react';

export const LabelExample: React.FC = () => (
  <IonContent>
    {/*-- Default Label --*/}
    <IonLabel>Label</IonLabel><br />

    {/*-- Label Colors --*/}
    <IonLabel color="primary">Primary Label</IonLabel><br />
    <IonLabel color="secondary">Secondary Label</IonLabel><br />
    <IonLabel color="danger">Danger Label</IonLabel><br />
    <IonLabel color="light">Light Label</IonLabel><br />
    <IonLabel color="dark">Dark Label</IonLabel><br />

    {/*-- Item Labels --*/}
    <IonItem>
      <IonLabel>Default Item</IonLabel>
    </IonItem>

    <IonItem>
      <IonLabel className="ion-text-wrap">
        Multi-line text that should wrap when it is too long
        to fit on one line in the item.
      </IonLabel>
    </IonItem>

    {/*-- Input Labels --*/}
    <IonItem>
      <IonLabel>Default Input</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="fixed">Fixed</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="floating">Floating</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel position="stacked">Stacked</IonLabel>
      <IonInput></IonInput>
    </IonItem>

    <IonItem>
      <IonLabel>Toggle</IonLabel>
      <IonToggle slot="end" checked></IonToggle>
    </IonItem>

    <IonItem>
      <IonCheckbox slot="start" checked />
      <IonLabel>Checkbox</IonLabel>
    </IonItem>
  </IonContent>
);
```


### Stencil

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'label-example',
  styleUrl: 'label-example.css'
})
export class LabelExample {
  render() {
    return [
      // Default Label
      <ion-label>Label</ion-label>,

      // Label Colors
      <ion-label color="primary">Primary Label</ion-label>,
      <ion-label color="secondary">Secondary Label</ion-label>,
      <ion-label color="danger">Danger Label</ion-label>,
      <ion-label color="light">Light Label</ion-label>,
      <ion-label color="dark">Dark Label</ion-label>,

      // Item Labels
      <ion-item>
        <ion-label>Default Item</ion-label>
      </ion-item>,

      <ion-item>
        <ion-label class="ion-text-wrap">
          Multi-line text that should wrap when it is too long
          to fit on one line in the item.
        </ion-label>
      </ion-item>,

      // Input Labels
      <ion-item>
        <ion-label>Default Input</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="fixed">Fixed</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">Floating</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label position="stacked">Stacked</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label>Toggle</ion-label>
        <ion-toggle slot="end" checked={true}></ion-toggle>
      </ion-item>,

      <ion-item>
        <ion-checkbox slot="start" checked={true}></ion-checkbox>
        <ion-label>Checkbox</ion-label>
      </ion-item>
    ];
  }
}
```


### Vue

```html
<template>
  <!-- Default Label -->
  <ion-label>Label</ion-label>

  <!-- Label Colors -->
  <ion-label color="primary">Primary Label</ion-label>
  <ion-label color="secondary">Secondary Label</ion-label>
  <ion-label color="danger">Danger Label</ion-label>
  <ion-label color="light">Light Label</ion-label>
  <ion-label color="dark">Dark Label</ion-label>

  <!-- Item Labels -->
  <ion-item>
    <ion-label>Default Item</ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      Multi-line text that should wrap when it is too long
      to fit on one line in the item.
    </ion-label>
  </ion-item>

  <!-- Input Labels -->
  <ion-item>
    <ion-label>Default Input</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="fixed">Fixed</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="floating">Floating</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Stacked</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>Toggle</ion-label>
    <ion-toggle slot="end" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-checkbox slot="start" checked></ion-checkbox>
    <ion-label>Checkbox</ion-label>
  </ion-item>
</template>

<script>
import { 
  IonCheckbox, 
  IonInput, 
  IonItem, 
  IonLabel,
  IonToggle
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonCheckbox, 
    IonInput, 
    IonItem, 
    IonLabel,
    IonToggle
  }
});
</script>
```



## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                            | Type                                              | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| `color`    | `color`    | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics). | `string \| undefined`                             | `undefined` |
| `mode`     | `mode`     | The mode determines which platform styles to use.                                                                                                                                                                                                                      | `"ios" \| "md"`                                   | `undefined` |
| `position` | `position` | The position determines where and how the label behaves inside an item.                                                                                                                                                                                                | `"fixed" \| "floating" \| "stacked" \| undefined` | `undefined` |


## CSS Custom Properties

| Name      | Description        |
| --------- | ------------------ |
| `--color` | Color of the label |


## Dependencies

### Used by

 - [ajuda-modal](../@templarios/ionic-1-migracao/simulados/ajuda-modal)
 - [apostila-modal](../@templarios/ionic-1-migracao/duvidas-academicas/apostila-modal)
 - [aviso-modal](../@templarios/ionic-1-migracao/simulados/aviso-modal)
 - [concurso-modal](../@templarios/ionic-1-migracao/duvidas-academicas/concurso-modal)
 - [denunciar-modal](../@templarios/ionic-1-migracao/duvidas-academicas/denunciar-modal)
 - [especialidade-modal](../@templarios/ionic-1-migracao/simulados/especialidade-modal)
 - [excluir-modal](../@templarios/ionic-1-migracao/duvidas-academicas/excluir-modal)
 - [filtro-modal](../@templarios/ionic-1-migracao/duvidas-academicas/filtro-modal)
 - [informativo-modal](../@templarios/ionic-1-migracao/apostila/informativo-modal)
 - ion-select-popover
 - [local-modal](../@templarios/ionic-1-migracao/simulados/local-modal)
 - [med-config](../@templarios/legacy/med-config)
 - [medreader-pro-modal](../@templarios/ionic-1-migracao/apostila/medreader-pro-modal)
 - [realizacoes-modal](../@templarios/ionic-1-migracao/simulados/realizacoes-modal)
 - [simulado-modal](../@templarios/ionic-1-migracao/duvidas-academicas/simulado-modal)
 - [text-area-modal](../@templarios/ionic-1-migracao/duvidas-academicas/text-area-modal)
 - [tp-chart-bar](../@templarios/core/tp-chart-bar)
 - [tp-select-dropdown](../@templarios/core/tp-select-dropdown)
 - [tutorial-modal](../@templarios/ionic-1-migracao/simulados/tutorial-modal)
 - [unidades-modal](../@templarios/ionic-1-migracao/simulados/unidades-modal)

### Graph
```mermaid
graph TD;
  ajuda-modal --> ion-label
  apostila-modal --> ion-label
  aviso-modal --> ion-label
  concurso-modal --> ion-label
  denunciar-modal --> ion-label
  especialidade-modal --> ion-label
  excluir-modal --> ion-label
  filtro-modal --> ion-label
  informativo-modal --> ion-label
  ion-select-popover --> ion-label
  local-modal --> ion-label
  med-config --> ion-label
  medreader-pro-modal --> ion-label
  realizacoes-modal --> ion-label
  simulado-modal --> ion-label
  text-area-modal --> ion-label
  tp-chart-bar --> ion-label
  tp-select-dropdown --> ion-label
  tutorial-modal --> ion-label
  unidades-modal --> ion-label
  style ion-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
