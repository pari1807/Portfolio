import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  console.log("=== SPLINE OBJECTS LOG ===");
  for (const item of data) {
    console.log(item);
  }
  console.log("==========================");
  return NextResponse.json({ success: true });
}
