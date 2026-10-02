export interface Risk {
  id: string;
  title: string;
  description?: string;
  category: string;
  probability: "LOW" | "MEDIUM" | "HIGH";
  impact: "LOW" | "MEDIUM" | "HIGH";
  level: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  treatment: "REDUCE" | "ACCEPT" | "TRANSFER" | "AVOID";
  owner: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Control {
  id: string;
  title: string;
  description?: string;
  frequency: "DAILY" | "WEEKLY" | "MONTHLY" | "QUARTERLY" | "ANNUAL";
  owner: string;
  status: string;
  effectiveness: number;
  createdAt: string;
  updatedAt: string;
}

export interface Incident {
  id: string;
  title: string;
  description?: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  occurredAt: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Action {
  id: string;
  title: string;
  description?: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  status: "OPEN" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
  dueDate?: string;
  completedAt?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}
