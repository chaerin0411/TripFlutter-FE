"use client";
import { useSearchParams } from "next/navigation";
import DefaultLayout from "@/app/components/DefaultLayout";
import CommonHeader from "@/app/components/commons/CommonHeader";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingModal from "@/app/components/commons/LoadingModal";
import DestinationCard from "@/app/components/trip/Destinations/DestinationCard";

export interface ListData {
  id: number;
  destinationName: string;
  tags: string[];
}

const DUMMY_DATA: ListData[] = [
  {
    id: 1,
    destinationName: "경복궁",
    tags: ["역사", "궁궐", "서울"],
  },
  {
    id: 2,
    destinationName: "남산",
    tags: ["산", "전망", "트래킹"],
  },
  {
    id: 3,
    destinationName: "청계천",
    tags: ["도심", "산책", "물길"],
  },
  {
    id: 4,
    destinationName: "북촌 한옥마을",
    tags: ["역사", "한옥", "서울"],
  },
];

const DestinationListPage: React.FC = () => {
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const [listData, setListData] = useState<ListData[]>(DUMMY_DATA);

  useEffect(() => {
    setListData(DUMMY_DATA);
  }, []);

  return listData && region ? (
    <DefaultLayout top={0} right={0} bottom={0} left={0} nav={false}>
      <ListPageContainer>
        <CommonHeader backLink={"/"} headerTitle={region} />
        <TitleContainer>
          <div className={"list-title"}>{region}의 추천 여행지</div>
        </TitleContainer>
        <ListContainer>
          {listData.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </ListContainer>
      </ListPageContainer>
    </DefaultLayout>
  ) : (
    <LoadingModal />
  );
};

const ListPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  min-width: 320px;
  max-width: 600px;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  width: calc(100% - 40px);

  .list-title {
    font-size: 24px;
    line-height: 20px;
    font-weight: 700;
    color: ${COLORS.blackColor};
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: calc(100% - 40px);
`;

// export default function ListPage() {
//     const [items, setItems] = useState([]); // 초기 상태를 빈 배열로 설정
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null); // 에러 상태를 문자열 또는 null로 설정

//     // 퍼블리싱 중 주석처리
//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             // API 호출: 서울 지역의 관광지 정보를 가져옴
//     //             const response = await axios.get('/api/tour/tripSpot', {
//     //                 params: {
//     //                     region: '강원', // 기본적으로 '서울'로 설정, 사용자 입력에 따라 동적으로 변경 가능
//     //                     page: 1
//     //                 },
//     //             });

//     //             // 데이터 설정
//     //             if (response.data) {
//     //                 setItems(response.data);
//     //             } else {
//     //                 setItems([]);
//     //             }
//     //         } catch (err) {
//     //             setError('Failed to fetch data'); // 오류 발생 시 에러 메시지 설정
//     //         } finally {
//     //             setLoading(false); // 로딩 상태 해제
//     //         }
//     //     };

//     //     fetchData();
//     // }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     // console.log(items);
//     return (

//     );
// }

export default DestinationListPage;
