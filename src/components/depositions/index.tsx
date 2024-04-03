import Image from "next/image";
import React from "react";
import { SectionDeposition } from "./style";

export default interface IHighlightProps {
  by?: string;
  paragraph?: string;
  image?: string;
  slice?: boolean;
}

export function Deposition({ by, paragraph, image }: IHighlightProps) {
  return (
    <SectionDeposition>
      <div>
        <figure>
          <Image
            src={image!}
            alt="imagem de ilustração da sessão"
            width="1"
            height="1"
            priority={true}
          />
        </figure>
        <article>
          <p className="initial-deposition">{`“`}</p>
          <div>
            <p id="paragraph-deposition">{paragraph}</p>
          </div>
          <div id="by">
            <p>{by}</p>
          </div>
        </article>
      </div>
    </SectionDeposition>
  );
}
