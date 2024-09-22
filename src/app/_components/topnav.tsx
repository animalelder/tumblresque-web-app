"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b bg-black p-4 text-white">
      <a href="/" className="text-xl font-bold">
        tumbl3resque
      </a>
      <div className="flex flex-row gap-9">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
