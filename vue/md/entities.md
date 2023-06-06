# Entities

Collection of components with unique data.

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
