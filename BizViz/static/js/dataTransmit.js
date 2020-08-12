function modalAction(depart) {
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");
  const interDatas = modalBody.querySelectorAll(".interactive-data");
  const departDict = parsedDeparts.filter((item) => item.pk === depart)[0]
    .fields;
  modalTitle.innerHTML = depart;
  // img에 max-height도 적용하기
  interDatas[0].innerHTML = `<img src="../../static/${departDict.depart_image}" alt="${depart} logo" style="width: 100%;" />`;
  interDatas[1].innerHTML = depart;
  interDatas[2].innerHTML = departDict.depart_loc;
  interDatas[3].innerHTML = departDict.total_project;
  interDatas[4].innerHTML = departDict.tax_income;
  interDatas[5].innerHTML = departDict.tax_outcome;
  interDatas[6].innerHTML = departDict.depart_desc;
}
