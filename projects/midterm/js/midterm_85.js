function showpage(index) {
  const p = document.querySelector('.show-classdemo');
  console.log(p);
  switch (index) {
    case 1:
      p.innerHTML = `<iframe src="./resume_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 2:
      p.innerHTML = `<iframe src="./works_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 3:
      p.innerHTML = `<iframe src="./learning_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 4:
      p.innerHTML = `<iframe src="../../demo_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
  }
}