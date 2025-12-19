const tableRows = document.querySelectorAll("tbody > tr");

tableRows.forEach((tr) => {
	let grade1 = Number(tr.querySelector(`.grade1`).textContent);
	let grade2 = Number(tr.querySelector(`.grade2`).textContent);
	let result = grade1 + grade2;

	let gradeResult = tr.querySelector(`.result`);
	gradeResult.textContent = result;
});

const grades = document.querySelectorAll(".result");

grades.forEach((grade) => {
	if (Number(grade.textContent) >= 70) {
		grade.style.backgroundColor = "blue";
	} else {
		grade.style.backgroundColor = "red";
	}
	grade.style.color = "white";
});
