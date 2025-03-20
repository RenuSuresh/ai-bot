// public/chatbot-plugin.js
(function () {
  // Create a container for the chatbot
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "ai-chatbot-container";
  document.body.appendChild(chatbotContainer);

  // Function to load a script dynamically
  function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.body.appendChild(script);
  }

  // Function to load a CSS file dynamically
  function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  // Fetch the Next.js manifest to identify chunks and CSS files
  fetch("https://ai-bot-renu.netlify.app/_next/static/build-manifest.json")
    .then((response) => response.json())
    .then((manifest) => {
      // Load all JavaScript chunks
      const jsChunks = Object.values(manifest.pages).flat();
      jsChunks.forEach((chunk) => {
        if (chunk.endsWith(".js")) {
          loadScript(`https://ai-bot-renu.netlify.app/_next/static/chunks/${chunk}`);
        }
      });

      // Load all CSS files
      const cssChunks = Object.values(manifest.pages).flat();
      cssChunks.forEach((chunk) => {
        if (chunk.endsWith(".css")) {
          loadCSS(`https://ai-bot-renu.netlify.app/_next/static/chunks/${chunk}`);
        }
      });

      // Initialize the chatbot after all chunks and CSS are loaded
      console.log("All chunks and CSS loaded. Initializing chatbot...");
      window.initChatbot();
    })
    .catch((error) => {
      console.error("Failed to load chunks:", error);
    });
})();