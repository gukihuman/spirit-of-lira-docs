# Config

One place to set up important data.

```js
CONFIG
```

<br>
There is a file that has to be in the root folder:

```terminal
guki.config.ts
```

```js
export default {
  viewport: {
    width: 1920,
    height: 1080,
  },
}
```

<br>

Than in the project those options is available in a global constant, just like any other engine tool:

```js
CONFIG.viewport.width
```

## Properties

```js
export default {
  viewport: {
    width: 1920,
    height: 1080,
  },

  // higher values goes first, what is not setted will be 0.
  priority: {
    //
    // order of injection in entity
    components: {
      visual: 2,
      alive: 1,
    },

    // order of execute engine tools and systems in ticker
    toolsAndSystems: {
      CACHE: 2,
      INPUT: 1,

      SIGNAL: -1,
    },
  },
}
```
