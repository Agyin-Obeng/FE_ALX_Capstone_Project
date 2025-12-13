import events from "../eventsData"; // your current mock data

// Simulate fetching all events (like an API)
export function getEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 300); // simulate network delay
  });
}

// Simulate fetching a single event by ID
export function getEventById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const event = events.find((e) => e.id === Number(id));
      if (event) resolve(event);
      else reject(new Error("Event not found"));
    }, 300); // simulate network delay
  });
}
