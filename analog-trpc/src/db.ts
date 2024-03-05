
import { drizzle } from 'drizzle-orm/postgres-js';
import { date, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import postgres from 'postgres';

export const notes = pgTable('note', {
  id: serial('id').primaryKey(),
  note: text('note').notNull(),
  createdAt: date('created_at').defaultNow().notNull(),
});

export type Note = InferSelectModel<typeof notes>;
export type NewNote = InferInsertModel<typeof notes>;

const client = postgres(process.env['DATABASE_URL'] ?? '');
export const db = drizzle(client);
