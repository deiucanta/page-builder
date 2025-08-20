import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "page-data.json");
    
    try {
      const data = await readFile(filePath, "utf-8");
      return NextResponse.json(JSON.parse(data));
    } catch (error) {
      // File doesn't exist yet, return empty object
      return NextResponse.json({});
    }
  } catch (error) {
    console.error("Failed to load data:", error);
    return NextResponse.json(
      { error: "Failed to load data" },
      { status: 500 }
    );
  }
}