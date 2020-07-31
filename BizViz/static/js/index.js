// DOM
const regionFilter = document.querySelector(".region-filter");
const categoryFilter = document.querySelector(".category-filter");
const businessFilter = document.querySelector(".business-filter");
const departmentFilter = document.querySelector(".department-filter");
const regionSelected = document.querySelector(".region-selected");

// varaibles
const regions = {
  name: "region",
  content: [
    {
      section: "도",
      content: [
        "경기도",
        "강원도",
        "충청북도",
        "충청남도",
        "전라북도",
        "전라남도",
        "경상북도",
        "경상남도",
        "제주특별자치도",
      ],
    },
    {
      section: "시",
      content: [
        "서울특별시",
        "부산광역시",
        "대구광역시",
        "인천광역시",
        "광주광역시",
        "대전광역시",
        "울산광역시",
        "세종특별자치시",
      ],
    },
  ],
};
const categories = {
  name: "category",
  content: [
    {
      section: "경영",
      content: [
        "디자인/상품화/사업화",
        "시설/입지지원",
        "컨설팅",
        "교육",
        "정보화지원",
      ],
    },
    {
      section: "금융",
      content: ["융자", "펀드/투자", "보험", "보증"],
    },
    {
      section: "기술",
      content: [
        "공동기술개발",
        "혼합(단독+공동)",
        "기술인력/장비지원",
        "단독기술개발",
        "기술사업화/이전/지도",
        "시험/인증",
        "기술정보제공",
      ],
    },
    {
      section: "내수",
      content: ["홍보지원", "오프라인판매", "공공구매", "온라인판매"],
    },
    {
      section: "동반성장",
      content: ["동반성장"],
    },
    {
      section: "수출",
      content: [
        "해외진출",
        "해외수출준비",
        "시장개척",
        "FTA활용/대응",
        "수출정보제공",
      ],
    },
    {
      section: "인력",
      content: [
        "고용유지",
        "고용환경개선",
        "교육/훈련/연수",
        "국내전문인력",
        "국내일반인력",
        "작업환경개선",
        "해외인력",
        "인력정보제공",
      ],
    },
    {
      section: "제도",
      content: ["조세"],
    },
    {
      section: "창업",
      content: [
        "창업공간지원",
        "재기지원",
        "사업화지원",
        "예비창업자지원",
        "창업정보제공",
      ],
    },
  ],
};
const businesses = {
  name: "business",
  content: [
    {
      section: "중소기업",
      content: [],
    },
    {
      section: "중견기업",
      content: [],
    },
    {
      section: "소상공인",
      content: [],
    },
    {
      section: "전통시장",
      content: [],
    },
    {
      section: "1인기업",
      content: [],
    },
    {
      section: "창업기업",
      content: [],
    },
    {
      section: "예비창업자",
      content: [],
    },
  ],
};
const departments = {
  name: "department",
  content: [
    {
      section: "부처",
      content: [
        "고용노동부",
        "과학기술정보통신부",
        "관세청",
        "교육부",
        "국방부",
        "국세청",
        "국토교통부",
        "금융위원회",
        "기상청",
        "기획재정부",
        "농림축산식품부",
        "농촌진흥청",
        "문화체육관광부",
        "방위사업청",
        "법무부",
        "보건복지부",
        "삼림청",
        "산업통상자원부",
        "식품의약품안전처",
        "조달청",
        "중소벤처기업부",
        "특허청",
        "해양수산부",
        "행정안전부",
        "환경부",
      ],
    },
    {
      section: "지자체",
      content: [
        "강원도",
        "경기도",
        "경상남도",
        "경상북도",
        "광주광역시",
        "대구광역시",
        "대전광역시",
        "부산광역시",
        "서울특별시",
        "세종특별자치시",
        "울산광역시",
        "인천광역시",
        "전라남도",
        "전라북도",
        "제주특별자치도",
        "충청남도",
        "충청북도",
      ],
    },
  ],
};

// functions
function filterMaker(data, parentNode) {
  const btnName = `${data.name}Filter`;
  const dataLength = data.content.length;
  let element = "";
  let count = 1;
  for (let i = 0; i < dataLength; i++) {
    const sectionData = data.content[i];
    const sectionLength = sectionData.content.length;
    let sectionName = sectionData.section;
    let btnCount = btnName + String(count);
    if (sectionLength === 1) {
      sectionName += ` / ${sectionData.content[0]}`;
    }
    const section = `<div class="checkbox-container custom-control custom-checkbox mt-1 ml-1">
        <input type="checkbox" value=${sectionName} class="custom-control-input" id=${btnCount} />
        <label for=${btnCount} class="custom-control-label" onclick="handleFilterCheck(this)" />
            ${sectionName}
        </label></div>`;
    element += section;
    count++;
    if (sectionLength > 1) {
      // 여기 div 형태로 감싸서 나중에 버튼 범위 좀 늘려주자
      element += `<div class="container ml-3"><div class="row">`;
      for (let j = 0; j < sectionLength; j++) {
        const contentName = sectionData.content[j];
        btnCount = btnName + String(count);
        const content = `<div class="custom-control custom-checkbox h-100 mt-1 mr-2">
            <input type="checkbox" value=${contentName} class="custom-control-input" id=${btnCount} />
            <label for=${btnCount} class="custom-control-label">
                ${contentName}
            </label></div>`;
        count++;
        element += content;
      }
      element += `</div></div>`;
    }
  }
  parentNode.innerHTML = element;
}

function handleFilterCheck(clicked) {
  const previousSibling = clicked.previousElementSibling;
  const nextSibling = clicked.parentElement.nextSibling;
  const checkList = nextSibling.querySelectorAll("input");
  const checkVal = !previousSibling.checked;

  if (!nextSibling.classList.contains("container")) {
    return;
  }

  for (let i = 0, length = checkList.length; i < length; i++) {
    checkList[i].checked = checkVal;
  }
}

function createFilterContent() {
  filterMaker(regions, regionFilter);
  filterMaker(categories, categoryFilter);
  filterMaker(businesses, businessFilter);
  filterMaker(departments, departmentFilter);
}

createFilterContent();
