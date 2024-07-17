### app.component.ts

```js
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
schemas: [
           CUSTOM_ELEMENTS_SCHEMA,
         ]

export class AppComponent {
  ...
  dashboardId = 'your_dashboard_id';
}

```

### index.html

```js
<script type="module" async src="https://jav.demo.cloud.gooddata.com/components/demo-parent.js?auth=sso"></script>
```

### app.components.html

```js
<gd-dashboard [attr.dashboard]="dashboardId"></gd-dashboard>
```