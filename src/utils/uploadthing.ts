import { generateUploadButton } from "@uploadthing/react";
import { type OurFileRouter } from "~/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadButton<OurFileRouter>();
