# Flex-minimal

Unleash full power of [Flex](https://developer.mozilla.org/en/docs/Web/CSS/flex) using easy-to-remember class names

## Usage:

Import `flex(.min).css` directly, or build `flex.scss` with your project's build procedure.

*`flex(.min).css` are vendor-prefixed using latest 2 version of browsers.*

## 1. Container properties

### (**REQUIRED**) Direction *(display=flex, flex-direction)*

`.fx-row`

`.fx-col`

### Wrapping *(flex-wrap)*

`.fx-wrap`

`.fx-nowrap`

### (M)ain-axis alignment *(justify-content)*

`.fx-m-start`

`.fx-m-center`

`.fx-m-end`

`.fx-m-between`

`.fx-m-around`

### (C)ross-axis alignment *(align-items)*

`.fx-c-stretch`

`.fx-c-start`

`.fx-c-center`

`.fx-c-end`

`.fx-c-baseline`

### (C)ross-axis (L)ines alignment *(align-content)*

`.fx-cl-stretch`

`.fx-cl-start`

`.fx-cl-center`

`.fx-cl-end`

`.fx-cl-between`

`.fx-cl-around`


## 2. Children properties

### (O)rder (order)

`.fx-o-1`

`.fx-o-2`

`.fx-o-3`

`.fx-o-4`

`.fx-o-5`

`.fx-o-6`


### allocation of space among children *(flex-basis=0, flex-grow)*

`.fx-1`

`.fx-2`

`.fx-3`

`.fx-4`

`.fx-5`

`.fx-6`

### (S)elf alignment inside a flexbox *(align-self)*

`.fx-s-stretch`

`.fx-s-start`

`.fx-s-center`

`.fx-s-end`

`.fx-s-baseline`

## 3. Common shortcuts

### Centering stuff

`.fx-v-center`  // flexbox, row direction, children are vertically centered

`.fx-h-center` // flexbox, row direction, children are horizonally centered

`.fx-center` // flexbox, row direction, children are vertically & horizonally centered

## Resources

1. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
