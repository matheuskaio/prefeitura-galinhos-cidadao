function menuResponsivo() {
    const menu = document.querySelector(".menu-dashboard");
    const btn = document.querySelector(".btn-mobile");

    const mostrarMenu = () => {
        menu.classList.toggle("ativo");
    };

    btn.addEventListener("click", mostrarMenu);
}
menuResponsivo();

function dropDown() {
    const dropdownMenus = document.querySelectorAll("[data-dropdow]");

    dropdownMenus.forEach((menu) => {
        ["touchstart", "click"].forEach((userEvent) => {
            menu.addEventListener("click", handleClick);
        });
    });

    function handleClick(e) {
        this.classList.add("active");

        outsideClick(this, () => {
            this.classList.remove("active");
        });
    }

    function outsideClick(element, callback) {
        const html = document.documentElement;
        const outside = "data-outside";

        if (!element.hasAttribute(outside)) {
            html.addEventListener("click", handleOutsideClick);
            element.setAttribute(outside, "");
        }

        function handleOutsideClick(e) {
            if (!element.contains(e.target)) {
                element.removeAttribute(outside);
                html.removeEventListener("click", handleOutsideClick);

                callback();
            }
        }
    }
}
dropDown();

function initModal() {
    const btnAbrir = document.querySelectorAll("[data-modal]");
    const btnFechar = document.querySelector(".fecharModal");
    const containerModal = document.querySelector(".modal_container");

    if (btnFechar && btnAbrir && containerModal) {
        function toggleModal(e) {
            e.preventDefault();
            containerModal.classList.toggle("ativo");
        }

        function clickForaModal(e) {
            if (e.target === this) toggleModal(e);
        }

        btnAbrir.forEach((btn) => {
            btn.addEventListener("click", toggleModal);
        });
        btnFechar.addEventListener("click", toggleModal);
        containerModal.addEventListener("click", clickForaModal);
    }
}
initModal();