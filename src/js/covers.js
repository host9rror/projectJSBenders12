const covers =
    [{
        mobile:'/src/img/covers/project-1.png', desktop:'/src/img/covers/project-1@2x.png',description:'project 1'},
        {mobile:'/src/img/covers/project-2.png', desktop:'/src/img/covers/project-2@2x.png',description:'project 2'},
        {mobile:'/src/img/covers/project-3.png', desktop:'/src/img/covers/project-3@2x.png',description:'project 3'},
      { mobile:'/src/img/covers/project-4.png', desktop:'/src/img/covers/project-4@2x.png',description:'project 4'},
        {mobile:'/src/img/covers/project-5.png', desktop:'/src/img/covers/project-5@2x.png',description:'project 5'},
      { mobile: '/src/img/covers/project-6.png', desktop:'/src/img/covers/project-6@2x.png',description:'project 6'},
        {mobile:'/src/img/covers/project-7.png', desktop:'/src/img/covers/project-7@2x.png',description:'project 7'},
        {mobile:'/src/img/covers/project-8.png', desktop:'/src/img/covers/project-8@2x.png',description:'project 8'},
        {mobile:'/src/img/covers/project-9.png', desktop:'/src/img/covers/project-9@2x.png',description:'project 9'},
        {mobile:'/src/img/covers/project-10.png', desktop:'/src/img/covers/project-10@2x.png',description:'project 10'},
        {mobile:'/src/img/covers/project-11.png', desktop:'/src/img/covers/project-11@2x.png',description:'project 11'},
        {mobile:'/src/img/covers/project-12.png', desktop:'/src/img/covers/project-12@2x.png',description:'project 12'}]
console.log(covers);
function coversItems(arr) {
    return arr.map(({mobile, desktop, description}) =>
         `<li class="cover-item">
          <a class="covers-link" href="${mobile}" data-desktop="${desktop}">
            <img class="covers-image" src="${mobile}" alt="${description}" width="" />
          </a>
        </li>`
    ).join('')
}
coversProjects.innerHTML = coversItems(covers);

