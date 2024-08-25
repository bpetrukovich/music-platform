"use client";
import { FormikHelpers } from "formik";
import { TrackData } from "./page";

export function handleSubmit(
  trackData: TrackData,
  { setSubmitting }: FormikHelpers<TrackData>,
): void {
  setTimeout(() => alert(jSON.stringify(trackData, null, 2)), 1000);
  console.log(trackData);
  setSubmitting(false);
}
