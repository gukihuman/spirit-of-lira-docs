# Dev Store

Contains data from different project folders. Imported on boot by **Dev Importer**.

```js
DEV_STORE
```

## Properties

> Each key in the map is the name of the file.

<br>

"**export default**" declaration from each file in folders with corresponding names. Systems are classes because it is logic and data while entities and components are just data.

```js
// exported object
DEV_STORE.entities: Map<string, { [key: string]: any }> = new Map()
DEV_STORE.components: Map<string, { [key: string]: any }> = new Map()

// exported class declaration
DEV_STORE.systems: Map<string, unknown> = new Map()
```

<br>

Jsons and webps are parsed only from asset folder. Webps resolved paths is used to simplify managing path at development and production.

```js
// path to the file
DEV_STORE.webps: Map<string, string> = new Map()

// actual json file content
DEV_STORE.jsons: Map<string, { [key: string]: any }> = new Map()
```

 <br>
