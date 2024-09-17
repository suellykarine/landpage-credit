import Image from "next/image";
import React from "react";
import { SectionDeposition } from "./style";
import IHighlightProps from "./interface";

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
