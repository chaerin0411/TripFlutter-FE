"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

interface LocationRankCardProps {
  img: string | StaticImageData;
  locationName: string;
}

const LocationThumbNailCard: React.FC<LocationRankCardProps> = ({
  img,
  locationName,
}) => {
  const router = useRouter();

  const onClickLocation = () => {
    router.push(`/trip/destination/list?region=${locationName}`);
  };

  return (
    <LocationCardContainer
      onClick={() => {
        onClickLocation();
      }}
    >
      <LocationThumbnail>
        <Image
          src={img}
          alt={locationName}
          layout="fill"
          loading="lazy"
          objectFit="cover"
          style={{ borderRadius: "50%" }}
        />
      </LocationThumbnail>
      <LocationName>{locationName}</LocationName>
    </LocationCardContainer>
  );
};

const LocationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  :hover {
    cursor: pointer;
  }
`;

const LocationThumbnail = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  border: 2px solid ${COLORS.greyColor};
  border-radius: 50%;
`;

const LocationName = styled.div`
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
`;

export default LocationThumbNailCard;
