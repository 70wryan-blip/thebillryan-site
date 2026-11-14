// thebillryan.com: menu, print button, and the contact forms.
(function () {
  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-print]").forEach(function (b) {
    b.addEventListener("click", function () {
      try { window.print(); } catch (e) { /* printing blocked in previews */ }
    });
  });

  // Forms post to /api/contact on the live site. Anywhere else (a preview), they explain instead.
  var live = /(^|\.)thebillryan\.com$|\.vercel\.app$/.test(location.hostname);
  document.querySelectorAll(".contact-form").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var status = form.querySelector(".form-status");
      status.className = "form-status";
      var missing = Array.prototype.filter.call(form.querySelectorAll("[required]"), function (el) { return !el.value.trim(); });
      if (missing.length) {
        status.textContent = "Please fill in: " + missing.map(function (el) { return form.querySelector('label[for="' + el.id + '"]').textContent.replace(" optional", ""); }).join(", ") + ".";
        status.classList.add("err");
        missing[0].focus();
        return;
      }
      var data = { kind: form.getAttribute("data-kind") };
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      if (!live) {
        status.textContent = "This is a preview, so nothing was sent. On thebillryan.com this form goes straight to Bill.";
        return;
      }
      var submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;
      fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(String(r.status)); })
        .then(function () { form.reset(); status.textContent = "Thank you. Bill will reply by email."; status.classList.add("ok"); })
        .catch(function () { status.textContent = "That did not send. Please try again in a minute."; status.classList.add("err"); })
        .then(function () { submit.disabled = false; });
    });
  });
})();
