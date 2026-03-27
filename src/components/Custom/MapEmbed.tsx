import MKBox from "components/MKBox";
import { FC } from "react";

interface MapEmbedProps {
  query: string;
  height?: string;
}

const MapEmbed: FC<MapEmbedProps> = ({ query, height = "300px" }) => {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <MKBox
      sx={{
        width: "100%",
        height,
        minHeight: 300,
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <iframe
        title="Office Location"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </MKBox>
  );
};

export default MapEmbed;
