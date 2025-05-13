# med-image-zoom



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                      | Type                  | Default     |
| ------------------- | --------------------- | -------------------------------- | --------------------- | ----------- |
| `imagens`           | `imagens`             | todo                             | `any`                 | `[]`        |
| `initialSlide`      | `initial-slide`       | todo                             | `number \| undefined` | `0`         |
| `marcaAguaInferior` | `marca-agua-inferior` | todo                             | `string \| undefined` | `undefined` |
| `marcaAguaSuperior` | `marca-agua-superior` | todo                             | `string \| undefined` | `undefined` |
| `maxRatioDesktop`   | `max-ratio-desktop`   | Zoom maximo na imagem em desktop | `number`              | `2`         |
| `maxRatioMobile`    | `max-ratio-mobile`    | Zoom maximo na imagem em Mobile  | `number`              | `4`         |
| `titulo`            | `titulo`              | todo                             | `string \| undefined` | `undefined` |


## Dependencies

### Depends on

- [med-header](../med-header)
- [med-navbar](../med-navbar)
- [ion-button](../../../button)
- ion-icon
- [ion-content](../../../content)
- [ion-slides](../../../slides)
- [ion-slide](../../../slide)

### Graph
```mermaid
graph TD;
  med-image-zoom --> med-header
  med-image-zoom --> med-navbar
  med-image-zoom --> ion-button
  med-image-zoom --> ion-icon
  med-image-zoom --> ion-content
  med-image-zoom --> ion-slides
  med-image-zoom --> ion-slide
  ion-button --> ion-ripple-effect
  style med-image-zoom fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
