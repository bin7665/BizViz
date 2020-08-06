// DOM
const regionFilter = document.querySelector(".region-filter");
const categoryFilter = document.querySelector(".category-filter");
const businessFilter = document.querySelector(".business-filter");
const departmentFilter = document.querySelector(".department-filter");

// Secure
document.cookie = "hi098123Cookie1=1; SameSite=None; Secure";

// functions
function filterCreater(data, parentNode) {
  const btnName = `${data.name}Filter`;
  const dataLength = data.content.length;
  let element = "";
  let count = 1;

  // create filterings => 지역, 분야, 기업형태, 부처 / 지자체
  for (let i = 0; i < dataLength; i++) {
    const sectionData = data.content[i];
    const sectionLength = sectionData.content.length;
    let sectionName = sectionData.section;
    let btnCount = btnName + String(count);

    // 하위 category가 하나인 경우 ex) 동반성장 / 동반성장
    if (sectionLength === 1) {
      sectionName += ` / ${sectionData.content[0]}`;
    }

    // create parent checkbox
    const section = `<div class="checkbox-container custom-control custom-checkbox mt-1 ml-1">
        <input type="checkbox" value=${sectionName} class="custom-control-input" id=${btnCount} />
        <label for=${btnCount} class="custom-control-label" onclick="handleParentFilter(this)" >
            ${sectionName}
        </label></div>`;
    element += section;
    count++;

    // create child checkbox
    if (sectionLength > 1) {
      // 여기 div 형태로 감싸서 나중에 버튼 범위 좀 늘려주자
      element += `<div class="container ml-3"><div class="row">`;
      for (let j = 0; j < sectionLength; j++) {
        const contentName = sectionData.content[j];
        btnCount = btnName + String(count);
        const content = `<div class="custom-control custom-checkbox h-100 mt-1 mr-2">
            <input type="checkbox" value=${contentName} class="custom-control-input" id=${btnCount} />
            <label for=${btnCount} class="custom-control-label" onclick="handleChildFilter(this)" >
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

function handleParentFilter(clicked) {
  const parentCheckbox = clicked.previousElementSibling;
  const childCheckbox = clicked.parentElement.nextSibling;

  if (childCheckbox) {
    const checkList = childCheckbox.querySelectorAll("input");
    const checkVal = !parentCheckbox.checked;

    if (!childCheckbox.classList.contains("container")) {
      return;
    }

    for (let i = 0, length = checkList.length; i < length; i++) {
      checkList[i].checked = checkVal;
    }
  }
}

function handleChildFilter(clicked) {
  const clickedCheckbox = clicked.previousElementSibling;
  const childCheckbox = clicked.parentElement.parentElement.parentElement;
  const parentCheckbox = childCheckbox.previousElementSibling.querySelector(
    "input"
  );
  const checkList = childCheckbox.querySelectorAll("input");
  let count = 0,
    length = checkList.length;

  if (clickedCheckbox.checked === true) {
    parentCheckbox.checked = false;
  } else {
    for (let i = 0; i < length; i++) {
      if (checkList[i].checked === true) {
        count++;
      }
    }
    if (count === length - 1) {
      parentCheckbox.checked = true;
    }
  }
}

function createFilterContent() {
  filterCreater(regions, regionFilter);
  filterCreater(categories, categoryFilter);
  filterCreater(businesses, businessFilter);
  filterCreater(departments, departmentFilter);
}

createFilterContent();
