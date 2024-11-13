import { TestListData } from "./types";
import GYEONGBOKGUNG from "@/public/images/gyeongbokgung.jpg";
import SEOUL from "@/public/images/seoul.jpeg";
import GYEONGI from "@/public/images/gyeongi.jpg";
import GANGWON from "@/public/images/gangwon.jpg";
import CHUNGBUK from "@/public/images/chungbuk.jpg";
import CHUNGNAM from "@/public/images/chungnam.jpg";
import JEONBUK from "@/public/images/jeonbuk.jpg";
import JEONNAM from "@/public/images/jeonnam.jpg";
import JEJU from "@/public/images/jeju.jpg";

export const DUMMY_DESTINATIONS_DATA_LIST: TestListData = {
  서울특별시: [
    {
      id: 1,
      destinationName: "경복궁",
      tags: ["역사", "궁궐", "서울"],
      image: GYEONGBOKGUNG,
    },
    {
      id: 2,
      destinationName: "남산",
      tags: ["산", "전망", "트래킹"],
      image: SEOUL,
    },
    {
      id: 3,
      destinationName: "청계천",
      tags: ["도심", "산책", "물길"],
      image: SEOUL,
    },
    {
      id: 4,
      destinationName: "북촌 한옥마을",
      tags: ["역사", "한옥", "서울"],
      image: GYEONGBOKGUNG,
    },
  ],
  경기도: [
    {
      id: 5,
      destinationName: "수원 화성",
      tags: ["역사", "궁궐", "경기"],
      image: GYEONGI,
    },
    {
      id: 6,
      destinationName: "파주 헤이리 예술마을",
      tags: ["예술", "문화", "경기"],
      image: GYEONGI,
    },
    {
      id: 7,
      destinationName: "용인 에버랜드",
      tags: ["놀이공원", "놀이기구", "경기"],
      image: GYEONGI,
    },
    {
      id: 8,
      destinationName: "수원 월미도??",
      tags: ["테마파크", "물놀이", "경기"],
      image: GYEONGI,
    },
  ],
  강원도: [
    {
      id: 9,
      destinationName: "강릉 경포해수욕장",
      tags: ["해변", "바다", "강원"],
      image: GANGWON,
    },
    {
      id: 10,
      destinationName: "속초 설악산",
      tags: ["산", "자연", "강원"],
      image: GANGWON,
    },
    {
      id: 11,
      destinationName: "춘천 남이섬",
      tags: ["섬", "자연", "강원"],
      image: GANGWON,
    },
    {
      id: 12,
      destinationName: "태백 태백산",
      tags: ["산", "자연", "강원"],
      image: GANGWON,
    },
  ],
  충청북도: [
    {
      id: 13,
      destinationName: "청주 청남대",
      tags: ["역사", "대학", "충북"],
      image: CHUNGBUK,
    },
    {
      id: 14,
      destinationName: "충주 탄금호",
      tags: ["호수", "자연", "충북"],
      image: CHUNGBUK,
    },
    {
      id: 15,
      destinationName: "제천 한탄강",
      tags: ["강", "자연", "충북"],
      image: CHUNGBUK,
    },
    {
      id: 16,
      destinationName: "보은 용담호",
      tags: ["호수", "자연", "충북"],
      image: CHUNGBUK,
    },
  ],
  충청남도: [
    {
      id: 20,
      destinationName: "서산 해미읍성",
      tags: ["역사", "성곽", "충남"],
      image: CHUNGNAM,
    },
    {
      id: 21,
      destinationName: "태안 안면도",
      tags: ["섬", "자연", "충남"],
      image: CHUNGNAM,
    },
    {
      id: 22,
      destinationName: "공주 공산성",
      tags: ["역사", "성곽", "충남"],
      image: CHUNGNAM,
    }
  ],
  전라북도: [
    {
      id: 17,
      destinationName: "전주 한옥마을",
      tags: ["역사", "한옥", "전북"],
      image: JEONBUK,
    },
    {
      id: 18,
      destinationName: "군산 선유도",
      tags: ["섬", "자연", "전북"],
      image: JEONBUK,
    },
    {
      id: 19,
      destinationName: "부안 변산반도",
      tags: ["자연", "해변", "전북"],
      image: JEONBUK,
    }
  ],
  전라남도: [
    {
      id: 23,
      destinationName: "순천만",
      tags: ["자연", "습지", "전남"],
      image: JEONNAM,
    },
    {
      id: 24,
      destinationName: "여수 돌산공원",
      tags: ["공원", "전망", "전남"],
      image: JEONNAM,
    },
    {
      id: 25,
      destinationName: "보성 녹차밭",
      tags: ["녹차", "밭", "전남"],
      image: JEONNAM,
    }
  ],
  제주특별자치도: [
    {
      id: 26,
      destinationName: "성산일출봉",
      tags: ["일출", "자연", "제주"],
      image: JEJU,
    },
    {
      id: 27,
      destinationName: "한라산",
      tags: ["산", "자연", "제주"],
      image: JEJU,
    },
    {
      id: 28,
      destinationName: "제주 도립미술관",
      tags: ["미술", "문화", "제주"],
      image: JEJU,
    }
  ],
};