import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Public endorsements of the campaign kit: a name, a county, and optionally
 * what the person does. No accounts, no emails — the point is a countable
 * public show of support that anyone can add in ten seconds.
 */
export const endorsements = sqliteTable("endorsements", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  county: text("county").notNull(),
  role: text("role"),
  organisation: text("organisation"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Endorsement = typeof endorsements.$inferSelect;
export type NewEndorsement = typeof endorsements.$inferInsert;
