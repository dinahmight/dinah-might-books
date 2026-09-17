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

    // Step 1: create or update the subscriber (upsert by email).
    const createResponse = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({
        email_address: email,
        first_name: name || undefined,
        state: "active",
      }),
    });

    if (!createResponse.ok) {
      const errorBody = await createResponse.text();
      console.error("Kit create-subscriber error:", createResponse.status, errorBody);
      return NextResponse.json(
        { error: "Something went wrong adding you to the list. Please try again." },
        { status: 502 }
      );
    }

    const createData = await createResponse.json();
    const subscriberId = createData?.subscriber?.id;

    if (!subscriberId) {
      console.error("Kit create-subscriber response missing subscriber id:", createData);
      return NextResponse.json(
        { error: "Something went wrong adding you to the list. Please try again." },
        { status: 502 }
      );
    }

    // Step 2: attach the subscriber to the launch-list form.
    const formResponse = await fetch(
      `https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers/${subscriberId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": apiKey,
        },
        body: JSON.stringify({
          referrer: "https://dinahmightbooks.com/contact",
        }),
      }
    );

    if (!formResponse.ok) {
      const errorBody = await formResponse.text();
      console.error("Kit add-to-form error:", formResponse.status, errorBody);
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
