// DOM
const regionFilter = document.querySelector(".region-filter");
const categoryFilter = document.querySelector(".category-filter");
const businessFilter = document.querySelector(".business-filter");
const departmentFilter = document.querySelector(".department-filter");
const regionSelected = document.querySelector(".region-selected");

// Secure
document.cookie = "hi098123Cookie1=1; SameSite=None; Secure";

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
