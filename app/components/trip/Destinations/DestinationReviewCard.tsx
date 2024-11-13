"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export interface ReviewDataProps {
  userName: string;
  date: string;
  contents: string;
  review: number;
}

const DestinationReviewCard: React.FC<{ reviewData: ReviewDataProps }> = ({ reviewData }) => {
  const { userName, date, contents, review } = reviewData;

  return (
    <ReviewCardContainer>
      <ReviewContentsContainer>
        <div className={"user-name"}>
          {userName} ({review} / 5) <span className={"date"}>{date}</span>
        </div>
        <div className={"contents"}>
          {contents}
        </div>
      </ReviewContentsContainer>
    </ReviewCardContainer>
  );
};

const ReviewCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 16px;
  width: calc(100% - 32px);

  border: 1px solid ${COLORS.greyColor};
  border-radius: 8px;
`;

const ReviewContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .user-name {
    font-size: 14px;
    line-height: 14px;
    font-weight: 900;
  }

  .contents {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
  }

  .date {
    font-size: 12px;
    line-height: 12px;
    font-weight: 500;
    margin-left: 8px;
  }
`;

export default DestinationReviewCard;
