"use client";
import DefaultLayout from "./components/DefaultLayout";
import { COLORS } from "@/public/styles/colors";
import styled from "styled-components";
import LocationThumbNailCard from "./components/main/LocationThumbNailCard";
import PopularLocationCard from "./components/main/PopularLocationCard";
import StyledButton from "./components/commons/StyledButton";
import DUMMY_UDO from "/public/images/dummy_udo.png";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

import SEOUL from "@/public/images/seoul.jpeg";
import GYEONGI from "@/public/images/gyeongi.jpg";
import GANGWON from "@/public/images/gangwon.jpg";
import CHUNGBUK from "@/public/images/chungbuk.jpg";
import CHUNGNAM from "@/public/images/chungnam.jpg";
import JEONBUK from "@/public/images/jeonbuk.jpg";
import JEONNAM from "@/public/images/jeonnam.jpg";
import JEJU from "@/public/images/jeju.jpg";

interface LocationIconItem {
  locationThumbnail: StaticImageData | string;
  locationName: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const locationList: LocationIconItem[] = [
    {
      locationThumbnail: SEOUL,
      locationName: "서울특별시",
    },
    {
      locationThumbnail: GYEONGI,
      locationName: "경기도",
    },
    {
      locationThumbnail: GANGWON,
      locationName: "강원도",
    },
    {
      locationThumbnail: CHUNGBUK,
      locationName: "충청북도",
    },
    {
      locationThumbnail: CHUNGNAM,
      locationName: "충청남도",
    },
    {
      locationThumbnail: JEONBUK,
      locationName: "전라북도",
    },
    {
      locationThumbnail: JEONNAM,
      locationName: "전라남도",
    },
    {
      locationThumbnail: JEJU,
      locationName: "제주특별자치도",
    },
  ];

  const DUMMY_POPULAR_LOCATION = [
    {
      img: DUMMY_UDO,
      rank: 1,
      locationName: "우도",
      tags: ["해변", "바다", "휴양지"],
    },
    {
      img: DUMMY_UDO,
      rank: 2,
      locationName: "설악산",
      tags: ["산", "자연", "등산"],
    },
    {
      img: DUMMY_UDO,
      rank: 3,
      locationName: "하남 스타필드",
      tags: ["도심", "쇼핑", "먹거리"],
    },
  ];

  return (
    <DefaultLayout top={0} right={0} bottom={0} left={0} nav={true}>
      <HomeContainer>
        <Header>TripFlutter</Header>
      </HomeContainer>

      <LocationContainer>
        {locationList.map((location: LocationIconItem, index: number) => (
          <LocationThumbNailCard
            key={index}
            img={location.locationThumbnail}
            locationName={location.locationName}
          />
        ))}
      </LocationContainer>

      <ContentsContainer>
        <ContentsTitle>바로 여행 계획하기</ContentsTitle>
        <StyledButton
          isBorder={true}
          buttonText={"트리플러터에게 떠나고 싶은 여행을 알려주세요!"}
          fontSize={16}
          action={() => {
            router.push("trip/create");
          }}
        />
      </ContentsContainer>

      <ContentsContainer>
        <ContentsTitle>지금 가장 인기있는 국내 여행지</ContentsTitle>
        {DUMMY_POPULAR_LOCATION.map((location, index: number) => (
          <PopularLocationCard
            key={index}
            img={location.img}
            locationName={location.locationName}
            rank={location.rank}
            tags={location.tags}
          />
        ))}
      </ContentsContainer>
    </DefaultLayout>
  );
};

const HomeContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 20px;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 32px;
  color: ${COLORS.mainColor};
`;

const LocationContainer = styled.div`
  padding: 20px;

  display: flex;
  align-items: center;
  gap: 16px;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: no-wrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const ContentsContainer = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContentsTitle = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
`;

export default Home;
