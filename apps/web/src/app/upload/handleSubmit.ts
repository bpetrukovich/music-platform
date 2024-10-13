"use client";
import { TrackDTO } from "@music-platform/shared";
import { FormikHelpers } from "formik";

export function handleSubmit(
  trackData: TrackDTO,
  { setSubmitting }: FormikHelpers<TrackDTO>,
): void {
  setTimeout(() => alert(JSON.stringify(trackData, null, 2)), 1000);
  console.log(trackData);
  setSubmitting(false);
}
