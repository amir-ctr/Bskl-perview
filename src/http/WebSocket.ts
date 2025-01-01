export class WebSocketManager {
    private socket: WebSocket | null = null;
    private listeners: Map<string, (data: any) => void> = new Map();
  
    constructor(private url: string) {}
  
    connect(): void {
      this.socket = new WebSocket(this.url);
      this.socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const eventType = data.type;
        if (this.listeners.has(eventType)) {
          this.listeners.get(eventType)?.(data.payload);
        }
      };
    }
  
    on(eventType: string, callback: (data: any) => void): void {
      this.listeners.set(eventType, callback);
    }
  
    send(eventType: string, payload: any): void {
      this.socket?.send(JSON.stringify({ type: eventType, payload }));
    }
  
    disconnect(): void {
      this.socket?.close();
      this.socket = null;
    }
  }
  