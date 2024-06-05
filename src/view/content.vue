<template>
  <section></section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import swal from 'sweetalert2';


onMounted(() => {
  // Listen for the start activity message from the popup
  handleOperations();
  // Listen for messages from the background script
});

// Function to detect forms on the page
const detectForms = () => {
  const forms = document.querySelectorAll('form');
  if (forms.length > 0) {
    chrome.runtime.sendMessage({ action: 'form_detected' });
  } else {
    chrome.runtime.sendMessage({ action: 'no_form_detected' });
  }
};



function handleOperations () {
  chrome.runtime.onMessage.addListener((message) => {
    if

    (message.action === 'start_detecting') {

      console.log('helllllo')
      detectForms();
    }

    if (message.type === 'quote') {
      // Display the quote using SweetAlert2
      swal.fire({
        title: 'Random Quote',
        text: message.content,
        icon: 'info',
      });
    } else if (message.type === 'image') {
      // Display the image URL using SweetAlert2
      swal.fire({
        title: 'Random Image',
        imageUrl: message.url,
        imageAlt: 'Random Image',
      });
    }
  });

}

</script>

<style >
/* Add any styles you need for this component */
</style>
