// Fungsi untuk menambah tugas baru ke dalam daftar
function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Masukkan Teks Tugas Terlebih Dahulu.");
        return;
    }


    // Buat elemen tugas baru
    const li = document.createElement("li");
    li.textContent = todoText;

    // Tambahkan event untuk menandai sebagai selesai
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Tombol hapus untuk menghapus tugas
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah event selesai
        li.remove();
    });

    // Tambahkan tombol hapus ke dalam elemen tugas
    li.appendChild(deleteBtn)

    // Tambahkan elemen tugas ke dalam daftar
    document.getElementById("todoList").appendChild(li);

    // Kosongkan input setelah menambah tugas
    todoInput.value = "";
}