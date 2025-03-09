import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Plume.moe",
};

const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <html lang="en">
      <body
        className={'antialiased'}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
