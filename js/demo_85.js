function showpage(index) {
  const p = document.querySelector('.show-classdemo');
  console.log(p);
  switch (index) {
    case 1:
      p.innerHTML = `<iframe src="/demo/w11/portfolio/index.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 2:
      p.innerHTML = `<iframe src="/demo/w12/portfolio/index.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 3:
      p.innerHTML = `<iframe src="/demo/w13/portfolio/index.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 4:
      p.innerHTML = `<iframe src="/demo/w14/portfolio/index.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 5:
      p.innerHTML = `<iframe src="/demo/w15/portfolio/index.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
    case 6:
      p.innerHTML = `<iframe src="/demo/w16/portfolio/index.html" style="display:block; border:none; width:100%; height:100%;"></iframe>`
      break;
  }
}