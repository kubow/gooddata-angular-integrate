### app.component.ts

```js
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
schemas: [
           CUSTOM_ELEMENTS_SCHEMA,
         ]

```

### index.html

```js
<script type="module" async src="https://jav.demo.cloud.gooddata.com/components/demo-parent.js?auth=sso"></script>
```

### app.components.html

```js
<gd-dashboard dashboard="092929af-375a-4e9c-964f-2add8cdbd259"></gd-dashboard>
```