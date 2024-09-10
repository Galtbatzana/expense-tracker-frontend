import { Inter } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={inter.className}>
            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn> 
                {children}
            </SignedIn>  

          </body>
        </html>
    </ClerkProvider>    
  );
}
