self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Check every minute
setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    // Trigger times: 08:00, 18:00 (6pm), 20:00 (8pm)
    if (m === 0 && (h === 8 || h === 18 || h === 20)) {
        self.registration.showNotification("Emoji Motivator 🌲", {
            body: "Time to log your progress and grow your tree!",
            vibrate: [200, 100, 200],
            badge: "https://btn.ninja/apple-touch-icon.png" 
        });
    }
}, 60000);

// Open the app when the notification is clicked
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
});
