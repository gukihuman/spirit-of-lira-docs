# Spirit of Lira documentation

Architecture in simple terms:

> **components** is data

> **entities** is unique set of components with unique data

> **systems** is logic that runs in game loop

> **systems** manipulates data in specific entities

> **systems** chooses entities by components

> **logic** is supportive sub-layer of logic for "systems"

<br>

Folder structure:

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

Global variables:

```terminal
GPIXI
CONFIG
IMPORTS
LOCAL
SYSTEM_DATA
USER_DATA
ENTITIES
SYSTEMS
```

<br>
