<template>
  <div class="row">
    <button type="button" class="btn text-white" id="grabImg" @click="grab">
      <slot />
    </button>
  </div>
</template>

<script setup>
/* Section: Grab Image Urls */
function grab() {
  // Get active browser tab
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    if (tab) {
      // alert(tab.id, "tabid");
      execScript(tab);
    } else {
      alert("There are no active tabs");
    }
  });
}

function execScript(tab) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id, allFrames: false },
      func: grabImages,
    },
    onResult
  );
}

function grabImages() {
  const images = document.querySelectorAll("img:not(.bes-img):not(.bes-logo)");
  const rawUrl = Array.from(images).map((image) => image.src);
  let uniqueUrl = [];
  rawUrl.forEach((el) => {
    if (!uniqueUrl.includes(el)) {
      uniqueUrl.push(el);
    }
  });
  return uniqueUrl;

  // return Array.from(images).map((image) => image.src);
}

function onResult(frames) {
  console.log(frames, "frames");
  // If script execution failed on remote end
  // and could not return results
  if (!frames || !frames.length) {
    alert("Could not retrieve images from specified page");
    return;
  }

  const imageUrls = frames
    .map((frame) => frame.result)
    .reduce((r1, r2) => {
      r1.concat(r2);
    });

  sendToModal(imageUrls);
}

function sendToModal(urls) {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    if (tab) {
      setTimeout(() => {
        chrome.tabs.sendMessage(tab.id, urls);
      }, 200);
    } else {
      alert("There are no active tabs");
    }
  });
}
/* End section: Grab Image Urls */
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 48px;
  background: #87b0e2;
  border-radius: 4px;
  padding: 8px 16px;
}
.btn:hover {
  background: #415062;
}
</style>
