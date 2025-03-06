// eventBus.ts
class EventBus extends EventTarget {
    emit(event: string, detail?: any) {
      this.dispatchEvent(new CustomEvent(event, { detail }));
    }
    on(event: string, callback: (e: Event) => void) {
      this.addEventListener(event, callback);
    }
    off(event: string, callback: (e: Event) => void) {
      this.removeEventListener(event, callback);
    }
  }
  
  export const eventBus = new EventBus();
  