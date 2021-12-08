import media1 from "../../assets/media-1.jpeg";
import media2 from "../../assets/media-2.jpeg";
import media3 from "../../assets/media-3.jpeg";
import media4 from "../../assets/media-4.jpeg";
import media5 from "../../assets/media-5.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = (index: number) => media[index % media.length];
