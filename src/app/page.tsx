import { connection } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";

export default async function Home() {
  await connection();

  const result = await db.execute(sql`select now()`);

  return (
    <main>
      <h1>Hello StudyBuddy</h1>
      <pre>{JSON.stringify(result.rows, null, 2)}</pre>
    </main>
  );
}
