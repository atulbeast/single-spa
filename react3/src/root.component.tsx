
export default function Root(props) {
  
  props.eventBus.on("counterUpdated", (event: any) => {
    console.log("React3:", event.detail);
  });
  
  return <section>{props.name} is mounted!</section>;
}
