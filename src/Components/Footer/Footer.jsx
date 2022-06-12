import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Biz bilan ijtimoiy tarmoqlar orqali bog'lanish:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/abdurashidAlisherivich"
              class="me-4 text-reset"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://t.me/Abdurashid_Developer" class="me-4 text-reset">
              <i class="fab fa-telegram"></i>
            </a>
            <a
              href="https://www.instagram.com/abdurashid.nabijonov"
              class="me-4 text-reset"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abdurashid-nabijonov/"
              class="me-4 text-reset"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Abdurashid-Alisherivich"
              class="me-4 text-reset"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>ComFlat
                </h6>
                <p>
                  Assalomu Alaykum qadrdon! Siz bu sahifa orqali o'zingiz orzu
                  qilgan uy-joylarni sotib olishingiz yoki shinam xonadonlarni
                  ijarag olishingiz mumkin.
                  Agar Sizga yordam bera olgan bolsak juda ham hursandmiz(:
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Xizmatlar</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Uy-Joy Sotish
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Ijarag qo'yish
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Ijaraga olish
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Foydali linklar</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Aloqa</h6>
                <p>
                  <i class="fas fa-home me-3"></i> Fergana, Bagdod
                </p>
                <p>
                  <i class="fab fa-telegram me-3"></i>
                  <a href="https://t.me/Abdurashid_Developer">Abdurashid</a>
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 998 90 366 10 56
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i> + 998 90 536 12 02
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          © 2022 ComFlat:
          <a class="text-reset fw-bold" href="https://www.facebook.com/abdurashidAlisherivich">
            Team
          </a>
        </div>
      </footer>
    </div>
  );
}
