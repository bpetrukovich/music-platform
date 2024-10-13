"use client";
import FileUpload from "@/components/FileUpload";
import React, { ChangeEvent } from "react";
import InputText from "./InputText";
import { FormikHelpers, useFormik } from "formik";
import { postTrack } from "@/api/postTrack";
import FileUploadButton from "./FileUploadButton";
import { TrackDTO } from "@music-platform/shared";

const initialValues: TrackDTO = {
  file: new Blob(),
  name: "",
  author: "",
  album: "",
};

function handleSubmit(
  trackData: TrackDTO,
  { setSubmitting }: FormikHelpers<TrackDTO>,
): void {
  let data = new FormData();
  let prop: string;
  for (prop in trackData) {
    data.append(prop, trackData[prop as keyof TrackDTO]);
  }
  postTrack(data);
  setSubmitting(false);
}

function validate({ file, name, author, album }: TrackDTO) {
  const errors: {
    [P in keyof TrackDTO]?: string;
  } = {};

  if (!file) {
    errors.file = "No file selected";
  }
  if (!name) {
    errors.name = "required";
  }
  if (!author) {
    errors.author = "required";
  }
  if (!album) {
    errors.album = "required";
  }

  return errors;
}

export default function Upload() {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  const [fileName, setFileName] = React.useState<string>("Select file");

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.currentTarget.files) {
      alert("File error");
      return;
    }
    console.log(e.currentTarget.files[0]);
    formik.setFieldValue("file", e.currentTarget.files[0]);
    setFileName(e.currentTarget.files[0].name);
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-3/4 flex flex-col gap-8 max-w-[40rem]">
        <h1 className="text-5xl font-light text-text text-center">
          Upload your track
        </h1>
        <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
          <FileUpload accept="audio/*" handleChange={handleFileChange}>
            <FileUploadButton
              isError={Boolean(formik.errors.file?.text)}
              fileName={fileName}
              error={String(formik.errors.file?.text)}
              touched={Boolean(formik.touched.file)}
            />
          </FileUpload>
          <InputText
            name="name"
            placeholder="Track name"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          <InputText
            name="author"
            placeholder="Author"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.author}
            touched={formik.touched.author}
          />
          <InputText
            name="album"
            placeholder="Album"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            error={formik.errors.album}
            touched={formik.touched.album}
          />
          <button
            type="submit"
            className="w-full flex justify-center items-center h-16 text-xl rounded-lg bg-primary text-background font-bold transition hover:bottom-1 relative bottom-0  hover:shadow-primary shadow-[0_1rem_100px_-20px_rgba(0,0,0,0.3)]"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
