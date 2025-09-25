import "./globals.css";

export const metadata = {
  title: "Mr. Devesh & Team - Professional Photography & Videography Services",
  description:
    "Professional event photography and videography services by Mr. Devesh & Team. Capturing weddings, corporate events, portraits, and special moments with artistic excellence.",
  keywords: [
    "photography",
    "videography",
    "wedding photographer",
    "event photography",
    "corporate events",
    "Varanasi photographer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />

        {/* Fonts & Icons (from provided HTML) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" />

        {/* Preview assets (kept as in provided HTML) */}
        <script type="module" crossOrigin src="/preview/3bc914ef-6f1c-4ff3-8b1c-947f56101906/2522111/assets/index-CkaSTK_7.js"></script>
        <link rel="stylesheet" crossOrigin href="/preview/3bc914ef-6f1c-4ff3-8b1c-947f56101906/2522111/assets/index-DIiGBsI9.css" />

        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
