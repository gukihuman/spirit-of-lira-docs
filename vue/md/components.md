# Components

Main data blocks that responsible for behavior of the entities. Actual logic is defined through systems, which relay on components data.

> No variable is suggested. Should not be used after declaration.

## Properties

Define name for the component and add any properties.

```js
export default {
  componentName: {
    property: "value",
    anotherProperty: 0,
  },
}
```

<br>

**autoInject, depend, init()** - special properties that responsible of how to inject component to entity. None of them is required. They will be deleted after injection.

```js
export default {
  componentName: {
    //
    // with it, the component will be injected in all entities automatically
    // without it, only components that is mentioned in entity declaration
    autoInject: true,

    // what to automatically inject before the current component
    depend: "anotherComponent",

    /**
     * Some logic that needs to be applied to entity instance after component injection. This function will be called by Entity Factory
     * @param entity - already instance
     * @param id - entity id
     * @param name - component name
     * @param value - component value - kind of this object
     */
    init(entity, id, name, value) {
      // any logic here
    },
  },
}
```

<br>
