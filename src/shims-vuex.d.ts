import { Store } from "@/store";

declare module "@vue/runtime-core" {
  // Declare your own store states.
//   interface State {
//   }

  interface ComponentCustomProperties {
    $store: Store;
  }
}