const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const data = await fetchData();

const tickets = data.tickets;
const users = data.users;

const StatusHeading = ["Backlog", "Todo", "In Progress", "Done", "Cancelled"];
const userName = [];
users.map((item, index) => {
  userName[index] = item.name;
});

const priorityHeading_tickets = [
  {
    heading: "No Priority",
    ticket: tickets.filter((item, index) => item.priority == 0),
  },
  {
    heading: "Urgent",
    ticket: tickets.filter((item, index) => item.priority == 4),
  },
  {
    heading: "High",
    ticket: tickets.filter((item, index) => item.priority == 3),
  },
  {
    heading: "Medium",
    ticket: tickets.filter((item, index) => item.priority == 2),
  },
  {
    heading: "Low",
    ticket: tickets.filter((item, index) => item.priority == 1),
  },
];
const priority_Heading_tickets = [
  {
    heading: "Urgent",
    ticket: tickets.filter((item, index) => item.priority == 4),
  },
  {
    heading: "High",
    ticket: tickets.filter((item, index) => item.priority == 3),
  },
  {
    heading: "Medium",
    ticket: tickets.filter((item, index) => item.priority == 2),
  },
  {
    heading: "Low",
    ticket: tickets.filter((item, index) => item.priority == 1),
  },
  {
    heading: "No Priority",
    ticket: tickets.filter((item, index) => item.priority == 0),
  },
];

const StatusHeading_tickets = [
  {
    heading: "Backlog",
    ticket: tickets.filter((item) => item.status == "Backlog"),
  },
  {
    heading: "Todo",
    ticket: tickets.filter((item) => item.status == "Todo"),
  },
  {
    heading: "In progress",
    ticket: tickets.filter((item) => item.status == "In progress"),
  },
  {
    heading: "Done",
    ticket: tickets.filter((item) => item.status == "Done"),
  },
  {
    heading: "Cancelled",
    ticket: tickets.filter((item) => item.status == "Cancelled"),
  },
];

const userNameHeading_tickets = [];

users.map((item, index) => {
  const ele = {
    username: item.name,
    id: item.id,
    ticket: [],
  };

  tickets.map((ticket, index1) => {
    if (item.id == ticket.userId) {
      ele.ticket.push(ticket);
    }
  });

  userNameHeading_tickets.push(ele);
});

export {
  tickets,
  users,
  StatusHeading_tickets,
  userNameHeading_tickets,
  priorityHeading_tickets,
  priority_Heading_tickets,
};
