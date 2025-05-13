/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./proxies-utils";
import { Components } from "@ionic/core";
export declare interface AjudaModal extends Components.AjudaModal {
}
@Component({ selector: "ajuda-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class AjudaModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface ApostilaModal extends Components.ApostilaModal {
}
@Component({ selector: "apostila-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class ApostilaModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface AvisoModal extends Components.AvisoModal {
}
@Component({ selector: "aviso-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class AvisoModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface ConcursoModal extends Components.ConcursoModal {
}
@Component({ selector: "concurso-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class ConcursoModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface DenunciarModal extends Components.DenunciarModal {
}
@Component({ selector: "denunciar-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class DenunciarModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface DialogTest extends Components.DialogTest {
}
@Component({ selector: "dialog-test", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class DialogTest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface EspecialidadeModal extends Components.EspecialidadeModal {
}
@Component({ selector: "especialidade-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class EspecialidadeModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface ExcluirModal extends Components.ExcluirModal {
}
@Component({ selector: "excluir-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class ExcluirModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface FiltroModal extends Components.FiltroModal {
}
@Component({ selector: "filtro-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class FiltroModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface InformativoModal extends Components.InformativoModal {
}
@Component({ selector: "informativo-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class InformativoModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonApp extends Components.IonApp {
}
@Component({ selector: "ion-app", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonApp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonAvatar extends Components.IonAvatar {
}
@Component({ selector: "ion-avatar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonBackButton extends Components.IonBackButton {
}
@ProxyCmp({ inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] })
@Component({ selector: "ion-back-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] })
export class IonBackButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonBackdrop extends Components.IonBackdrop {
}
@ProxyCmp({ inputs: ["stopPropagation", "tappable", "visible"] })
@Component({ selector: "ion-backdrop", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["stopPropagation", "tappable", "visible"] })
export class IonBackdrop {
  ionBackdropTap!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionBackdropTap"]);
  }
}
export declare interface IonBadge extends Components.IonBadge {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-badge", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonButton extends Components.IonButton {
}
@ProxyCmp({ inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })
@Component({ selector: "ion-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })
export class IonButton {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}
export declare interface IonButtons extends Components.IonButtons {
}
@ProxyCmp({ inputs: ["collapse"] })
@Component({ selector: "ion-buttons", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse"] })
export class IonButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCard extends Components.IonCard {
}
@ProxyCmp({ inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
@Component({ selector: "ion-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
export class IonCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardContent extends Components.IonCardContent {
}
@ProxyCmp({ inputs: ["mode"] })
@Component({ selector: "ion-card-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode"] })
export class IonCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardHeader extends Components.IonCardHeader {
}
@ProxyCmp({ inputs: ["color", "mode", "translucent"] })
@Component({ selector: "ion-card-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "translucent"] })
export class IonCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardSubtitle extends Components.IonCardSubtitle {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-card-subtitle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCardTitle extends Components.IonCardTitle {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-card-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCheckbox extends Components.IonCheckbox {
}
@ProxyCmp({ inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] })
@Component({ selector: "ion-checkbox", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] })
export class IonCheckbox {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonChip extends Components.IonChip {
}
@ProxyCmp({ inputs: ["color", "disabled", "mode", "outline"] })
@Component({ selector: "ion-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "outline"] })
export class IonChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonCol extends Components.IonCol {
}
@ProxyCmp({ inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })
@Component({ selector: "ion-col", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })
export class IonCol {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonContent extends Components.IonContent {
}
@ProxyCmp({ inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY", "showScrollBarMobile"], "methods": ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"] })
@Component({ selector: "ion-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY", "showScrollBarMobile"] })
export class IonContent {
  ionScrollStart!: EventEmitter<CustomEvent>;
  ionScroll!: EventEmitter<CustomEvent>;
  ionScrollEnd!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
  }
}
export declare interface IonDatetime extends Components.IonDatetime {
}
@ProxyCmp({ inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"], "methods": ["open"] })
@Component({ selector: "ion-datetime", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"] })
export class IonDatetime {
  ionCancel!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonFab extends Components.IonFab {
}
@ProxyCmp({ inputs: ["activated", "edge", "horizontal", "vertical"], "methods": ["close"] })
@Component({ selector: "ion-fab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "edge", "horizontal", "vertical"] })
export class IonFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonFabButton extends Components.IonFabButton {
}
@ProxyCmp({ inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })
@Component({ selector: "ion-fab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })
export class IonFabButton {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}
export declare interface IonFabList extends Components.IonFabList {
}
@ProxyCmp({ inputs: ["activated", "side"] })
@Component({ selector: "ion-fab-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "side"] })
export class IonFabList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonFooter extends Components.IonFooter {
}
@ProxyCmp({ inputs: ["mode", "translucent"] })
@Component({ selector: "ion-footer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "translucent"] })
export class IonFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonGrid extends Components.IonGrid {
}
@ProxyCmp({ inputs: ["fixed"] })
@Component({ selector: "ion-grid", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["fixed"] })
export class IonGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonHeader extends Components.IonHeader {
}
@ProxyCmp({ inputs: ["collapse", "mode", "translucent"] })
@Component({ selector: "ion-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse", "mode", "translucent"] })
export class IonHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonIcon extends Components.IonIcon {
}
@ProxyCmp({ inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] })
@Component({ selector: "ion-icon", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ariaHidden", "ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] })
export class IonIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonImg extends Components.IonImg {
}
@ProxyCmp({ inputs: ["alt", "src"] })
@Component({ selector: "ion-img", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alt", "src"] })
export class IonImg {
  ionImgWillLoad!: EventEmitter<CustomEvent>;
  ionImgDidLoad!: EventEmitter<CustomEvent>;
  ionError!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
  }
}
export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {
}
@ProxyCmp({ inputs: ["disabled", "position", "threshold"], "methods": ["complete"] })
@Component({ selector: "ion-infinite-scroll", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "position", "threshold"] })
export class IonInfiniteScroll {
  ionInfinite!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInfinite"]);
  }
}
export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {
}
@ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] })
@Component({ selector: "ion-infinite-scroll-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["loadingSpinner", "loadingText"] })
export class IonInfiniteScrollContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonInput extends Components.IonInput {
}
@ProxyCmp({ inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"], "methods": ["setFocus", "getInputElement"] })
@Component({ selector: "ion-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] })
export class IonInput {
  ionInput!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
  }
}
export declare interface IonItem extends Components.IonItem {
}
@ProxyCmp({ inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
@Component({ selector: "ion-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
export class IonItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemDivider extends Components.IonItemDivider {
}
@ProxyCmp({ inputs: ["color", "mode", "sticky"] })
@Component({ selector: "ion-item-divider", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "sticky"] })
export class IonItemDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemGroup extends Components.IonItemGroup {
}
@Component({ selector: "ion-item-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonItemGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemOption extends Components.IonItemOption {
}
@ProxyCmp({ inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })
@Component({ selector: "ion-item-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })
export class IonItemOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonItemOptions extends Components.IonItemOptions {
}
@ProxyCmp({ inputs: ["side"] })
@Component({ selector: "ion-item-options", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["side"] })
export class IonItemOptions {
  ionSwipe!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSwipe"]);
  }
}
export declare interface IonItemSliding extends Components.IonItemSliding {
}
@ProxyCmp({ inputs: ["disabled"], "methods": ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"] })
@Component({ selector: "ion-item-sliding", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
export class IonItemSliding {
  ionDrag!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionDrag"]);
  }
}
export declare interface IonLabel extends Components.IonLabel {
}
@ProxyCmp({ inputs: ["color", "mode", "position"] })
@Component({ selector: "ion-label", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "position"] })
export class IonLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonList extends Components.IonList {
}
@ProxyCmp({ inputs: ["inset", "lines", "mode"], "methods": ["closeSlidingItems"] })
@Component({ selector: "ion-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inset", "lines", "mode"] })
export class IonList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonListHeader extends Components.IonListHeader {
}
@ProxyCmp({ inputs: ["color", "lines", "mode"] })
@Component({ selector: "ion-list-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "lines", "mode"] })
export class IonListHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonMenu extends Components.IonMenu {
}
@ProxyCmp({ inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"], "methods": ["isOpen", "isActive", "open", "close", "toggle", "setOpen"] })
@Component({ selector: "ion-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"] })
export class IonMenu {
  ionWillOpen!: EventEmitter<CustomEvent>;
  ionWillClose!: EventEmitter<CustomEvent>;
  ionDidOpen!: EventEmitter<CustomEvent>;
  ionDidClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
  }
}
export declare interface IonMenuButton extends Components.IonMenuButton {
}
@ProxyCmp({ inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })
@Component({ selector: "ion-menu-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })
export class IonMenuButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonMenuToggle extends Components.IonMenuToggle {
}
@ProxyCmp({ inputs: ["autoHide", "menu"] })
@Component({ selector: "ion-menu-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "menu"] })
export class IonMenuToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonNav extends Components.IonNav {
}
@ProxyCmp({ inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"], "methods": ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"] })
@Component({ selector: "ion-nav", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"] })
export class IonNav {
  ionNavWillChange!: EventEmitter<CustomEvent>;
  ionNavDidChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionNavWillChange", "ionNavDidChange"]);
  }
}
export declare interface IonNavLink extends Components.IonNavLink {
}
@ProxyCmp({ inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })
@Component({ selector: "ion-nav-link", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })
export class IonNavLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonNote extends Components.IonNote {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-note", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonNote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonProgressBar extends Components.IonProgressBar {
}
@ProxyCmp({ inputs: ["buffer", "color", "dsColor", "mode", "reversed", "type", "value"] })
@Component({ selector: "ion-progress-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buffer", "color", "dsColor", "mode", "reversed", "type", "value"] })
export class IonProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonRadio extends Components.IonRadio {
}
@ProxyCmp({ inputs: ["color", "disabled", "mode", "name", "value"] })
@Component({ selector: "ion-radio", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "name", "value"] })
export class IonRadio {
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
}
export declare interface IonRadioGroup extends Components.IonRadioGroup {
}
@ProxyCmp({ inputs: ["allowEmptySelection", "name", "value"] })
@Component({ selector: "ion-radio-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["allowEmptySelection", "name", "value"] })
export class IonRadioGroup {
  ionChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}
export declare interface IonRange extends Components.IonRange {
}
@ProxyCmp({ inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] })
@Component({ selector: "ion-range", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] })
export class IonRange {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonRefresher extends Components.IonRefresher {
}
@ProxyCmp({ inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"], "methods": ["complete", "cancel", "getProgress"] })
@Component({ selector: "ion-refresher", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"] })
export class IonRefresher {
  ionRefresh!: EventEmitter<CustomEvent>;
  ionPull!: EventEmitter<CustomEvent>;
  ionStart!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
  }
}
export declare interface IonRefresherContent extends Components.IonRefresherContent {
}
@ProxyCmp({ inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })
@Component({ selector: "ion-refresher-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })
export class IonRefresherContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonReorder extends Components.IonReorder {
}
@Component({ selector: "ion-reorder", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonReorder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonReorderGroup extends Components.IonReorderGroup {
}
@ProxyCmp({ inputs: ["disabled"], "methods": ["complete"] })
@Component({ selector: "ion-reorder-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
export class IonReorderGroup {
  ionItemReorder!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionItemReorder"]);
  }
}
export declare interface IonRippleEffect extends Components.IonRippleEffect {
}
@ProxyCmp({ inputs: ["type"], "methods": ["addRipple"] })
@Component({ selector: "ion-ripple-effect", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["type"] })
export class IonRippleEffect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonRow extends Components.IonRow {
}
@Component({ selector: "ion-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSearchbar extends Components.IonSearchbar {
}
@ProxyCmp({ inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"], "methods": ["setFocus", "getInputElement"] })
@Component({ selector: "ion-searchbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"] })
export class IonSearchbar {
  ionInput!: EventEmitter<CustomEvent>;
  ionChange!: EventEmitter<CustomEvent>;
  ionCancel!: EventEmitter<CustomEvent>;
  ionClear!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
  }
}
export declare interface IonSegment extends Components.IonSegment {
}
@ProxyCmp({ inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] })
@Component({ selector: "ion-segment", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "scrollable", "swipeGesture", "value"] })
export class IonSegment {
  ionChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}
export declare interface IonSegmentButton extends Components.IonSegmentButton {
}
@ProxyCmp({ inputs: ["disabled", "layout", "mode", "type", "value"] })
@Component({ selector: "ion-segment-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "layout", "mode", "type", "value"] })
export class IonSegmentButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSelect extends Components.IonSelect {
}
@ProxyCmp({ inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"], "methods": ["open"] })
@Component({ selector: "ion-select", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] })
export class IonSelect {
  ionChange!: EventEmitter<CustomEvent>;
  ionCancel!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonSelectOption extends Components.IonSelectOption {
}
@ProxyCmp({ inputs: ["disabled", "value"] })
@Component({ selector: "ion-select-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "value"] })
export class IonSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSkeletonText extends Components.IonSkeletonText {
}
@ProxyCmp({ inputs: ["animated"] })
@Component({ selector: "ion-skeleton-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated"] })
export class IonSkeletonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSlide extends Components.IonSlide {
}
@Component({ selector: "ion-slide", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSlides extends Components.IonSlides {
}
@ProxyCmp({ inputs: ["mode", "options", "pager", "scrollbar"], "methods": ["update", "updateAutoHeight", "slideTo", "slideNext", "slidePrev", "getActiveIndex", "getPreviousIndex", "length", "isEnd", "isBeginning", "startAutoplay", "stopAutoplay", "lockSwipeToNext", "lockSwipeToPrev", "lockSwipes", "getSwiper"] })
@Component({ selector: "ion-slides", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "options", "pager", "scrollbar"] })
export class IonSlides {
  ionSlidesDidLoad!: EventEmitter<CustomEvent>;
  ionSlideTap!: EventEmitter<CustomEvent>;
  ionSlideDoubleTap!: EventEmitter<CustomEvent>;
  ionSlideWillChange!: EventEmitter<CustomEvent>;
  ionSlideDidChange!: EventEmitter<CustomEvent>;
  ionSlideNextStart!: EventEmitter<CustomEvent>;
  ionSlidePrevStart!: EventEmitter<CustomEvent>;
  ionSlideNextEnd!: EventEmitter<CustomEvent>;
  ionSlidePrevEnd!: EventEmitter<CustomEvent>;
  ionSlideTransitionStart!: EventEmitter<CustomEvent>;
  ionSlideTransitionEnd!: EventEmitter<CustomEvent>;
  ionSlideDrag!: EventEmitter<CustomEvent>;
  ionSlideReachStart!: EventEmitter<CustomEvent>;
  ionSlideReachEnd!: EventEmitter<CustomEvent>;
  ionSlideTouchStart!: EventEmitter<CustomEvent>;
  ionSlideTouchEnd!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSlidesDidLoad", "ionSlideTap", "ionSlideDoubleTap", "ionSlideWillChange", "ionSlideDidChange", "ionSlideNextStart", "ionSlidePrevStart", "ionSlideNextEnd", "ionSlidePrevEnd", "ionSlideTransitionStart", "ionSlideTransitionEnd", "ionSlideDrag", "ionSlideReachStart", "ionSlideReachEnd", "ionSlideTouchStart", "ionSlideTouchEnd"]);
  }
}
export declare interface IonSpinner extends Components.IonSpinner {
}
@ProxyCmp({ inputs: ["color", "duration", "name", "paused"] })
@Component({ selector: "ion-spinner", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "duration", "name", "paused"] })
export class IonSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonSplitPane extends Components.IonSplitPane {
}
@ProxyCmp({ inputs: ["contentId", "disabled", "when"] })
@Component({ selector: "ion-split-pane", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "when"] })
export class IonSplitPane {
  ionSplitPaneVisible!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
  }
}
export declare interface IonTabBar extends Components.IonTabBar {
}
@ProxyCmp({ inputs: ["color", "mode", "selectedTab", "translucent"] })
@Component({ selector: "ion-tab-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "selectedTab", "translucent"] })
export class IonTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonTabButton extends Components.IonTabButton {
}
@ProxyCmp({ inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })
@Component({ selector: "ion-tab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })
export class IonTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonText extends Components.IonText {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonTextarea extends Components.IonTextarea {
}
@ProxyCmp({ inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"], "methods": ["setFocus", "getInputElement"] })
@Component({ selector: "ion-textarea", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] })
export class IonTextarea {
  ionChange!: EventEmitter<CustomEvent>;
  ionInput!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
  }
}
export declare interface IonThumbnail extends Components.IonThumbnail {
}
@Component({ selector: "ion-thumbnail", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class IonThumbnail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonTitle extends Components.IonTitle {
}
@ProxyCmp({ inputs: ["color", "size"] })
@Component({ selector: "ion-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "size"] })
export class IonTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface IonToggle extends Components.IonToggle {
}
@ProxyCmp({ inputs: ["checked", "color", "disabled", "mode", "name", "value"] })
@Component({ selector: "ion-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "mode", "name", "value"] })
export class IonToggle {
  ionChange!: EventEmitter<CustomEvent>;
  ionFocus!: EventEmitter<CustomEvent>;
  ionBlur!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
}
export declare interface IonToolbar extends Components.IonToolbar {
}
@ProxyCmp({ inputs: ["color", "mode"] })
@Component({ selector: "ion-toolbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
export class IonToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface LocalModal extends Components.LocalModal {
}
@Component({ selector: "local-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class LocalModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAccordionItem extends Components.MedAccordionItem {
}
@ProxyCmp({ inputs: ["background", "canCollapse", "dsColor", "isOpened", "noBorder", "slotsToggle"] })
@Component({ selector: "med-accordion-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["background", "canCollapse", "dsColor", "isOpened", "noBorder", "slotsToggle"] })
export class MedAccordionItem {
  toggle!: EventEmitter<CustomEvent>;
  opened!: EventEmitter<CustomEvent>;
  medClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["toggle", "opened", "medClick"]);
  }
}
export declare interface MedAccordionList extends Components.MedAccordionList {
}
@ProxyCmp({ inputs: ["margin", "noAnimation", "noBorder", "singleOpen"] })
@Component({ selector: "med-accordion-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["margin", "noAnimation", "noBorder", "singleOpen"] })
export class MedAccordionList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAddCard extends Components.MedAddCard {
}
@ProxyCmp({ inputs: ["iconName", "titulo"] })
@Component({ selector: "med-add-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["iconName", "titulo"] })
export class MedAddCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAgrupador extends Components.MedAgrupador {
}
@ProxyCmp({ inputs: ["collapsed", "dsColor", "labelAlternativo", "labelDefault"], "methods": ["toggle"] })
@Component({ selector: "med-agrupador", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapsed", "dsColor", "labelAlternativo", "labelDefault"] })
export class MedAgrupador {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAlert extends Components.MedAlert {
}
@ProxyCmp({ inputs: ["canClose", "cancelText", "confirmText", "disableSanitize", "heading", "message"] })
@Component({ selector: "med-alert", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["canClose", "cancelText", "confirmText", "disableSanitize", "heading", "message"] })
export class MedAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAlertFixed extends Components.MedAlertFixed {
}
@ProxyCmp({ inputs: ["dsColor", "dsName", "labelAtualizar", "labelOffline"] })
@Component({ selector: "med-alert-fixed", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsName", "labelAtualizar", "labelOffline"] })
export class MedAlertFixed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAlternativas extends Components.MedAlternativas {
}
@ProxyCmp({ inputs: ["alternativaSelecionada", "alternativas", "dsColor", "dsSkinConfig", "keyAlternativa", "keyEnunciado", "keyImagem", "keyPorcentagem", "keyRiscada", "mostraResposta", "mostrarProgressBar", "permiteDesmarcar", "permiteRiscar", "respostaCorreta"] })
@Component({ selector: "med-alternativas", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alternativaSelecionada", "alternativas", "dsColor", "dsSkinConfig", "keyAlternativa", "keyEnunciado", "keyImagem", "keyPorcentagem", "keyRiscada", "mostraResposta", "mostrarProgressBar", "permiteDesmarcar", "permiteRiscar", "respostaCorreta"] })
export class MedAlternativas {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAlternativasA extends Components.MedAlternativasA {
}
@ProxyCmp({ inputs: ["alternativaSelecionada", "alternativas", "dsColor", "dsSkin", "dsSkinConfig", "keyAlternativa", "keyEnunciado", "keyImagem", "keyPorcentagem", "keyRiscada", "mostraResposta", "mostrarProgressBar", "permiteDesmarcar", "permiteRiscar", "respostaCorreta"] })
@Component({ selector: "med-alternativas-a", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alternativaSelecionada", "alternativas", "dsColor", "dsSkin", "dsSkinConfig", "keyAlternativa", "keyEnunciado", "keyImagem", "keyPorcentagem", "keyRiscada", "mostraResposta", "mostrarProgressBar", "permiteDesmarcar", "permiteRiscar", "respostaCorreta"] })
export class MedAlternativasA {
  medChange!: EventEmitter<CustomEvent>;
  medRiscada!: EventEmitter<CustomEvent>;
  medGalleryRequest!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medChange", "medRiscada", "medGalleryRequest"]);
  }
}
export declare interface MedAlternativasB extends Components.MedAlternativasB {
}
@ProxyCmp({ inputs: ["alternativaSelecionada", "alternativas", "dsColor", "dsSkin", "dsSkinConfig", "keyAlternativa", "keyEnunciado", "keyImagem", "keyPorcentagem", "keyRiscada", "mostraResposta", "mostrarProgressBar", "permiteDesmarcar", "permiteRiscar", "respostaCorreta"] })
@Component({ selector: "med-alternativas-b", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alternativaSelecionada", "alternativas", "dsColor", "dsSkin", "dsSkinConfig", "keyAlternativa", "keyEnunciado", "keyImagem", "keyPorcentagem", "keyRiscada", "mostraResposta", "mostrarProgressBar", "permiteDesmarcar", "permiteRiscar", "respostaCorreta"] })
export class MedAlternativasB {
  medChange!: EventEmitter<CustomEvent>;
  medRiscada!: EventEmitter<CustomEvent>;
  medGalleryRequest!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medChange", "medRiscada", "medGalleryRequest"]);
  }
}
export declare interface MedAutocomplete extends Components.MedAutocomplete {
}
@ProxyCmp({ inputs: ["debounceTime", "dropdown"], "methods": ["toggleDropdown"] })
@Component({ selector: "med-autocomplete", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["debounceTime", "dropdown"] })
export class MedAutocomplete {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedAvatar extends Components.MedAvatar {
}
@ProxyCmp({ inputs: ["dsColor", "dsSize", "image", "letter"] })
@Component({ selector: "med-avatar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsSize", "image", "letter"] })
export class MedAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedBanner extends Components.MedBanner {
}
@ProxyCmp({ inputs: ["btnLeft", "btnRight", "dsColor", "icon", "image", "texto", "titulo"] })
@Component({ selector: "med-banner", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["btnLeft", "btnRight", "dsColor", "icon", "image", "texto", "titulo"] })
export class MedBanner {
  btnLeftClick!: EventEmitter<CustomEvent>;
  btnRightClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["btnLeftClick", "btnRightClick"]);
  }
}
export declare interface MedBase extends Components.MedBase {
}
@ProxyCmp({ inputs: ["dsColor", "gap", "radius", "spacingH", "spacingV"] })
@Component({ selector: "med-base", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "gap", "radius", "spacingH", "spacingV"] })
export class MedBase {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedCalendar extends Components.MedCalendar {
}
@ProxyCmp({ inputs: ["ano", "choice", "container", "disable", "dsColor", "mes"] })
@Component({ selector: "med-calendar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ano", "choice", "container", "disable", "dsColor", "mes"] })
export class MedCalendar {
  medClick!: EventEmitter<CustomEvent>;
  medSwipe!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medClick", "medSwipe"]);
  }
}
export declare interface MedCalendarDay extends Components.MedCalendarDay {
}
@ProxyCmp({ inputs: ["active", "dsColor", "fill"] })
@Component({ selector: "med-calendar-day", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "dsColor", "fill"] })
export class MedCalendarDay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedCaption extends Components.MedCaption {
}
@ProxyCmp({ inputs: ["dsColor", "dsSize"] })
@Component({ selector: "med-caption", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsSize"] })
export class MedCaption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedCarregamento extends Components.MedCarregamento {
}
@ProxyCmp({ inputs: ["color", "message"] })
@Component({ selector: "med-carregamento", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "message"] })
export class MedCarregamento {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedCartaoRespostaItem extends Components.MedCartaoRespostaItem {
}
@ProxyCmp({ inputs: ["anulada", "ativa", "dsColor", "impressa"] })
@Component({ selector: "med-cartao-resposta-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["anulada", "ativa", "dsColor", "impressa"] })
export class MedCartaoRespostaItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedCartaoRespostaLista extends Components.MedCartaoRespostaLista {
}
@ProxyCmp({ inputs: ["isFlex", "justifyCenter"] })
@Component({ selector: "med-cartao-resposta-lista", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["isFlex", "justifyCenter"] })
export class MedCartaoRespostaLista {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedChartBar extends Components.MedChartBar {
}
@ProxyCmp({ inputs: ["dsColor", "height", "noLabel", "value", "width"] })
@Component({ selector: "med-chart-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "height", "noLabel", "value", "width"] })
export class MedChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedChartBarHorizontal extends Components.MedChartBarHorizontal {
}
@ProxyCmp({ inputs: ["dsColor", "dsSize", "hideValue", "label", "labelContent", "value"] })
@Component({ selector: "med-chart-bar-horizontal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsSize", "hideValue", "label", "labelContent", "value"] })
export class MedChartBarHorizontal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedChartCategoria extends Components.MedChartCategoria {
}
@ProxyCmp({ inputs: ["dsColor", "meta", "realizado", "titulo", "value"] })
@Component({ selector: "med-chart-categoria", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "meta", "realizado", "titulo", "value"] })
export class MedChartCategoria {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedChartRadial extends Components.MedChartRadial {
}
@ProxyCmp({ inputs: ["dsColor", "dsName", "dsSize", "subtitulo", "titulo", "valores"] })
@Component({ selector: "med-chart-radial", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsName", "dsSize", "subtitulo", "titulo", "valores"] })
export class MedChartRadial {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedChartRadialContent extends Components.MedChartRadialContent {
}
@ProxyCmp({ inputs: ["dsColor", "dsSize", "total"] })
@Component({ selector: "med-chart-radial-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsSize", "total"] })
export class MedChartRadialContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedChartRadialLabel extends Components.MedChartRadialLabel {
}
@ProxyCmp({ inputs: ["dsColor", "dsSize", "valores"] })
@Component({ selector: "med-chart-radial-label", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsSize", "valores"] })
export class MedChartRadialLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedCheckCard extends Components.MedCheckCard {
}
@ProxyCmp({ inputs: ["alert", "categoria", "dataFinal", "dataInicial", "dsColor", "finalizada", "horaFinal", "horaInicial", "iconName", "titulo"] })
@Component({ selector: "med-check-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alert", "categoria", "dataFinal", "dataInicial", "dsColor", "finalizada", "horaFinal", "horaInicial", "iconName", "titulo"] })
export class MedCheckCard {
  medClick!: EventEmitter<CustomEvent>;
  medTooltipClose!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medClick", "medTooltipClose"]);
  }
}
export declare interface MedChip extends Components.MedChip {
}
@ProxyCmp({ inputs: ["active", "disabled", "dsColor", "dsName", "dsSize", "iconLeft", "iconRight", "label"] })
@Component({ selector: "med-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "disabled", "dsColor", "dsName", "dsSize", "iconLeft", "iconRight", "label"] })
export class MedChip {
  medFocus!: EventEmitter<CustomEvent>;
  medBlur!: EventEmitter<CustomEvent>;
  medClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medFocus", "medBlur", "medClick"]);
  }
}
export declare interface MedConfig extends Components.MedConfig {
}
@ProxyCmp({ inputs: ["emitter", "opcoes"] })
@Component({ selector: "med-config", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["emitter", "opcoes"] })
export class MedConfig {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedContextMenu extends Components.MedContextMenu {
}
@ProxyCmp({ inputs: ["collapsed"], "methods": ["toggle"] })
@Component({ selector: "med-context-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapsed"] })
export class MedContextMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedDownloadButton extends Components.MedDownloadButton {
}
@ProxyCmp({ inputs: ["disabled", "downloaded", "downloading", "dsColor", "dsSize", "identification", "index", "value"] })
@Component({ selector: "med-download-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "downloaded", "downloading", "dsColor", "dsSize", "identification", "index", "value"] })
export class MedDownloadButton {
  medDownloadRequested!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medDownloadRequested"]);
  }
}
export declare interface MedDropdown extends Components.MedDropdown {
}
@ProxyCmp({ inputs: ["dsName"] })
@Component({ selector: "med-dropdown", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsName"] })
export class MedDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedDropdownContainer extends Components.MedDropdownContainer {
}
@Component({ selector: "med-dropdown-container", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class MedDropdownContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedEnunciado extends Components.MedEnunciado {
}
@ProxyCmp({ inputs: ["content", "dsName", "imagens"] })
@Component({ selector: "med-enunciado", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["content", "dsName", "imagens"] })
export class MedEnunciado {
  medGalleryRequest!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medGalleryRequest"]);
  }
}
export declare interface MedEnunciadoDiscursiva extends Components.MedEnunciadoDiscursiva {
}
@ProxyCmp({ inputs: ["imagens"] })
@Component({ selector: "med-enunciado-discursiva", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["imagens"] })
export class MedEnunciadoDiscursiva {
  medGalleryRequest!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medGalleryRequest"]);
  }
}
export declare interface MedFontZoom extends Components.MedFontZoom {
}
@ProxyCmp({ inputs: ["emitter", "step", "value"] })
@Component({ selector: "med-font-zoom", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["emitter", "step", "value"] })
export class MedFontZoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedHeader extends Components.MedHeader {
}
@Component({ selector: "med-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class MedHeader {
  medResize!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medResize"]);
  }
}
export declare interface MedImageZoom extends Components.MedImageZoom {
}
@ProxyCmp({ inputs: ["imagens", "initialSlide", "marcaAguaInferior", "marcaAguaSuperior", "maxRatioDesktop", "maxRatioMobile", "titulo"] })
@Component({ selector: "med-image-zoom", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["imagens", "initialSlide", "marcaAguaInferior", "marcaAguaSuperior", "maxRatioDesktop", "maxRatioMobile", "titulo"] })
export class MedImageZoom {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedInput extends Components.MedInput {
}
@Component({ selector: "med-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class MedInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedItem extends Components.MedItem {
}
@ProxyCmp({ inputs: ["button", "contain", "detail", "detailIcon", "disabled", "download", "dsColor", "href", "lines", "mode", "noPadding", "rel", "routerAnimation", "routerDirection", "target", "type"] })
@Component({ selector: "med-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "contain", "detail", "detailIcon", "disabled", "download", "dsColor", "href", "lines", "mode", "noPadding", "rel", "routerAnimation", "routerDirection", "target", "type"] })
export class MedItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedList extends Components.MedList {
}
@ProxyCmp({ inputs: ["dsColor", "margin"] })
@Component({ selector: "med-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "margin"] })
export class MedList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedListItem extends Components.MedListItem {
}
@ProxyCmp({ inputs: ["border", "disabled", "dsColor", "dsSize", "label", "selected", "titulo"] })
@Component({ selector: "med-list-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["border", "disabled", "dsColor", "dsSize", "label", "selected", "titulo"] })
export class MedListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedListItemAccordion extends Components.MedListItemAccordion {
}
@ProxyCmp({ inputs: ["border", "collapsed", "disabled", "dsColor", "dsSize", "label", "margin", "selected", "titulo"], "methods": ["toggle"] })
@Component({ selector: "med-list-item-accordion", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["border", "collapsed", "disabled", "dsColor", "dsSize", "label", "margin", "selected", "titulo"] })
export class MedListItemAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedLista extends Components.MedLista {
}
@ProxyCmp({ inputs: ["mode"], "methods": ["closeSlidingItems"] })
@Component({ selector: "med-lista", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode"] })
export class MedLista {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedNav extends Components.MedNav {
}
@ProxyCmp({ inputs: ["active", "dsColor", "titulo"] })
@Component({ selector: "med-nav", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "dsColor", "titulo"] })
export class MedNav {
  clicked!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["clicked"]);
  }
}
export declare interface MedNavAccordion extends Components.MedNavAccordion {
}
@ProxyCmp({ inputs: ["dsColor", "titulo"] })
@Component({ selector: "med-nav-accordion", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "titulo"] })
export class MedNavAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedNavItem extends Components.MedNavItem {
}
@ProxyCmp({ inputs: ["active", "disabled", "dsColor", "icon", "iconOnly", "routerAnimation", "routerDirection", "text"] })
@Component({ selector: "med-nav-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "disabled", "dsColor", "icon", "iconOnly", "routerAnimation", "routerDirection", "text"] })
export class MedNavItem {
  medFocus!: EventEmitter<CustomEvent>;
  medBlur!: EventEmitter<CustomEvent>;
  medClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medFocus", "medBlur", "medClick"]);
  }
}
export declare interface MedNavSimple extends Components.MedNavSimple {
}
@ProxyCmp({ inputs: ["dsColor"] })
@Component({ selector: "med-nav-simple", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor"] })
export class MedNavSimple {
  close!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["close"]);
  }
}
export declare interface MedNavbar extends Components.MedNavbar {
}
@ProxyCmp({ inputs: ["dsColor", "dsName"] })
@Component({ selector: "med-navbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsName"] })
export class MedNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedOffline extends Components.MedOffline {
}
@ProxyCmp({ inputs: ["subtitulo", "texto", "titulo"] })
@Component({ selector: "med-offline", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["subtitulo", "texto", "titulo"] })
export class MedOffline {
  medClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medClick"]);
  }
}
export declare interface MedOption extends Components.MedOption {
}
@ProxyCmp({ inputs: ["dsColor"] })
@Component({ selector: "med-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor"] })
export class MedOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedPiechart extends Components.MedPiechart {
}
@ProxyCmp({ inputs: ["disabled", "download", "downloadProgress", "downloaded", "dsColor", "dsSize", "hideDownload", "identification", "index", "label", "value"], "methods": ["toggle"] })
@Component({ selector: "med-piechart", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "download", "downloadProgress", "downloaded", "dsColor", "dsSize", "hideDownload", "identification", "index", "label", "value"] })
export class MedPiechart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedPlusminus extends Components.MedPlusminus {
}
@ProxyCmp({ inputs: ["automaticDisabled", "disabled", "dsColor", "dsSize", "max", "min", "useSlot", "value"] })
@Component({ selector: "med-plusminus", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["automaticDisabled", "disabled", "dsColor", "dsSize", "max", "min", "useSlot", "value"] })
export class MedPlusminus {
  medChange!: EventEmitter<CustomEvent>;
  medChangeAlt!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medChange", "medChangeAlt"]);
  }
}
export declare interface MedQuestion extends Components.MedQuestion {
}
@ProxyCmp({ inputs: ["collapsed", "dsColor", "texto"] })
@Component({ selector: "med-question", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapsed", "dsColor", "texto"] })
export class MedQuestion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedRateAula extends Components.MedRateAula {
}
@ProxyCmp({ inputs: ["collapsed"], "methods": ["toggle"] })
@Component({ selector: "med-rate-aula", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapsed"] })
export class MedRateAula {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedRateBar extends Components.MedRateBar {
}
@ProxyCmp({ inputs: ["dsColor"] })
@Component({ selector: "med-rate-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor"] })
export class MedRateBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedRateLike extends Components.MedRateLike {
}
@ProxyCmp({ inputs: ["status"] })
@Component({ selector: "med-rate-like", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["status"] })
export class MedRateLike {
  medChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medChange"]);
  }
}
export declare interface MedRating extends Components.MedRating {
}
@ProxyCmp({ inputs: ["cabe", "concurso", "data", "dsColor", "dsName", "nome", "texto"] })
@Component({ selector: "med-rating", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cabe", "concurso", "data", "dsColor", "dsName", "nome", "texto"] })
export class MedRating {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedSearchBar extends Components.MedSearchBar {
}
@ProxyCmp({ inputs: ["dsColor"] })
@Component({ selector: "med-search-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor"] })
export class MedSearchBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedSegment extends Components.MedSegment {
}
@Component({ selector: "med-segment", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class MedSegment {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedSemana extends Components.MedSemana {
}
@ProxyCmp({ inputs: ["active", "content", "disabled", "dsColor", "dsSize", "hideDownload", "skin"] })
@Component({ selector: "med-semana", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "content", "disabled", "dsColor", "dsSize", "hideDownload", "skin"] })
export class MedSemana {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedSemanas extends Components.MedSemanas {
}
@ProxyCmp({ inputs: ["skin"] })
@Component({ selector: "med-semanas", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["skin"] })
export class MedSemanas {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedTabButton extends Components.MedTabButton {
}
@ProxyCmp({ inputs: ["active", "dsColor"] })
@Component({ selector: "med-tab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "dsColor"] })
export class MedTabButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedThemes extends Components.MedThemes {
}
@ProxyCmp({ inputs: ["ativo", "temas"] })
@Component({ selector: "med-themes", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ativo", "temas"] })
export class MedThemes {
  medChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["medChange"]);
  }
}
export declare interface MedTiles extends Components.MedTiles {
}
@ProxyCmp({ inputs: ["badge", "dsColor", "label", "selected", "solid", "titulo"] })
@Component({ selector: "med-tiles", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["badge", "dsColor", "label", "selected", "solid", "titulo"] })
export class MedTiles {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedToggle extends Components.MedToggle {
}
@ProxyCmp({ inputs: ["collapsed", "dsColor", "iconClick"] })
@Component({ selector: "med-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapsed", "dsColor", "iconClick"] })
export class MedToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedToolbar extends Components.MedToolbar {
}
@ProxyCmp({ inputs: ["dsColor"] })
@Component({ selector: "med-toolbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor"] })
export class MedToolbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedTooltip extends Components.MedTooltip {
}
@ProxyCmp({ inputs: ["btnLeft", "btnRight", "collapsed", "content", "dsColor", "enableHover", "placement", "position", "titulo"], "methods": ["toggle", "toggleOnHover"] })
@Component({ selector: "med-tooltip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["btnLeft", "btnRight", "collapsed", "content", "dsColor", "enableHover", "placement", "position", "titulo"] })
export class MedTooltip {
  btnLeftClick!: EventEmitter<CustomEvent>;
  btnRightClick!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["btnLeftClick", "btnRightClick"]);
  }
}
export declare interface MedType extends Components.MedType {
}
@ProxyCmp({ inputs: ["dsColor", "tag", "token"] })
@Component({ selector: "med-type", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "tag", "token"] })
export class MedType {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedVideoThumbnail extends Components.MedVideoThumbnail {
}
@ProxyCmp({ inputs: ["dsColor", "url", "value"] })
@Component({ selector: "med-video-thumbnail", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "url", "value"] })
export class MedVideoThumbnail {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedVote extends Components.MedVote {
}
@ProxyCmp({ inputs: ["like", "titulo", "unlike"] })
@Component({ selector: "med-vote", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["like", "titulo", "unlike"] })
export class MedVote {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface MedreaderProModal extends Components.MedreaderProModal {
}
@Component({ selector: "medreader-pro-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class MedreaderProModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface RealizacoesModal extends Components.RealizacoesModal {
}
@Component({ selector: "realizacoes-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class RealizacoesModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface SelectTest extends Components.SelectTest {
}
@Component({ selector: "select-test", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class SelectTest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface SheetContentTest extends Components.SheetContentTest {
}
@Component({ selector: "sheet-content-test", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class SheetContentTest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface SheetIa extends Components.SheetIa {
}
@Component({ selector: "sheet-ia", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class SheetIa {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface SheetTest extends Components.SheetTest {
}
@Component({ selector: "sheet-test", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class SheetTest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface SimuladoModal extends Components.SimuladoModal {
}
@Component({ selector: "simulado-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class SimuladoModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface SnackbarTest extends Components.SnackbarTest {
}
@Component({ selector: "snackbar-test", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class SnackbarTest {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface TextAreaModal extends Components.TextAreaModal {
}
@Component({ selector: "text-area-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class TextAreaModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface TpAccordion extends Components.TpAccordion {
}
@ProxyCmp({ inputs: ["disabled", "dsColor", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"] })
@Component({ selector: "tp-accordion", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "dsColor", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"] })
export class TpAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface TpAccordionGroup extends Components.TpAccordionGroup {
}
@ProxyCmp({ inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"] })
@Component({ selector: "tp-accordion-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"] })
export class TpAccordionGroup {
  ionChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
}
export declare interface TpChartBar extends Components.TpChartBar {
}
@ProxyCmp({ inputs: ["bar", "deactivated", "dsColor", "dsName", "hasMarker", "height", "label", "labelSize", "marker"] })
@Component({ selector: "tp-chart-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["bar", "deactivated", "dsColor", "dsName", "hasMarker", "height", "label", "labelSize", "marker"] })
export class TpChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface TpInputContainer extends Components.TpInputContainer {
}
@ProxyCmp({ inputs: ["disabled", "dsColor", "dsName", "feedback", "hasButton", "hasIcon", "inverted", "showPopoverWithDelay"] })
@Component({ selector: "tp-input-container", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "dsColor", "dsName", "feedback", "hasButton", "hasIcon", "inverted", "showPopoverWithDelay"] })
export class TpInputContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface TpLoader extends Components.TpLoader {
}
@ProxyCmp({ inputs: ["dsColor", "dsName", "fixed"] })
@Component({ selector: "tp-loader", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["dsColor", "dsName", "fixed"] })
export class TpLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface TpSelectDropdown extends Components.TpSelectDropdown {
}
@ProxyCmp({ inputs: ["color", "name", "numeric", "options", "placeholder", "value"] })
@Component({ selector: "tp-select-dropdown", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "name", "numeric", "options", "placeholder", "value"] })
export class TpSelectDropdown {
  valueChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["valueChange"]);
  }
}
export declare interface TutorialModal extends Components.TutorialModal {
}
@Component({ selector: "tutorial-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class TutorialModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface UnidadesModal extends Components.UnidadesModal {
}
@Component({ selector: "unidades-modal", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class UnidadesModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
