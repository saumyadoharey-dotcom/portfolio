"use client";

import { Dialog } from "radix-ui";

const image = "/images/creative-license.svg";
const description = "Saumya Doharey’s Creative License card";

export default function CreativeLicense() {
  return (
    <Dialog.Root>
      <figure className="creative-license">
        <Dialog.Trigger asChild>
          <button type="button" className="creative-license-trigger" aria-label="Enlarge my Creative License">
            <img src={image} alt={description} width={1000} height={1000} loading="lazy" />
          </button>
        </Dialog.Trigger>
        <figcaption>My creative license. Click or tap to explore.</figcaption>
      </figure>
      <Dialog.Portal>
        <Dialog.Overlay className="creative-license-overlay" />
        <Dialog.Content className="creative-license-lightbox" aria-describedby={undefined}>
          <div className="creative-license-toolbar">
            <Dialog.Title>My Creative License</Dialog.Title>
            <Dialog.Close className="creative-license-close">Close ×</Dialog.Close>
          </div>
          <img src={image} alt={description} width={1000} height={1000} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
