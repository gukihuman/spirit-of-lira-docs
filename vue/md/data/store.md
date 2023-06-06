# Store

Contains data from different project folders. Imported on boot by **Dev Importer**.

```js
STORE
```

## Properties

> Each key in the map is the name of the file.

<br>

"**export default**" declaration from each file in folders with corresponding names. Systems are classes because it is logic and data while entities and components are just data.

```js
// objects
STORE.entities: Map<string, { [key: string]: any }> = new Map()
STORE.components: Map<string, { [key: string]: any }> = new Map()

// class declarations
STORE.systems: Map<string, unknown> = new Map()
```

<br>

Jsons and webps are parsed only from asset folder. Webps resolved paths is used to simplify managing path at development and production.

```js
// paths to the webp-files
STORE.webps: Map<string, string> = new Map()

// actual json-files content
STORE.jsons: Map<string, { [key: string]: any }> = new Map()
```

 <br>

## Usage

```js
STORE.webps.get("lira") // "/_nuxt/assets/entities/lira.webp"
```

<br>

## Q&A

> Why entities and components are objects but systems are classes?

Well, entities are pure data objects, containing component data. Components are almost only data too, just has **init()** logic that runs on injecting in entity. While the systems are meant to be huge logic-based classes with a lot of functions and internal data too.

<br>
