// app/api/image-proxy/route.js

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const src = searchParams.get("src");

  console.log("Image optimizer.");

  if (!src) {
    return new NextResponse("Missing src parameter", { status: 400 });
  }

  try {
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    console.log("Image optimizer. Got the image.");

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get("Content-Type");

    if (!contentType) {
      throw new Error("Missing content type");
    }

    console.log("Image optimizer. Finished.");

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
