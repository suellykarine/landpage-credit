import { Carousel } from "@mantine/carousel";
import { profiles } from "./profiles";
import Card from "../sectionProfile/card";
import { DivCards } from "./style";

export function CarouselCards() {
  const slides = profiles.map((item) => (
    <Card profile={item} key={item.description} />
  ));
  return <DivCards>{slides}</DivCards>;
}
