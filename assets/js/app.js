$(document).ready(function () {
  $.ajax({
    url: "/data.json",
    success: function (data) {
      $("#news-container").html(renderCard(data, 0, 9));
      $("#load-more-btn").click(function () {
        $("#news-container").append(renderCard(data, 9, data.length));
        $(this).hide();
      });
    },
  });
});

const renderCard = (data, from, to) => {
  return data
    .map((item, index) => {
      if (index >= from && index < to) {
        return `<div class="col-12 col-lg-4 mt-3">
              <div class="card blog-card rounded-0 border-0 w-100">
                <img
                  src="${item.gambar}"
                  class=""
                  alt="${item.judul}"
                />
                <div class="card-body p-2">
                  <span class="badge text-bg-dark mb-2 rounded-0"
                    >${item.kategori}</span
                  >
                  <h5 class="card-title fw-bold mb-1">
                    ${item.judul}
                  </h5>
                  <span class="text-secondary-emphasis mb-2 d-block text-date"
                    >${item.waktu_upload}</span
                  >
                  <p class="card-text mb-2">
                    ${item.isi}
                  </p>
                  <div class="d-flex w-100 justify-content-end">
                    <a href="#" class="btn btn-base fw-medium"
                      >Selengkapnya</a
                    >
                  </div>
                </div>
              </div>
            </div>`;
      }
    })
    .join("");
};
