// Ambil elemen
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Fungsi untuk membuka sidebar
function openSidebar() {
    sidebar.classList.add('active'); // Tambahkan class active ke sidebar
    sidebarOverlay.classList.add('active'); // Tampilkan overlay
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
    sidebar.classList.remove('active'); // Hapus class active dari sidebar
    sidebarOverlay.classList.remove('active'); // Sembunyikan overlay
}

// Event listener untuk membuka sidebar
menuToggle.addEventListener('click', openSidebar);

// Event listener untuk menutup sidebar ketika overlay diklik
sidebarOverlay.addEventListener('click', closeSidebar);
