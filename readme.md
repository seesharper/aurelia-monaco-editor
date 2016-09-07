This repo shows how to integrate the [Monaco Editor](https://github.com/Microsoft/monaco-editor) with [Aurelia](http://aurelia.io/)

The application is based upon [aurelia-cli](https://github.com/aurelia/cli) which is the new command line interface for Aurelia. 

I picked [aurelia-cli](https://github.com/aurelia/cli)  because it is really simple and uses [RequireJS](http://requirejs.org/) for module loading which plays nicely with how the Monaco Editor is exposed.

The integration is implemented as a custom element in Aurelia.

Usage

```html
<template>
  <require from="resources/elements/monaco-editor"></require>
  <monaco-editor options.bind="{language:'javascript', value:'console.log(42)'}"/>  
</template>
```
