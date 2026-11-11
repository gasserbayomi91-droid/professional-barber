"use strict";

const ADMIN_HASH = "3756690388a70f9271d8b17364973cc6f7059cee67c547db0204b5c00f4488f8";
const DEF = { wallet: "01208549411", phone: "01208549411", trialDays: 7, plans: [{ id: "m", days: 30, price: 400 }, { id: "h", days: 180, price: 650 }, { id: "y", days: 365, price: 1000 }] };

const K = {
    app: ["حلاق بروفيشنال", "Pro Barber"], lang: ["English", "العربية"],
    tag: ["احجز دورك من بيتك .. من غير زحمة", "Book your turn from home. No crowds."],
    asBarber: ["دخول كحلاق", "Sign in as barber"], asClient: ["دخول كعميل", "Sign in as client"], asAdmin: ["لوحة الأدمن", "Admin panel"],
    back: ["رجوع", "Back"], logout: ["خروج", "Log out"], name: ["الاسم", "Name"], phone: ["رقم الموبايل", "Phone"],
    pass: ["كلمة المرور", "Password"], confirmPass: ["تأكيد كلمة المرور", "Confirm Password"],
    create: ["إنشاء حساب جديد", "Create account"],
    wrongRole: ["هذا الحساب مسجل بدور مختلف", "This account has a different role"], fill: ["املأ كل الحقول", "Fill all fields"],
    notRegistered: ["يرجى تسجيل حساب أولاً", "Please register an account first"],
    wrongPass: ["كلمة المرور غير صحيحة", "Incorrect password"],
    passMismatch: ["كلمة المرور غير متطابقة", "Passwords do not match"],
    chooseBarber: ["اختر الحلاق المناسب", "Choose a barber"], noBarbers: ["لا يوجد حلاقون متاحون حاليا", "No barbers available yet"],
    address: ["العنوان", "Address"], map: ["عرض الموقع على الخريطة", "Open in maps"], pickCut: ["اختر الحلاقة", "Choose a haircut"],
    extras: ["إضافات", "Extras"], photo: ["صورة للحلاقة المطلوبة", "Reference photo"], desc: ["وصف الحلاقة", "Describe the haircut"],
    total: ["الإجمالي", "Total"], ok: ["موافق وحجز الدور", "Confirm & book"], egp: ["جنيه", "EGP"],
    myTurn: ["دورك", "Your ticket"], ahead: ["قبلك", "Ahead of you"], wait: ["الانتظار المتوقع", "Estimated wait"], min: ["دقيقة", "min"],
    youNext: ["دورك الآن!", "You are up!"], cancel: ["إلغاء الحجز", "Cancel booking"], pickFirst: ["اختر حلاقة أولا", "Pick a haircut first"], booked: ["تم الحجز", "Booked"],
    feat: ["مميزات الاشتراك", "Subscription benefits"],
    f1: ["زباين من كل مكان", "Customers from everywhere"], f2: ["إضافة فروع لمحلك", "Add more branches"], f3: ["الزبون في بيته ومستني دوره، مفيش زحمة", "Customers wait at home, no crowding"], f4: ["نهاية مشاكل مين جه قبل مين", "No more who-came-first arguments"],
    trial: ["تجربة مجانية", "Free trial"], days: ["يوم", "days"], free: ["مجانا", "Free"], start: ["ابدأ الآن", "Start now"],
    p_m: ["اشتراك شهري", "Monthly"], p_h: ["اشتراك 6 شهور", "6 months"], p_y: ["اشتراك سنوي", "Yearly"], choose: ["اختيار", "Choose"],
    payTo: ["حول المبلغ إلى رقم المحفظة", "Send the amount to wallet"], copy: ["نسخ الرقم", "Copy number"], copied: ["تم النسخ", "Copied"],
    proof: ["صورة إثبات الدفع", "Payment proof"], send: ["إرسال الطلب", "Submit"],
    pending: ["جاري مراجعة طلبك، عادة خلال 12 أو 24 ساعة", "Your request is under review, usually within 12–24 hours"],
    rejected: ["تم رفض الطلب، تواصل مع الدعم", "Request rejected, contact support"], expired: ["انتهى اشتراكك، جدده من الأسفل", "Your subscription ended, renew below"],
    support: ["الدعم والتواصل مع منشئ الموقع", "Support"], wa: ["واتساب", "WhatsApp"], call: ["اتصال", "Call"],
    tShop: ["المحل", "Shop"], tServ: ["الحلاقات", "Services"], tQ: ["قائمة الانتظار", "Queue"],
    shop: ["اسم المحل", "Shop name"], save: ["حفظ", "Save"], saved: ["تم الحفظ", "Saved"],
    title: ["اسم الحلاقة", "Haircut name"], price: ["السعر", "Price"], add: ["إضافة", "Add"], del: ["حذف", "Delete"],
    exName: ["اسم الإضافة (بخار، كريم...)", "Extra name (steam, cream...)"], noQ: ["لا يوجد زباين في الانتظار", "Queue is empty"],
    duration: ["مدة الحلاقة (دقيقة)", "Cut duration (min)"], startCut: ["ابدأ", "Start"], done: ["تم", "Done"], serving: ["جاري الحلاقة", "In chair"], waiting: ["منتظر", "Waiting"],
    expiresOn: ["ينتهي في", "Expires"],
    user: ["اليوزر", "Username"], passField: ["الباسورد", "Password"], login: ["تسجيل دخول", "Sign in"], badLogin: ["بيانات الدخول غير صحيحة", "Wrong credentials"],
    aReq: ["الحلاقون", "Barbers"], aSet: ["الإعدادات", "Settings"], approve: ["فتح الاشتراك", "Activate"], reject: ["رفض", "Reject"], revoke: ["إلغاء الاشتراك", "Cancel sub"],
    noReq: ["لا يوجد حلاقون", "No barbers"], wallet: ["رقم محفظة الدفع", "Payment wallet"], contact: ["رقم التواصل", "Contact number"], trialDays: ["أيام التجربة المجانية", "Free trial days"],
    plan: ["الباقة", "Plan"], status: ["الحالة", "Status"], noProof: ["لم يرفق إثبات", "No proof"],
    s_active: ["مفعل", "Active"], s_pending: ["قيد المراجعة", "Pending"], s_rejected: ["مرفوض", "Rejected"], s_cancelled: ["ملغي", "Cancelled"], s_none: ["بدون اشتراك", "No sub"],
    confirmDel: ["متأكد؟", "Sure?"], search: ["ابحث باسم الحلاق أو المنطقة", "Search barber or area"], closed: ["مغلق الآن", "Closed now"], openNow: ["مفتوح", "Open"], setOpen: ["فتح المحل", "Open shop"], setClosed: ["إغلاق المحل", "Close shop"], tStats: ["الإحصائيات", "Stats"], today: ["زباين اليوم", "Today"], income: ["إيراد اليوم", "Today's income"], allC: ["كل الزباين", "All customers"], allI: ["كل الإيراد", "Total income"], rate: ["قيّم حلاقتك", "Rate your cut"], rating: ["التقييم", "Rating"], inQ: ["في الانتظار", "waiting"], yourTurnSoon: ["دورك قرب! ابدأ تتحرك", "Your turn is near! Get going"], thanks: ["شكرا لتقييمك", "Thanks for rating"], noRate: ["جديد", "New"], aCl: ["العملاء", "Clients"], rev: ["إيراد الاشتراكات", "Subscription revenue"], blocked: ["محظور", "Blocked"], blockedMsg: ["تم حظر هذا الحساب", "This account is blocked"], bookings: ["حجز", "bookings"], block: ["حظر", "Block"], unblock: ["فك الحظر", "Unblock"], custs: ["زباين الحلاق", "Barber's customers"], notice: ["إعلان يظهر لكل المستخدمين", "Announcement for all users"]
};

let lang = localStorage_get("lang") || "ar";
function localStorage_get(k) { try { return localStorage.getItem(k) } catch (e) { return null } }
function localStorage_set(k, v) { try { localStorage.setItem(k, v) } catch (e) { } }

const T = k => (K[k] ? K[k][lang === "ar" ? 0 : 1] : k);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = s => document.querySelector(s);

function loadDB() {
    return {
        settings: JSON.parse(localStorage_get("pb_settings") || "{}"),
        accounts: JSON.parse(localStorage_get("pb_accounts") || "{}"),
        barbers: JSON.parse(localStorage_get("pb_barbers") || "{}"),
        services: JSON.parse(localStorage_get("pb_services") || "{}"),
        queue: JSON.parse(localStorage_get("pb_queue") || "{}")
    };
}

const D = loadDB();
function saveCol(col) { localStorage_set("pb_" + col, JSON.stringify(D[col])); }

const S = {
    view: "home", role: null, uid: null, mode: "login",
    adminOk: false, tab: "shop", aTab: "req", barberId: null, selSvc: null, selEx: {}, desc: "", img: "", pick: null, proof: "", ex: { n: "", p: "" }, sv: { t: "", d: "", p: "", i: "" }, err: "", search: "", alerted: {}
};

const cfg = () => Object.assign({}, DEF, D.settings.main || {});
const now = () => Date.now();
const isActive = b => b && b.status === "active" && b.expires > now();
const fmtDate = t => new Date(t).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB");

function toast(m) { const e = document.createElement("div"); e.className = "toast"; e.textContent = m; document.body.appendChild(e); setTimeout(() => e.remove(), 2200) }
function go(v, x) { S.view = v; S.err = ""; if (x) Object.assign(S, x); render(); window.scrollTo(0, 0) }
function toggleLang() { lang = lang === "ar" ? "en" : "ar"; localStorage_set("lang", lang); render() }
function toggleTheme() { const d = document.documentElement, c = d.dataset.theme || "dark"; d.dataset.theme = c === "dark" ? "light" : "dark" }
async function sha(s) { const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)); return Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2, "0")).join("") }

async function upd(col, id, p) {
    const cur = D[col][id] || {};
    D[col][id] = Object.assign({}, cur, p);
    saveCol(col);
}
async function rm(col, id) { delete D[col][id]; saveCol(col); }

function pickImage(file, cb) {
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
        const im = new Image();
        im.onload = () => {
            const m = 640, k = Math.min(1, m / Math.max(im.width, im.height));
            const c = document.createElement("canvas");
            c.width = Math.round(im.width * k); c.height = Math.round(im.height * k);
            c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
            cb(c.toDataURL("image/jpeg", 0.6))
        };
        im.src = r.result
    };
    r.readAsDataURL(file)
}

function copyNum(n) {
    const done = () => toast(T("copied"));
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(n).then(done, () => fb()) } else fb();
    function fb() { const t = document.createElement("textarea"); t.value = n; document.body.appendChild(t); t.select(); try { document.execCommand("copy") } catch (e) { } t.remove(); done() }
}
function waLink(n) { return "https://wa.me/2" + String(n).replace(/\D/g, "") }
function supportBox() { const c = cfg(); return `<div class="card"><h3>🛟 ${T("support")}</h3><div class="row"><a class="btn green" target="_blank" rel="noopener" href="${waLink(c.phone)}">💬 ${T("wa")}</a><a class="btn alt" href="tel:${esc(c.phone)}">📞 ${T("call")}</a><button class="alt" onclick="copyNum('${esc(c.phone)}')">📋 ${esc(c.phone)}</button></div></div>` }

/* ---------- auth ---------- */
async function enter() {
    const ph = $("#fp") ? $("#fp").value.trim() : "";
    const nm = $("#fn") ? $("#fn").value.trim() : "";
    const pw = $("#fpass") ? $("#fpass").value.trim() : "";
    const cpw = $("#fcpass") ? $("#fcpass").value.trim() : "";

    if (!ph || !pw) { S.err = T("fill"); return render(); }

    let accEntry = Object.entries(D.accounts).find(([, a]) => a.phone === ph);
    
    if (S.mode === "login") {
        if (!accEntry) {
            S.err = T("notRegistered");
            return render();
        }
        let [uid, a] = accEntry;
        if (a.blocked) { S.err = T("blockedMsg"); return render(); }
        if (a.role !== S.role) { S.err = T("wrongRole"); return render(); }
        if (a.pass !== pw) { S.err = T("wrongPass"); return render(); }
        S.uid = uid;
    } else {
        if (!nm || !ph || !pw || !cpw) { S.err = T("fill"); return render(); }
        if (pw !== cpw) { S.err = T("passMismatch"); return render(); }
        if (accEntry) {
            S.err = "هذا الرقم مسجل بالفعل، اختر تسجيل الدخول";
            return render();
        }
        S.uid = "u_" + now().toString(36) + Math.random().toString(36).slice(2, 5);
        let a = { role: S.role, name: nm, phone: ph, pass: pw };
        await upd("accounts", S.uid, a);
    }
    
    go(S.role === "barber" ? "barber" : "client");
}

async function adminLogin() {
    const h = await sha(($("#au").value.trim()) + ":" + $("#ap").value);
    if (h === ADMIN_HASH) { S.adminOk = true; go("admin") } else { S.err = T("badLogin"); render() }
}

/* ---------- client ---------- */
const myTickets = () => Object.entries(D.queue).filter(([, q]) => q.clientId === S.uid && q.status !== "done").map(([id, q]) => Object.assign({ id }, q));
function ahead(t) { const l = Object.values(D.queue).filter(q => q.barberId === t.barberId && q.status !== "done" && q.num < t.num); return { n: l.length, m: l.reduce((s, q) => s + (Number(q.mins) || 20), 0) } }

function ticketCard(t) {
    const b = D.barbers[t.barberId] || {}, a = ahead(t);
    return `<div class="card"><h3>${esc(b.shop)}</h3><div class="mu">${T("myTurn")}</div><div class="num">#${t.num}</div>
  ${t.status === "serving" || a.n === 0 ? `<p style="text-align:center;font-weight:800;color:var(--ok)">${T("youNext")}</p>` : `<div class="row" style="text-align:center"><div><b>${a.n}</b><div class="mu">${T("ahead")}</div></div><div><b>${a.m}</b><div class="mu">${T("wait")} (${T("min")})</div></div></div>`}
  <p class="mu">${esc(t.svcTitle)} · ${t.price} ${T("egp")}</p><button class="alt sm" onclick="cancelTicket('${t.id}')">${T("cancel")}</button></div>`
}
async function cancelTicket(id) { if (confirm(T("confirmDel"))) { await rm("queue", id); toast(T("saved")); render(); } }

function viewClient() {
    const tk = myTickets().map(ticketCard).join("");
    const sq = S.search.trim().toLowerCase();
    const bs = Object.entries(D.barbers).filter(([, b]) => isActive(b) && b.shop && (!sq || (b.shop + " " + b.address).toLowerCase().includes(sq)));
    return `<h2>${T("chooseBarber")}</h2>${tk}${rateCards()}<input placeholder="🔎 ${T("search")}" value="${esc(S.search)}" onchange="S.search=this.value;render()">${bs.length ? bs.map(([id, b]) => barberCard(id, b)).join("") : `<div class="card mu">${T("noBarbers")}</div>`}`
}

function openBarber(id) { go("book", { barberId: id, selSvc: null, selEx: {}, desc: "", img: "" }) }
function avgRate(id) { const r = Object.values(D.queue).filter(q => q.barberId === id && q.rating); return r.length ? { a: (r.reduce((s, q) => s + q.rating, 0) / r.length).toFixed(1), n: r.length } : null }

function barberCard(id, b) {
    const r = avgRate(id), w = Object.values(D.queue).filter(q => q.barberId === id && q.status !== "done"), m = w.reduce((s, q) => s + (Number(q.mins) || 20), 0), op = b.open !== false;
    return `<div class="card"><div class="row"><h3 style="flex:3">✂️ ${esc(b.shop)}</h3><span class="badge ${op ? "ok" : "er"}" style="flex:none">${op ? T("openNow") : T("closed")}</span></div><div class="mu">📍 ${esc(b.address)}</div><p>⭐ ${r ? r.a + " (" + r.n + ")" : T("noRate")} · 👥 ${w.length} ${T("inQ")} · ⏱ ~${m} ${T("min")}</p><button ${op ? "" : "disabled"} onclick="openBarber('${id}')">${T("choose")}</button></div>`
}

function rateCards() {
    return Object.entries(D.queue).filter(([, q]) => q.clientId === S.uid && q.status === "done" && !q.rating).map(([id, q]) => `<div class="card"><h3>⭐ ${T("rate")}</h3><div class="mu">${esc((D.barbers[q.barberId] || {}).shop)} · ${esc(q.svcTitle)}</div><div class="stars">${[1, 2, 3, 4, 5].map(n => `<span onclick="rate('${id}',${n})">★</span>`).join("")}</div></div>`).join("")
}
async function rate(id, n) { await upd("queue", id, { rating: n }); toast(T("thanks")); render(); }

function viewBook() {
    const b = D.barbers[S.barberId]; if (!b) return `<button onclick="go('client')">${T("back")}</button>`;
    const svs = Object.entries(D.services).filter(([, s]) => s.barberId === S.barberId);
    const ex = b.extras || []; const sv = S.selSvc && D.services[S.selSvc];
    let tot = sv ? Number(sv.price) : 0; ex.forEach((e, i) => { if (S.selEx[i]) tot += Number(e.p) });
    return `<button class="alt sm" onclick="go('client')">← ${T("back")}</button><div class="card" style="margin-top:10px"><h2>${esc(b.shop)}</h2><div>📍 ${esc(b.address)}</div><a class="btn alt sm" style="margin-top:8px" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address + " " + b.shop)}">🗺️ ${T("map")}</a></div>
  <div class="card"><h3>${T("pickCut")}</h3>${svs.map(([id, s]) => `<div class="opt ${S.selSvc === id ? "on" : ""}" onclick="selSvc('${id}')">${s.img ? `<img src="${esc(s.img)}" alt="" style="width:62px;height:62px;object-fit:cover;border-radius:10px">` : ""}<div class="grow"><b>${esc(s.title)}</b><div class="mu">${esc(s.desc)}</div></div><b>${esc(s.price)} ${T("egp")}</b></div>`).join("") || `<div class="mu">—</div>`}
  ${ex.length ? `<h3 style="margin-top:14px">${T("extras")}</h3>${ex.map((e, i) => `<div class="opt ${S.selEx[i] ? "on" : ""}" onclick="selEx(${i})"><div class="grow">${esc(e.n)}</div><b>+${esc(e.p)} ${T("egp")}</b></div>`).join("")}` : ""}
  <label>${T("photo")}</label><input type="file" accept="image/*" onchange="pickImage(this.files[0],d=>{S.img=d;render()})">${S.img ? `<img class="pic" src="${esc(S.img)}" alt="">` : ""}
  <label>${T("desc")}</label><textarea rows="3" oninput="S.desc=this.value">${esc(S.desc)}</textarea>
  <h3>${T("total")}: ${tot} ${T("egp")}</h3><button class="big" onclick="book(${tot})">${T("ok")}</button></div>`
}
function selSvc(id) { S.selSvc = id; render() }
function selEx(i) { S.selEx[i] = !S.selEx[i]; render() }

async function book(tot) {
    const sv = D.services[S.selSvc]; if (!sv) { return toast(T("pickFirst")) }
    const b = D.barbers[S.barberId]; const ex = (b.extras || []).filter((e, i) => S.selEx[i]).map(e => e.n);
    const mx = Object.values(D.queue).filter(q => q.barberId === S.barberId).reduce((m, q) => Math.max(m, q.num || 0), 0);
    const a = D.accounts[S.uid] || {}; const id = "q" + now().toString(36) + Math.random().toString(36).slice(2, 6);
    await upd("queue", id, { barberId: S.barberId, clientId: S.uid, clientName: a.name || "", clientPhone: a.phone || "", svcTitle: sv.title, svcDesc: sv.desc, extras: ex, price: tot, desc: S.desc, img: S.img, num: mx + 1, status: "waiting", mins: 20, ts: now() });
    toast(T("booked")); burst(); go("client")
}

/* ---------- barber ---------- */
function viewBarber() {
    const b = D.barbers[S.uid], c = cfg();
    if (b && b.status === "pending") return `<div class="card"><h2>⏳</h2><p>${T("pending")}</p></div>${supportBox()}`;
    if (isActive(b)) return barberPanel(b);
    if (S.pick) {
        const p = c.plans.find(x => x.id === S.pick); return `<button class="alt sm" onclick="S.pick=null;render()">← ${T("back")}</button><div class="card" style="margin-top:10px"><h2>${T("p_" + p.id)} — ${p.price} ${T("egp")}</h2><p>${T("payTo")}:</p><div class="num" style="font-size:30px;direction:ltr">${esc(c.wallet)}</div><div style="text-align:center;margin:10px"><button class="alt" onclick="copyNum('${esc(c.wallet)}')">📋 ${T("copy")}</button></div>
  <label>${T("proof")}</label><input type="file" accept="image/*" onchange="pickImage(this.files[0],d=>{S.proof=d;render()})">${S.proof ? `<img class="pic" src="${esc(S.proof)}" alt="">` : ""}<button class="big" onclick="sendProof()">${T("send")}</button></div>`
    }
    const note = b && b.status === "rejected" ? `<div class="card" style="border-color:var(--er)">${T("rejected")}</div>` : b && b.status === "active" ? `<div class="card" style="border-color:var(--er)">${T("expired")}</div>` : b && b.status === "cancelled" ? `<div class="card" style="border-color:var(--er)">${T("expired")}</div>` : "";
    return `${note}<div class="card"><h2>⭐ ${T("feat")}</h2><p>✅ ${T("f1")}</p><p>✅ ${T("f2")}</p><p>✅ ${T("f3")}</p><p>✅ ${T("f4")}</p></div>
  ${!(b && b.trialUsed) ? `<div class="card"><h3>🎁 ${T("trial")} — ${c.trialDays} ${T("days")} ${T("free")}</h3><button onclick="startTrial()">${T("start")}</button></div>` : ""}
  ${c.plans.map(p => `<div class="card row"><div><h3>${T("p_" + p.id)}</h3><div class="mu">${p.days} ${T("days")}</div></div><div style="text-align:center"><b style="font-size:22px;color:var(--gd)">${p.price} ${T("egp")}</b></div><div><button onclick="S.pick='${p.id}';S.proof='';render()">${T("choose")}</button></div></div>`).join("")}${supportBox()}`
}

async function startTrial() { const b = D.barbers[S.uid] || {}; if (b.trialUsed) return; const a = D.accounts[S.uid] || {}; await upd("barbers", S.uid, { status: "active", trialUsed: true, expires: now() + cfg().trialDays * 864e5, ownerName: a.name, phone: a.phone, planId: "trial", shop: b.shop || "", address: b.address || "", extras: b.extras || [] }); render(); }
async function sendProof() { if (!S.proof) return toast(T("fill")); const a = D.accounts[S.uid] || {}, b = D.barbers[S.uid] || {}; await upd("barbers", S.uid, { status: "pending", planId: S.pick, proof: S.proof, ownerName: a.name, phone: a.phone, shop: b.shop || "", address: b.address || "", extras: b.extras || [], sentAt: now() }); S.pick = null; S.proof = ""; render() }

function barberPanel(b) {
    const tabs = [["shop", "tShop"], ["serv", "tServ"], ["q", "tQ"], ["st", "tStats"]];
    let h = `<div class="mu" style="margin-bottom:8px">${T("expiresOn")}: ${fmtDate(b.expires)}</div><div class="tabs">${tabs.map(([k, l]) => `<button class="${S.tab === k ? "" : "alt"}" onclick="S.tab='${k}';render()">${T(l)}</button>`).join("")}</div>`;
    if (S.tab === "shop") h += `<div class="card"><label>${T("shop")}</label><input id="bs" value="${esc(b.shop)}"><label>${T("address")}</label><input id="ba" value="${esc(b.address)}"><div class="row"><button onclick="saveShop()">${T("save")}</button><button class="${b.open === false ? "green" : "red"}" onclick="toggleOpen()">${b.open === false ? T("setOpen") : T("setClosed")}</button></div></div>
  <div class="card"><h3>${T("extras")}</h3>${(b.extras || []).map((e, i) => `<div class="opt"><div class="grow">${esc(e.n)}</div><b>${esc(e.p)} ${T("egp")}</b><button class="red sm" onclick="delEx(${i})">${T("del")}</button></div>`).join("")}
  <div class="row"><input placeholder="${T("exName")}" value="${esc(S.ex.n)}" oninput="S.ex.n=this.value"><input type="number" min="0" placeholder="${T("price")}" value="${esc(S.ex.p)}" oninput="S.ex.p=this.value" style="max-width:110px"></div><button class="alt" onclick="addEx()">${T("add")}</button></div>`;
    if (S.tab === "serv") {
        const l = Object.entries(D.services).filter(([, s]) => s.barberId === S.uid);
        h += `<div class="card"><label>${T("title")}</label><input value="${esc(S.sv.t)}" oninput="S.sv.t=this.value"><label>${T("desc")}</label><textarea rows="2" oninput="S.sv.d=this.value">${esc(S.sv.d)}</textarea><label>${T("price")}</label><input type="number" min="0" value="${esc(S.sv.p)}" oninput="S.sv.p=this.value"><label>${T("photo")}</label><input type="file" accept="image/*" onchange="pickImage(this.files[0],d=>{S.sv.i=d;render()})">${S.sv.i ? `<img class="pic" src="${esc(S.sv.i)}" alt="">` : ""}<button onclick="addSvc()">${T("add")}</button></div>` +
            l.map(([id, s]) => `<div class="card row">${s.img ? `<img src="${esc(s.img)}" alt="" style="max-width:70px;height:70px;object-fit:cover;border-radius:10px;flex:none">` : ""}<div><b>${esc(s.title)}</b><div class="mu">${esc(s.desc)}</div><b>${esc(s.price)} ${T("egp")}</b></div><div style="flex:none"><button class="red sm" onclick="delSvc('${id}')">${T("del")}</button></div></div>`).join("")
    }
    if (S.tab === "st") { const dn = Object.values(D.queue).filter(q => q.barberId === S.uid && q.status === "done"), t0 = new Date().setHours(0, 0, 0, 0), td = dn.filter(q => (q.doneAt || 0) >= t0), sm = a => a.reduce((s, q) => s + Number(q.price || 0), 0), r = avgRate(S.uid); h += `<div class="card row"><div class="stat"><b>${td.length}</b>${T("today")}</div><div class="stat"><b>${sm(td)}</b>${T("income")}</div></div><div class="card row"><div class="stat"><b>${dn.length}</b>${T("allC")}</div><div class="stat"><b>${sm(dn)}</b>${T("allI")}</div><div class="stat"><b>${r ? r.a : "—"}</b>⭐ ${T("rating")}</div></div>` }
    if (S.tab === "q") {
        const l = Object.entries(D.queue).filter(([, q]) => q.barberId === S.uid && q.status !== "done").sort((a, b) => a[1].num - b[1].num);
        h += l.length ? l.map(([id, q]) => `<div class="card"><div class="row"><div><span class="num" style="font-size:34px">#${q.num}</span></div><div style="flex:3"><b>${esc(q.clientName)}</b> <a href="tel:${esc(q.clientPhone)}">📞 ${esc(q.clientPhone)}</a><div><span class="badge ${q.status === "serving" ? "ok" : "wt"}">${T(q.status)}</span></div></div></div>
    <p><b>${esc(q.svcTitle)}</b> — ${esc(q.price)} ${T("egp")}</p>${q.extras && q.extras.length ? `<p class="mu">➕ ${q.extras.map(esc).join("، ")}</p>` : ""}${q.desc ? `<p>${esc(q.desc)}</p>` : ""}${q.img ? `<img class="pic" src="${esc(q.img)}" alt="">` : ""}
    <label>${T("duration")}</label><input type="number" min="1" value="${esc(q.mins)}" onchange="setMins('${id}',this.value)"><div class="row">${q.status === "waiting" ? `<button onclick="setSt('${id}','serving')">${T("startCut")}</button>` : ""}<button class="green" onclick="setSt('${id}','done')">${T("done")}</button><button class="alt" onclick="cancelTicket('${id}')">${T("del")}</button></div></div>`).join("") : `<div class="card mu">${T("noQ")}</div>`
    }
    return h + supportBox()
}

async function toggleOpen() { const b = D.barbers[S.uid]; await upd("barbers", S.uid, { open: b.open === false }); render(); }
async function saveShop() { await upd("barbers", S.uid, { shop: $("#bs").value.trim(), address: $("#ba").value.trim() }); toast(T("saved")) }
async function addEx() { const n = S.ex.n.trim(), p = Number(S.ex.p); if (!n || !(p >= 0) || S.ex.p === "") return toast(T("fill")); const b = D.barbers[S.uid]; await upd("barbers", S.uid, { extras: (b.extras || []).concat([{ n, p }]) }); S.ex = { n: "", p: "" }; render() }
async function delEx(i) { const b = D.barbers[S.uid]; await upd("barbers", S.uid, { extras: (b.extras || []).filter((e, j) => j !== i) }); render(); }
async function addSvc() { const t = S.sv.t.trim(), p = Number(S.sv.p); if (!t || S.sv.p === "" || !(p >= 0)) return toast(T("fill")); const id = "s" + now().toString(36) + Math.random().toString(36).slice(2, 5); await upd("services", id, { barberId: S.uid, title: t, desc: S.sv.d.trim(), price: p, img: S.sv.i }); S.sv = { t: "", d: "", p: "", i: "" }; render() }
async function delSvc(id) { if (confirm(T("confirmDel"))) { await rm("services", id); render(); } }
async function setMins(id, v) { const n = Math.max(1, Number(v) || 20); await upd("queue", id, { mins: n }) }
async function setSt(id, st) { await upd("queue", id, { status: st, doneAt: st === "done" ? now() : 0 }); render(); }

/* ---------- admin ---------- */
function bStats(id) { const q = Object.values(D.queue).filter(x => x.barberId === id), dn = q.filter(x => x.status === "done"); return { q, dn, inc: dn.reduce((s, x) => s + Number(x.price || 0), 0), w: q.length - dn.length, sv: Object.values(D.services).filter(s => s.barberId === id).length, r: avgRate(id) } }
function brCard(id, b) {
    const s = bStats(id), st = isActive(b) ? "active" : (b.status === "active" ? "expired" : b.status || "none");
    return `<div class="card"><h3>${esc(b.shop || b.ownerName || id)}</h3><div class="mu">${esc(b.ownerName)} · <a href="tel:${esc(b.phone)}">${esc(b.phone)}</a><br>📍 ${esc(b.address)}</div><p><span class="badge ${st === "active" ? "ok" : st === "pending" ? "wt" : "er"}">${T("s_" + (st === "expired" ? "cancelled" : st))}</span> ${b.planId === "trial" ? T("trial") : b.planId ? T("p_" + b.planId) : ""} ${b.expires ? "· " + fmtDate(b.expires) : ""}</p><p class="mu">✂️ ${s.sv} · 👥 ${s.w} ${T("inQ")} · ✔ ${s.dn.length} · 💰 ${s.inc} · ⭐ ${s.r ? s.r.a : "—"}</p>${b.proof ? `<img class="pic" src="${esc(b.proof)}" alt="">` : ""}<div class="row">${b.status === "pending" ? `<button class="green sm" onclick="approve('${id}')">${T("approve")}</button><button class="red sm" onclick="setBStatus('${id}','rejected')">${T("reject")}</button>` : ""}${st === "active" ? `<button class="red sm" onclick="setBStatus('${id}','cancelled')">${T("revoke")}</button>` : ""}<button class="alt sm" onclick="extend('${id}',30)">+30 ${T("days")}</button><button class="alt sm" onclick="extend('${id}',-30)">−30</button></div><details style="margin-top:8px"><summary>${T("custs")} (${s.q.length})</summary>${s.q.slice().sort((x, y) => y.ts - x.ts).slice(0, 30).map(q => `<div class="opt"><div class="grow"><b>#${q.num} ${esc(q.clientName)}</b> ${esc(q.clientPhone)}<div class="mu">${esc(q.svcTitle)} · ${esc(q.price)} · ${T(q.status)}${q.rating ? " · " + q.rating + "⭐" : ""}</div></div></div>`).join("")}</details><button class="red sm" style="margin-top:8px" onclick="delBarber('${id}')">${T("del")}</button></div>`
}
async function approve(id) { const b = D.barbers[id], p = cfg().plans.find(x => x.id === b.planId); await upd("barbers", id, { status: "active", expires: now() + (p ? p.days : 30) * 864e5, paid: (b.paid || 0) + (p ? p.price : 0) }); toast(T("saved")); render(); }
async function setBStatus(id, st) { await upd("barbers", id, { status: st }); toast(T("saved")); render(); }
async function extend(id, d) { const b = D.barbers[id], base = Math.max(b.expires || 0, now()); await upd("barbers", id, { status: "active", expires: base + d * 864e5 }); toast(T("saved")); render(); }
async function delBarber(id) { if (!confirm(T("confirmDel"))) return; for (const [k, s] of Object.entries(D.services)) if (s.barberId === id) await rm("services", k); for (const [k, q] of Object.entries(D.queue)) if (q.barberId === id) await rm("queue", k); await rm("barbers", id); render(); }
async function block(id) { const a = D.accounts[id]; await upd("accounts", id, { blocked: !a.blocked }); render(); }

async function saveSet() {
    const c = cfg();
    const plans = c.plans.map((p, i) => ({ id: p.id, price: Math.max(0, Number($("#pp" + i).value) || 0), days: Math.max(1, Number($("#pd" + i).value) || 1) }));
    await upd("settings", "main", { notice: $("#sn").value.trim(), wallet: $("#sw").value.trim(), phone: $("#sp").value.trim(), trialDays: Math.max(1, Number($("#st").value) || 7), plans });
    toast(T("saved"));
}

function viewAdmin2() {
    if (!S.adminOk) return `<div class="card"><h2>🔐 ${T("asAdmin")}</h2>${S.err ? `<div class="badge er">${esc(S.err)}</div>` : ""}<label>${T("user")}</label><input id="au" autocomplete="username" style="direction:ltr"><label>${T("pass")}</label><input id="ap" type="password" autocomplete="current-password" style="direction:ltr"><button onclick="adminLogin()">${T("login")}</button></div>`;
    const c = cfg(), t = ["br", "cl", "set"].includes(S.aTab) ? S.aTab : "ov", B = Object.entries(D.barbers), A = Object.entries(D.accounts);
    let h = `<div class="tabs">${[["ov", "📊"], ["br", T("aReq")], ["cl", T("aCl")], ["set", T("aSet")]].map(([k, l]) => `<button class="${t === k ? "" : "alt"}" onclick="S.aTab='${k}';render()">${l}</button>`).join("")}</div>`;
    if (t === "ov") { const qs = Object.values(D.queue), dn = qs.filter(q => q.status === "done"); h += `<div class="card row"><div class="stat"><b>${B.length}</b>${T("aReq")}</div><div class="stat"><b>${B.filter(([, b]) => isActive(b)).length}</b>${T("s_active")}</div><div class="stat"><b>${B.filter(([, b]) => b.status === "pending").length}</b>${T("s_pending")}</div></div><div class="card row"><div class="stat"><b>${A.filter(([, a]) => a.role === "client").length}</b>${T("aCl")}</div><div class="stat"><b>${dn.length}</b>${T("allC")}</div><div class="stat"><b>${dn.reduce((s, q) => s + Number(q.price || 0), 0)}</b>${T("allI")}</div></div><div class="card row"><div class="stat"><b>${B.reduce((s, [, b]) => s + Number(b.paid || 0), 0)} ${T("egp")}</b>${T("rev")}</div></div>` }
    if (t === "br") h += B.length ? B.map(([id, b]) => brCard(id, b)).join("") : `<div class="card mu">${T("noReq")}</div>`;
    if (t === "cl") h += A.filter(([, a]) => a.role === "client").map(([id, a]) => { const n = Object.values(D.queue).filter(q => q.clientId === id); return `<div class="card"><b>${esc(a.name)}</b> <a href="tel:${esc(a.phone)}">${esc(a.phone)}</a> ${a.blocked ? `<span class="badge er">${T("blocked")}</span>` : ""}<div class="mu">${n.length} ${T("bookings")}: ${n.slice(-3).map(q => esc(q.svcTitle)).join("، ")}</div><button class="sm ${a.blocked ? "green" : "red"}" onclick="block('${id}')">${a.blocked ? T("unblock") : T("block")}</button></div>` }).join("") || `<div class="card mu">—</div>`;
    if (t === "set") h += `<div class="card"><label>📢 ${T("notice")}</label><textarea id="sn" rows="2">${esc(c.notice || "")}</textarea><label>${T("wallet")}</label><input id="sw" value="${esc(c.wallet)}" style="direction:ltr"><label>${T("contact")}</label><input id="sp" value="${esc(c.phone)}" style="direction:ltr"><label>${T("trialDays")}</label><input id="st" type="number" min="1" value="${esc(c.trialDays)}">${c.plans.map((p, i) => `<h3>${T("p_" + p.id)}</h3><div class="row"><div><label>${T("price")}</label><input id="pp${i}" type="number" min="0" value="${p.price}"></div><div><label>${T("days")}</label><input id="pd${i}" type="number" min="1" value="${p.days}"></div></div>`).join("")}<button onclick="saveSet()">${T("save")}</button></div>`;
    return h
}

function burst() { for (let i = 0; i < 22; i++) { const e = document.createElement("span"); e.className = "bs"; e.textContent = ["✨", "💈", "✂️", "⭐"][i % 4]; e.style.left = "50%"; e.style.top = "60%"; e.style.setProperty("--x", (Math.random() * 300 - 150) + "px"); e.style.setProperty("--y", (-40 - Math.random() * 320) + "px"); document.body.appendChild(e); setTimeout(() => e.remove(), 1300) } }

/* ---------- render ---------- */
function viewHome() {
    return `<div class="card hero"><span class="sp" style="top:14px;left:12%">✨</span><span class="sp" style="top:46px;right:14%;animation-delay:1s">✨</span><span class="sp" style="bottom:30px;left:20%;animation-delay:2s">✨</span><div class="ic">💈</div><h1>${T("app")}</h1><div class="pole"></div><p class="mu">${T("tag")}</p>
  <button class="big" onclick="go('auth',{role:'barber',mode:'login'})">✂️ ${T("asBarber")}</button><button class="big alt" onclick="go('auth',{role:'client',mode:'login'})">👤 ${T("asClient")}</button><button class="alt sm" onclick="go('admin')">🔐 ${T("asAdmin")}</button></div><div class="card"><p>✅ ${T("f1")}</p><p>✅ ${T("f3")}</p><p>✅ ${T("f4")}</p></div>`
}

function viewAuth() {
    const isLogin = S.mode === "login";
    return `<div class="card">
      <h2>${S.role === "barber" ? T("asBarber") : T("asClient")}</h2>
      <div class="tabs" style="margin-bottom:14px">
        <button class="${isLogin ? "" : "alt"}" onclick="S.mode='login';S.err='';render()">${T("login")}</button>
        <button class="${!isLogin ? "" : "alt"}" onclick="S.mode='create';S.err='';render()">${T("create")}</button>
      </div>
      ${S.err ? `<div class="badge er" style="display:block;margin-bottom:10px;padding:8px">${esc(S.err)}</div>` : ""}
      
      ${!isLogin ? `<label>${T("name")}</label><input id="fn">` : ""}
      
      <label>${T("phone")}</label><input id="fp" type="tel" placeholder="01xxxxxxxxx" style="direction:ltr">
      
      <label>${T("pass")}</label><input id="fpass" type="password" style="direction:ltr">
      
      ${!isLogin ? `<label>${T("confirmPass")}</label><input id="fcpass" type="password" style="direction:ltr">` : ""}
      
      <button class="big" onclick="enter()">${isLogin ? T("login") : T("create")}</button>
    </div>`;
}

function render() {
    document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = T("app"); $("#lg").textContent = T("app"); $("#lb").textContent = T("lang");
    let h = ""; const v = S.view;
    if (v === "home") h = viewHome();
    else if (v === "auth") h = viewAuth();
    else if (v === "client") h = viewClient();
    else if (v === "book") h = viewBook();
    else if (v === "barber") h = viewBarber();
    else if (v === "admin") h = viewAdmin2();

    if (v !== "home") h = `<div class="row" style="margin-bottom:10px"><button class="alt sm" onclick="${v === "auth" ? "go('home')" : "S.pick=null;S.adminOk=false;go('home')"}">${v === "auth" ? "←" : "⎋"} ${v === "auth" ? T("back") : T("logout")}</button></div>` + h;
    const nt = cfg().notice; $("#app").innerHTML = (nt && v !== "admin" ? `<div class="card" style="border-color:var(--gd2)">📢 ${esc(nt)}</div>` : "") + h;
}

render();
