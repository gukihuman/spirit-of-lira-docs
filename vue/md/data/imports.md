# Imports

Contains data from project folders _(imported on boot by **Importer**)_
.

```js
IMPORTS
```

> globally available

## Usage

```terminal
root
└─ entities
    └─ lira.ts
```

```js
export default {
  attributes: {
    health: 100,
    mana: 80,
  },
}
```

<br>

Get exported object by the name of the "**.ts**" file:

```js
const entity = IMPORTS.entities.get("lira")

console.log(entity.attributes.health)
// 100
```

<br>

**Entities**, **components**, and **systems** folders are represented as properties:

```terminal
root
├─ entities
├─ components
└─ systems
```

```js
IMPORTS.entities
IMPORTS.components
IMPORTS.systems
```

> systems exported as classes

 <br>

**Asset** folder is parsed for any jsons and webps files including any inside folders.

```terminal
root
└─ assets
    ├─ effects
    │   ├─ swoard-hit.json
    │   └─ swoard-hit.webp
    ├─ lira.json
    └─ lira.webp
```

```js
IMPORTS.webps
IMPORTS.jsons
```

<br>

Get json object by the name of the "**.json**" file:

```js
const jsonObject = IMPORTS.webps.get("lira")

console.log(jsonObject)
// { ...(your json object) }
```

<br>

Webps is a little different. It stores the exact path of the file. Get it by the name of the "**.webp**" file:

```js
const path = IMPORTS.webps.get("lira")

console.log(path)
// "/_nuxt/assets/entities/lira.webp"
```

<br>
