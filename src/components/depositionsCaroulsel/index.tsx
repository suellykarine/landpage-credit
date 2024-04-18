import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { DepositionSection } from "./style";
import { Deposition } from "../depositions";
import { depositions } from "../depositions/depositions.database";

export function DepositionsCaroulsel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <DepositionSection id="section5">
      <Carousel
        sx={{ maxWidth: "95%" }}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        withIndicators
      >
        <Carousel.Slide id="slide-1">
          <Deposition
            by={depositions[0].by}
            paragraph={depositions[0].paragraph}
            image={depositions[0].avatar}
          />
        </Carousel.Slide>
        <Carousel.Slide id="slide-2">
          <Deposition
            by={depositions[1].by}
            paragraph={depositions[1].paragraph}
            image={depositions[1].avatar}
          />
        </Carousel.Slide>
        <Carousel.Slide id="slide-3">
          <Deposition
            by={depositions[2].by}
            paragraph={depositions[2].paragraph}
            image={depositions[2].avatar}
          />
        </Carousel.Slide>
        <Carousel.Slide id="slide-4">
          <Deposition
            by={depositions[3].by}
            paragraph={depositions[3].paragraph}
            image={depositions[3].avatar}
          />
        </Carousel.Slide>
      </Carousel>
    </DepositionSection>
  );
}
