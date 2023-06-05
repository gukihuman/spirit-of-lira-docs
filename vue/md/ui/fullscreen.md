# Fullscreen

Source DOM element for fullscreen mode. It is used not only to customize which emement is shown in fullscreen. Even if you just want to show a viewport in fullscreen, if you use viewport DOM element as a source, because it has strict aspect ratio, background outside is gonna be pure black. Of course if the screen matches aspect ratio it doesn't matter, but you can't guarantee it for all users.

Simple usage when you want some custom background and viewport in the middle.

```pug
<template lang="pug">

Fullscreen(class="h-screen w-screen bg-slate-800 flex items-center justify-center")
  Viewport


</template>
```

Don't forget to check game-window to dynamically resize viewport and all ui components inside.
