# med-alternativas



<!-- Auto Generated Below -->


## Properties

| Property                              | Attribute                 | Description | Type                  | Default         |
| ------------------------------------- | ------------------------- | ----------- | --------------------- | --------------- |
| `alternativaSelecionada` _(required)_ | `alternativa-selecionada` | todo        | `string`              | `undefined`     |
| `alternativas`                        | `alternativas`            | todo        | `any`                 | `[]`            |
| `dsColor`                             | `ds-color`                | todo        | `string \| undefined` | `undefined`     |
| `dsSkin`                              | `ds-skin`                 | todo        | `any`                 | `undefined`     |
| `dsSkinConfig`                        | `ds-skin-config`          | todo        | `any`                 | `undefined`     |
| `keyAlternativa`                      | `key-alternativa`         | todo        | `string`              | `'Alternativa'` |
| `keyEnunciado`                        | `key-enunciado`           | todo        | `string`              | `'Enunciado'`   |
| `keyImagem`                           | `key-imagem`              | todo        | `string`              | `'Imagem'`      |
| `keyPorcentagem`                      | `key-porcentagem`         | todo        | `string`              | `'Porcentagem'` |
| `keyRiscada`                          | `key-riscada`             | todo        | `string`              | `'Riscada'`     |
| `mostraResposta` _(required)_         | `mostra-resposta`         | todo        | `boolean`             | `undefined`     |
| `mostrarProgressBar`                  | `mostrar-progress-bar`    | todo        | `boolean`             | `true`          |
| `permiteDesmarcar`                    | `permite-desmarcar`       | todo        | `boolean`             | `false`         |
| `permiteRiscar`                       | `permite-riscar`          | todo        | `boolean`             | `true`          |
| `respostaCorreta` _(required)_        | `resposta-correta`        | todo        | `string`              | `undefined`     |


## Events

| Event               | Description | Type                                   |
| ------------------- | ----------- | -------------------------------------- |
| `medChange`         | todo        | `CustomEvent<MedAlternativaInterface>` |
| `medGalleryRequest` | todo        | `CustomEvent<MedAlternativaInterface>` |
| `medRiscada`        | todo        | `CustomEvent<MedAlternativaInterface>` |


## Dependencies

### Used by

 - [med-alternativas](../med-alternativas)

### Depends on

- [med-chart-bar-horizontal](../../../core/med-chart-bar-horizontal)
- ion-icon

### Graph
```mermaid
graph TD;
  med-alternativas-a --> med-chart-bar-horizontal
  med-alternativas-a --> ion-icon
  med-chart-bar-horizontal --> med-type
  med-alternativas --> med-alternativas-a
  style med-alternativas-a fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
