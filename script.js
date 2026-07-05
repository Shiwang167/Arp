// =======================================
// Pink IDE Apology
// script.js
// =======================================

const runBtn = document.getElementById("runBtn");
const terminal = document.getElementById("terminalOutput");
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const farewellPopup = document.getElementById("farewellPopup");
const farewellCloseBtn = document.getElementById("farewellCloseBtn");
const farewellButterflies = document.getElementById("farewellButterflies");

let running = false;

// Cursor
const cursor = document.createElement("span");
cursor.className = "cursor";
cursor.textContent = "▋";

// ---------------------------------------
// Wait Function
// ---------------------------------------

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ---------------------------------------
// Type Writer
// ---------------------------------------

async function typeText(text, speed = 28) {
    for (let i = 0; i < text.length; i++) {
        cursor.remove();
        terminal.append(text[i]);
        terminal.append(cursor);
        terminal.scrollTop = terminal.scrollHeight;
        await sleep(speed);
    }
}

// ---------------------------------------
// Type Line
// ---------------------------------------

async function line(text = "", speed = 28) {
    await typeText(text, speed);
    terminal.append("\n");
}

// ---------------------------------------
// Clear Terminal
// ---------------------------------------

function clearTerminal() {
    terminal.innerHTML = "";
    terminal.append(cursor);
}

// ---------------------------------------
// Blinking Cursor
// ---------------------------------------

setInterval(() => {
    cursor.style.opacity =
        cursor.style.opacity === "0"
            ? "1"
            : "0";
}, 500);

// ---------------------------------------
// Status Clock
// ---------------------------------------

function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    document.getElementById("status-clock").textContent = h + ":" + m;
}

updateClock();
setInterval(updateClock, 30000);

// ---------------------------------------
// Line Numbers
// ---------------------------------------

(function generateLineNumbers() {
    const lineNumbersEl = document.querySelector(".line-numbers");
    if (!lineNumbersEl) return;
    const codeEl = document.querySelector("pre code");
    if (!codeEl) return;
    const lines = codeEl.textContent.split("\n").length;
    let html = "";
    for (let i = 1; i <= lines; i++) {
        html += i + "\n";
    }
    lineNumbersEl.textContent = html;
})();

// ---------------------------------------
// Run Button
// ---------------------------------------

runBtn.addEventListener("click", async () => {

    if (running) return;

    running = true;
    runBtn.disabled = true;
    runBtn.textContent = "⏳ Running...";

    clearTerminal();

    await line("Compiling...", 35);
    await sleep(900);
    await line("");
    await line("✓ Build Successful", 20);
    await sleep(700);
    await line("");
    await line("Running Apology.java...", 25);
    await sleep(900);

    // ===== Terminal Typing =====

    await line("");
    await line("Dear Arp🦋,", 22);
    await sleep(700);
    await line("");
    await line("I am really sorry. 🥺", 22);
    await sleep(1000);
    await line("");

    await line(
        "I tried to stay away because I thought it would be better,",
        18
    );
    await line(
        "but sometimes I still worry about you and wonder how you're doing.",
        18
    );
    await sleep(1200);
    await line("");

    await line(
        "I don't want to disturb you or make things harder.",
        18
    );
    await line(
        "I just miss hearing you, even if it's only for a moment like before.",
        18
    );
    await sleep(1200);
    await line("");

    await line(
        "I am truly sorry for that day and for everything that hurt you. I still want to send you those snaps before your exams and to wake up you in the morning. Please don't be rude to me. It doesn't feel good you being rude to me. You know whenever I see you I don't know why i can understand anything you are going through, mujhe pata hai rehta hai pr pata nai kyu and kaise, maybe hm dono shyd ek jaise ho our thought process or our vibes.",
        18
    );
    await sleep(1200);
    await line("");

    for (let i = 1; i <= 1; i++) {
        await line(
            "Sorry for that day. I spoke more than I should have.",
            18
        );
        await sleep(350);
    }

    await line("");
    await sleep(700);
    await line("");
    await line("Hope = true ❤️", 35);
    await sleep(1800);

    // Show popup
    popup.classList.remove("hidden");

    running = false;
    runBtn.disabled = false;
    runBtn.textContent = "▶ Run";
});

// =======================================
// Popup Buttons
// =======================================

// ❤️ YES BUTTON
yesBtn.addEventListener("click", async () => {

    popup.classList.add("hidden");
    await sleep(500);

    terminal.append("\n");
    await line("Status Updated...", 25);
    await sleep(800);
    await line("");
    await line("Forgiven = true ❤️", 25);
    await sleep(1000);
    await line("");
    await line("Connection Restored ❤️", 25);
    await sleep(800);
    await line("");
    await line("Program terminated successfully.", 22);
    await sleep(800);
    terminal.append("\n");
    await line("Thank you for giving me another chance. 🌸", 20);

    createHearts();
    createButterflies();

    await sleep(1500);
    showFarewellLink();
});

// 💔 NOT YET BUTTON
noBtn.addEventListener("click", async () => {

    popup.classList.add("hidden");
    await sleep(500);

    terminal.append("\n");
    await line("No worries...", 25);
    await sleep(800);
    await line("");
    await line("I understand.", 22);
    await sleep(800);
    await line("");
    await line("I will keep respecting your space.", 20);
    await sleep(800);
    await line("");
    await line("Hope = true ❤️", 25);
    await sleep(800);

    await sleep(1000);
    showFarewellLink();
});

// =======================================
// Farewell Message Link & Popup
// =======================================

function showFarewellLink() {
    const linkContainer = document.createElement("div");
    linkContainer.style.textAlign = "center";
    linkContainer.style.marginTop = "16px";

    const link = document.createElement("span");
    link.className = "farewell-link";
    link.textContent = "💌 Wait, before leaving click here for a message";
    link.addEventListener("click", () => {
        spawnFarewellButterflies();
        farewellPopup.classList.remove("hidden");
    });

    linkContainer.appendChild(link);
    terminal.appendChild(linkContainer);
    terminal.scrollTop = terminal.scrollHeight;
}

function spawnFarewellButterflies() {
    farewellButterflies.innerHTML = "";
    const emojis = ["🦋", "💖", "✨", "🌸", "💕"];
    for (let i = 0; i < 12; i++) {
        const el = document.createElement("div");
        el.className = "farewell-float";
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + "%";
        el.style.fontSize = (14 + Math.random() * 18) + "px";
        el.style.animationDuration = (6 + Math.random() * 8) + "s";
        el.style.animationDelay = (Math.random() * 4) + "s";
        farewellButterflies.appendChild(el);
    }
}

farewellCloseBtn.addEventListener("click", () => {
    farewellPopup.classList.add("hidden");
});

// =======================================
// Hearts & Butterflies Animation
// =======================================

function random(min, max) {
    return Math.random() * (max - min) + min;
}

// ----------------------------
// Floating Hearts
// ----------------------------

function createHearts() {
    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = random(0, 100) + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = random(18, 34) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition =
            "transform 6s linear, opacity 6s linear";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform =
                `translate(${random(-80, 80)}px,-120vh) rotate(${random(-180, 180)}deg)`;
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 6200);
    }
}

// ----------------------------
// Butterflies
// ----------------------------

function createButterflies() {
    const butterflies = ["🦋", "🦋", "🦋", "🦋"];

    butterflies.forEach((emoji, index) => {
        const b = document.createElement("div");
        b.innerHTML = emoji;
        b.style.position = "fixed";
        b.style.left = (10 + index * 20) + "vw";
        b.style.top = "95vh";
        b.style.fontSize = "36px";
        b.style.pointerEvents = "none";
        b.style.zIndex = "9999";
        b.style.transition = "all 10s ease-in-out";

        document.body.appendChild(b);

        setTimeout(() => {
            b.style.transform =
                `translate(${random(-120, 120)}px,-110vh) rotate(${random(-50, 50)}deg)`;
        }, 100);

        setTimeout(() => {
            b.remove();
        }, 10000);
    });
}

// ----------------------------
// Landing Page
// ----------------------------

window.onload = () => {
    const landingPage = document.getElementById("landingPage");
    const openBtn = document.getElementById("openEditorBtn");
    const editorApp = document.getElementById("editorApp");
    const editorBg = document.getElementById("editorBgEmojis");
    const landingHeartsContainer = document.getElementById("landingHearts");

    // Spawn floating hearts & butterflies on landing page
    const emojis = ["❤️", "🦋", "💕", "🌸", "💗", "🦋", "💖", "🦋"];
    for (let i = 0; i < 25; i++) {
        const el = document.createElement("div");
        el.className = "landing-float";
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + "vw";
        el.style.fontSize = (16 + Math.random() * 24) + "px";
        el.style.animationDuration = (8 + Math.random() * 12) + "s";
        el.style.animationDelay = (Math.random() * 10) + "s";
        landingHeartsContainer.appendChild(el);
    }

    // Spawn romantic background emojis for editor page
    function spawnEditorEmojis() {
        const bgEmojis = ["❤️", "🦋", "💕", "🌹", "✨", "💖", "🌸", "💗", "🦋", "💫"];
        for (let i = 0; i < 20; i++) {
            const el = document.createElement("div");
            el.className = "bg-emoji";
            el.textContent = bgEmojis[Math.floor(Math.random() * bgEmojis.length)];
            el.style.left = Math.random() * 100 + "vw";
            el.style.fontSize = (20 + Math.random() * 30) + "px";
            el.style.animationDuration = (12 + Math.random() * 18) + "s";
            el.style.animationDelay = (Math.random() * 15) + "s";
            editorBg.appendChild(el);
        }
    }

    // Open editor on button click
    openBtn.addEventListener("click", () => {
        landingPage.classList.add("fade-out");

        setTimeout(() => {
            landingPage.style.display = "none";
            editorBg.classList.remove("hidden");
            editorApp.classList.remove("hidden");
            editorApp.style.opacity = "0";
            editorApp.style.transition = "opacity 0.8s ease";
            spawnEditorEmojis();
            setTimeout(() => {
                editorApp.style.opacity = "1";
            }, 50);
        }, 800);
    });
};