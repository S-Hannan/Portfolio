let listArr = document.querySelectorAll('.list')
listArr.forEach((list)=>{

})

listArr.forEach((list) => {
    list.addEventListener('click', () => {
        if (list.id === 'home') {

            window.scrollBy(0, 1783 - window.scrollY);

        } else if (list.id === 'about') {
            window.scrollBy(0, 1415 - window.scrollY);

        } else if (list.id === 'resume') {
            window.scrollBy(0, 1000 - window.scrollY);//457

        } else if (list.id === 'projects') {
            window.scrollBy(0, 672 - window.scrollY);//1880
        }
    });
});
window.addEventListener('scroll',()=>{
    console.log(scrollY)
})