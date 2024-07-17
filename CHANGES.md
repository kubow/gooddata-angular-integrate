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
<script type="module" async>
  import { setContext } from "https://______.cloud.gooddata.com/components/demo-parent.js";
  import factory, { TigerTokenAuthProvider } from "https://______.cloud.gooddata.com/components/tigerBackend.js";
  setContext({
      backend: factory()
          .onHostname("https://______.cloud.gooddata.com")
          .withAuthentication(new TigerTokenAuthProvider("your_generated_token")),
      workspaceId: "your_workspace_id",
  });
</script>
```

### app.components.html

```js
<gd-dashboard [attr.dashboard]="dashboardId"></gd-dashboard>
```