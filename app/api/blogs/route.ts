import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Supabase server client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Simple slug generator
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const file = formData.get("file") as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Missing title or content" },
        { status: 400 }
      );
    }

    const slug = slugify(title);
    let fileUrl: string | null = null;

    // ✅ Upload file if exists
    if (file) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-files")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: file.type,
        });

      if (uploadError) {
        console.error(uploadError);
        return NextResponse.json(
          { error: "File upload failed" },
          { status: 500 }
        );
      }

      const { data } = supabase.storage
        .from("blog-files")
        .getPublicUrl(fileName);

      fileUrl = data.publicUrl; // ✅ FIXED
    }

    // ✅ Insert into DB
    const { error: dbError } = await supabase
      .from("posts")
      .insert([
        {
          title,
          slug,
          content,
          file_url: fileUrl,
        },
      ]);

    if (dbError) {
      console.error(dbError);
      return NextResponse.json(
        { error: "Database insert failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}