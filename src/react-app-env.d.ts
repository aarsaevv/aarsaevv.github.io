/// <reference types="react-scripts" />

declare namespace JSX {
  interface IntrinsicAttributes {
    [someAttribute: string]: any;
    [someArray: array]: any;
  }
}
