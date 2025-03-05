import App from "./App";

export default function Root({globalStore}) {
  return <section><App store={globalStore}/></section>;
}
