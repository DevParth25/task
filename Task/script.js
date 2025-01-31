function toggleSecondarySidebar() {
    const sidebar = document.querySelector('.secondary-sidebar');
    if (sidebar.style.left === "80px") {
        sidebar.style.left = "200px";
    } else {
        sidebar.style.left = "80px";
    }
}
