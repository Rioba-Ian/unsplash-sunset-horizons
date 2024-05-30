// app/api/image-proxy/route.js

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const src = searchParams.get("src");

  if (!src) {
    return new NextResponse("Missing src parameter", { status: 400 });
  }

  try {
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get("Content-Type");

    if (!contentType) {
      throw new Error("Missing content type");
    }

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching image" },
      { status: 500 },
    );
  }
}
