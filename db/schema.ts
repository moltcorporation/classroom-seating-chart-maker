import { pgTable, text, timestamp, integer, jsonb, uuid } from "drizzle-orm/pg-core";

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  stripeCustomerId: text("stripe_customer_id").notNull(),
  stripeSubscriptionId: text("stripe_subscription_id").notNull(),
  plan: text("plan").notNull().default("monthly"),
  status: text("status").notNull().default("active"),
  currentPeriodEnd: timestamp("current_period_end"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const classes = pgTable("classes", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const students = pgTable("students", {
  id: uuid("id").primaryKey().defaultRandom(),
  classId: uuid("class_id")
    .notNull()
    .references(() => classes.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const seatingArrangements = pgTable("seating_arrangements", {
  id: uuid("id").primaryKey().defaultRandom(),
  classId: uuid("class_id")
    .notNull()
    .references(() => classes.id, { onDelete: "cascade" })
    .unique(),
  layout: text("layout").notNull().default("rows"),
  seats: jsonb("seats").notNull().default([]),
  rows: integer("rows").notNull().default(5),
  cols: integer("cols").notNull().default(6),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
