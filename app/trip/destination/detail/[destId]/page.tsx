"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import DefaultLayout from "@/app/components/DefaultLayout";
import CommonHeader from "@/app/components/commons/CommonHeader";
import { StartIcon } from "@/app/components/commons/Icons";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReviewDataProps } from "@/app/components/trip/Destinations/DestinationReviewCard";
import DestinationReviewCard from "@/app/components/trip/Destinations/DestinationReviewCard";

interface DetailData {
  title: string;
  firstimage?: string;
  overview: string;
  addr1: string;
}

// TODO
// like count => api로 받아와서 처리
// like button => 클릭시 api로 전송

const DUMMY_REVIEW_DATA: ReviewDataProps[] = [
  {
    userName: "김여행",
    date: "2024.11.12",
    contents: "오늘같이 날씨가 좋은 가을날 데이트하기 정말 좋은 장소였습니다.",
    review: 3,
  },
  {
    userName: "김동빈",
    date: "2024.11.11",
    contents: "평소 역사에 관심이 많아 방문했습니다. 유익한 시간이었어요.",
    review: 4,
  },
  {
    userName: "전채린",
    date: "2024.11.10",
    contents: "교통편이 괜찮았어요. 다음에 또 방문하고 싶어요.",
    review: 5,
  },
  {
    userName: "정승민",
    date: "2024.11.10",
    contents: "한복을 입고 방문하면 입장료가 무료더라고요. 추천합니다.",
    review: 5,
  },
];

const DetailPage: React.FC = () => {
  const params = useSearchParams();
  const destId = params.get("destId");

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [visibleReviews, setVisibleReviews] = useState<number>(3);

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  const likeClickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <DetailPageContainer>
      <CommonHeader
        backLink={"/trip/destination/list"}
        headerTitle={"상세보기"}
      />
      <DetailContentsContainer>
        <DetailImage></DetailImage>
        <DetailInfo>
          <DetailWrapper>
            <div className={"title-wrapper"}>
              <div className={"title-and-address-wrapper"}>
                <div className={"title-and-categroy-wrapper"}>
                  <div className={"detail-title"}>경복궁</div>
                  <div className={"detail-category"}>관광 명소</div>
                </div>

                <div className={"detail-address"}>
                  서울특별시 종로구 사직로 161
                </div>
              </div>

              <div className={"like-button"}>
                <div
                  className={"like-star"}
                  onClick={() => {
                    likeClickHandler();
                  }}
                >
                  <StartIcon
                    width={24}
                    height={24}
                    color={isLiked ? COLORS.mainColor : COLORS.greyColor}
                  />
                </div>
                <div className={"like-count"}>1,200</div>
              </div>
            </div>
          </DetailWrapper>
          <DetailDesc>
            경복궁은 대한민국 서울특별시 종로구 사직로에 있는 조선 시대의
            궁궐이다.
          </DetailDesc>
        </DetailInfo>

        <DetailMap>
          <EachTtile>지도에서 이 여행지 확인하기</EachTtile>
          <MapContainer>{/* TODO : 이곳에 지도 삽입하기 */}</MapContainer>
        </DetailMap>

        <ReviewsList>
          <EachTtile>
            이 여행지 리뷰 (4.5 / 5.0) {/*TODO : API 에서 받아온 리뷰값 평균 */}
          </EachTtile>

          {DUMMY_REVIEW_DATA.slice(0, visibleReviews).map((review, index) => (
            <DestinationReviewCard key={index} reviewData={review} />
          ))}

          {visibleReviews < DUMMY_REVIEW_DATA.length && (
            <LoadMoreButton onClick={loadMoreReviews}>
              리뷰 더보기
            </LoadMoreButton>
          )}
        </ReviewsList>
      </DetailContentsContainer>
    </DetailPageContainer>
  );
};

const DetailPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  /* gap: 20px; */

  margin-bottom: 100px;
  min-width: 320px;
  max-width: 600px;
  width: 100%;
`;

const DetailContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const DetailImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: ${COLORS.greyColor};
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0px 20px;
  width: calc(100% - 40px);
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    .like-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      & > .like-count {
        font-size: 12px;
        line-height: 12px;
        font-weight: 700;
      }
    }

    .title-and-address-wrapper {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .title-and-categroy-wrapper {
        display: flex;
        align-items: flex-end;
        gap: 12px;

        .detail-title {
          font-size: 24px;
          line-height: 24px;
          font-weight: 900;
        }

        .detail-category {
          font-size: 14px;
          line-height: 14px;
          font-weight: 500;
        }
      }
      .detail-address {
        font-size: 14px;
        line-height: 14px;
        font-weight: 500;
      }
    }
  }
`;

const DetailDesc = styled.div`
  width: 70%;
  word-break: keep-all;

  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
`;

const DetailMap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 16px;
  padding: 0px 20px;

  width: calc(100% - 40px);

  .title {
    font-size: 18px;
    line-height: 18px;
    font-weight: 900;
  }
`;

const EachTtile = styled.div`
  font-size: 18px;
  line-height: 18px;
  font-weight: 900;
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 240px;

  background-color: ${COLORS.greyColor};
`;

const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 16px;
  padding: 0px 20px;
  width: calc(100% - 40px);

  .title {
    font-size: 18px;
    line-height: 18px;
    font-weight: 900;
  }
`;

const LoadMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  font-size: 14px;
  line-height: 14px;
  font-weight: 900;
  color: ${COLORS.mainColor};
`;

export default DetailPage;

// export default function DetailPage() {
//     const params = useParams();
//     const title = params?.title;

//     const [detailData, setDetailData] = useState<DetailData | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         if (!title) {
//             // title이 없는 경우 아무 작업도 수행하지 않음
//             return;
//         }

//         let decodedTitle = '';
//         try {
//             if (typeof title === "string") {
//                 decodedTitle = decodeURIComponent(title);
//             }
//         } catch (e) {
//             console.error('Failed to decode title:', e);
//             setError('Invalid title format.');
//             setLoading(false);
//             return;
//         }

//         console.log('Decoded Title:', decodedTitle); // 디버깅용 로그

//         const fetchDetailData = async () => {
//             try {
//                 const response = await axios.get('/api/tour/tripDetail', {
//                     params: {
//                         title: decodedTitle,
//                     },
//                 });
//                 if (response.data) {
//                     setDetailData(response.data);
//                 } else {
//                     setError('Data not found.');
//                 }
//             } catch (err) {
//                 console.error('Failed to fetch detail data:', err);
//                 setError('Failed to fetch detail data.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDetailData();
//     }, [title]);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             <h1>{detailData?.title}</h1>
//             {detailData?.firstimage && (
//                 <img src={detailData.firstimage} alt={detailData.title} />
//             )}
//             <p>{detailData?.overview}</p>
//             <p>{detailData?.addr1}</p>
//         </div>
//     );
// }
