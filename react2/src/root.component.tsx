import App from "./App";

export default function Root({globalStore, eventBus}) {
  return <section><App store={globalStore} eventBus={eventBus}/></section>;
}
