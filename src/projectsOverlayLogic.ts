function projectsOverlayLogic() {
    // const projectsOverlays = document.querySelectorAll('.projects-overlay') as NodeListOf<HTMLDivElement>;
    const projectsImages = document.querySelectorAll('.projects-grid-item-container > img') as NodeListOf<HTMLImageElement>;
    console.log(projectsImages);

    projectsImages.forEach(projectsImage => {
        const projectsOverlay = projectsImage.parentElement!.querySelector('.projects-overlay') as HTMLDivElement;

        projectsImage.addEventListener('mouseover', () => {
            projectsOverlay.setAttribute("style" , "display: block");
        })
        
        projectsImage.addEventListener('mouseout', () => {
            projectsOverlay.removeAttribute("style");
        })
    })
}

export default projectsOverlayLogic;