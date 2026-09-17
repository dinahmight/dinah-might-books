import { NextResponse } from "next/server";

const KIT_FORM_ID = 9928021; // "Charlotte form" in Kit

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const apiKey = process.env.KIT_API_KEY;
    if (!apiKey) {
      console.error("KIT_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Signup is temporarily unavailable. Please try again later." },
        { status: 500 }
      );
    }

    const kitResponse = await fetch(
      `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": apiKey,
        },
        body: JSON.stringify({
          email_address: email,
          first_name: name || undefined,
        }),
      }
    );

    if (!kitResponse.ok) {
      const errorBody = await kitResponse.text();
      console.error("Kit API error:", kitResponse.status, errorBody);
      return NextResponse.json(
        { error: "Something went wrong adding you to the list. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
