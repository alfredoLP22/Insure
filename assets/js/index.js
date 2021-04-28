document.addEventListener("DOMContentLoaded",()=>{
    let $nav_open = document.querySelector(".nav-open"),
    $nav_close = document.querySelector(".nav-close"),
    $nav_links = document.querySelector(".nav-links");

    $nav_close.style.display = "none";
    $nav_open.addEventListener("click",()=>{
        if(!$nav_links.classList.contains("nav-links-open")){
            $nav_links.classList.add("nav-links-open");
            $nav_open.style.display = "none";
            $nav_close.style.display = "block";
        }
    });
    $nav_close.addEventListener("click",()=>{
        if($nav_links.classList.contains("nav-links-open")){
            $nav_links.classList.remove("nav-links-open");
            $nav_open.style.display = "block";
            $nav_close.style.display = "none";
        }
    });

});