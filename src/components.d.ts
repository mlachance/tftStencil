/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface PageHome {
    }
    interface PageNotice {
    }
    interface PageProfile {
        "name": string;
    }
    interface TftAttribute {
    }
    interface TftEquip {
    }
    interface TftHits {
    }
    interface TftImage {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {
    }
    var HTMLAppTabsElement: {
        prototype: HTMLAppTabsElement;
        new (): HTMLAppTabsElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageNoticeElement extends Components.PageNotice, HTMLStencilElement {
    }
    var HTMLPageNoticeElement: {
        prototype: HTMLPageNoticeElement;
        new (): HTMLPageNoticeElement;
    };
    interface HTMLPageProfileElement extends Components.PageProfile, HTMLStencilElement {
    }
    var HTMLPageProfileElement: {
        prototype: HTMLPageProfileElement;
        new (): HTMLPageProfileElement;
    };
    interface HTMLTftAttributeElement extends Components.TftAttribute, HTMLStencilElement {
    }
    var HTMLTftAttributeElement: {
        prototype: HTMLTftAttributeElement;
        new (): HTMLTftAttributeElement;
    };
    interface HTMLTftEquipElement extends Components.TftEquip, HTMLStencilElement {
    }
    var HTMLTftEquipElement: {
        prototype: HTMLTftEquipElement;
        new (): HTMLTftEquipElement;
    };
    interface HTMLTftHitsElement extends Components.TftHits, HTMLStencilElement {
    }
    var HTMLTftHitsElement: {
        prototype: HTMLTftHitsElement;
        new (): HTMLTftHitsElement;
    };
    interface HTMLTftImageElement extends Components.TftImage, HTMLStencilElement {
    }
    var HTMLTftImageElement: {
        prototype: HTMLTftImageElement;
        new (): HTMLTftImageElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "app-tabs": HTMLAppTabsElement;
        "page-home": HTMLPageHomeElement;
        "page-notice": HTMLPageNoticeElement;
        "page-profile": HTMLPageProfileElement;
        "tft-attribute": HTMLTftAttributeElement;
        "tft-equip": HTMLTftEquipElement;
        "tft-hits": HTMLTftHitsElement;
        "tft-image": HTMLTftImageElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface PageHome {
    }
    interface PageNotice {
    }
    interface PageProfile {
        "name"?: string;
    }
    interface TftAttribute {
    }
    interface TftEquip {
    }
    interface TftHits {
    }
    interface TftImage {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "app-tabs": AppTabs;
        "page-home": PageHome;
        "page-notice": PageNotice;
        "page-profile": PageProfile;
        "tft-attribute": TftAttribute;
        "tft-equip": TftEquip;
        "tft-hits": TftHits;
        "tft-image": TftImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-tabs": LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-notice": LocalJSX.PageNotice & JSXBase.HTMLAttributes<HTMLPageNoticeElement>;
            "page-profile": LocalJSX.PageProfile & JSXBase.HTMLAttributes<HTMLPageProfileElement>;
            "tft-attribute": LocalJSX.TftAttribute & JSXBase.HTMLAttributes<HTMLTftAttributeElement>;
            "tft-equip": LocalJSX.TftEquip & JSXBase.HTMLAttributes<HTMLTftEquipElement>;
            "tft-hits": LocalJSX.TftHits & JSXBase.HTMLAttributes<HTMLTftHitsElement>;
            "tft-image": LocalJSX.TftImage & JSXBase.HTMLAttributes<HTMLTftImageElement>;
        }
    }
}