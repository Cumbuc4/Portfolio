import { ImageResponse } from "@vercel/og";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    let url = new URL(request.url);
    let title = url.searchParams.get("title") || "Portfolio";

    return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "4rem",
        background: "linear-gradient(135deg, #151515 0%, #1a1a1a 50%, #0f0f0f 100%)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <span
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: "2rem",
            color: "#d0d0d0",
            textAlign: "center",
          }}
        >
          Leandro Gabriel
        </span>
        <span
          style={{
            fontSize: "1.5rem",
            color: "#a0a0a0",
            textAlign: "center",
          }}
        >
          Cybersecurity Specialist & Full Stack Developer
        </span>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
    },
  );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}
