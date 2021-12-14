const showmodal = () => {

    document.querySelector(".modal-bg").style.visibility = "visible";
}

const hidemodal = () => {

    document.querySelector(".modal-bg").style.visibility = "hidden";
}

const togglecart = () => {

    let visibility = document.querySelector(".cart").style.visibility;

    if (visibility === "hidden") {

        document.querySelector(".cart").style.visibility = "visible";
        visibility = "visible";
    } else {

        document.querySelector(".cart").style.visibility = "hidden";
        visibility = "hidden";
    }
}