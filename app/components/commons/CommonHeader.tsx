"use client";
import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/public/styles/colors";
import { ArrowLeft } from "./Icons";
import { useRouter } from "next/navigation";

interface CommonHeaderProps {
  backLink?: string;
  headerTitle: string;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({
  backLink,
  headerTitle,
}) => {
  const router = useRouter();

  const backClickHandler = () => {
    if (backLink) {
      router.push(backLink);
    } else {
      router.back();
    }
  };
  return (
    <Header>
      <BackButton
        onClick={() => {
          backClickHandler();
        }}
      >
        <ArrowLeft width={16} height={16} color={COLORS.blackColor} />
      </BackButton>
      <Title>{headerTitle}</Title>
    </Header>
  );
};

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: calc(100% - 40px);
  padding: 20px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  all: unset;
  cursor: pointer;
  text-decoration: none;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.blackColor};
`;

export default CommonHeader;
