# Entities

Collection of components with unique data.

**name** component is a string of the name of the file

<br>

```js
WORLD.entities.get(id)
```

## Properties

> Entity can be created via **Entity Factory**. It is added to the **World** with unique id.

<br>

Every property of entity object is a component. It might be created right here at the entity declaration. If component exists, it will be extended by this declaration.

```js
export default {
  componentName: {
    property: "value",
    anotherProperty: 0,
  },
  anotherComponentName: {
    property: "value",
  },
}
```

<br>

**name** component is the only required.

```js
export default {
  name: "name",
}
```

<br>

**process()** - the only one property of the entity that is not a component. It is a function that will run on each game iteration.

```js
export default {
  /** Logic that will run on each ticker iteration.
   * @param entity - already instance
   * @param id - entity id
   */
  process(entity, id) {
    // any logic here
  },
}
```

<br>
