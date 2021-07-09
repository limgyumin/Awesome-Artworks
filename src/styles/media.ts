import { css, CSSProp } from "styled-components";

const sizes: { [key: string]: number } = {
  mobile: 580,
  tablet: 768,
  desktop: 1284,
};

type BackQuoteArgs = string[];

const media: Record<
  keyof typeof sizes,
  (I: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp
> = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
  tablet: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
};

export default media;
