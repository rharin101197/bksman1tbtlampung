/* =========================================================
   BK SMA N 1 TULANG BAWANG TENGAH — INTERAKSI & RENDER
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const icon = (name, extra) => `<svg class="lucide" data-lucide="${name}"${extra ? " " + extra : ""}></svg>`;

  /* =========================================================
     RENDER: LAYANAN
     ========================================================= */
  function renderServices() {
    const wrap = $("#services-grid");
    if (!wrap) return;
    wrap.innerHTML = SERVICES.map((s) => `
      <div class="service-card reveal">
        <div class="ic">${icon(s.icon)}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join("");
  }

  /* =========================================================
     RENDER: PROGRAM (timeline)
     ========================================================= */
  function renderPrograms() {
    const wrap = $("#program-list");
    if (!wrap) return;
    wrap.innerHTML = PROGRAMS.map((p) => `
      <div class="program-item reveal">
        <div class="program-dot">${icon(p.icon)}</div>
        <div class="program-body">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </div>
    `).join("");
  }

  /* =========================================================
     RENDER: TIM BK
     ========================================================= */
  function renderTeam() {
    const wrap = $("#team-grid");
    if (!wrap) return;
    wrap.innerHTML = COUNSELORS.map((c, i) => `
      <div class="team-card reveal">
        <div class="team-photo">
          <img src="${c.photo}" alt="Foto ${c.name}, ${c.role}" loading="lazy" width="400" height="500">
        </div>
        <div class="team-info">
          <h3>${c.name}</h3>
          <p class="role">${c.role}</p>
          <button class="btn btn-outline btn-sm" data-team-index="${i}">Lihat Profil</button>
        </div>
      </div>
    `).join("");

    $all("[data-team-index]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => openTeamModal(Number(btn.dataset.teamIndex)));
    });
  }

  function openTeamModal(index) {
    const c = COUNSELORS[index];
    if (!c) return;
    const overlay = $("#team-modal");
    $("#team-modal-photo", overlay).src = c.photo;
    $("#team-modal-photo", overlay).alt = "Foto " + c.name;
    $("#team-modal-name", overlay).textContent = c.name;
    $("#team-modal-role", overlay).textContent = c.role;
    $("#team-modal-note", overlay).textContent = c.note;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(overlay) {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  /* =========================================================
     RENDER: BERITA
     ========================================================= */
  function renderNews() {
    const wrap = $("#news-grid");
    if (!wrap) return;
    wrap.innerHTML = NEWS.map((n) => `
      <article class="news-card reveal">
        <div class="news-thumb" style="background:${randomTint()}">
          <span class="cat-badge">${n.category}</span>
          ${icon(n.icon)}
        </div>
        <div class="news-body">
          <div class="news-date">${n.date}</div>
          <h3>${n.title}</h3>
          <p>${n.summary}</p>
          <button class="news-link" type="button" data-news-more>
            Baca Selengkapnya ${icon("arrow-right")}
          </button>
        </div>
      </article>
    `).join("");

    $all("[data-news-more]", wrap).forEach((btn) => {
      btn.addEventListener("click", () => {
        alert("Artikel lengkap akan segera tersedia. Halaman berita ini dapat dikembangkan oleh admin BK.");
      });
    });
  }

  const TINTS = ["#EAF4FF", "#E7F0FB", "#EFF6FF"];
  function randomTint() {
    return TINTS[Math.floor(Math.random() * TINTS.length)];
  }

  /* =========================================================
     RENDER: FAQ
     ========================================================= */
  function renderFaq() {
    const wrap = $("#faq-list");
    if (!wrap) return;
    wrap.innerHTML = FAQS.map((f, i) => `
      <div class="faq-item reveal" data-faq>
        <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">
          <span>${f.q}</span>
          ${icon("chevron-down", 'class="chev"')}
        </button>
        <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
          <div class="faq-a-inner">${f.a}</div>
        </div>
      </div>
    `).join("");

    $all("[data-faq]", wrap).forEach((item) => {
      const btn = $(".faq-q", item);
      const ans = $(".faq-a", item);
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        // close all others
        $all("[data-faq]", wrap).forEach((other) => {
          other.classList.remove("open");
          $(".faq-q", other).setAttribute("aria-expanded", "false");
          $(".faq-a", other).style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
          ans.style.maxHeight = ans.scrollHeight + "px";
        }
      });
    });
  }

  /* =========================================================
     NAVBAR: scroll shrink + active link
     ========================================================= */
  function initNavbar() {
    const nav = $("#navbar");
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 30) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = $all("section[id]");
    const navAnchors = $all('.nav-links a[href^="#"], .mobile-panel nav a[href^="#"]');
    if (!sections.length || !navAnchors.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navAnchors.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  function initMobileMenu() {
    const panel = $("#mobile-panel");
    const openBtn = $("#hamburger-btn");
    const closeBtn = $("#mobile-close-btn");
    const backdrop = $(".mobile-panel__backdrop", panel);
    if (!panel || !openBtn) return;

    const open = () => {
      panel.classList.add("open");
      document.body.style.overflow = "hidden";
      openBtn.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      panel.classList.remove("open");
      document.body.style.overflow = "";
      openBtn.setAttribute("aria-expanded", "false");
    };

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    $all("a", panel).forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* =========================================================
     MODALS (generic close handlers)
     ========================================================= */
  function initModals() {
    $all(".modal-overlay").forEach((overlay) => {
      $all("[data-modal-close]", overlay).forEach((btn) =>
        btn.addEventListener("click", () => closeModal(overlay))
      );
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal(overlay);
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        $all(".modal-overlay.open").forEach((o) => closeModal(o));
      }
    });
  }

  /* =========================================================
     BACK TO TOP
     ========================================================= */
  function initBackToTop() {
    const btn = $("#back-to-top");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      () => {
        btn.classList.toggle("show", window.scrollY > 480);
      },
      { passive: true }
    );
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */
  function initReveal() {
    const items = $all(".reveal");
    if (!items.length) return;
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => obs.observe(el));
  }

  /* =========================================================
     FOOTER YEAR
     ========================================================= */
  function initYear() {
    const el = $("#current-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* =========================================================
     INIT
     ========================================================= */
  document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    renderPrograms();
    renderTeam();
    renderNews();
    renderFaq();
    initNavbar();
    initMobileMenu();
    initModals();
    initBackToTop();
    initYear();

    if (window.lucide) window.lucide.createIcons();

    // Reveal must run after dynamic content + icons are in the DOM
    initReveal();
  });
})();
