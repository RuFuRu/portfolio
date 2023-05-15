function disappearScroll() {
    const scrollFurther = document.querySelector('.scroll-further') as HTMLDivElement;
    const html = document.documentElement;

    const interval = setInterval(() => {
        if(html.scrollTop >= 300) {
            scrollFurther.classList.add("inactive");
            clearInterval(interval);
        }
    },300)
    
}
  
export default disappearScroll;