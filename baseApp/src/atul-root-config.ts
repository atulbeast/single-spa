import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import {createStore} from "zustand/vanilla";
import { getMountedApps } from "single-spa";
import { eventBus } from "./type/EventBus";

function isRootConfigActive() {
  return getMountedApps().length === 0; // No active microfrontends → Root page is shown
}

// ✅ Step 1: Define Zustand Store Type
interface GlobalStore {
  counter: number;
  setCounter: (value: number) => void;
}

// ✅ Step 2: Extend `window` to include `globalStore`
declare global {
  interface Window {
    globalStore: ReturnType<typeof createGlobalStore>;
  }
}

// ✅ Step 3: Create Zustand Store Function
const createGlobalStore = () =>
  createStore<GlobalStore>((set) => ({
    counter: 0,
    setCounter: (value) => set({ counter: value }),
  }));

// ✅ Step 4: Initialize Zustand and Ensure it's Created Once
if (!window.globalStore) {
  window.globalStore = createGlobalStore();
}
window.globalStore.subscribe((state) => {
  console.log("Updated Counter Value:", state.counter);
});

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
applications.forEach((app) => {
  registerApplication({
    ...app,
    customProps: { globalStore: window.globalStore, eventBus: eventBus },
  });
});
const layoutEngine = constructLayoutEngine({ routes, applications });

//applications.forEach(registerApplication);
layoutEngine.activate();
start();




function updateCounterUI() {
  if (isRootConfigActive() && window.globalStore) {
    const counterElement = document.getElementById("displayCount");
    if (counterElement) {
      counterElement.textContent = window.globalStore.getState().counter.toString();
    }
  }
}

// ✅ Listen for Route Changes
window.addEventListener("single-spa:routing-event", updateCounterUI);