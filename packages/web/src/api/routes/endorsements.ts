import { z } from "zod";
import { desc, sql } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import * as schema from "../database/schema";

const endorsementInput = z.object({
  name: z.string().trim().min(2).max(80),
  county: z.string().trim().min(2).max(60),
  role: z.string().trim().max(80).optional().or(z.literal("")),
  organisation: z.string().trim().max(100).optional().or(z.literal("")),
});

export const endorsements = {
  /** Most recent endorsements, newest first. */
  list: base.handler(() =>
    db
      .select()
      .from(schema.endorsements)
      .orderBy(desc(schema.endorsements.createdAt), desc(schema.endorsements.id))
      .limit(60),
  ),

  /** Total endorsements plus a per-county breakdown. */
  stats: base.handler(async () => {
    const [row] = await db
      .select({ total: sql<number>`count(*)` })
      .from(schema.endorsements);
    const byCounty = await db
      .select({
        county: schema.endorsements.county,
        count: sql<number>`count(*)`,
      })
      .from(schema.endorsements)
      .groupBy(schema.endorsements.county)
      .orderBy(desc(sql`count(*)`))
      .limit(12);

    return {
      total: Number(row?.total ?? 0),
      counties: byCounty.map((c) => ({ county: c.county, count: Number(c.count) })),
    };
  }),

  create: base.input(endorsementInput).handler(async ({ input }) => {
    const [created] = await db
      .insert(schema.endorsements)
      .values({
        name: input.name,
        county: input.county,
        role: input.role ? input.role : null,
        organisation: input.organisation ? input.organisation : null,
      })
      .returning();
    return created;
  }),
};
