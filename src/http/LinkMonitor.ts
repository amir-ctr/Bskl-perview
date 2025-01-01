export class LinkMonitor {
    private links: string[] = [];
    private interval: number;

    constructor(interval: number = 60000) { // Default: 1 minute
        this.interval = interval;
    }

    addLink(url: string): void {
        if (!this.links.includes(url)) {
            this.links.push(url);
        }
    }

    startMonitoring(): void {
        setInterval(() => {
            this.links.forEach(async (url) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        console.error(`Link is down: ${url}`);
                    }
                } catch {
                    console.error(`Failed to reach link: ${url}`);
                }
            });
        }, this.interval);
    }
}