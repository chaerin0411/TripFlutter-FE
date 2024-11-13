"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ListData } from "@/public/types";

interface DestinationCardProps {
  destination: ListData;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const router = useRouter();
  const { id, destinationName, tags, image } = destination;

  const onClickDestination = () => {
    router.push(`/trip/destination/detail/${id}`);
  };

  return (
    <CardContainer
      onClick={() => {
        onClickDestination();
      }}
    >
      <DestinationThumbnail>
        <Image
          src={image}
          alt={"dummy"}
          layout="fill"
          placeholder="blur"
          objectFit="cover"
        />
      </DestinationThumbnail>
      <DestinationInfo>
        <div className="destination-title">{destinationName}</div>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>
              <span>#</span>
              {tag}
            </Tag>
          ))}
        </TagsContainer>
      </DestinationInfo>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

const DestinationThumbnail = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  max-height: 350px;
  border-radius: 8px;
  overflow: hidden;

  :hover {
    cursor: pointer;
  }
`;

const DestinationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .destination-title {
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    color: ${COLORS.blackColor};

    :hover {
      cursor: pointer;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 4px 12px;

  border: 1px solid ${COLORS.greyColor};
  border-radius: 16px;

  font-size: 16px;
  font-weight: 700;
  color: ${COLORS.blackColor};

  & > span {
    font-size: 16px;
    font-weight: 900;
    color: ${COLORS.mainColor};
  }
`;

export default DestinationCard;
