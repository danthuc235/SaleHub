function updatePadding() {

    const wrappers =
        document.querySelectorAll(".blog-wrapper");

    wrappers.forEach(wrapper => {

        const card =
            wrapper.querySelector(".blog-card");

        const column =
            wrapper.closest(".blog-column");

        if (!card || !column) return;

        const wrapperHeight =
            wrapper.getBoundingClientRect().height;

        const cardHeight =
            card.getBoundingClientRect().height;

        const topValue = wrapperHeight * 0.8;

        const overflow = Math.max(
            (topValue + cardHeight) - wrapperHeight,
            0
        );

        column.style.paddingBottom = `${overflow}px`;

    });

}

window.addEventListener("load", updatePadding);

window.addEventListener("resize", updatePadding);



//nut dauTrang
const backToTop =
    document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});