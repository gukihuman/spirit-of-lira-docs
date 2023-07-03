# Spirit of Lira documentation

```terminal
root
├─ boot
├─ components
├─ core
├─ data
├─ entities
├─ logic
├─ systems
└─ UI
```

<br>

Architecture in simple terms:

> **components** is data

> **entities** is unique set of components with unique data

> **systems** is logic that runs in game loop

> **systems** manipulates data in specific entities

> **systems** chooses entities by components

> **logic** is supportive sub-layer of logic for "systems"

<br>

> **core** gpixi creates renderer and game loop itself
