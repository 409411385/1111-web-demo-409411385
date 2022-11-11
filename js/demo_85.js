function showpage(index) {
  const p = document.querySelector('.show-classdemo');
  console.log(p);
  switch (index) {
    case 1:
      p.innerHTML = `<iframe src="./demo/w02/" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 2:
      p.innerHTML = `<iframe src="./demo/w03/card_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 3:
      p.innerHTML = `<iframe src="./demo/w05/blog_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 4:
      p.innerHTML = `<iframe src="./demo/w06/blog_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 5:
      p.innerHTML = `<iframe src="./demo/w08/landing_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 5:
      p.innerHTML = `<iframe src="./demo/w08/landing_85.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 6:
      p.innerHTML = `<iframe src="./demo/w09/resume_85.html" style="display:block; border:none; width:100%; height:100%;">
      </iframe>`
      break;
  }
}